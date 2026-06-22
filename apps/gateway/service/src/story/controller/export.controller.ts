import {
  Controller,
  Post,
  Get,
  Query,
  Body,
  UseGuards,
  Res,
  UseInterceptors,
  Inject,
} from '@nestjs/common';
import { StoryService } from '../service/story.service';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBearerAuth,
  ApiBasicAuth,
  ApiHeader,
} from '@nestjs/swagger';
import { SuccessRO } from '../../common/response/success.ro';
import { responseToSuccessRO } from '../../common/mapper/success.mapper';
import { ValidationPipe } from '@ourloop/shared';
import { STORY_STATUS, BaseAuthGuard } from '@ourloop/shared';
import { AuthGuard } from '@nestjs/passport';
import { StoryFilterAndOrderDto } from '../request/dto/story-filter-and-order.dto';
import { exportStoriesSchema } from '../request/schema/export-stories.schema';
import { ExportStoriesDTO } from '../request/dto/export-stories.dto';
import { CountryService } from '../../country/service/country.service';
import { ExportService } from '../service/export.service';
import { OrganisationService } from '../../organisation/organisation.service';
import { LanguageService } from '../../language/language.service';
import { filterSchema } from '../../common/request/schema/filter.schema';
import { Response } from 'express';
import { exportedStoriesMapper } from '../mapper/exported-stories.mapper';
import { LANGUAGES_CONSTANTS } from '../../common/constant/languages.constants';
import { LanguageId } from '../../language/language-id.decorator';
import { ConfigService } from '@nestjs/config';
import { DI_CONSTANTS } from '../../common/constant/di.constant';
import { Auth } from '../../auth/auth.decorator';
import { UserEntity } from '../../user/entity/user.entity';
import { ExportedStoriesWithPaginationRO } from '../response/exported-stories-pagination.ro';
import { ExportToJsonDTO } from '../request/dto/export-to-json.dto';
import { exportToJsonSchema } from '../request/schema/export-to-json.schema';
import { generateMD5 } from '../../common/helpers';
import { HttpCacheInterceptor } from '../../common/interceptor/http-cache.interceptor';
import { PosthogService } from '../service/posthog.service';
import { UNDataExportService } from '../service/un-data-export.service';
import { CerbosService } from '../../common/cerbos/cerbos.service';

@ApiTags('Story Export')
@Controller('export')
export class ExportController {
  constructor(
    private readonly storyService: StoryService,
    private readonly exportService: ExportService,
    private readonly countryService: CountryService,
    private readonly organisationService: OrganisationService,
    private readonly languageService: LanguageService,
    private readonly posthogService: PosthogService,
    private readonly UNExportService: UNDataExportService,
    private readonly cerbosService: CerbosService,
    @Inject(DI_CONSTANTS.CONFIG)
    private readonly config: ConfigService,
  ) { }

  @ApiBasicAuth()
  @UseGuards(BaseAuthGuard)
  @ApiOperation({ summary: 'Export stories to CSV by moderator' })
  @ApiResponse({ status: 200, type: SuccessRO })
  @Post('moderator')
  async exportToCsvByModerator(
    @Body(new ValidationPipe(exportStoriesSchema))
    params: ExportStoriesDTO,
  ): Promise<SuccessRO> {
    const [defaultLanguage, countries, organisations] = await Promise.all([
      this.languageService.getDefaultLanguage(),
      this.countryService.findByPhrase(params.country),
      this.organisationService.findByPhrases(
        params.organisation ? params.organisation.split(',') : null,
      ),
    ]);

    const countryIds = countries.map((country) => country.id);
    const storyIds = await this.storyService.findStoryIdsByParams(
      {
        countryIds: countryIds.length ? countryIds : null,
        from: params.from,
        to: params.to,
        organisation: organisations
          ? organisations.map((item) => item.id).join(',')
          : organisations,
        withSensitiveStories: !!params.withSensitiveStories,
      } as StoryFilterAndOrderDto,
      true,
      [STORY_STATUS.PUBLISHED, STORY_STATUS.SENT_TO_CASE_MANAGER],
    );

    const data = await this.exportService.findDataByStoryIds(storyIds);

    this.exportService.exportStoriesToCSVAndSendEmail(
      params.email,
      defaultLanguage,
      data,
    );

    return responseToSuccessRO(data.stories?.length > 0);
  }

