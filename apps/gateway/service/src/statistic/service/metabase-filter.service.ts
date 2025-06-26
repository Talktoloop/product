import { Injectable } from '@nestjs/common';
import { OpenStoryService } from './open-story.service';
import { OrganisationService } from '../../organisation/organisation.service';
import { CountryService } from '../../country/service/country.service';
import { DifficultyService } from '../../lexicon/service/difficulty.service';
import { FilterDto } from '../../common/dto/filter.dto';
import { ThematicService } from '../../lexicon/service/thematic.service';
import { CHANNEL_NUMBER_TO_CONSTANT } from '../../common/constant/channel.constant';
import {
  GENDER_NUMBER_TO_CONSTANT,
  ORG_RESP_NUMBER_TO_CONSTANT,
  // REPLIED_TO_CONSTANTS,
  // REPLIED_TO_NUMBER_TO_CONSTANT,
} from '../../common/types';
import { FilterCasesDto } from '../request/dto/filter.dto';
import { REFERRED_FOR_ASSISTANCE } from '../../airtable-client/constant/referred-for-assistance.constant';
import { INVESTIGATION_OUTCOME } from '../../airtable-client/constant/investigation-outcome.constant';
import { ALLEGATION_TYPE_TEXT } from '../../airtable-client/constant/allegation-type.constant';
import { ORGANISATION_TYPE_TEXT } from '../../airtable-client/constant/organisation-type.constant';
import { AGE_TEXT } from '../../airtable-client/constant/age.constant';
import { GENDER_TEXT } from '../../airtable-client/constant/gender.constant';
import { separateRepliedToValues } from '../../common/helpers';

@Injectable()
export class MetabaseFilterService {
  constructor(
    private readonly openStoryService: OpenStoryService,
    private readonly organisationService: OrganisationService,
    private readonly countryService: CountryService,
    private readonly difficultyService: DifficultyService,
    private readonly thematicAreaService: ThematicService,
  ) {}

  async mapFiltersToMetabase(
    filters: any,
  ): Promise<Record<string, string | string[] | number>> {
    const mappedFilters = { ...filters } as any;

    mappedFilters.type = filters.type
      ? (
          await this.openStoryService.getFilteredCategories(filters, {
            order: 'ASC',
          })
        )
          .map((category) => category.code)
          .join(',')
      : null;

    mappedFilters.organisation = await this.mapEntities(
      filters.organisation,
      this.organisationService.findByIdOrFail.bind(this.organisationService),
      'name',
    );

    mappedFilters.country = await this.mapEntities(
      filters.country,
      this.countryService.findByCodeOrFail.bind(this.countryService),
      'name',
    );

    mappedFilters.gender = this.mapGender(filters.gender);

    mappedFilters.difficulty = await this.mapEntities(
      filters.difficulty,
      this.difficultyService.findByIdOrFail.bind(this.difficultyService),
      'code',
    );

    //extract specified organisations and replied to values
    const result = separateRepliedToValues(filters.organisationResponsiveness);

    const specifiedOrganisations = result.specifiedOrganisations
    const repliedToOptions = result.repliedToOptions

    mappedFilters.replies_by_specific_organisation = await this.mapEntities(
      specifiedOrganisations.toString(),
      this.organisationService.findByIdOrFail.bind(this.organisationService),
      'name',
    );

    mappedFilters.repliedTo = this.mapRepliedTo(repliedToOptions.toString());

    mappedFilters.thematic = await this.mapThematicAreas(filters.thematic);

    mappedFilters.channel = this.mapChannels(filters.channelFilter);

    return this.mapFiltersToMetabaseParams(mappedFilters);
  }

  private async mapEntities(
    entityIds: string | number | undefined,
    fetchFn: (id: number | string) => Promise<any>,
    key: string,
  ): Promise<string> {
    if (!entityIds) return '';
    const ids = entityIds.toString().split(',');
    const results = await Promise.all(
      ids.map(async (id) => {
        try {
          return (await fetchFn(id))[key];
        } catch {
          return null;
        }
      }),
    );
    return results.filter(Boolean).join(',');
  }

  private mapGender(gender: string | number | undefined): string | null {
    if (!gender) return null;

    return gender
      .toString()
      .split(',')
      .map((id) => GENDER_NUMBER_TO_CONSTANT[Number(id)] || '')
      .filter(Boolean)
      .join(',');
  }

