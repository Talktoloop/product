import {
  Controller,
  Get,
  UseInterceptors,
  Query,
  Inject,
  UseGuards,
} from '@nestjs/common';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HowManyCaseReceivedRO } from '../response/how-many-case-received.ro';
import { TypeValuesRO } from '../response/type-value.ro';
import { CaseService } from '../service/case.service';
import { casesGroupedByAllegationAndAuthorPerspectiveMapper } from '../mapper/cases-grouped-by-allegation-and-author-perspective.mapper';
import { WhatAreTheOutcomesRO } from '../response/what-are-the-outcomes.ro';
import { TypeAverageCountRO } from '../response/type-average-count.ro';
import { StoriesCodeDatesRO } from '../response/stories-code-dates.ro';
import { timelineForCasesSchema } from '../request/schema/timeline-for-cases.schema';
import { timelineForCasesMapper } from '../mapper/timeline-for-cases.mapper';
import { ValidationPipe } from '@ourloop/shared';
import { filterCasesSchema } from '../request/schema/filter.schema';
import { FilterCasesDto } from '../request/dto/filter.dto';
import { CountRO } from '../response/count.ro';
import { AverageTakenTimeToCompleteStepRO } from '../response/average-taken-time-to-complete-step.ro';
import { ResponsiveByStepRO } from '../response/responsive-by-step.ro';
import { casesGroupedByCaseAccountabilityAndOrganisationTypeMapper } from '../mapper/cases-grouped-by-case_accountability-and-organisation_type.mapper';
import { FilterCasesWithRequiredPeriodDto } from '../request/dto/filter-with-required-period.dto';
import { DI_CONSTANTS } from '../../common/constant/di.constant';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { plainToClass } from 'class-transformer';
import { MetabaseOpenFeedbackLinkRO } from '../response/metabase-link'

@UseGuards(AuthGuard(['anonymous']))
@ApiTags('Statistic - Cases')
@Controller('case')
@UseInterceptors(CacheInterceptor)
export class CaseController {
  constructor(
    private readonly caseService: CaseService,
    @Inject(DI_CONSTANTS.CONFIG)
    private readonly config: ConfigService,
  ) {}

  @Get('/signed-embedd-url')
  @ApiOperation({
    summary: 'Get the Metabase open feedback dashboard embedd url',
  })
  @ApiResponse({ status: 200, type: MetabaseOpenFeedbackLinkRO })
  async getSignedMetabaseURL(): Promise<MetabaseOpenFeedbackLinkRO> {
    return {
      url: this.caseService.getSignedMetabaseURL()
    }
  }

  @Get('/cases-received')
  @ApiOperation({
    summary: 'Get information how many cases have been received',
  })
  @ApiResponse({ status: 200, type: HowManyCaseReceivedRO })
  async getInformationHowManyCasesReceived(
    @Query(new ValidationPipe(filterCasesSchema)) filters: FilterCasesDto,
  ): Promise<HowManyCaseReceivedRO> {
    return this.caseService.getInformationHowManyCasesReceived(filters);
  }

  @Get('/allegation-type-author-perspective')
  @ApiOperation({
    summary: 'Get cases grouped by allegation and author perspective',
  })
  @ApiResponse({
    status: 200,
    type: TypeValuesRO,
    isArray: true,
  })
  async getCasesGroupedByAllegationAndAuthorPerspective(
    @Query(new ValidationPipe(filterCasesSchema)) filters: FilterCasesDto,
  ): Promise<TypeValuesRO[]> {
    const data =
      await this.caseService.getCasesGroupedByAllegationAndAuthorPerspective(
        filters,
      );

    let mappedData = casesGroupedByAllegationAndAuthorPerspectiveMapper(data);

    if (!this.config.get('application.anonymizeCharts')) {
      return mappedData;
    }

    mappedData = this.caseService.checkIfChartShouldBeAnonymized(mappedData);

    return mappedData;
  }

  @Get('/survivor-gender')
  @ApiOperation({
    summary: 'Get data for survivor gender',
  })
  @ApiResponse({ status: 200, type: TypeValuesRO, isArray: true })
  async getSurvivorGender(
    @Query(new ValidationPipe(filterCasesSchema)) filters: FilterCasesDto,
  ): Promise<TypeValuesRO[]> {
    let data = await this.caseService.getSurvivorsPerGender(filters);

    if (!this.config.get('application.anonymizeCharts')) {
      return data;
    }

    data = this.caseService.checkIfChartShouldBeAnonymized(data);

    return data;
  }

  @Get('/survivor-age')
  @ApiOperation({
    summary: 'Get data for survivor age',
  })
  @ApiResponse({ status: 200, type: TypeValuesRO, isArray: true })
  async getSurvivorAge(
    @Query(new ValidationPipe(filterCasesSchema)) filters: FilterCasesDto,
  ): Promise<TypeValuesRO[]> {
    let data = await this.caseService.getSurvivorsPerAge(filters);

    if (!this.config.get('application.anonymizeCharts')) {
      return data;
    }

    data = this.caseService.checkIfChartShouldBeAnonymized(data);

    return data;
  }