  @UseInterceptors(HttpCacheInterceptor)
  @ApiBearerAuth()
  @UseGuards(AuthGuard('subscription'))
  @ApiHeader({
    name: 'content-language',
    enum: LANGUAGES_CONSTANTS,
  })
  @Get('json')
  @ApiOperation({
    summary: 'Export stories in JSON format by user with subscription',
  })
  @ApiResponse({ status: 200, type: ExportedStoriesWithPaginationRO })
  async exportToJson(
    @Query(new ValidationPipe(exportToJsonSchema))
    params: ExportToJsonDTO,
    @LanguageId() userLanguageId: number,
  ): Promise<ExportedStoriesWithPaginationRO> {
    if (!params.page) {
      params.page = 1;
    }
    if (params.searchTerm) {
      params.searchTerm = await this.storyService.sanitizeSearchTerm(params.searchTerm.trim());
    }

    const defaultLanguage = await this.languageService.getDefaultLanguage();

    userLanguageId = userLanguageId ?? defaultLanguage.id;

    const filters = await this.exportService.prepareSearchParameters(params);
    const [storyIds, countries] = await Promise.all([
      this.storyService.findStoryIdsByParams(
        {
          ...filters,
          order: filters.order as string,
          withSensitiveStories: false,
          search_term: params.searchTerm,
        } as StoryFilterAndOrderDto,
        true,
      ),
      this.countryService.getCountries(),
    ]);
    const data = await this.exportService.findDataByStoryIds(storyIds, filters);
    const mappedStories = await this.exportService.mapData(
      data,
      userLanguageId,
      false,
    );

    return exportedStoriesMapper(
      mappedStories,
      countries,
      userLanguageId,
      defaultLanguage.id,
      this.config.get('frontend.url'),
      storyIds,
      params.page,
      params.limit,
    );
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard(['cognito', 'anonymous']))
  @ApiHeader({
    name: 'content-language',
    enum: LANGUAGES_CONSTANTS,
  })
  @Get('csv')
  @ApiOperation({
    summary: 'Export stories to CSV. Public — no login required.',
  })
  @ApiResponse({ status: 200 })
  async exportToCsv(
    @Auth() user: UserEntity,
    @Query(new ValidationPipe(filterSchema)) filters: StoryFilterAndOrderDto,
    @LanguageId() userLanguageId: number,
    @Res() response: Response,
  ): Promise<Response<any, Record<string, any>> | SuccessRO> {
    // Export is open to everyone (the platform is being archived/shut down):
    // no subscription / "Loop Advocate" gate. `user` may be undefined for
    // anonymous callers.
    const userLanguage = userLanguageId
      ? await this.languageService.getLanguageById(userLanguageId)
      : await this.languageService.getDefaultLanguage();

    if (filters?.storySearchText) {
      filters.searchTerm = await this.storyService.sanitizeSearchTerm(filters?.storySearchText.trim());
    }

    const csvFileName = this.exportService.findCacheFile(
      `${generateMD5(JSON.stringify(filters))}-${userLanguage?.code}`,
    );
    this.posthogService.trackDataExport(user?.id ?? 'anonymous', 'public')
    if (csvFileName) {
      return response
        .set({
          'Content-Type': 'text/csv',
          'Content-Disposition': `attachment; filename="feedback.csv"`,
        })
        .send(this.exportService.readFile(csvFileName, 'utf-8'));
    }
    const storyIds = await this.storyService.findStoryIdsByParams(
      {
        ...filters,
        withSensitiveStories: false,
        searchTerm: filters.searchTerm,
      } as StoryFilterAndOrderDto,
      true,
    );

    const data = await this.exportService.findDataByStoryIds(storyIds);

    const dataAsArray = await this.exportService.prepareStoriesToExport(
      userLanguage,
      data,
      [],
      false,
    );
    this.exportService.saveCacheFile(
      this.exportService.generateCsvFileName(filters, userLanguage?.code),
      this.exportService.prepareCSVContent(dataAsArray),
    );
    return response
      .set({
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="feedback.csv"`,
      })
      .send(this.exportService.prepareCSVContent(dataAsArray));
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('cognito'))
  @Get('user-csv-activity')
  @ApiOperation({
    summary: 'Collect information when user exit export csv modal',
  })
  @ApiResponse({ status: 200 })
  async saveUserCsvActivity(@Auth() user: UserEntity): Promise<SuccessRO> {
    const activity = await this.exportService.saveUserExportCsvActivity(
      user?.id,
    );
    return { success: !!activity };
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('cognito'))
  @Get('un-data/csv')
  @ApiHeader({
    name: 'content-language',
    enum: LANGUAGES_CONSTANTS,
  })
  @ApiOperation({
    summary: 'Export UN feedback to CSV.',
  })
  @ApiResponse({ status: 200, type: SuccessRO })
  async exportUNFeedbackToCsv(
    @Query(new ValidationPipe(filterSchema)) filters: StoryFilterAndOrderDto,
    @Res() response: Response,
  ): Promise<Response<any, Record<string, any>> | SuccessRO> {
    filters.page = 1;
    filters.limit = 30;

    if (filters?.storySearchText) {
      filters.searchTerm = await this.storyService.sanitizeSearchTerm(filters?.storySearchText.trim());
    }

    let storyIds = [];
    const criteria = 'un-export';
    const filename = `${generateMD5(JSON.stringify(filters))}-${criteria}`;
    const csvFileName = this.exportService.findCacheFile(filename);

    if (csvFileName) {
      return response
        .set({
          'Content-Type': 'text/csv',
          'Content-Disposition': `attachment; filename="un-feedback.csv"`,
        })
        .send(this.exportService.readFile(csvFileName, 'utf-8'));
    }

    storyIds = await this.storyService.findStoryIdsByParams(
      {
        ...filters,
        withSensitiveStories: false,
        searchTerm: filters.searchTerm,
      } as StoryFilterAndOrderDto,
      true,
    );

    if (storyIds.length === 0) {
      return response
        .set({
          'Content-Type': 'text/csv',
          'Content-Disposition': `attachment; filename="${filename}.csv"`,
        })
        .send(this.exportService.prepareCSVContent([]));
    }

    return await this.UNExportService.processCsvExport(filters, storyIds, response, filename);
  }
}
