import { Body, Controller, Post, UseGuards, Get, Param } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { messengerFlowDtoSChema } from '../request/schema/messenger-flow.schema';
import { MessengerService } from '../service/messenger.service';
import { ValidationPipe } from '@ourloop/shared';
import { MessengerFlowRequestDto } from '../request/dto/messenger-flow.dto';
import { CHANNEL_CONSTANTS } from '../../common/constant/channel.constant';
import { ConversationRO } from '../../common/response/conversation.ro';
import { plainToClass } from 'class-transformer';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SuccessRO } from '../../common/response/success.ro';
import { AuthGuard } from '@nestjs/passport';
import { ModeratorGuard } from '../../auth/moderator.guard';
import { Reflector } from '@nestjs/core';
import { sendMessageSchema } from '../../sms/request/schema/send-message-schema';
import { SendMessageDto } from '../../sms/request/dto/send-message.dto';
import { MessengerAvailabilityRO } from '../response/messenger-availability.ro';
import { UuidValidationPipe } from '../../common/pipe/uuid-validation.pipe';
import { UserResponseDto } from '../request/dto/user-response.dto';
import { userResponseDtoSchema } from '../request/schema/user-response.schema';
import { SendMessageRO } from '../response/send-message.ro';
import { StoryService } from '../../story/service/story.service';
import { PermissionsCerbos } from '../../auth/cerbos/permission.decorator';
import { CERBOS_ACTIONS, CERBOS_RESOURCES } from '../../auth/cerbos/permission.enum';
import { PermissionGuard } from '../../auth/cerbos/permission.guard';

// @PermissionsCerbos(CERBOS_ACTIONS.CREATE, CERBOS_RESOURCES.SOCIAL_MESSAGE)

@ApiTags('WhatsApp')
@Controller('messenger/whatsapp')
export class WhatsAppMessengerController {
  constructor(
    private readonly messengerService: MessengerService,
    private readonly storyService: StoryService,
  ) {}

  @MessagePattern({ cmd: 'saveWhatsappStory' })
  async saveWhatsAppFlowRecord(
    @Body(new ValidationPipe(messengerFlowDtoSChema, { isRpcException: true }))
    data: MessengerFlowRequestDto,
  ): Promise<ConversationRO> {
    const conversation = this.messengerService.saveMessengerFlow(
      data,
      CHANNEL_CONSTANTS.WHATSAPP,
    );

    return plainToClass(ConversationRO, conversation);
  }

  @ApiBearerAuth()
  @ApiResponse({ status: 200, type: SendMessageRO })
  @ApiOperation({ summary: 'Send WhatsApp Messenger Message' })
  @Post('message')
  @UseGuards(AuthGuard('cognito'), new ModeratorGuard(new Reflector()))
  async sendWhatsAppMessage(
    @Body(new ValidationPipe(sendMessageSchema)) data: SendMessageDto,
  ): Promise<SuccessRO> {
    await this.storyService.checkIfModeratorMessageCanBeSent(data.storyId);

    const result = await this.messengerService.sendMessengerChatMessage(
      data,
      'sendMessageToWhatsappChat',
      CHANNEL_CONSTANTS.WHATSAPP,
    );

    return plainToClass(SendMessageRO, result);
  }

  @MessagePattern({ cmd: 'saveWhatsappMessage' })
  async saveWhatsAppMessage(
    @Body(new ValidationPipe(userResponseDtoSchema, { isRpcException: true }))
    data: UserResponseDto,
  ): Promise<SuccessRO> {
    return this.messengerService.saveMessengerResponse(
      data,
      CHANNEL_CONSTANTS.WHATSAPP,
    );
  }

  @UseGuards(AuthGuard(['cognito']))
  @ApiResponse({
    status: 200,
    type: MessengerAvailabilityRO,
  })
  @Get('/is-conversation-available/:storyId')
  async checkWhatsAppAvailability(
    @Param('storyId', new UuidValidationPipe()) storyId: string,
  ): Promise<MessengerAvailabilityRO> {
    return this.messengerService.checkMessengerAvailability(
      storyId,
      'checkWhatsappConversationAvailability',
      CHANNEL_CONSTANTS.WHATSAPP,
    );
  }
}
