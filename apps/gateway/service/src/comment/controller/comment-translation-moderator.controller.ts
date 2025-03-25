import {
  Controller,
  Param,
  Body,
  UseGuards,
  Delete,
  Put,
  Get,
  Post,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { CommentTranslationModeratorService } from '../service/comment-translation-moderator.service';
import { ValidationPipe } from '@ourloop/shared';
import { SuccessRO } from '../../common/response/success.ro';
import { UuidValidationPipe } from '../../common/pipe/uuid-validation.pipe';
import { plainToClass } from 'class-transformer';
import { AuthGuard } from '@nestjs/passport';
import { ModeratorGuard } from '../../auth/moderator.guard';
import { Reflector } from '@nestjs/core';
import { removeCommentTranslationSchema } from '../request/schema/remove-comment-translation-schema';
import { RemoveCommentTranslationDto } from '../request/dto/remove-comment-translation.dto';
import { verifyCommentTranslationSchema } from '../request/schema/verify-comment-translation-schema';
import { VerifyCommentTranslationDto } from '../request/dto/verify-comment-translation.dto';
import { TranslationRO } from '../../common/response/translation';
import { translationsMapper } from '../../common/mapper/translations.mapper';
import { SaveTranslationDto } from '../../common/dto/save-translation.dto';
import { addTranslationSchema } from '../request/schema/add-translation-schema';
import { retryTranslationSchema } from '../../common/request/schema/retry-translation-schema';
import { RetryTranslationDto } from '../../common/dto/retry-translation.dto';
import { PermissionGuard } from '../../auth/cerbos/permission.guard';
import { PermissionsCerbos } from '../../auth/cerbos/permission.decorator';
import { CERBOS_ACTIONS, CERBOS_RESOURCES } from '../../auth/cerbos/permission.enum';

@ApiBearerAuth()
@ApiTags('Comment Translation Moderator')
@UseGuards(AuthGuard('cognito'), PermissionGuard)
@Controller('comment/moderator')
export class CommentTranslationModeratorController {
  constructor(
    private readonly commentTranslationModeratorService: CommentTranslationModeratorService,
  ) { }

  @ApiResponse({ status: 200, type: SuccessRO })
  @ApiOperation({ summary: 'Remove story translation' })
  @PermissionsCerbos(CERBOS_ACTIONS.DELETE, CERBOS_RESOURCES.COMMENT)
  @Delete(':id/translation')
  async removeStoryTranslation(
    @Param('id', new UuidValidationPipe()) storyId: string,
    @Body(new ValidationPipe(removeCommentTranslationSchema))
    data: RemoveCommentTranslationDto,
  ): Promise<SuccessRO> {
    const result =
      await this.commentTranslationModeratorService.removeCommentTranslation(
        storyId,
        data.language,
      );

    return plainToClass(SuccessRO, { success: !!result?.affected });
  }

  @ApiResponse({ status: 200, type: SuccessRO })
  @ApiOperation({ summary: 'Verify story translation' })
  @PermissionsCerbos(CERBOS_ACTIONS.UPDATE, CERBOS_RESOURCES.COMMENT)
  @Put(':id/translation/verify')
  async verifyStoryTranslation(
    @Param('id', new UuidValidationPipe()) storyId: string,
    @Body(new ValidationPipe(verifyCommentTranslationSchema))
    data: VerifyCommentTranslationDto,
  ): Promise<SuccessRO> {
    const result =
      await this.commentTranslationModeratorService.setTranslationAsVerified(
        storyId,
        data,
      );

    return plainToClass(SuccessRO, { success: !!result?.affected });
  }
  @ApiResponse({ status: 200, type: TranslationRO, isArray: true })
  @ApiOperation({ summary: 'Get list of comment translations statuses' })
  @PermissionsCerbos(CERBOS_ACTIONS.READ, CERBOS_RESOURCES.COMMENT)

  @Get(':id/translation')
  async getTranslationStatus(
    @Param('id', new UuidValidationPipe()) commentId: string,
  ): Promise<TranslationRO[]> {
    const comment =
      await this.commentTranslationModeratorService.getTranslations(commentId);
    return translationsMapper(
      comment.translations,
      comment.languageId,
      comment.languageId,
      false,
    );
  }

  @ApiResponse({ status: 200, type: SuccessRO })
  @ApiOperation({ summary: 'Add translation to particular comment' })
  @PermissionsCerbos(CERBOS_ACTIONS.CREATE, CERBOS_RESOURCES.COMMENT)
  @Post(':id/translation')
  async saveTranslation(
    @Param('id', new UuidValidationPipe()) commentId: string,
    @Body(new ValidationPipe(addTranslationSchema))
    data: SaveTranslationDto,
  ): Promise<SuccessRO> {
    const result =
      await this.commentTranslationModeratorService.saveTranslation(
        data,
        commentId,
      );
    return plainToClass(SuccessRO, { success: !!result });
  }

  @ApiResponse({ status: 200, type: SuccessRO })
  @ApiOperation({ summary: 'Retry story translation' })
  @PermissionsCerbos(CERBOS_ACTIONS.UPDATE, CERBOS_RESOURCES.COMMENT)
  @Put(':id/translation/retry')
  async retryStoryTranslation(
    @Param('id', new UuidValidationPipe()) storyId: string,
    @Body(new ValidationPipe(retryTranslationSchema))
    data: RetryTranslationDto,
  ): Promise<SuccessRO> {
    const { language } = data;
    const result =
      await this.commentTranslationModeratorService.retryTranslation(
        storyId,
        language,
      );

    return plainToClass(SuccessRO, { success: !!result });
  }
}