  @Get('/organisation-type')
  @ApiOperation({
    summary: 'Get data for organisation type',
  })
  @ApiResponse({ status: 200, type: TypeValuesRO, isArray: true })
  async getDataForOrganisationType(
    @Query(new ValidationPipe(filterCasesSchema)) filters: FilterCasesDto,
  ): Promise<TypeValuesRO[]> {
    return this.caseService.getDataForTypeOfOrganisationByAllogation(filters);
  }

  @Get('/did-people-received-assistance')
  @ApiOperation({
    summary: 'Get data for info did people referred for assistance received it',
  })
  @ApiResponse({ status: 200, type: TypeValuesRO, isArray: true })
  async getInfoDidPeopleReceivedAssistance(
    @Query(new ValidationPipe(filterCasesSchema)) filters: FilterCasesDto,
  ): Promise<TypeValuesRO[]> {
    return this.caseService.getInfoDidPeopleReceivedAssistance(filters);
  }

  @Get('/what-are-the-outcomes')
  @ApiOperation({
    summary: 'Get data for what are the outcomes',
  })
  @ApiResponse({ status: 200, type: WhatAreTheOutcomesRO })
  async whatAreTheOutcomes(
    @Query(new ValidationPipe(filterCasesSchema)) filters: FilterCasesDto,
  ): Promise<WhatAreTheOutcomesRO> {
    const data = await this.caseService.whatAreTheOutcomes(filters);

    return plainToClass(WhatAreTheOutcomesRO, data);
  }

  @Get('/type-of-cases-accountability')
  @ApiOperation({
    summary:
      'Get data for what type of cases are in the accountability process now',
  })
  @ApiResponse({ status: 200, type: TypeValuesRO, isArray: true })
  async whatAreTheTypeOfCasesInTheAccountability(
    @Query(new ValidationPipe(filterCasesSchema)) filters: FilterCasesDto,
  ): Promise<TypeValuesRO[]> {
    return this.caseService.whatAreTheTypeOfCasesInTheAccountability(filters);
  }

  @Get('/average-taken-time-to-complete-step')
  @ApiOperation({
    summary:
      'Get data for whats the average time taken to complete each step of the accountability process',
  })
  @ApiResponse({
    status: 200,
    type: AverageTakenTimeToCompleteStepRO,
    isArray: true,
  })
  async getAverageTakenTimeToCompleteStep(
    @Query(new ValidationPipe(filterCasesSchema)) filters: FilterCasesDto,
  ): Promise<AverageTakenTimeToCompleteStepRO> {
    return this.caseService.getAverageTakenTimeToCompleteStep(filters);
  }

  @Get('/average-taken-time')
  @ApiOperation({
    summary:
      'Get data for Whats the average time taken for different types of cases to be processed',
  })
  @ApiResponse({ status: 200, type: TypeAverageCountRO, isArray: true })
  async averageTakenTime(
    @Query(new ValidationPipe(filterCasesSchema)) filters: FilterCasesDto,
  ): Promise<TypeAverageCountRO[]> {
    return this.caseService.averageTakenTime(filters);
  }

  @Get('/how-responsive-by-step')
  @ApiOperation({
    summary: 'Get data about responsive by each step of process',
  })
  @ApiResponse({ status: 200, type: ResponsiveByStepRO })
  async getDataAboutResponsiveByStep(
    @Query(new ValidationPipe(filterCasesSchema)) filters: FilterCasesDto,
  ): Promise<ResponsiveByStepRO> {
    return this.caseService.getDataAboutResponsiveByStep(filters);
  }

  @Get('/timeline-for-cases')
  @ApiOperation({
    summary: 'Get timeline for cases',
  })
  @ApiResponse({
    status: 200,
    type: StoriesCodeDatesRO,
    isArray: true,
  })
  async getTimelineForCases(
    @Query(new ValidationPipe(timelineForCasesSchema))
    filters: FilterCasesWithRequiredPeriodDto,
  ): Promise<StoriesCodeDatesRO[]> {
    const casesWithAllegationTypeByPeriod =
      await this.caseService.getCasesWithAllegationTypeByPeriod(filters);

    const urgentCasesByPeriod =
      await this.caseService.getUrgentCasesByPeriod(filters);

    return timelineForCasesMapper(
      filters,
      casesWithAllegationTypeByPeriod,
      urgentCasesByPeriod,
    );
  }

  @Get('/cases-count')
  @ApiOperation({
    summary: 'Get Count of cases',
  })
  @ApiResponse({
    status: 200,
    type: CountRO,
  })
  async getCasesCount(
    @Query(new ValidationPipe(filterCasesSchema)) filters: FilterCasesDto,
  ): Promise<CountRO> {
    return this.caseService.getCountOfCases(filters);
  }

  @Get('/how-are-organisations-handling-allegations')
  @ApiOperation({
    summary: 'Get information on how are organisation handling allegations',
  })
  @ApiResponse({
    status: 200,
    type: TypeValuesRO,
    isArray: true,
  })
  async getInformationAboutCaseAccountability(
    @Query(new ValidationPipe(filterCasesSchema)) filters: FilterCasesDto,
  ): Promise<TypeValuesRO[]> {
    const data =
      await this.caseService.getCasesGroupedByCaseAccountabilityAndOrganisationType(
        filters,
      );

    return casesGroupedByCaseAccountabilityAndOrganisationTypeMapper(data);
  }
}
