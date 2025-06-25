import { Injectable, Inject } from '@nestjs/common';
import { CASE_STATUS } from '../../airtable-client/constant/case-status.constant';
import { CaseRepository } from '../repository/case.repository';
import { HowManyCaseReceivedRO } from '../response/how-many-case-received.ro';
import { ASSISTANCE_STATUS } from '../../airtable-client/constant/assistance-status.constant';
import { CaseSyncEntity } from '../../airtable-client/entity/case-sync.entity';
import { ALLEGATION_TYPE_TEXT } from '../../airtable-client/constant/allegation-type.constant';
import { GENDER_TEXT } from '../../airtable-client/constant/gender.constant';
import { TypeValuesRO } from '../response/type-value.ro';
import { ORGANISATION_TYPE_TEXT } from '../../airtable-client/constant/organisation-type.constant';
import { ASSISTANCE_RENDERED } from '../../airtable-client/constant/assistance-rendered.constant';
import { INVESTIGATION_OUTCOME } from '../../airtable-client/constant/investigation-outcome.constant';
import { WhatAreTheOutcomesRO } from '../response/what-are-the-outcomes.ro';
import { TypeAverageCountRO } from '../response/type-average-count.ro';
import { QuantityPerMonth } from '../interfaces/quantity-per-month.interface';
import { FilterCasesDto } from '../request/dto/filter.dto';
import { CountRO } from '../response/count.ro';
import { AverageTakenTimeToCompleteStepRO } from '../response/average-taken-time-to-complete-step.ro';
import { ResponsiveByStepRO } from '../response/responsive-by-step.ro';
import { AGE_TEXT } from '../../airtable-client/constant/age.constant';
import { CountryService } from '../../country/service/country.service';
import {
  getKeyByValue,
  calculateCustomNumberOfDays,
  chartShouldBeAnonymous,
  flatArray,
  getAverageValue,
  extractModuleSpecificFilterParameters,
} from '../../common/helpers';
import { TIME_UNIT } from '../../common/constant/time-unit.constant';
import { In } from 'typeorm';
import { DI_CONSTANTS } from '../../common/constant/di.constant';
import { ConfigService } from '@nestjs/config';
import { RESPONSIVENESS_STATUS } from '../../airtable-client/constant/responsiveness-status.constant';
import { CaseInvestigationRepository } from '../repository/case-investigation.repository';
import { URGENT } from '../../airtable-client/constant/urgent.constant';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class CaseService {
  constructor(
    private readonly caseInvestigationRepository: CaseInvestigationRepository,
    private readonly caseRepository: CaseRepository,
    private readonly countryService: CountryService,
    @Inject(DI_CONSTANTS.CONFIG)
    private readonly config: ConfigService,
  ) {}

  caseStatusConditions = [
    {
      condition: 'process_and_refer_status IN (:values)',
      values: [
        'Pending decision of allegation referral',
        'Pending decision of allegation referral for more than 48 hours',
        'Pending decision of allegation referral for more than 1 week',
      ],
    },
    {
      condition: 'referral_response IN (:values)',
      values: [
        'Pending organisation response',
        'Pending organisation response for more than 48 hours',
        'Pending organisation response for more than 1 week',
      ],
    },
    {
      condition: 'investigation_status IN (:values)',
      values: [
        'Pending decision to investigate',
        'Pending decision to investigate ongoing for more than 6 weeks',
        'Pending decision to investigate ongoing for more than 3 months',
      ],
    },
    {
      condition: 'investigation_result IN (:values)',
      values: [
        'Investigation open',
        'Investigation open for more than 3 months',
        'Investigation open for more than 2 years',
      ],
    },
    {
      condition: 'informing_author IN (:values)',
      values: [
        'Pending author notification',
        'Pending author notification for more than 48 hours',
      ],
    },
  ];

  getSignedMetabaseURL(filters: any) {
    const METABASE_SITE_URL = "https://meta.talktoloop.org";
    const METABASE_SECRET_KEY = this.config.get('metabase_secret_key')


    const filteredParams = extractModuleSpecificFilterParameters(filters, [
      'age_group',
      'assistance_referred',
      'case_open_date',
      'case_type',
      'country',
      'gender_group',
      'organization_type',
    ]);

    
    const payload = {
      resource: { dashboard: 3 },
      params: filteredParams,
      exp: Math.round(Date.now() / 1000) + 10 * 60, // 10 minute expiration
    };
    const token = jwt.sign(payload, METABASE_SECRET_KEY);

    const iframeUrl =
      METABASE_SITE_URL +
      '/embed/dashboard/' +
      token +
      '#bordered=false&titled=false';

    return iframeUrl;
  }

  async getCountOfCases(filters: FilterCasesDto): Promise<CountRO> {
    const [count] = await this.caseRepository.getCountOfCases(filters);
    return count;
  }

  async getUniqueGender(): Promise<string[]> {
    const availableGender = await this.caseRepository
      .getUniqueGender()
      .then((data) => data.map((item) => item.gender));

    return Object.values(GENDER_TEXT)
      .filter((value) => availableGender.includes(value))
      .map((value) => getKeyByValue(GENDER_TEXT, value, false));
  }

  async getUniqueCountries(): Promise<string[]> {
    const countries = await this.countryService.getCountries().then((data) =>
      data.reduce((obj, value) => {
        obj[value.name.toLowerCase()] = value.code;
        return obj;
      }, {}),
    );

    return this.caseRepository
      .getUniqueCountries()
      .then((data) =>
        data
          .map((item) => countries[item.country.toLowerCase()])
          .filter((item) => item),
      );
  }

  async averageTakenTime(
    filters: FilterCasesDto,
  ): Promise<TypeAverageCountRO[]> {
    const response = [] as TypeAverageCountRO[];
    let element = {} as TypeAverageCountRO;

    for (const type in ALLEGATION_TYPE_TEXT) {
      const avgTimes =
        await this.caseRepository.getAvgTakenTimeByAllegationType(filters);

      const { average, count } = getAverageValue(
        avgTimes?.filter(
          ({ allegationType }) => allegationType === ALLEGATION_TYPE_TEXT[type],
        ),
      );

      element = {
        ...element,
        ...{ type, average: parseFloat(average.toFixed(2)), count },
      };
      response.push(element);
    }

    return response;
  }

  async whatAreTheTypeOfCasesInTheAccountability(
    filters: FilterCasesDto,
  ): Promise<TypeValuesRO[]> {
    const data = await Promise.all(
      this.caseStatusConditions.map((item) =>
        this.caseRepository.countOfCasesByAccountabilityAndAllegationType(
          filters,
          item.condition,
          {
            values: item.values,
          },
        ),
      ),
    );

    const response = [] as TypeValuesRO[];
    for (const type in ALLEGATION_TYPE_TEXT) {
      const allegationText = ALLEGATION_TYPE_TEXT[type];
      let element = {} as TypeValuesRO;
      const values = [] as number[];

      for (const item of data) {
        values.push(
          item
            .filter(({ allegationType }) => {
              return allegationText === ALLEGATION_TYPE_TEXT.otherMisconduct
                ? ['', null, ALLEGATION_TYPE_TEXT.otherMisconduct].includes(
                    allegationType,
                  )
                : allegationType === allegationText;
            })
            ?.map((item) => item.count)
            .reduce((prev, curr) => prev + curr, 0) ?? 0,
        );
      }

      element = { ...element, ...{ type, values } };
      response.push(element);
    }

    return response;
  }

  async whatAreTheOutcomes(
    filters: FilterCasesDto,
  ): Promise<WhatAreTheOutcomesRO> {
    const response = {} as WhatAreTheOutcomesRO;

    const outcomeData = await this.caseRepository.countCaseOutcome(filters);

    for (const key in INVESTIGATION_OUTCOME) {
      const outComeText = INVESTIGATION_OUTCOME[key];

      if (outComeText === INVESTIGATION_OUTCOME.other) {
        response['referralToClearCheckMade'] =
          await this.caseRepository.countReferralToClearCheckMade(filters);
      }

      if (
        outComeText !==
        INVESTIGATION_OUTCOME.referralToMisconductDisclosureScheme
      ) {
        const values =
          outcomeData.find(
            ({ investigationOutcome }) => investigationOutcome === outComeText,
          )?.count ?? 0;

        response[key] = values;
      }
    }

    response.completedInvestigations =
      await this.caseInvestigationRepository.countWhen(
        'investigation_closed IS NOT NULL',
        filters,
      );

    return response;
  }

  async getInfoDidPeopleReceivedAssistance(
    filters: FilterCasesDto,
  ): Promise<TypeValuesRO[]> {
    const response = [] as TypeValuesRO[];
    const filteredAssistance = Object.keys(ASSISTANCE_RENDERED).filter(
      (type) =>
        type !==
        getKeyByValue(
          ASSISTANCE_RENDERED,
          ASSISTANCE_RENDERED.assistanceNA,
          false,
        ),
    );

    for (const type in ALLEGATION_TYPE_TEXT) {
      const allegationText = ALLEGATION_TYPE_TEXT[type];
      const assistanceByAllegation =
        await this.caseRepository.countInfoAboutReceivedAssistancesByAllegationType(
          filters,
          allegationText,
        );

      let element = {} as TypeValuesRO;
      const values = [] as number[];
      for (const assistanceEnum of filteredAssistance) {
        values.push(
          assistanceByAllegation.find(
            ({ hasTheSurvivorBeenRenderedAssistanceValue }) =>
              hasTheSurvivorBeenRenderedAssistanceValue ===
              ASSISTANCE_RENDERED[assistanceEnum],
          )?.count ?? 0,
        );
      }

      element = { ...element, ...{ type, values } };
      response.push(element);
    }

    return response;
  }

  async getSurvivorsPerAge(filters?: FilterCasesDto): Promise<TypeValuesRO[]> {
    const response = [] as TypeValuesRO[];

    for (const type in ALLEGATION_TYPE_TEXT) {
      const allegationText = ALLEGATION_TYPE_TEXT[type];
      const agesByAllegation =
        await this.caseRepository.countCaseAgesByAllegationType(
          filters,
          allegationText,
        );
      const filteredAgeValues: string[] = Object.values(AGE_TEXT).filter(
        (value) => value != AGE_TEXT.noAnswer,
      );

      let element = {} as TypeValuesRO;
      const values = [] as number[];

      for (const ageEnum of Object.values(AGE_TEXT)) {
        values.push(
          agesByAllegation
            .filter(({ age }) =>
              ageEnum !== AGE_TEXT.noAnswer
                ? age === ageEnum
                : !filteredAgeValues.includes(age),
            )
            .reduce((prev, next) => prev + next.count, 0),
        );
      }

      element = { ...element, ...{ type, values, isAnonymousData: false } };
      response.push(element);
    }

    return response;
  }

  checkIfChartShouldBeAnonymized(response: TypeValuesRO[]): TypeValuesRO[] {
    const anonymize = chartShouldBeAnonymous(response);
    const anonymousValues = this.config.get(
      'statistics.valuesForAnonymousChart',
    );

    if (!Array.isArray(anonymousValues)) {
      return response;
    }

    if (anonymize) {
      for (const index in response) {
        response[index].values = Array(response[index].values.length).fill(
          anonymousValues[index],
        );
        response[index].isAnonymousData = true;
      }
    }

    return response;
  }

  async getInformationHowManyCasesReceived(
    filters?: FilterCasesDto,
  ): Promise<HowManyCaseReceivedRO> {
    const total = await this.caseRepository.countWhen(undefined, filters);

    const closed = await this.caseRepository.countWhen(
      {
        caseStatus: CASE_STATUS.closed,
      },
      filters,
    );

    const open = await this.caseRepository.countWhen(
      {
        caseStatus: CASE_STATUS.open,
      },
      filters,
    );

    const urgent = await this.caseRepository.countWhen(
      {
        initialUrgency: getKeyByValue(URGENT, 1, false),
      },
      filters,
    );

    const assistanceProvided = await this.caseRepository.countWhen(
      {
        assistanceStatus: In(Object.values(ASSISTANCE_STATUS)),
      },
      filters,
    );

    return {
      total,
      open,
      closed,
      urgent,
      assistanceProvided,
    };
  }

  async getCasesGroupedByAllegationAndAuthorPerspective(
    filters: FilterCasesDto,
  ): Promise<
    (CaseSyncEntity & { count: number; authorPerspective: string })[]
  > {
    return this.caseRepository.getCasesGroupedByAllegationAndAuthorPerspective(
      filters,
    );
  }

  async getCasesGroupedByCaseAccountabilityAndOrganisationType(
    filters: FilterCasesDto,
  ): Promise<Array<(CaseSyncEntity & { count: number })[]>> {
    const operations = this.caseStatusConditions.map((item) =>
      this.caseRepository.getCountOfOrganizationsByColumnsAndValues(
        filters,
        item.condition,
        {
          values: item.values,
        },
      ),
    );

    operations.push(
      this.caseRepository.getCountOfOrganizationsByColumnsAndValues(
        filters,
        'informing_author IN (:values)',
        {
          values: ['Author informed n/a, or reachable', 'Author informed'],
        },
      ),
    );

    return Promise.all(operations);
  }

  async getSurvivorsPerGender(
    filters: FilterCasesDto,
  ): Promise<TypeValuesRO[]> {
    const response = [] as TypeValuesRO[];
    for (const type in ALLEGATION_TYPE_TEXT) {
      const allegationText = ALLEGATION_TYPE_TEXT[type];
      const gendersByAllegation =
        await this.caseRepository.countCaseGenderByAllegationType(
          filters,
          allegationText,
        );
      const filteredGenderValues: string[] = Object.values(GENDER_TEXT).filter(
        (value) => value != GENDER_TEXT.noAnswer,
      );

      let element = {} as TypeValuesRO;
      const values = [] as number[];

      for (const genderEnum of Object.values(GENDER_TEXT)) {
        values.push(
          gendersByAllegation
            .filter(({ gender }) =>
              genderEnum !== GENDER_TEXT.noAnswer
                ? gender === genderEnum
                : !filteredGenderValues.includes(gender),
            )
            .reduce((prev, next) => prev + next.count, 0),
        );
      }

      element = { ...element, ...{ type, values, isAnonymousData: false } };
      response.push(element);
    }

    return response;
  }

  async getDataForTypeOfOrganisationByAllogation(
    filters: FilterCasesDto,
  ): Promise<TypeValuesRO[]> {
    const response = [] as TypeValuesRO[];
    const organizationsTypes: string[] = Object.values(ORGANISATION_TYPE_TEXT);
    const specificOrganizationsTypes: string[] = organizationsTypes.filter(
      (value) => value !== ORGANISATION_TYPE_TEXT.other,
    );

    for (const type in ALLEGATION_TYPE_TEXT) {
      const allegationText = ALLEGATION_TYPE_TEXT[type];
      const typesByAllegation =
        await this.caseRepository.countOrganizationTypeByAllegationType(
          filters,
          allegationText,
        );

      let element = {} as TypeValuesRO;
      const values = [] as number[];
      let value: number;

      for (const organisationTypeEnum in ORGANISATION_TYPE_TEXT) {
        value =
          typesByAllegation
            .filter(({ organisationType }) => {
              return organisationTypeEnum === ORGANISATION_TYPE_TEXT.other
                ? !specificOrganizationsTypes.includes(organisationType)
                : ORGANISATION_TYPE_TEXT[organisationTypeEnum] ===
                    organisationType;
            })
            ?.map((item) => item.count)
            .reduce((prev, curr) => prev + curr, 0) ?? 0;

        if (organisationTypeEnum == ORGANISATION_TYPE_TEXT.other) {
          value -=
            typesByAllegation
              .filter(
                ({ organisationType }) =>
                  !organizationsTypes.includes(organisationType),
              )
              ?.map((item) => item.count)
              .reduce((prev, curr) => prev + curr, 0) ?? 0;
        }

        values.push(value);
      }

      element = { ...element, ...{ type, values } };
      response.push(element);
    }

    return response;
  }

  async getCasesWithAllegationTypeByPeriod(
    filters: FilterCasesDto,
  ): Promise<(QuantityPerMonth & { code: string })[]> {
    return this.caseRepository.getCasesWithAllegationTypeByPeriod(filters);
  }

  async getUrgentCasesByPeriod(
    filters: FilterCasesDto,
  ): Promise<QuantityPerMonth[]> {
    return this.caseRepository.getUrgentCasesByPeriod(filters);
  }

  async getAverageTakenTimeToCompleteStep(
    filters: FilterCasesDto,
  ): Promise<AverageTakenTimeToCompleteStepRO> {
    const closeCase = await this.caseRepository.getAvgTakenTime(filters);

    const result: AverageTakenTimeToCompleteStepRO = {};

    let average = 0;
    let count = 0;

    for (const [key, value] of Object.entries({
      processAndRefer: getAverageValue(
        flatArray(
          await Promise.all([
            this.caseRepository.getAverageTakenTimeToProcessAndReferByAsistanceReferralMadeDate(
              filters,
            ),
            this.caseRepository.getAverageTakenTimeToProcessAndReferByCaseProcessedDate(
              filters,
            ),
          ]),
        ),
      ),
      respondToReferral: getAverageValue(
        await this.caseRepository.getAverageTakenTimeToRespondToReferral(
          filters,
        ),
      ),
      assessWhetherToInvestigate: getAverageValue(
        flatArray(
          await Promise.all([
            this.caseRepository.getAverageTakenTimeToAssessWhetherToInvestigateByInvestigationOpenedDate(
              filters,
            ),
            this.caseRepository.getAverageTakenTimeToAssessWhetherToInvestigateByAssessmentMadeDate(
              filters,
            ),
          ]),
        ),
      ),
      completeInvestigation: getAverageValue(
        await this.caseRepository.getAverageTakenTimeToCompleteInvestigation(
          filters,
        ),
      ),
      informTheAuthorOfOutcome: getAverageValue(
        flatArray(
          await Promise.all([
            this.caseRepository.getAverageTakenTimeToInformTheAuthorOfOutcomeByAssessmentMade(
              filters,
            ),
            this.caseRepository.getAverageTakenTimeToInformTheAuthorOfOutcomeByCaseProcessed(
              filters,
            ),
            this.caseRepository.getAverageTakenTimeToInformTheAuthorOfOutcomeByInvestigationClosed(
              filters,
            ),
          ]),
        ),
      ),
      closeCase: getAverageValue(
        closeCase.map((item) => ({
          average: item.averageHours,
          count: item.count,
        })),
      ),
    })) {
      average = value?.average ?? 0;
      count = value?.count ?? 0;
      result[key] = {
        days: calculateCustomNumberOfDays(average, TIME_UNIT.DAY).averageTime,
        tooltip: {
          ...calculateCustomNumberOfDays(average),
          numberOfCases: count,
        },
      };
    }

    return result;
  }

  async getDataAboutResponsiveByStep(
    filters: FilterCasesDto,
  ): Promise<ResponsiveByStepRO> {
    return {
      steps: [
        {
          type: 'actionTakenOnTime',
          values: [
            await this.caseRepository.getCountOfOpenCasesByColumnsAndValues(
              filters,
              [
                {
                  name: 'process_and_refer_status',
                  values: [
                    RESPONSIVENESS_STATUS.pendingDecisionOfAllegationReferral,
                  ],
                },
              ],
            ),
            await this.caseRepository.getCountOfOpenCasesByColumnsAndValues(
              filters,
              [
                {
                  name: 'referral_response',
                  values: [RESPONSIVENESS_STATUS.pendingOrganisationResponse],
                },
              ],
            ),
            await this.caseRepository.getCountOfOpenCasesByColumnsAndValues(
              filters,
              [
                {
                  name: 'investigation_status',
                  values: [RESPONSIVENESS_STATUS.pendingDecisionToInvestigate],
                },
              ],
            ),
            await this.caseRepository.getCountOfOpenCasesByColumnsAndValues(
              filters,
              [
                {
                  name: 'investigation_result',
                  values: [RESPONSIVENESS_STATUS.investigationOpen],
                },
              ],
            ),
            await this.caseRepository.getCountOfOpenCasesByColumnsAndValues(
              filters,
              [
                {
                  name: 'informing_author',
                  values: [RESPONSIVENESS_STATUS.pendingAuthorNotification],
                },
              ],
            ),
          ],
        },
        {
          type: 'overdue',
          values: [
            await this.caseRepository.getCountOfOpenCasesByColumnsAndValues(
              filters,
              [
                {
                  name: 'process_and_refer_status',
                  values: [
                    RESPONSIVENESS_STATUS.pendingDecisionOfAllegationReferralForMoreThan48Hours,
                  ],
                },
              ],
            ),
            await this.caseRepository.getCountOfOpenCasesByColumnsAndValues(
              filters,
              [
                {
                  name: 'referral_response',
                  values: [
                    RESPONSIVENESS_STATUS.pendingOrganisationResponseForMoreThan48Hours,
                  ],
                },
              ],
            ),
            await this.caseRepository.getCountOfOpenCasesByColumnsAndValues(
              filters,
              [
                {
                  name: 'investigation_status',
                  values: [
                    RESPONSIVENESS_STATUS.pendingDecisionToInvestigateOngoingForMoreThan6Weeks,
                  ],
                },
              ],
            ),
            await this.caseRepository.getCountOfOpenCasesByColumnsAndValues(
              filters,
              [
                {
                  name: 'investigation_result',
                  values: [
                    RESPONSIVENESS_STATUS.investigationOpenFoMoreThan3Months,
                  ],
                },
              ],
            ),
            await this.caseRepository.getCountOfOpenCasesByColumnsAndValues(
              filters,
              [
                {
                  name: 'informing_author',
                  values: [
                    RESPONSIVENESS_STATUS.pendingAuthorNotificationForMoreThan48Hours,
                  ],
                },
              ],
            ),
          ],
        },
        {
          type: 'unresponsive',
          values: [
            await this.caseRepository.getCountOfOpenCasesByColumnsAndValues(
              filters,
              [
                {
                  name: 'process_and_refer_status',
                  values: [
                    RESPONSIVENESS_STATUS.pendingDecisionOfAllegationReferralForMoreThan1Week,
                  ],
                },
              ],
            ),
            await this.caseRepository.getCountOfOpenCasesByColumnsAndValues(
              filters,
              [
                {
                  name: 'referral_response',
                  values: [
                    RESPONSIVENESS_STATUS.pendingOrganisationResponseForMoreThan1Week,
                  ],
                },
              ],
            ),
            await this.caseRepository.getCountOfOpenCasesByColumnsAndValues(
              filters,
              [
                {
                  name: 'investigation_status',
                  values: [
                    RESPONSIVENESS_STATUS.pendingDecisionToInvestigateOngoingForMoreThan3Months,
                  ],
                },
              ],
            ),
            await this.caseRepository.getCountOfOpenCasesByColumnsAndValues(
              filters,
              [
                {
                  name: 'investigation_result',
                  values: [
                    RESPONSIVENESS_STATUS.investigationOpenForMoreThan2Years,
                  ],
                },
              ],
            ),
            0,
          ],
        },
      ],
      closedCases: await this.caseRepository.getCountOfClosedCases(filters),
    };
  }
}
