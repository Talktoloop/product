import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Query,
  UseGuards,
  Inject,
  Delete,
  Logger,
  BadRequestException,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBearerAuth,
  ApiHeader,
} from '@nestjs/swagger';
import { ClientProxy } from '@nestjs/microservices';
import { Reflector } from '@nestjs/core';
import { plainToClass } from 'class-transformer';
import { StoryModeratorService } from '../service/story-moderator.service';
import {
  ValidationPipe,
  DI_CONSTANTS as SHARED_DI,
  CustomError,
  PROVIDER_NOT_FOUND,
  VALIDATION_FAILED,
  STORY_STATUS,
  STORY_IS_ALREADY_PUBLISHED,
} from '@ourloop/shared';
import { pendingStoriesMapper } from '../mapper/story-list-moderator.mapper';
import { StoryListModeratorPaginationRO } from '../response/story-list-moderator-pagination.ro';
import { StoryPaginationWithOrderAndFilterDto } from '../../common/dto/story-pagination-with-order-and-filter.dto';
import { storyPaginationWithOrderAndFilterSchema } from '../../common/request/schema/story-pagination-with-order-and-filter.schema';
import { AuthGuard } from '@nestjs/passport';
import { ModeratorGuard } from '../../auth/moderator.guard';
import { SuccessRO } from '../../common/response/success.ro';
import { UuidValidationPipe } from '../../common/pipe/uuid-validation.pipe';
import { updateStorySchema } from '../request/schema/update-story-schema';
import { UpdateStoryDto } from '../request/dto/update-story.dto';
import { StoryService } from '../service/story.service';
import { responseToSuccessRO } from '../../common/mapper/success.mapper';
import { StoryNotificationService } from '../../notification/service/story-notification.service';
import {
  rejectContentSchema,
  rejectStoriesSchema,
} from '../../common/request/schema/reject-content.schema';
import {
  RejectContentDto,
  RejectStoriesDto,
} from '../../common/dto/reject-content.dto';
import { StoryWebModeratorRO } from '../response/story-web-moderator.ro';
import { storyWebDetailsMapper } from '../mapper/story-web-details.mapper';
import { storySMSDetailsMapper } from '../mapper/story-sms-details.mapper';
import { StorySMSModeratorRO } from '../response/story-sms-moderator.ro';
import { CHANNEL_CONSTANTS } from '../../common/constant/channel.constant';
import { exportStorySchema } from '../request/schema/export-story-schema';
import { ExportStoryDto } from '../request/dto/export-story.dto';
import { storyMessengerDetailsMapper } from '../mapper/story-messenger-details.mapper';
import { StoryMessengerModeratorRO } from '../response/story-messenger-moderator.ro';
import { MessengerService } from '../../messenger/service/messenger.service';
import { StoryStatus } from '../../messenger/enum/story-status.enum';
import { timeout } from 'rxjs/operators';
import { DI_CONSTANTS as COMMON_DI } from '../../common/constant/di.constant';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';
import { Auth } from '../../auth/auth.decorator';
import { UserEntity } from '../../user/entity/user.entity';
import { CaseManagerService } from '../../case-manager/service/case-manager.service';
import { IvrrService } from '../../ivrr/service/ivrr.service';
import { StoryTranslationModeratorService } from '../service/story-translation-moderator.service';
import { StoryHistoricalTranslationModeratorService } from '../service/story-historical-translation-moderator.service';
import { LANGUAGES_CONSTANTS } from '../../common/constant/languages.constants';
import { LanguageId } from '../../language/language-id.decorator';
import { LanguageService } from '../../language/language.service';
import { MessageService } from '../../sms/service/message.service';
import { RejectedStoriesRO } from '../response/rejected-stories.ro';
import { assignStoriesSchema } from '../request/schema/assign-stories-schema';
import { AssignStoriesDTO } from '../request/dto/assign-stories.dto';
import { AssignStoriesRO } from '../response/assigned-stories.ro';
import { ModeratorService } from '../../lexicon/service/moderators.service';
import { updateTranscriptionSchema } from '../request/schema/update-transcription.schema';
import { UpdateTranscriptionDto } from '../request/dto/update-transcription.dto';
import { FeedbackVulnerabilityFactorsService } from '../service/feedback-vulnerability-factors.service';
// import { PermissionsCerbos } from '../../auth/cerbos/permission.decorator';
// import { PermissionGuard } from '../../auth/cerbos/permission.guard';
// import { CerbosService } from '../../common/cerbos/cerbos.service';
// import { CERBOS_ACTIONS, CERBOS_RESOURCES } from '../../auth/cerbos/permission.enum';

