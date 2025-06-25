import { Controller, Get, UseInterceptors, UseGuards } from '@nestjs/common';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';
import { CaseService } from '../service/case.service';
import { REFERRED_FOR_ASSISTANCE } from '../../airtable-client/constant/referred-for-assistance.constant';
import { INVESTIGATION_OUTCOME } from '../../airtable-client/constant/investigation-outcome.constant';
import { ORGANISATION_TYPE_TEXT } from '../../airtable-client/constant/organisation-type.constant';
import { ALLEGATION_TYPE_TEXT } from '../../airtable-client/constant/allegation-type.constant';
import { AGE_TEXT } from '../../airtable-client/constant/age.constant';
import { GENDER_TEXT } from '../../airtable-client/constant/gender.constant';
import { DIFFICULTY } from '../../airtable-client/constant/difficulty.constant';
import { CountCodeIdWithChildren } from '../interfaces/code-count-id.interface';
import { THEMATIC } from '../../airtable-client/constant/thematic.constant';
import { thematicAreasMapper } from '../mapper/thematic-areas.mapper';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard(['anonymous']))
@ApiTags('Statistic - filters for cases')
@Controller('case/filter')
@UseInterceptors(CacheInterceptor)
export class CaseFilterController {
  constructor(private readonly caseService: CaseService) {}

  @Get('/referred-for-assistance')
  @ApiResponse({ status: 200, type: String, isArray: true })
  @ApiOperation({
    summary: 'Filter values - referred for assistance',
  })
  async getReferredForAssistanceValues(): Promise<string[]> {
    return Object.keys(REFERRED_FOR_ASSISTANCE);
  }

  @Get('/investigation-outcome')
  @ApiResponse({ status: 200, type: String, isArray: true })
  @ApiOperation({
    summary: 'Filter values - investigation outcome',
  })
  async getInvestigationOutcomeValues(): Promise<string[]> {
    return Object.keys(INVESTIGATION_OUTCOME);
  }

  @Get('/organisaiton-type')
  @ApiResponse({ status: 200, type: String, isArray: true })
  @ApiOperation({
    summary: 'Filter values - organisation types',
  })
  async getOrganisationTypes(): Promise<string[]> {
    return Object.keys(ORGANISATION_TYPE_TEXT);
  }

  @Get('/case-type')
  @ApiResponse({ status: 200, type: String, isArray: true })
  @ApiOperation({
    summary: 'Filter values - case types',
  })
  async getCaseTypes(): Promise<string[]> {
    const allegationTypes = Object.keys(ALLEGATION_TYPE_TEXT);

    return [...allegationTypes, 'urgentCases'];
  }

  @Get('/country')
  @ApiResponse({ status: 200, type: String, isArray: true })
  @ApiOperation({
    summary: 'Filter values - countries',
  })
  async getCountries(): Promise<string[]> {
    return this.caseService.getUniqueCountries();
  }

  @Get('/age')
  @ApiResponse({ status: 200, type: String, isArray: true })
  @ApiOperation({
    summary: 'Filter values - age',
  })
  async getAgeValues(): Promise<string[]> {
    return Object.keys(AGE_TEXT);
  }

  @Get('/gender')
  @ApiResponse({ status: 200, type: String, isArray: true })
  @ApiOperation({
    summary: 'Filter values - gender',
  })
  async getGenderValues(): Promise<string[]> {
    return Object.keys(GENDER_TEXT);
  }

  @Get('/disability')
  @ApiResponse({ status: 200, type: String, isArray: true })
  @ApiOperation({
    summary: 'Filter values - disability',
  })
  async getDisabilityValues(): Promise<string[]> {
    return Object.values(DIFFICULTY);
  }

  @Get('/thematic-area')
  @ApiResponse({ status: 200, type: String, isArray: true })
  @ApiOperation({
    summary: 'Filter values - thematic area',
  })
  async getThematicAreaValues(): Promise<CountCodeIdWithChildren[]> {
    return thematicAreasMapper(Object.values(THEMATIC));
  }
}
