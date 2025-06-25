import {
  Controller,
  Get,
  Headers,
  Post,
  Param,
  Query,
  Body,
  Put,
  UseGuards,
  Inject,
  ForbiddenException,
} from '@nestjs/common';
import { StoryService } from '../service/story.service';
import { ApiHeader, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { StoryRO } from '../response/story.ro';
import { storiesToStoriesPaginationRO } from '../mapper/story-list.mapper';
import { generateHash } from '../../common/helpers';
import { SuccessRO } from '../../common/response/success.ro';
import { responseToSuccessRO } from '../../common/mapper/success.mapper';
import { storyToStoryRO } from '../mapper/story.mapper';
import { StoryListPaginationRO } from '../response/story-list-pagination.ro';
import { addStorySchema } from '../request/schema/add-story-schema';
import { AddStoryDto } from '../request/dto/add-story.dto';
import { ValidationPipe } from '@ourloop/shared';
import { plainToClass } from 'class-transformer';
import { UuidValidationPipe } from '../../common/pipe/uuid-validation.pipe';
import { STORY_STATUS } from '@ourloop/shared';
import { AuthGuard } from '@nestjs/passport';
import { StoryFilterAndOrderDto } from '../request/dto/story-filter-and-order.dto';
import { UserEntity } from '../../user/entity/user.entity';
import { Auth } from '../../auth/auth.decorator';
import { LanguageId } from '../../language/language-id.decorator';
import { LANGUAGES_CONSTANTS } from '../../common/constant/languages.constants';
import { Ip } from '../../user/ip.decorator';
import { storyListSchema } from '../request/schema/story-list-schema';
import { AdministrativeDataService } from '../../country/service/administrative-data.service';
import { LanguageService } from '../../language/language.service';
import { ConfigService } from '@nestjs/config';
import { DI_CONSTANTS as COMMON_DI } from '../../common/constant/di.constant';

@ApiTags('Story')
@Controller('story')
export class StoryController {
  constructor(
    private readonly storyService: StoryService,
    private readonly administrativeDataService: AdministrativeDataService,
    private readonly languageService: LanguageService,
    @Inject(COMMON_DI.CONFIG)
    private readonly config: ConfigService,
  ) { }


  @Get('remove-duplicate-authors')
  testStuff() {
    return this.storyService.removeDuplicateAuthorsScript();
  }

  @UseGuards(AuthGuard(['anonymous']))
  @ApiHeader({
    name: 'content-language',
    enum: LANGUAGES_CONSTANTS,
  })
  @ApiOperation({ summary: 'Get list of stories' })
  @ApiResponse({ status: 200, type: StoryListPaginationRO, isArray: true })
  @Get()
  async getListOfStories(
    @Query(new ValidationPipe(storyListSchema))
    params: StoryFilterAndOrderDto,
    @LanguageId() userLanguageId: number,
  ): Promise<StoryListPaginationRO> {
    if (!params.page) {
      params.page = 1;
    }

    if (params.searchTerm) {
      params.searchTerm = await this.storyService.sanitizeSearchTerm(params.searchTerm.trim());
    }

    const storyIds = await this.storyService.findStoryIdsByParams(
      params,
      false,
    );
    const stories = await this.storyService.findDetailsByStoryIds(
      params,
      storyIds,
    );
    const defaultLanguage = await this.languageService.getDefaultLanguage();

    return storiesToStoriesPaginationRO(
      stories,
      storyIds,
      params,
      userLanguageId,
      defaultLanguage,
    );
  }

  @UseGuards(AuthGuard(['cognito', 'anonymous']))
  @ApiOperation({ summary: 'Add vote to selected story' })
  @ApiResponse({ status: 200, type: SuccessRO })
  @Put(':id/vote')
  async voteToStory(
    @Auth() user: UserEntity,
    @Param('id', new UuidValidationPipe())
    storyId: string,
    @Ip() ipAddress: string,
    @Headers() reqHeaders: Headers,
  ): Promise<SuccessRO> {
    const hash = generateHash(ipAddress, reqHeaders['user-agent']);
    const response = await this.storyService.addNewVote(storyId, hash, user);
    return responseToSuccessRO(response);
  }

  @UseGuards(AuthGuard(['cognito', 'anonymous']))
  @ApiOperation({ summary: 'Remove vote to selected story' })
  @ApiResponse({ status: 200, type: SuccessRO })
  @Put(':id/unvote')
  async unVoteStory(
    @Auth() user: UserEntity,
    @Param('id', new UuidValidationPipe())
    storyId: string,
    @Ip() ipAddress: string,
    @Headers() reqHeaders: Headers,
  ): Promise<SuccessRO> {
    const hash = generateHash(ipAddress, reqHeaders['user-agent']);
    const response = await this.storyService.removeVote(storyId, hash, user);
    return responseToSuccessRO(response);
  }

  @UseGuards(AuthGuard(['anonymous']))
  @ApiHeader({
    name: 'content-language',
    enum: LANGUAGES_CONSTANTS,
  })
  @ApiOperation({ summary: 'Get story details' })
  @ApiResponse({ status: 200, type: StoryRO })
  @Get(':id')
  async getStoryDetails(
    @Param('id', new UuidValidationPipe())
    storyId: string,
    @Ip() ipAddress: string,
    @Headers() reqHeaders: Headers,
    @LanguageId() userLanguageId: number,
  ): Promise<StoryRO> {
    const defaultLanguage = await this.languageService.getDefaultLanguage();

    const story = await this.storyService.findById(
      storyId,
      STORY_STATUS.PUBLISHED,
    );

    if (story) {
      await this.storyService.addNewView(
        story,
        generateHash(ipAddress, reqHeaders['user-agent']),
      );
    }

    return storyToStoryRO(story, userLanguageId, defaultLanguage);
  }

  @ApiHeader({
    name: 'content-language',
    enum: LANGUAGES_CONSTANTS,
  })
  @UseGuards(AuthGuard(['cognito', 'anonymous']))
  @ApiResponse({ status: 200, type: SuccessRO })
  @ApiOperation({ summary: 'Create new story' })
  @Post()
  async addStory(
    @Auth() user: UserEntity,
    @Body(new ValidationPipe(addStorySchema))
    data: AddStoryDto,
    @Ip() ipAddress: string,
    @Headers() reqHeaders: Headers,
    @LanguageId() languageId: number,
  ): Promise<SuccessRO> {
    if (this.config.get('application.onlyGetRequest')) {
      throw new ForbiddenException();
    }

    const hash = generateHash(ipAddress, reqHeaders['user-agent']);

    const result = await this.storyService.addStory(
      languageId,
      data,
      hash,
      user,
    );

    if (Number.isInteger(data.regionId)) {
      await this.administrativeDataService.assignAdministrativeDataToStory(
        data.regionId,
        result.id,
      );
    }

    return plainToClass(SuccessRO, { success: !!result?.id });
  }
}