// @UseGuards(AuthGuard('cognito'), PermissionGuard)
// @PermissionsCerbos(CERBOS_ACTIONS.READ, CERBOS_RESOURCES.STORY)
// @PermissionsCerbos(CERBOS_ACTIONS.EXPORT, CERBOS_RESOURCES.STORY)
// @PermissionsCerbos(CERBOS_ACTIONS.UPDATE, CERBOS_RESOURCES.STORY)

@UseGuards(AuthGuard('cognito'), new ModeratorGuard(new Reflector()))
@ApiBearerAuth()
@ApiTags('Story Moderator')
@Controller('story/moderator')
export class StoryModeratorController {
  private readonly logger = new Logger(StoryModeratorController.name);

  constructor(
    @Inject(SHARED_DI.CLIENT_PROXY)
    private readonly clientProxy: ClientProxy,
    private readonly storyModeratorService: StoryModeratorService,
    private readonly storyService: StoryService,
    private readonly storyNotificationService: StoryNotificationService,
    private readonly messengerService: MessengerService,
    private readonly caseManagerService: CaseManagerService,
    private readonly storyTranslationModeratorService: StoryTranslationModeratorService,
    private readonly storyHistoricalTranslationModeratorService: StoryHistoricalTranslationModeratorService,
    private readonly ivrrService: IvrrService,
    private readonly languageService: LanguageService,
    @Inject(COMMON_DI.CONFIG)
    private readonly config: ConfigService,
    private readonly messageService: MessageService,
    private readonly moderatorService: ModeratorService,
    private readonly feedbackVulnerabilityFactorsService: FeedbackVulnerabilityFactorsService,
  ) { }

  @ApiOperation({
    summary: 'Get list of stories for admin to publish or reject',
  })
  @ApiResponse({
    status: 200,
    type: StoryListModeratorPaginationRO,
  })
  @ApiHeader({
    name: 'content-language',
    enum: LANGUAGES_CONSTANTS,
  })
  @Get('/pending')
  async getListOfPending(
    @Query(new ValidationPipe(storyPaginationWithOrderAndFilterSchema))
    params: StoryPaginationWithOrderAndFilterDto,
    @LanguageId() userLanguageId: number,
  ): Promise<StoryListModeratorPaginationRO> {
    if (!params.page || params.page < 1) {
      params.page = 1;
    }

    const pendingStories = await this.storyModeratorService.getPendingStories(
      params,
      userLanguageId,
    );

    return {
      ...pendingStories,
      items: pendingStoriesMapper(pendingStories.items),
    };
  }

  @ApiOperation({ summary: 'Export sensitive story to AirTable' })
  @ApiResponse({ status: 200, type: SuccessRO })
  @Post(':id/export')
  async exportStoryToAirTable(
    @Auth() user: UserEntity,
    @Param('id', new UuidValidationPipe()) storyId: string,
    @Body(new ValidationPipe(exportStorySchema))
    data: ExportStoryDto,
  ): Promise<SuccessRO> {
    const result = await this.storyModeratorService.exportStoryToAirTable(
      user.id,
      storyId,
      data,
    );
    const success = result && !!result?.affected;

    if (success) {
      try {
        const story = await this.storyService.findById(storyId);
        const caseManagers = await this.caseManagerService.findWithEmail(
          story.countryId,
        );
        await this.storyModeratorService.sendNotificationAfterExportToAirTable(
          user,
          caseManagers,
        ).catch((error) => {
          this.logger.error(
            `[exportStoryToAirTable] Failed to send notification after export to AirTable for story ${storyId}: ${error?.message}`,
          );
        });
        if (data.immediateAssistance) {
          await this.storyNotificationService.sendNotificationAfterUrgentStory(
            storyId,
            caseManagers,
          ).catch((error) => {
            this.logger.error(
              `[exportStoryToAirTable] Failed to send notification after urgent story for story ${storyId}: ${error?.message}`,
            );
          });
        }
      } catch (error) {
        this.logger.error(
          `[exportStoryToAirTable] Failed to send notification after export to AirTable for story ${storyId}: ${error?.message}`,
        );
      }
    }


    return plainToClass(SuccessRO, { success });
  }