  private mapRepliedTo(repliedTo: string | number | undefined): string | null {
    if (!repliedTo) return null;

    return repliedTo
      .toString()
      .split(',')
      .map((id) => ORG_RESP_NUMBER_TO_CONSTANT[Number(id)] || '')
      .filter(Boolean)
      .join(',');
  }

  private async mapThematicAreas(
    thematicIds: string | number | undefined,
  ): Promise<string | null> {
    if (!thematicIds) return null;
    const ids = thematicIds.toString().split(',').map(Number);
    const thematicAreas = await this.thematicAreaService.findByIds(ids);
    return (
      thematicAreas
        .map((area) => area.code)
        .filter(Boolean)
        .join(',') || null
    );
  }

  private mapChannels(channelIds: string | number | undefined): string | null {
    if (!channelIds) return null;
    const channelArray = channelIds.toString().split(',');
    const channelConstants = channelArray
      .map((channel) => CHANNEL_NUMBER_TO_CONSTANT[Number(channel)])
      .filter(Boolean);
    return channelConstants.length ? channelConstants.join(',') : null;
  }

  mapFiltersToMetabaseParams(
    filters: FilterCasesDto & FilterDto,
  ): Record<string, string | string[] | number> {
    const formatDate = (date: string) => date.split('T')[0]; // Extract only 'YYYY-MM-DD'
    const allegationTypes = [
      ...Object.keys(ALLEGATION_TYPE_TEXT),
      'urgentCases',
    ];

    const mapEnumValues = (
      values: string | number | undefined,
      enumMap: Record<string, string>,
    ) =>
      values
        ? values
            .toString()
            .split(',')
            .map((key) => enumMap[key as keyof typeof enumMap] || key)
        : [];

    return {
      // Previous mappings
      age_group: [
        ...mapEnumValues(filters.age, AGE_TEXT),
        ...mapEnumValues(filters.casesAge, AGE_TEXT),
      ],
      area: filters.regionId || [],
      channel: filters.channel ? filters.channel.toString().split(',') : [],
      country: filters.country ? filters.country.toString().split(',') : [],
      disability: filters.difficulty
        ? filters.difficulty.toString().split(',')
        : [],
      feedback_type: filters.type ? filters.type.toString().split(',') : [],
      gender_group: [
        ...mapEnumValues(filters.gender, GENDER_TEXT),
        ...mapEnumValues(filters.casesGender, GENDER_TEXT),
      ],
      minority_group: filters.minority
        ? filters.minority.toString().split(',')
        : [],
      organization: filters.organisation
        ? filters.organisation.toString().split(',')
        : [],
      replies_by_specific_organisation: filters.replies_by_specific_organisation
        ? filters.replies_by_specific_organisation.toString().split(',')
        : [],
      original_feedback_language: filters.language
        ? filters.language.toString().split(',')
        : [],
      replied_to: [...mapEnumValues(filters.repliedTo, ORG_RESP_NUMBER_TO_CONSTANT)],
      submission_date:
        filters.from && filters.to
          ? [`${formatDate(filters.from)}~${formatDate(filters.to)}`]
          : filters.from
            ? [formatDate(filters.from)]
            : [],
      thematic_area: filters.thematic
        ? filters.thematic.toString().split(',')
        : [],

      // New Metabase mappings
      organization_type: mapEnumValues(
        filters.organisationType,
        ORGANISATION_TYPE_TEXT,
      ),
      assistance_referred: mapEnumValues(
        filters.referredForAssistance,
        REFERRED_FOR_ASSISTANCE,
      ),
      investigation_outcome: mapEnumValues(
        filters.investigationOutcome,
        INVESTIGATION_OUTCOME,
      ),
      case_open_date:
        filters.from && filters.to
          ? [`${formatDate(filters.from)}~${formatDate(filters.to)}`]
          : filters.from
            ? [formatDate(filters.from)]
            : [],
      case_type: filters.caseType
        ? filters.caseType
            .toString()
            .split(',')
            .map((key) =>
              allegationTypes.includes(key)
                ? ALLEGATION_TYPE_TEXT[
                    key as keyof typeof ALLEGATION_TYPE_TEXT
                  ] || key
                : key,
            )
        : [],
    };
  }
}
