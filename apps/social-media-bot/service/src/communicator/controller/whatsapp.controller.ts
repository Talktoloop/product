import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import CommentMessageInterface from '../../common/interface/comment-message';
import StoryStatusToMessengerConversationInterface from '../../common/interface/story-status-message';
import ModeratorFlowMessageInterface from '../../common/interface/moderator-flow-message';
import { UserFlowMessageInterface } from '../../common/interface/user-record';
import { CommunicatorService } from '../service/communicator.service';

@Controller()
export class WhatsappController {
  constructor(private readonly communicatorService: CommunicatorService) {}

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
    return this.communicatorService.sendChatMessage(data);
  }

  @MessagePattern({
    cmd: 'sendStoryStatusWhatsappNotification',
  })
  async sendStoryStatusToWhatsappConversation(
    data: StoryStatusToMessengerConversationInterface,
  ): Promise<{
    messengerConversationId: number;
    messages: UserFlowMessageInterface[];
  }> {
    console.log('sendStoryStatusToWhatsappConversation', data);
    const result =
      await this.communicatorService.sendStoryStatusToMessengerConversation(
        data,
      );
    console.log('## sendStoryStatusToWhatsappConversation - result ##', result);

    return result;
  }

  @MessagePattern({
    cmd: 'sendCommentWhatsappNotification',
  })
  async sendCommentWhatsappNotification(
    notification: CommentMessageInterface,
  ): Promise<{
    messengerConversationId: number;
    messages: UserFlowMessageInterface;
  }> {
    return this.communicatorService.sendOrganizationCommentNotification(
      notification,
    );
  }
}
