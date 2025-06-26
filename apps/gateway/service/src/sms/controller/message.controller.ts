import {
  Body,
  Controller,
  Post,
  Inject,
  UseGuards,
  BadRequestException,
  Get,
  Param,
  Logger,
} from '@nestjs/common';
import { MessageService } from '../service/message.service';
import { plainToClass } from 'class-transformer';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBasicAuth,
} from '@nestjs/swagger';
import { SuccessRO } from '../../common/response/success.ro';
import { sendMessageSchema } from '../request/schema/send-message-schema';
import { SendMessageDto } from '../request/dto/send-message.dto';
import { StoryService } from '../../story/service/story.service';
import { Auth } from '../../auth/auth.decorator';
import { UserEntity } from '../../user/entity/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { ModeratorGuard } from '../../auth/moderator.guard';
import { Reflector } from '@nestjs/core';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import {
  DI_CONSTANTS,
  CONVERSATION_NOT_FOUND,
  USER_HAS_NOT_ALLOWED_CONTACT_PERMISSION_ERROR,
  CustomError,
  ValidationPipe,
  SMSConversationModel,
  PHONE_BLOCKERS_TYPE,
  NO_STORY,
  PROVIDER_NOT_FOUND,
  BaseAuthGuard,
} from '@ourloop/shared';
import { saveMessagesSchema } from '../request/schema/save-messages-schema';
import { PhoneAvailabilityRO } from '../response/phone-availability.ro';
import { UuidValidationPipe } from '../../common/pipe/uuid-validation.pipe';
import { CHANNEL_CONSTANTS } from '../../common/constant/channel.constant';
import { timeout } from 'rxjs/operators';
import { DI_CONSTANTS as COMMON_DI } from '../../common/constant/di.constant';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';
import { TextItOutgoingMessageDto } from '../request/dto/textit-outgoing-message.dto';
import { TestItOutgoingMessageSchema } from '../request/schema/textit-outgoing-message-schema';
import { testItIngoingMessageSchema } from '../request/schema/textit-ingoing-message-schema';
import { TextItIngoingMessageDTO } from '../request/dto/textit-ingoing-message.dto';
import { TextIt } from '../../common/provider/textit-provider';
import { finishedTextItFlowSchema } from '../request/schema/finished-textit-flow-schema';
import { FinishedTextItFlowDTO } from '../request/dto/finished-textit-flow.dto';
import { setDelay } from '@ourloop/shared';
import { PermissionsCerbos } from '../../auth/cerbos/permission.decorator';
import { CERBOS_ACTIONS, CERBOS_RESOURCES } from '../../auth/cerbos/permission.enum';
import { PermissionGuard } from '../../auth/cerbos/permission.guard';

// @UseGuards(AuthGuard('cognito'), PermissionGuard)
// @PermissionsCerbos(CERBOS_ACTIONS.CREATE, CERBOS_RESOURCES.SOCIAL_MESSAGE)

@ApiTags('SMS')
@Controller('sms')
export class MessageController {
  private readonly logger = new Logger(MessageController.name);

  constructor(
    private readonly messageService: MessageService,
    private readonly storyService: StoryService,
    @Inject(DI_CONSTANTS.CLIENT_PROXY)
    private readonly clientProxy: ClientProxy,
    @Inject(COMMON_DI.CONFIG)
    private readonly config: ConfigService,
    @Inject(DI_CONSTANTS.TEXTIT)
    private readonly textItProvider: TextIt,
  ) {}

  @ApiBearerAuth()
  @ApiResponse({ status: 200, type: SuccessRO })
  @ApiOperation({ summary: 'Send SMS Message' })
  @Post('message')
  @UseGuards(AuthGuard('cognito'), new ModeratorGuard(new Reflector()))
  async sendSMSMessage(
    @Auth() user: UserEntity,
    @Body(new ValidationPipe(sendMessageSchema))
    data: SendMessageDto,
  ): Promise<SuccessRO> {
    await this.storyService.checkIfModeratorMessageCanBeSent(data.storyId);

    const story = await this.storyService.checkThatStoryExist(
      { id: data.storyId },
      'sendSMSToUser',
      [
        'recipient',
        'translations',
        'conversation',
        'country',
        'conversation.smsMessages',
      ],
    );

    if (!story.conversation) {
      throw new BadRequestException(CONVERSATION_NOT_FOUND);
    }

    if (story.recipient.userWantContact === false) {
      throw new BadRequestException(
        USER_HAS_NOT_ALLOWED_CONTACT_PERMISSION_ERROR,
      );
    }

    const messages = this.messageService.prepareMessages(story, data);

    try {
      const response = await lastValueFrom(
        this.clientProxy
          .send(
            { cmd: `${story.conversation.provider}_sendChatSMS` },
            {
              moderatorId: user.id,
              clientPhone: story.recipient?.phone,
              providerPhone: story.conversation.serviceNumber,
              provider: story.conversation.provider,
              messages,
              country: story.country?.code,
              storyId: story.id,
            },
          )
          .pipe(timeout(this.config.get('application.communicationTimeout'))),
      ).catch((error) => {
        throw new CustomError(error.message, error.error);
      });

      return plainToClass(SuccessRO, { success: !!response?.success });
    } catch (error) {
      throw error;
    }
  }