  @ApiOperation({ summary: 'Stop completing story' })
  @ApiResponse({ status: 200, type: SuccessRO })
  @Post(':id/stop-completing')
  async stopCompletingStory(
    @Param('id', new UuidValidationPipe()) storyId: string,
  ): Promise<SuccessRO> {
    const story = await this.storyService.checkThatStoryExist(
      { id: storyId },
      'publishStory',
      ['conversation', 'conversation.smsMessages', 'recipient'],
    );

    const provider = story.conversation?.provider;
    if (!provider) {
      throw new CustomError(PROVIDER_NOT_FOUND, {
        error: 'No provider for removeMessagesFromProviderAndCache',
      });
    }

    try {
      let response = await lastValueFrom(
        this.clientProxy
          .send(
            { cmd: `${provider}_getMessages` },
            { phone: story.recipient?.phone },
          )
          .pipe(timeout(this.config.get('application.communicationTimeout'))),
      ).catch((error) => {
        throw new CustomError(error.message, error.error);
      });

      if (response.messages) {
        response = await lastValueFrom(
          this.clientProxy
            .send(
              { cmd: `${provider}_removeMessagesFromProviderAndCache` },
              { phone: story.recipient?.phone },
            )
            .pipe(timeout(this.config.get('application.communicationTimeout'))),
        ).catch((error) => {
          throw new CustomError(error.message, error.error);
        });
      }

      return responseToSuccessRO(response.success ?? false);
    } catch (error) {
      throw error;
    }
  }



  @ApiResponse({ status: 200, type: SuccessRO })
  @ApiOperation({ summary: 'Update story' })
  @Put(':id')
  async updateStory(
    @Auth() user: UserEntity,
    @Param('id', new UuidValidationPipe())
    storyId: string,
    @Body(new ValidationPipe(updateStorySchema))
    data: UpdateStoryDto,
  ): Promise<SuccessRO> {
    const story = await this.storyService.checkThatStoryExist(
      { id: storyId },
      'updateStory',
      [
        'user',
        'user.language',
        'organisations',
        'translations',
        'translations.language',
        'language',
        'recipient',
      ],
    );

    if (story.status == STORY_STATUS.PUBLISHED) {
      throw new BadRequestException(STORY_IS_ALREADY_PUBLISHED);
    }

    if (story.channel !== CHANNEL_CONSTANTS.IVRR && data.content) {
      throw new BadRequestException(VALIDATION_FAILED);
    }

    if (
      [CHANNEL_CONSTANTS.IVRR, CHANNEL_CONSTANTS.WEB].includes(story.channel) &&
      data.pinnedMessageIds
    ) {
      throw new BadRequestException(VALIDATION_FAILED);
    }

    if (story.channel !== CHANNEL_CONSTANTS.IVRR && data.content) {
      return plainToClass(SuccessRO, { success: false });
    }

    const result = await this.storyModeratorService.updateStory(
      user.id,
      story,
      data,
    );

    return plainToClass(SuccessRO, { success: !!result });
  }

  @ApiOperation({ summary: 'Update story transcription' })
  @ApiResponse({ status: 200, type: SuccessRO })
  @Put(':id/transcription')
  async updateStoryTranscription(
    @Auth() user: UserEntity,
    @Param('id', new UuidValidationPipe())
    storyId: string,
    @Body(new ValidationPipe(updateTranscriptionSchema))
    data: UpdateTranscriptionDto,
  ): Promise<SuccessRO> {
    if (!data.content && !data.editedContent) {
      throw new BadRequestException(VALIDATION_FAILED);
    }
    const story = await this.storyService.checkThatStoryExist(
      { id: storyId },
      'updateStory',
      [
        'user',
        'user.language',
        'organisations',
        'translations',
        'translations.language',
        'language',
        'recipient',
      ],
    );

    const result = await this.storyModeratorService.updateStoryTranscription(
      user.id,
      story,
      data,
    );

    return plainToClass(SuccessRO, { success: !!result });
  }


