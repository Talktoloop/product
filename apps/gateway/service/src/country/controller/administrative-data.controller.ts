import {
  Controller,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
  UseGuards,
  Get,
  Param,
  Headers,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiResponse, ApiTags, ApiHeader } from '@nestjs/swagger';
import { AdministrativeDataService } from '../service/administrative-data.service';
import { AdministrativeXlsxDataService } from '../service/administrative-xlsx-data.service';
import { CountryService } from '../service/country.service';
import {
  ValidationPipe,
  UPLOAD_FILE_FAILED,
  BaseAuthGuard,
} from '@ourloop/shared';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ImportRegionDTO,
  ImportXlsxRegionDTO,
} from '../request/dto/import-region.dto';
import {
  importRegionSchema,
  importXlsxRegionSchema,
} from '../request/schema/import-region.schema';
import { GetAdministrativeDataDTO } from '../request/dto/get-administrative-data.dto';
import { getAdministrativeDataSchema } from '../request/schema/get-administrative-data.schema';
import { AdministrativeDataRO } from '../response/administrative-data.ro';
import { administrativeDataMapper } from '../mapper/administrative-data.mapper';
import { StoryService } from '../../story/service/story.service';
import { ParseRegionDTO } from '../request/dto/parse-region.dto';
import { parseRegionSchema } from '../request/schema/parse-region.schema';
import { UnparsedLocation } from '../type/unparsed-location.type';
import { FindRegionsDTO } from '../request/dto/find-regions.dto';
import { findRegionSchema } from '../request/schema/find-region.schema';
import { SearchResultRO } from '../response/search-result.ro';
import { searchResultMapper } from '../mapper/search-result.mapper';
import { LANGUAGES_CONSTANTS } from '../../common/constant/languages.constants';
import { LanguageId } from '../../language/language-id.decorator';
import { LanguageService } from '../../language/language.service';
import { languageCodeToIdMapper } from '../../language/mapper/langage-code-to-id.mapper';
import { AdministrativeDataPathRO } from '../response/administrative-data-path.ro';
import { NumberIdValidationPipe } from '../../common/pipe/number-id-validation.pipe';
import { administrativeDataPathMapper } from '../mapper/administrative-data-path.mapper';

@ApiTags('Administrative data')
@Controller('administrative-data')
export class AdministrativeDataController {
  constructor(
    private readonly storyService: StoryService,
    private readonly countryService: CountryService,
    private readonly languageService: LanguageService,
    private readonly administrativeDataService: AdministrativeDataService,
    private readonly administrativeXlsxDataService: AdministrativeXlsxDataService,
  ) {}

  @UseGuards(AuthGuard(['anonymous']))
  @Get()
  @ApiHeader({
    name: 'content-language',
    enum: LANGUAGES_CONSTANTS,
  })
  @ApiOperation({ summary: 'Get list of administrative data' })
  @ApiResponse({ status: 200, type: AdministrativeDataRO, isArray: true })
  async getAdministrativeData(
    @LanguageId() userLanguageId: number,
    @Query(new ValidationPipe(getAdministrativeDataSchema))
    params: GetAdministrativeDataDTO,
  ): Promise<AdministrativeDataRO[]> {
    if (Number.isInteger(params.parentId)) {
      await this.administrativeDataService.findAdministrativeDataOrFail(
        params.parentId,
      );
    }

    const defaultLanguage = await this.languageService.getDefaultLanguage();
    const administrativeData =
      await this.administrativeDataService.findAdministrativeDataWithCounters(
        params.countryId,
        params.parentId,
        params.onlyWithStory ?? false,
      );

    return administrativeDataMapper(
      administrativeData,
      userLanguageId,
      defaultLanguage,
    );
  }

  @UseGuards(AuthGuard(['anonymous']))
  @ApiHeader({
    name: 'content-language',
    enum: LANGUAGES_CONSTANTS,
  })
  @ApiOperation({ summary: 'Get administrative data path' })
  @ApiResponse({ status: 200, type: AdministrativeDataPathRO })
  @Get(':id/path')
  async getAdministrativeDataPath(
    @Param('id', new NumberIdValidationPipe())
    id: number,
    @Headers() reqHeaders: Headers,
    @LanguageId() userLanguageId: number,
  ): Promise<AdministrativeDataPathRO> {
    const defaultLanguage = await this.languageService.getDefaultLanguage();
    const administrativeData =
      await this.administrativeDataService.findAdministrativeDataOrFail(id, [
        'names',
        'country',
      ]);
    const parents = await this.administrativeDataService.findParentsById(
      administrativeData.id,
    );

    return administrativeDataPathMapper(
      parents,
      userLanguageId,
      defaultLanguage.id,
      administrativeData.country.defaultLanguageId,
    );
  }