  @MessagePattern({ cmd: 'saveMessages' })
  async saveMessages(
    @Body(new ValidationPipe(saveMessagesSchema, { isRpcException: true }))
    data: SMSConversationModel,
  ): Promise<SuccessRO> {
    const story = await this.storyService.checkThatStoryExist(
      { id: data.storyId },
      'saveMessages',
      [
        'translations',
        'conversation',
        'conversation.story',
        'conversation.smsMessages',
        'conversation.language',
        'recipient',
      ],
    );

    if (!story.conversation) {
      throw new BadRequestException(CONVERSATION_NOT_FOUND);
    }

    await this.messageService.saveMessages(
      story.conversation,
      data,
      story.conversation.languageId,
    );

    return plainToClass(SuccessRO, { success: true });
  }

  @UseGuards(AuthGuard(['cognito']))
  @ApiResponse({
    status: 200,
    type: PhoneAvailabilityRO,
  })
  @Get('is-phone-available/:storyId')
  async checkPhoneAvailability(
    @Param('storyId', new UuidValidationPipe()) storyId: string,
  ): Promise<PhoneAvailabilityRO> {
    const story = await this.storyService.checkThatStoryExist(
      { id: storyId },
      'checkPhoneAvailability',
      ['conversation', 'conversation.smsMessages', 'country', 'recipient'],
    );

    if (!story || story.channel !== CHANNEL_CONSTANTS.SMS) {
      throw new CustomError(NO_STORY, {
        error: 'Story ID does not exist',
      });
    }

    if (story.recipient?.userWantContact === false) {
      return { type: PHONE_BLOCKERS_TYPE.NO_CONTACT, storyId: null };
    }

    const provider = story.conversation?.provider;
    if (!provider) {
      throw new CustomError(PROVIDER_NOT_FOUND, {
        error: 'No provider for removeMessagesFromProviderAndCache',
      });
    }

    return this.messageService.checkPhoneAvailability(provider, story);
  }

  @ApiBasicAuth()
  @UseGuards(BaseAuthGuard)
  @Post('textit-finished-flow')
  async finishedTextItFLow(
    @Body(new ValidationPipe(finishedTextItFlowSchema))
    data: FinishedTextItFlowDTO,
  ): Promise<SuccessRO> {
    await setDelay(60000);

    const details = await this.messageService.checkCountryCodeAndProvider(
      data.to.split('tel:')[1],
    );

    try {
      const response = await lastValueFrom(
        this.clientProxy
          .send(
            { cmd: `${details.provider}_removeTextItFlow` },
            {
              clientPhone: details.phone,
              providerPhone: this.messageService.clearPhone(data.from),
              provider: details.provider,
              country: details.countryCode,
            },
          )
          .pipe(timeout(this.config.get('application.communicationTimeout'))),
      ).catch((error) => {
        throw new CustomError(error.message, error.error);
      });

      return plainToClass(SuccessRO, response);
    } catch (error) {
      throw error;
    }
  }

  @ApiBasicAuth()
  @UseGuards(BaseAuthGuard)
  @Post('textit-message')
  async sendTextItMessage(
    @Body(new ValidationPipe(TestItOutgoingMessageSchema))
    data: TextItOutgoingMessageDto,
  ): Promise<SuccessRO> {
    this.logger.debug('sendTextItMessage - data', JSON.stringify(data));

    const details = await this.messageService.checkCountryCodeAndProvider(
      data.to,
    );

    try {
      const result = await lastValueFrom(
        this.clientProxy
          .send(
            { cmd: `${details.provider}_sendTextItMessage` },
            {
              clientPhone: details.phone,
              providerPhone: this.messageService.clearPhone(data.from),
              provider: details.provider,
              message: data.text,
              country: details.countryCode,
            },
          )
          .pipe(timeout(this.config.get('application.communicationTimeout'))),
      ).catch((error) => {
        this.logger.debug('sendTextItMessage - error', error);
      });

      this.logger.debug('sendTextItMessage - result', result);

      return plainToClass(SuccessRO, { success: true });
    } catch (error) {
      throw error;
    }
  }

  @MessagePattern({ cmd: 'notifyTextItAboutNewMessage' })
  async notifyTextItAboutNewMessage(
    @Body(
      new ValidationPipe(testItIngoingMessageSchema, { isRpcException: true }),
    )
    data: TextItIngoingMessageDTO,
  ): Promise<SuccessRO> {
    this.logger.debug('notifyTextItAboutNewMessage', JSON.stringify(data));

    await this.textItProvider.sendUserMessage(data);

    return plainToClass(SuccessRO, {
      success: true,
    });
  }
}