  @ApiResponse({ status: 200, type: SuccessRO })
  @ApiOperation({ summary: 'Unpublish story' })
  @Put(':id/unpublish')
  async unPublishStory(
    @Auth() user: UserEntity,
    @Param('id', new UuidValidationPipe())
    storyId: string,
  ): Promise<SuccessRO> {
    const story = await this.storyService.checkThatStoryExist(
      { id: storyId },
      'unPublishStory',
    );

    const result = await this.storyModeratorService.unPublishStory(
      user.id,
      story,
    );
    const success = result && !!result?.affected;

    return plainToClass(SuccessRO, { success });
  }

  @ApiResponse({ status: 200, type: SuccessRO })
  @ApiOperation({ summary: 'Publish story' })
  @Put(':id/publish')
  async publishStory(
    @Auth() user: UserEntity,
    @Param('id', new UuidValidationPipe())
    storyId: string,
  ): Promise<SuccessRO> {
    const story = await this.storyService.checkThatStoryExist(
      { id: storyId },
      'publishStory',
      [
        'recipient',
        'user',
        'language',
        'conversation',
        'conversation.smsMessages',
        'conversation.ivrrMessages',
        'conversation.messengerMessages',
        'user.language',
        'organisations',
        'translations',
        'translations.language',
        'country',
        'storyAdministrativeData',
      ],
    );


    const result = await this.storyModeratorService.publishStory(
      story,
      user.id,
    );
    const success = result && !!result?.affected;

    if (success) {
      this.logger.log(
        `[publishStory] Story published successfully - StoryID: ${story.id}, Channel: ${story.channel}`,
      );

      this.storyNotificationService.sendNotificationsAfterStoryPublication(
        story,
      );

      if (story.channel === CHANNEL_CONSTANTS.IVRR) {
        this.logger.log(
          `[publishStory] Preparing IVRR outbound call - StoryID: ${story.id}`,
        );

        try {
          await this.ivrrService.preparePublishedStoryCall(story);
          this.logger.log(
            `[publishStory] IVRR call prepared successfully - StoryID: ${story.id}`,
          );
        } catch (error) {
          this.logger.error(
            `[publishStory] Failed to prepare IVRR call - StoryID: ${story.id}, Error: ${error.message}`,
            error.stack,
          );
        }

        await this.ivrrService.removeStoryLogs(story);
      }

      if (story.recipient?.communicatorId) {
        this.messengerService.sendStoryStatus(story, StoryStatus.PUBLISHED);
      }
    } else {
      this.logger.warn(
        `[publishStory] Story publish result was not successful - StoryID: ${story.id}`,
      );
    }


    return plainToClass(SuccessRO, { success });
  }

  @ApiResponse({ status: 200, type: SuccessRO })
  @ApiOperation({ summary: 'Reject story' })
  @Put(':id/reject')
  async rejectStory(
    @Auth() user: UserEntity,
    @Param('id', new UuidValidationPipe())
    storyId: string,
    @Body(new ValidationPipe(rejectContentSchema))
    rejectContent: RejectContentDto,
  ): Promise<SuccessRO> {
    const success = await this.storyModeratorService.checkStoryAndReject(
      storyId,
      rejectContent,
      user,
    );

    return plainToClass(SuccessRO, { success });
  }

  @ApiResponse({ status: 200, type: SuccessRO })
  @ApiOperation({ summary: 'Remove story' })
  @Delete(':id')
  async removeStory(
    @Param('id', new UuidValidationPipe())
    storyId: string,
  ): Promise<SuccessRO> {
    const res = await this.storyModeratorService.removeStory(storyId);
    return plainToClass(SuccessRO, res);
  }

