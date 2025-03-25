import { Body, Controller, Post, UseGuards, Get, Param } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { messengerFlowDtoSChema } from '../request/schema/messenger-flow.schema';
import { MessengerService } from '../service/messenger.service';
import { ValidationPipe } from '@ourloop/shared';
import { MessengerFlowRequestDto } from '../request/dto/messenger-flow.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SuccessRO } from '../../common/response/success.ro';
import { UserResponseDto } from '../request/dto/user-response.dto';
import { ModeratorGuard } from '../../auth/moderator.guard';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { sendMessageSchema } from '../../sms/request/schema/send-message-schema';
import { SendMessageDto } from '../../sms/request/dto/send-message.dto';
import { ApiTags } from '@nestjs/swagger';
import { CHANNEL_CONSTANTS } from '../../common/constant/channel.constant';
import { MessengerAvailabilityRO } from '../response/messenger-availability.ro';
import { UuidValidationPipe } from '../../common/pipe/uuid-validation.pipe';
import { messengerUserDataMapper } from '../mapper/messenger-user-data.mapper';
import { MessengerUserDataRO } from '../response/messenger-user-data.ro';
import { StoryConversationEntity } from '../../story/entity/story-conversation.entity';
import { StoryService } from '../../story/service/story.service';
import { PermissionsCerbos } from '../../auth/cerbos/permission.decorator';
import { CERBOS_ACTIONS, CERBOS_RESOURCES } from '../../auth/cerbos/permission.enum';
import { PermissionGuard } from '../../auth/cerbos/permission.guard';

@ApiTags('Messenger')
@Controller('messenger/facebook')
export class FacebookMessengerController {
  constructor(
    private readonly messengerService: MessengerService,
    private readonly storyService: StoryService,
  ) { }

  @MessagePattern({ cmd: 'saveFacebookStory' })
  async saveMessengerFlowRecord(
    @Body(new ValidationPipe(messengerFlowDtoSChema, { isRpcException: true }))
    data: MessengerFlowRequestDto,
  ): Promise<StoryConversationEntity> {
    return await this.messengerService.saveMessengerFlow(
      data,
      CHANNEL_CONSTANTS.MESSENGER,
    );
  }

  @Get('test-external')
  async testInternal(): Promise<SuccessRO> {
    const result = await this.messengerService.testExternal();

    return { success: result };
  }

  @ApiBearerAuth()
  @ApiResponse({ status: 200, type: SuccessRO })
  @ApiOperation({ summary: 'Send Facebook Messenger Message' })
  @Post('message')
  @UseGuards(AuthGuard('cognito'), PermissionGuard)
  @PermissionsCerbos(CERBOS_ACTIONS.CREATE, CERBOS_RESOURCES.SOCIAL_MESSAGE)
  async sendMessengerMessage(
    @Body(new ValidationPipe(sendMessageSchema)) data: SendMessageDto,
  ): Promise<SuccessRO> {
    await this.storyService.checkIfModeratorMessageCanBeSent(data.storyId);

    return this.messengerService.sendMessengerChatMessage(
      data,
      'sendMessageToFacebookChat',
      CHANNEL_CONSTANTS.MESSENGER,
    );
  }

  @MessagePattern({ cmd: 'saveFacebookMessage' })
  async saveMessengerResponse(
    @Body() data: UserResponseDto,
  ): Promise<SuccessRO> {
    return await this.messengerService.saveMessengerResponse(
      data,
      CHANNEL_CONSTANTS.MESSENGER,
    );
  }

  @MessagePattern({ cmd: 'findCommunicatorUserDetails' })
  async findMessengerUserDetails(
    @Body() data: { senderId: string },
  ): Promise<MessengerUserDataRO> {
    const conversation =
      await this.messengerService.findLastConversationByCommunicatorId(
        data.senderId,
      );

    return messengerUserDataMapper(conversation);
  }

  @UseGuards(AuthGuard(['cognito']))
  @ApiResponse({
    status: 200,
    type: MessengerAvailabilityRO,
  })
  @Get('is-conversation-available/:storyId')
  async checkMessengerAvailability(
    @Param('storyId', new UuidValidationPipe()) storyId: string,
  ): Promise<MessengerAvailabilityRO> {
    return this.messengerService.checkMessengerAvailability(
      storyId,
      'checkFacebookConversationAvailability',
      CHANNEL_CONSTANTS.MESSENGER,
    );
  }
}