  @UseGuards(AuthGuard(['anonymous']))
  @Get('search')
  @ApiHeader({
    name: 'content-language',
    enum: LANGUAGES_CONSTANTS,
  })
  @ApiOperation({ summary: 'Find administrative data by phrase' })
  @ApiResponse({ status: 200, type: SearchResultRO })
  async findAdministrativeData(
    @LanguageId() userLanguageId: number,
    @Query(new ValidationPipe(findRegionSchema))
    params: FindRegionsDTO,
  ): Promise<SearchResultRO> {
    if (Number.isInteger(params.parentId)) {
      await this.administrativeDataService.findAdministrativeDataOrFail(
        params.parentId,
      );
    }

    const defaultLanguage = await this.languageService.getDefaultLanguage();
    const country = await this.countryService.findByIdOrFail(params.countryId);

    const data =
      await this.administrativeDataService.findByCountryAndPhraseWithParents(
        params,
        userLanguageId,
        defaultLanguage.id,
      );

    return searchResultMapper(
      country,
      params,
      userLanguageId,
      defaultLanguage,
      data,
    );
  }

  @UseGuards(BaseAuthGuard)
  @Post('/parse')
  @ApiOperation({ summary: 'Parse places to administrative data' })
  @ApiResponse({ status: 200, type: String })
  async parseCountryRegions(
    @Query(new ValidationPipe(parseRegionSchema))
    params: ParseRegionDTO,
  ): Promise<{
    numberOfParsedPlaces: number;
    numberOfStoriesWithoutDefinedAdministrativeArea: number;
    unparsedLocations: UnparsedLocation[];
  }> {
    const country = await this.countryService.findByCodeOrFail(
      params.countryCode,
    );
    const stories =
      await this.storyService.findStoriesWithoutDefinedAdministrativeArea(
        country.id,
      );
    const { numberOfParsedPlaces, unparsedLocations } =
      await this.administrativeDataService.parseStoryPlaces(stories);

    if (params.email) {
      this.administrativeDataService.exportUnparsedLocationsToCSVAndSendEmail(
        params.email,
        country,
        unparsedLocations,
      );
    }

    return {
      numberOfParsedPlaces,
      numberOfStoriesWithoutDefinedAdministrativeArea: stories.length,
      unparsedLocations,
    };
  }

  @UseGuards(BaseAuthGuard)
  @Post('/import-from-api')
  @ApiOperation({
    summary: 'Import administrative boundaries of country from api',
  })
  @ApiResponse({ status: 200, type: String, isArray: true })
  async importCountryRegions(
    @Query(new ValidationPipe(importRegionSchema))
    params: ImportRegionDTO,
  ): Promise<Record<string, any>[]> {
    const country = await this.countryService.findByCodeOrFail(
      params.countryCode,
    );
    const administrativeDataExists =
      await this.administrativeDataService.checkIfAdministrativeDataExists(
        country.id,
      );

    if (administrativeDataExists && params.saveDataInDB) {
      throw new BadRequestException('Data is already saved');
    }

    const exceptionIds = params.exceptionIds
      ? params.exceptionIds.split(',').map((value) => parseInt(value))
      : [];
    const defaultLanguage = await this.languageService.getDefaultLanguage();

    let data = await this.administrativeDataService.fetchAdministrativeData(
      params.countryCode,
      params.firstLevel,
      params.lastLevel,
      country.language?.code,
      exceptionIds,
      [defaultLanguage.code],
    );

    data = this.administrativeDataService.removeDuplicates(data);

    if (params.saveDataInDB) {
      const languages = await this.languageService.getLanguages();

      await this.administrativeDataService.saveAdministrativeData(
        languageCodeToIdMapper(languages),
        data,
        country,
        defaultLanguage.code,
      );
    }

    return data;
  }

  @UseGuards(BaseAuthGuard)
  @Post('import-from-excel')
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({
    summary: 'Import administrative boundaries of country from xlsx',
  })
  @ApiResponse({ status: 200, type: String, isArray: true })
  async importXlsxCountryRegions(
    @UploadedFile() file: Express.Multer.File,
    @Query(new ValidationPipe(importXlsxRegionSchema))
    params: ImportXlsxRegionDTO,
  ) {
    if (!file || file.size === 0) {
      throw new BadRequestException(UPLOAD_FILE_FAILED);
    }

    const country = await this.countryService.findByCodeOrFail(
      params.countryCode,
    );

    const administrativeDataExists =
      await this.administrativeDataService.checkIfAdministrativeDataExists(
        country.id,
      );

    if (administrativeDataExists && params.saveDataInDB) {
      throw new BadRequestException('Data is already saved');
    }

    const { data, dataLanguages } =
      await this.administrativeXlsxDataService.getXlsxData(file);

    if (params.saveDataInDB) {
      const languages = await this.languageService.getLanguages();

      await this.administrativeXlsxDataService.saveAdministrativeXlsxData(
        dataLanguages,
        languageCodeToIdMapper(languages),
        data[0].subregions,
        country.id,
      );
    }

    return data;
  }
}