  @ApiOperation({
    summary: 'Get details of particular WEB story',
  })
  @ApiResponse({
    status: 200,
    type: StoryWebModeratorRO,
  })
  @ApiHeader({
    name: 'content-language',
    enum: LANGUAGES_CONSTANTS,
  })
  @Get('/web/:id')
  async getWebStoryDetails(
    @Param('id', new UuidValidationPipe()) storyId: string,
    @LanguageId() userLanguageId: number,
  ): Promise<StoryWebModeratorRO> {
    const [story, defaultLanguage] = await Promise.all([
      this.storyModeratorService.getStoryDetailsByIdAndChannelOrFail(
        storyId,
        CHANNEL_CONSTANTS.WEB,
      ),
      this.languageService.getDefaultLanguage(),
    ]);
    const historicalContent =
      await this.storyHistoricalTranslationModeratorService.findHistoricaloriginalContentForStory(
        story,
      );

    const vulnerabilityFactors = await this.feedbackVulnerabilityFactorsService.findByStoryId(storyId);

    let otherFeedbackBySameRecipient = [];
    if (story?.recipient && (story.recipient.phone || story.recipient.email || story.recipient.communicatorId)) {
      otherFeedbackBySameRecipient =
        await this.storyModeratorService.getStoriesBySameRecipient(
          story.recipient.phone,
          story.recipient.email,
          story.recipient.communicatorId,
          story.id,
        );
    }

    return storyWebDetailsMapper(
      story,
      historicalContent?.content,
      story.languageId,
      userLanguageId,
      defaultLanguage,
      vulnerabilityFactors,
      otherFeedbackBySameRecipient,
    );
  }

  @ApiOperation({
    summary: 'Get details of particular SMS story',
  })
  @ApiResponse({
    status: 200,
    type: StorySMSModeratorRO,
  })
  @ApiHeader({
    name: 'content-language',
    enum: LANGUAGES_CONSTANTS,
  })
  @Get('/sms/:id')
  async getSMSStoryDetails(
    @Param('id', new UuidValidationPipe()) storyId: string,
    @LanguageId() userLanguageId: number,
  ): Promise<StorySMSModeratorRO> {
    const [story, defaultLanguage] = await Promise.all([
      this.storyModeratorService.getStoryDetailsByIdAndChannelOrFail(
        storyId,
        CHANNEL_CONSTANTS.SMS,
      ),
      this.languageService.getDefaultLanguage(),
    ]);

    const messages = await this.messageService.getSmsMessagesByConversationId(
      story.conversationId,
    );

    const pinnedMessages =
      await this.storyTranslationModeratorService.concatenatePinnedMessages(
        story.id,
        story.channel,
      );

    return storySMSDetailsMapper(
      story,
      pinnedMessages,
      story.languageId,
      userLanguageId,
      defaultLanguage,
      messages,
    );
  }

  @ApiOperation({
    summary: 'Get details of particular Messenger story',
  })
  @ApiResponse({
    status: 200,
    type: StoryMessengerModeratorRO,
  })
  @ApiHeader({
    name: 'content-language',
    enum: LANGUAGES_CONSTANTS,
  })
  @Get('/messenger/:id')
  async getMessengerStoryDetails(
    @Param('id', new UuidValidationPipe()) storyId: string,
    @LanguageId() userLanguageId: number,
  ): Promise<StoryMessengerModeratorRO> {
    const [story, defaultLanguage] = await Promise.all([
      this.storyModeratorService.getStoryDetailsByIdAndChannelOrFail(
        storyId,
        CHANNEL_CONSTANTS.MESSENGER,
      ),
      this.languageService.getDefaultLanguage(),
    ]);

    const messages =
      await this.messengerService.getMessengerMessagesByConversationId(
        story.conversationId,
      );

    const pinnedMessages =
      await this.storyTranslationModeratorService.concatenatePinnedMessages(
        story.id,
        story.channel,
      );

    return storyMessengerDetailsMapper(
      story,
      pinnedMessages,
      story.languageId,
      userLanguageId,
      defaultLanguage,
      messages,
    );
  }

  @ApiOperation({
    summary: 'Get details of particular WhatsApp story',
  })
  @ApiResponse({
    status: 200,
    type: StoryMessengerModeratorRO,
  })
  @ApiHeader({
    name: 'content-language',
    enum: LANGUAGES_CONSTANTS,
  })
  @Get('/whatsapp/:id')
  async getWhatsAppStoryDetails(
    @Param('id', new UuidValidationPipe()) storyId: string,
    @LanguageId() userLanguageId: number,
  ): Promise<StoryMessengerModeratorRO> {
    const [story, defaultLanguage] = await Promise.all([
      this.storyModeratorService.getStoryDetailsByIdAndChannelOrFail(
        storyId,
        CHANNEL_CONSTANTS.WHATSAPP,
      ),
      this.languageService.getDefaultLanguage(),
    ]);

    const messages =
      await this.messengerService.getMessengerMessagesByConversationId(
        story.conversationId,
      );

    const pinnedMessages =
      await this.storyTranslationModeratorService.concatenatePinnedMessages(
        story.id,
        story.channel,
      );

    let otherFeedbackBySameRecipient = [];
    if (story?.recipient && (story.recipient.phone || story.recipient.email || story.recipient.communicatorId)) {
      otherFeedbackBySameRecipient =
        await this.storyModeratorService.getStoriesBySameRecipient(
          story.recipient.phone,
          story.recipient.email,
          story.recipient.communicatorId,
          story.id,
        );
    }

    return storyMessengerDetailsMapper(
      story,
      pinnedMessages,
      story.languageId,
      userLanguageId,
      defaultLanguage,
      messages,
      otherFeedbackBySameRecipient,
    );
  }

