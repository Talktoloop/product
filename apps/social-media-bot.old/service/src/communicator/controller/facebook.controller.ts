import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import CommentMessageInterface from '../../common/interface/comment-message';
import StoryStatusToMessengerConversationInterface from '../../common/interface/story-status-message';
import ModeratorFlowMessageInterface from '../../common/interface/moderator-flow-message';
import { UserFlowMessageInterface } from '../../common/interface/user-record';
import { CommunicatorService } from '../service/communicator.service';

@Controller()
export class FacebookController {
  constructor(private readonly communicatorService: CommunicatorService) {}

  @MessagePattern({
    cmd: 'checkFacebookConversationAvailability',
  })
  async checkFacebookConversationAvailability(data: {
    senderId: string;
    pageId: string;
    storyId: string;
  }): Promise<{ storyId: string; type: string }> {
    return this.communicatorService.checkConversationAvailability(data);
  }

  @MessagePattern({
    cmd: 'sendMessageToFacebookChat',
  })
  async sendFacebookChatMessage(
    data: ModeratorFlowMessageInterface,
  ): Promise<Array<UserFlowMessageInterface> | { status: string }> {
    const result = await this.communicatorService.sendChatMessage(data);
    console.log('sendMessageToFacebookChat -- result', result);

    return result;
  }

  @MessagePattern({
    cmd: 'sendStoryStatusFacebookNotification',
  })
  async sendStoryStatusToFacebookConversation(
    data: StoryStatusToMessengerConversationInterface,
  ): Promise<{
    messengerConversationId: number;
    messages: UserFlowMessageInterface[];
  }> {
    console.log('sendStoryStatusFacebookNotification --');
    return this.communicatorService.sendStoryStatusToMessengerConversation(
      data,
    );
  }

  @MessagePattern({
    cmd: 'sendCommentFacebookNotification',
  })
  async sendCommentFacebookNotification(
    notification: CommentMessageInterface,
  ): Promise<{
    messengerConversationId: number;
    messages: UserFlowMessageInterface;
  }> {
    console.log('sendCommentFacebookNotification --');
    return this.communicatorService.sendOrganizationCommentNotification(
      notification,
    );
  }

  @MessagePattern({ cmd: 'testFacebookInternal' })
  async testToInternal(): Promise<{ success: boolean }> {
    console.log('message testInternal');
    try {
      return { success: true };
    } catch (error) {
      console.log('error', error);
      return { success: false };
    }
  }
}
