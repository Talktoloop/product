import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import CommentMessageInterface from '../../common/interface/comment-message';
import StoryStatusToMessengerConversationInterface from '../../common/interface/story-status-message';
import ModeratorFlowMessageInterface from '../../common/interface/moderator-flow-message';
import { UserFlowMessageInterface } from '../../common/interface/user-record';
import { CommunicatorService } from '../service/communicator.service';

@Controller()
export class TelegramController {
  constructor(private readonly communicatorService: CommunicatorService) {}

  @MessagePattern({
    cmd: 'checkTelegramConversationAvailability',
  })
  async checkTelegramConversationAvailability(data: {
    senderId: string;
    pageId: string;
    storyId: string;
  }): Promise<{ storyId: string; type: string }> {
    return this.communicatorService.checkConversationAvailability(data);
  }

  @MessagePattern({
    cmd: 'sendMessageToTelegramChat',
  })
  async sendTelegramChatMessage(
    data: ModeratorFlowMessageInterface,
  ): Promise<Array<UserFlowMessageInterface> | { status: string }> {
    return this.communicatorService.sendChatMessage(data);
  }

  @MessagePattern({
    cmd: 'sendStoryStatusTelegramNotification',
  })
  async sendStoryStatusToTelegramConversation(
    data: StoryStatusToMessengerConversationInterface,
  ): Promise<{
    messengerConversationId: number;
    messages: UserFlowMessageInterface[];
  }> {
    return this.communicatorService.sendStoryStatusToMessengerConversation(
      data,
    );
  }

  @MessagePattern({
    cmd: 'sendCommentTelegramNotification',
  })
  async sendCommentTelegramNotification(
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
