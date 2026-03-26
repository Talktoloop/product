import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiHeader,
} from '@nestjs/swagger';
import { Reflector } from '@nestjs/core';
import { StoryModeratorService } from '../service/story-moderator.service';
import { AuthGuard } from '@nestjs/passport';
import { ModeratorGuard } from '../../auth/moderator.guard';
import { UuidValidationPipe } from '../../common/pipe/uuid-validation.pipe';
import { CHANNEL_CONSTANTS } from '../../common/constant/channel.constant';
import { storyIvrrDetailsMapper } from '../mapper/story-ivrr-details.mapper';
import { StoryIvrrModeratorRO } from '../response/story-ivrr-moderator.ro';
import { StoryHistoricalTranslationModeratorService } from '../service/story-historical-translation-moderator.service';
import { LANGUAGES_CONSTANTS } from '../../common/constant/languages.constants';
import { LanguageId } from '../../language/language-id.decorator';
import { LanguageService } from '../../language/language.service';
import { StoryConversationService } from '../service/story-conversation.service';
import { FeedbackVulnerabilityFactorsService } from '../service/feedback-vulnerability-factors.service';
// import { PermissionGuard } from '../../auth/cerbos/permission.guard';
// import { PermissionsCerbos } from '../../auth/cerbos/permission.decorator';
// import { CERBOS_ACTIONS, CERBOS_RESOURCES } from '../../auth/cerbos/permission.enum';

// @UseGuards(AuthGuard('cognito'), PermissionGuard)
// @PermissionsCerbos(CERBOS_ACTIONS.READ, CERBOS_RESOURCES.STORY)

@UseGuards(AuthGuard('cognito'), new ModeratorGuard(new Reflector()))
@ApiBearerAuth()
@ApiTags('IVRR Story Moderator')
@Controller('story/moderator/ivrr')
export class StoryIVRRModeratorController {
  constructor(
    private readonly storyModeratorService: StoryModeratorService,
    private readonly storyHistoricalTranslationModeratorService: StoryHistoricalTranslationModeratorService,
    private readonly languageService: LanguageService,
    private readonly storyConversationService: StoryConversationService,
    private readonly feedbackVulnerabilityFactorsService: FeedbackVulnerabilityFactorsService,
  ) { }

  @ApiOperation({
    summary: 'Get details of particular IVRR story',
  })
  @ApiResponse({
    status: 200,
    type: StoryIvrrModeratorRO,
  })
  @ApiHeader({
    name: 'content-language',
    enum: LANGUAGES_CONSTANTS,
  })
  @Get(':id')
  async getIvrrStoryDetails(
    @Param('id', new UuidValidationPipe()) storyId: string,
    @LanguageId() userLanguageId: number,
  ): Promise<StoryIvrrModeratorRO> {
    const [story, defaultLanguage] = await Promise.all([
      this.storyModeratorService.getStoryDetailsByIdAndChannelOrFail(
        storyId,
        CHANNEL_CONSTANTS.IVRR,
      ),
      this.languageService.getDefaultLanguage(),
    ]);
    const conversation = await this.storyConversationService.findById(
      story.conversation?.id,
      ['ivrrMessages'],
    );
    const historicalContent =
      await this.storyHistoricalTranslationModeratorService.findHistoricaloriginalContentForStory(
        story,
        {
          createdAt: `${story.channel === CHANNEL_CONSTANTS.IVRR ? 'DESC' : 'ASC'
            }`,
        },
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

    const vulnerabilityFactors = await this.feedbackVulnerabilityFactorsService.findByStoryId(storyId);
    
    return storyIvrrDetailsMapper(
      story,
      conversation,
      historicalContent?.content,
      story.languageId,
      userLanguageId,
      defaultLanguage,
      otherFeedbackBySameRecipient,
      vulnerabilityFactors,
    );
  }
}