  @ApiOperation({
    summary: 'Get details of particular Telegram story',
  })
  @ApiResponse({
    status: 200,
    type: StoryMessengerModeratorRO,
  })
  @ApiHeader({
    name: 'content-language',
    enum: LANGUAGES_CONSTANTS,
  })
  @Get('/telegram/:id')
  async getTelegramStoryDetails(
    @Param('id', new UuidValidationPipe()) storyId: string,
    @LanguageId() userLanguageId: number,
  ): Promise<StoryMessengerModeratorRO> {
    const [story, defaultLanguage] = await Promise.all([
      this.storyModeratorService.getStoryDetailsByIdAndChannelOrFail(
        storyId,
        CHANNEL_CONSTANTS.TELEGRAM,
      ),
      this.languageService.getDefaultLanguage(),
    ]);

    const messages =
      await this.messengerService.getMessengerMessagesByConversationId(
        story.conversationId,
      );

    const pinnedMessages =
      await this.storyTranslationModeratorService.concatenatePinnedMessages(
        story.id,
        story.channel,
      );

    let otherFeedbackBySameRecipient = [];
    if (story?.recipient && (story.recipient.phone || story.recipient.email || story.recipient.communicatorId)) {
      otherFeedbackBySameRecipient =
        await this.storyModeratorService.getStoriesBySameRecipient(
          story.recipient.phone,
          story.recipient.email,
          story.recipient.communicatorId,
          story.id,
        );
    }

    return storyMessengerDetailsMapper(
      story,
      pinnedMessages,
      story.languageId,
      userLanguageId,
      defaultLanguage,
      messages,
      otherFeedbackBySameRecipient,
    );
  }

  @ApiOperation({ summary: 'Reject stories' })
  @ApiResponse({ status: 200, type: RejectedStoriesRO })
  @Post('reject-stories')
  async rejectStories(
    @Auth() user: UserEntity,
    @Body(new ValidationPipe(rejectStoriesSchema))
    rejections: RejectStoriesDto,
  ): Promise<RejectedStoriesRO> {
    const rejectedStoryIds: string[] = [];
    const failedStoryIds: string[] = [];

    for (const rejection of rejections.storiesToReject) {
      try {
        const success = await this.storyModeratorService.checkStoryAndReject(
          rejection.storyId,
          rejection,
          user,
        );

        if (success) {
          rejectedStoryIds.push(rejection.storyId);
        } else {
          failedStoryIds.push(rejection.storyId);
        }
      } catch (error) {
        failedStoryIds.push(rejection.storyId);
      }
    }

    return plainToClass(RejectedStoriesRO, {
      rejectedStoryIds,
      failedStoryIds,
    });
  }

  @ApiOperation({ summary: 'Bulk assign stories to moderators' })
  @ApiResponse({ status: 200, type: Boolean })
  @Put(':id/bulk_assign_stories')
  async bulkAssignStoriesToModerator(
    @Param('id', new UuidValidationPipe())
    moderator_id: string,
    @Body(new ValidationPipe(assignStoriesSchema))
    stories: AssignStoriesDTO,
  ): Promise<AssignStoriesRO> {
    try {
      const result = await this.storyModeratorService.handleBulkAssignStories(
        stories,
        moderator_id,
      );

      const moderator =
        await this.moderatorService.findModeratorById(moderator_id);

      if (!!result) {
        return plainToClass(AssignStoriesRO, {
          assignedStoriesIds: stories.storyIds,
          assignedModerator: moderator,
        });
      }
    } catch (error) {
    }
  }
}
