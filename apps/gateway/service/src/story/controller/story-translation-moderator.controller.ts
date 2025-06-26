import {
  Controller,
  Param,
  Body,
  UseGuards,
  Delete,
  Put,
  Get,
  BadRequestException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { StoryTranslationModeratorService } from '../service/story-translation-moderator.service';
import {
  ValidationPipe,
  STORY_IS_ALREADY_PUBLISHED,
  STORY_STATUS,
} from '@ourloop/shared';
import { SuccessRO } from '../../common/response/success.ro';
import { UuidValidationPipe } from '../../common/pipe/uuid-validation.pipe';
import { plainToClass } from 'class-transformer';
import { AuthGuard } from '@nestjs/passport';
import { ModeratorGuard } from '../../auth/moderator.guard';
import { Reflector } from '@nestjs/core';
import { removeStoryTranslationSchema } from '../request/schema/remove-story-translation-schema';
import { RemoveStoryTranslationDto } from '../request/dto/remove-story-translation.dto';
import { verifyStoryTranslationSchema } from '../request/schema/verify-story-translation-schema';
import { VerifyStoryTranslationDto } from '../request/dto/verify-story-translation.dto';
import { TranslationRO } from '../../common/response/translation';
import { translationsMapper } from '../../common/mapper/translations.mapper';
import { SaveTranslationDto } from '../../common/dto/save-translation.dto';
import { saveTranslationSchema } from '../request/schema/save-translation-schema';
import { retryTranslationSchema } from '../../common/request/schema/retry-translation-schema';
import { RetryTranslationDto } from '../../common/dto/retry-translation.dto';
import { Auth } from '../../auth/auth.decorator';
import { UserEntity } from '../../user/entity/user.entity';
import { StoryService } from '../service/story.service';
import { PermissionGuard } from '../../auth/cerbos/permission.guard';
import { CERBOS_ACTIONS, CERBOS_RESOURCES } from '../../auth/cerbos/permission.enum';
import { PermissionsCerbos } from '../../auth/cerbos/permission.decorator';

// @UseGuards(AuthGuard('cognito'), PermissionGuard)
// @PermissionsCerbos(CERBOS_ACTIONS.READ, CERBOS_RESOURCES.TRANSLATION)
// @PermissionsCerbos(CERBOS_ACTIONS.UPDATE, CERBOS_RESOURCES.TRANSLATION)
// @PermissionsCerbos(CERBOS_ACTIONS.DELETE, CERBOS_RESOURCES.TRANSLATION)

@ApiBearerAuth()
@ApiTags('Story Translation Moderator')
@UseGuards(AuthGuard('cognito'), new ModeratorGuard(new Reflector()))
@Controller('story/moderator')
export class StoryTranslationModeratorController {
  constructor(
    private readonly storyService: StoryService,
    private readonly storyTranslationModeratorService: StoryTranslationModeratorService,
  ) {}

  @ApiResponse({ status: 200, type: SuccessRO })
  @ApiOperation({ summary: 'Remove story translation' })
  @Delete(':id/translation')
  async removeStoryTranslation(
    @Param('id', new UuidValidationPipe()) storyId: string,
    @Body(new ValidationPipe(removeStoryTranslationSchema))
    data: RemoveStoryTranslationDto,
  ): Promise<SuccessRO> {
    const result =
      await this.storyTranslationModeratorService.removeStoryTranslation(
        storyId,
        data.language,
      );

    return plainToClass(SuccessRO, { success: !!result?.affected });
  }

  @ApiResponse({ status: 200, type: SuccessRO })
  @ApiOperation({ summary: 'Verify story translation' })
  @Put(':id/translation/verify')
  async verifyStoryTranslation(
    @Param('id', new UuidValidationPipe()) storyId: string,
    @Body(new ValidationPipe(verifyStoryTranslationSchema))
    data: VerifyStoryTranslationDto,
  ): Promise<SuccessRO> {
    const result =
      await this.storyTranslationModeratorService.setTranslationAsVerified(
        storyId,
        data,
      );

    return plainToClass(SuccessRO, { success: !!result?.affected });
  }

  @ApiResponse({ status: 200, type: TranslationRO, isArray: true })
  @ApiOperation({ summary: 'Get list of story translation statuses' })
  @Get(':id/translation')
  async getTranslationStatus(
    @Param('id', new UuidValidationPipe()) storyId: string,
  ): Promise<TranslationRO[]> {
    const story = await this.storyTranslationModeratorService.getTranslations(
      storyId,
    );
    return translationsMapper(
      story.translations,
      story.languageId,
      story.languageId,
      false,
    );
  }

  @ApiOperation({ summary: 'Restore original story content' })
  @ApiResponse({ status: 200, type: SuccessRO })
  @Put(':id/translation/restore')
  async restoreOriginalContent(
    @Auth() user: UserEntity,
    @Param('id', new UuidValidationPipe()) storyId: string,
  ): Promise<SuccessRO> {
    const story = await this.storyService.checkThatStoryExist(
      { id: storyId },
      'removeStoryTranslation',
      ['translations', 'translations.language', 'language'],
    );

    const result =
      await this.storyTranslationModeratorService.restoreOriginalContent(
        user.id,
        story,
      );

    return plainToClass(SuccessRO, { success: result });
  }

  @ApiResponse({ status: 200, type: SuccessRO })
  @ApiOperation({ summary: 'Set translation to particular story' })
  @Put(':id/translation')
  async saveTranslation(
    @Auth() user: UserEntity,
    @Param('id', new UuidValidationPipe()) storyId: string,
    @Body(new ValidationPipe(saveTranslationSchema))
    data: SaveTranslationDto,
  ): Promise<SuccessRO> {
    const story = await this.storyService.checkThatStoryExist(
      { id: storyId },
      'saveTranslation',
      ['translations', 'translations.language', 'language'],
    );

    if (story.status == STORY_STATUS.PUBLISHED) {
      throw new BadRequestException(STORY_IS_ALREADY_PUBLISHED);
    }

    const result = await this.storyTranslationModeratorService.saveTranslation(
      data,
      story,
      user.id,
    );

    return plainToClass(SuccessRO, { success: !!result });
  }

  @ApiResponse({ status: 200, type: SuccessRO })
  @ApiOperation({ summary: 'Retry story translation' })
  @Put(':id/translation/retry')
  async retryStoryTranslation(
    @Param('id', new UuidValidationPipe()) storyId: string,
    @Body(new ValidationPipe(retryTranslationSchema))
    data: RetryTranslationDto,
  ): Promise<SuccessRO> {
    const { language } = data;
    const result = await this.storyTranslationModeratorService.retryTranslation(
      storyId,
      language,
    );

    return plainToClass(SuccessRO, { success: !!result });
  }
}
