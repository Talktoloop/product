import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import CommentMessageInterface from '../../common/interface/comment-message';
import StoryStatusToMessengerConversationInterface from '../../common/interface/story-status-message';
import ModeratorFlowMessageInterface from '../../common/interface/moderator-flow-message';
import { UserFlowMessageInterface } from '../../common/interface/user-record';
import { CommunicatorService } from '../service/communicator.service';
import { RedisService } from '../service/redis.service';

@Controller()
export class WhatsappController {
  private readonly logger: Logger = new Logger(WhatsappController.name);
  
  constructor(
    private readonly communicatorService: CommunicatorService,
    private readonly redisService: RedisService
  ) {}
  

  @MessagePattern({
    cmd: 'checkWhatsappConversationAvailability',
  })
  async checkWhatsappConversationAvailability(data: {
    senderId: string;
    pageId: string;
    storyId: string;
  }): Promise<{ storyId: string; type: string }> {
    return this.communicatorService.checkConversationAvailability(data);
  }

  @MessagePattern({
    cmd: 'sendMessageToWhatsappChat',
  })
  async sendWhatsappChatMessage(
    data: ModeratorFlowMessageInterface,
  ): Promise<Array<UserFlowMessageInterface> | { status: string }> {
    this.logger.debug('--- sendMessageToWhatsappChat ---', JSON.stringify(data, null, 2));
    
    const key = `moderator:${data.storyId}:${data.messengerConversationId}`;
    // const ttlSeconds = 30;
    
    const alreadySent = await this.redisService.checkIfAlreadySent(key);
    
    if (alreadySent) {
      this.logger.log('⛔ Duplicate message. Skipping...');
      return []; // race protection
    }
    
    // const success = await this.redisService.markAsSentIfNotExists(key, ttlSeconds);
    //
    // if (!success) {
    //   this.logger.log('❗Message already being processed. Skipping...');
    //   return []; // race protection
    // }
    
    return this.communicatorService.sendChatMessage(data);
  }

  @MessagePattern({
    cmd: 'sendStoryStatusWhatsappNotification',
  })
  async sendStoryStatusToWhatsappConversation(
    data: StoryStatusToMessengerConversationInterface,
  ): Promise<{ messengerConversationId: number; messages: UserFlowMessageInterface[] }> {
    this.logger.debug('--- sendStoryStatusToWhatsappConversation ---', data);
    const key = `status:${data.messengerConversationId}:${data.messageType}`;
    const ttlSeconds = 60;

    const isFirst = await this.redisService.markAsSentIfNotExists(key, ttlSeconds);
    if (!isFirst) {
      this.logger.log('⛔ Duplicate story status. Skipping...');
      return { messengerConversationId: data.messengerConversationId, messages: [] };
    }

    const result = await this.communicatorService.sendStoryStatusToMessengerConversation(data);
    this.logger.log('## sendStoryStatusToWhatsappConversation - result ##', result);

    return result;
  }

  @MessagePattern({
    cmd: 'sendCommentWhatsappNotification',
  })
  async sendCommentWhatsappNotification(
    notification: CommentMessageInterface,
  ): Promise<{ messengerConversationId: number; messages: UserFlowMessageInterface }> {
    // this.logger.debug('--- sendCommentWhatsappNotification ---', JSON.stringify(notification, null, 2));
    const key = `comment:${notification.messengerConversationId}:${notification.senderId}`;
    // const ttlSeconds = 30;
    
    const alreadySent = await this.redisService.checkIfAlreadySent(key);
    if (alreadySent) {
      this.logger.log('⛔ Duplicate comment. Skipping...');
      return { messengerConversationId: notification.messengerConversationId, messages: null };
    }
    
    // const success = await this.redisService.markAsSentIfNotExists(key, ttlSeconds);
    // if (!success) {
    //   this.logger.log('❗Comment notification already being processed. Skipping...');
    //   return { messengerConversationId: notification.messengerConversationId, messages: null };
    // }

    return await this.communicatorService.sendOrganizationCommentNotification(notification);
  }
}
