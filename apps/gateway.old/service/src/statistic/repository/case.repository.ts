import { Injectable } from '@nestjs/common';
import { CaseSyncEntity } from '../../airtable-client/entity/case-sync.entity';
import { FindOptions, ObjectLiteral, Repository, Brackets } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { CaseGenderCount } from '../interfaces/case-gender-count.interface';
import { CASE_STATUS } from '../../airtable-client/constant/case-status.constant';
import { Not, IsNull } from 'typeorm';
import { QuantityPerMonth } from '../interfaces/quantity-per-month.interface';
import { URGENT } from '../../airtable-client/constant/urgent.constant';
import { FilterCasesDto } from '../request/dto/filter.dto';
import { addFilterCasesCondition, getKeyByValue } from '../../common/helpers';
import { _omit } from '@ourloop/shared';
import { CountRO } from '../response/count.ro';
import { startOfMonth, endOfMonth, formatISO } from 'date-fns';

@Injectable()
@EntityRepository(CaseSyncEntity)
export class CaseRepository extends Repository<CaseSyncEntity> {
  getCountOfCases(filters: FilterCasesDto): Promise<CountRO[]> {
    let query = this.createQueryBuilder('case_sync').select(
      'COUNT(DISTINCT case_uuid)',
      'count',
    );

    if (filters) {
      query = addFilterCasesCondition(filters, query);
    }

    return query.execute();
  }

  getAvgTakenTime(
    filters?: FilterCasesDto,
  ): Promise<{ averageDays: number; averageHours: number; count: number }[]> {
    let query = this.createQueryBuilder('case_sync')
      .select(
        'AVG(timestampdiff(DAY, case_created, case_closed))',
        'averageDays',
      )
      .addSelect(
        'AVG(timestampdiff(HOUR, case_created, case_closed))',
        'averageHours',
      )
      .addSelect('COUNT(DISTINCT case_uuid)', 'count')
      .where('case_status = :status', {
        status: CASE_STATUS.closed,
      })
      .andWhere('deleted_at is null')
      .andWhere('case_created is not null')
      .andWhere('case_closed is not null')
      .andWhere('case_created < case_closed');

    if (filters) {
      query = addFilterCasesCondition(filters, query);
    }

    return query
      .groupBy('case_uuid')
      .execute()
      .catch((error) => console.log(error));
  }

  getAvgTakenTimeByAllegationType(
    filters: FilterCasesDto,
  ): Promise<{ count: number; average: number; allegationType: string }[]> {
    let query = this.createQueryBuilder('case_sync')
      .select('AVG(timestampdiff(HOUR, case_created, case_closed))', 'average')
      .addSelect('COUNT(DISTINCT case_uuid)', 'count')
      .where({ allegationType: Not(IsNull()) })
      .andWhere('case_status = :status', {
        status: CASE_STATUS.closed,
      })
      .andWhere('deleted_at is null')
      .andWhere('case_created < case_closed')
      .addSelect('allegation_type', 'allegationType')
      .groupBy('allegationType');
    0;

    if (filters) {
      query = addFilterCasesCondition(filters, query);
    }

    return query.groupBy('case_uuid').execute();
  }

  countOfCasesByAccountabilityAndAllegationType(
    filters: FilterCasesDto,
    condition: string,
    parameters?: ObjectLiteral,
  ): Promise<{ count: number; allegationType: string }[]> {
    let query = this.createQueryBuilder('case_sync')
      .select('COUNT(DISTINCT case_uuid)', 'count')
      .addSelect('allegation_type', 'allegationType')
      .where('case_status = "Open"')
      .andWhere(condition, parameters)
      .andWhere('deleted_at is null')
      .groupBy('allegation_type');

    if (filters) {
      query = addFilterCasesCondition(filters, query);
    }

    return query.execute();
  }

  countReferralToClearCheckMade(filters: FilterCasesDto): Promise<number> {
    let query = this.createQueryBuilder('case_sync')
      .where('referral_to_clear_check_made = 1')
      .andWhere('investigation_closed IS NOT NULL')
      .leftJoin(
        'case_sync_investigation',
        'ci',
        'ci.case_id = case_sync.case_uuid',
      );

    if (filters) {
      query = addFilterCasesCondition(filters, query, [
        'case_sync_allegation_referral',
      ]);
    }

    return query.groupBy('case_uuid').getCount();
  }

  countCaseOutcome(
    filters: FilterCasesDto,
  ): Promise<{ count: number; investigationOutcome: string }[]> {
    let query = this.createQueryBuilder('case_sync')
      .select('COUNT(DISTINCT case_uuid)', 'count')
      .addSelect('investigation_outcome', 'investigationOutcome')
      .where('investigation_closed IS NOT NULL')
      .andWhere('deleted_at is null')
      .leftJoin(
        'case_sync_investigation',
        'ci',
        'ci.case_id = case_sync.case_uuid',
      )
      .groupBy('investigationOutcome');

    if (filters) {
      query = addFilterCasesCondition(filters, query, [
        'case_sync_allegation_referral',
      ]);
    }

    return query.execute();
  }
  countInfoAboutReceivedAssistancesByAllegationType(
    filters: FilterCasesDto,
    allegationType: string,
  ): Promise<
    { count: number; hasTheSurvivorBeenRenderedAssistanceValue: string }[]
  > {
    let query = this.createQueryBuilder('case_sync')
      .select('COUNT(DISTINCT case_uuid)', 'count')
      .addSelect(
        'has_the_survivor_been_rendered_assistance_value',
        'hasTheSurvivorBeenRenderedAssistanceValue',
      )
      .where({ allegationType })
      .andWhere('deleted_at is null')
      .groupBy('hasTheSurvivorBeenRenderedAssistanceValue');

    if (filters) {
      query = addFilterCasesCondition(filters, query);
    }

    return query.execute();
  }

  countOrganizationTypeByAllegationType(
    filters: FilterCasesDto,
    allegationType: string,
  ): Promise<{ count: number; organisationType: string }[]> {
    let query = this.createQueryBuilder('case_sync')
      .leftJoin(
        'case_sync_allegation_referral',
        'car',
        'car.case_id = case_sync.case_uuid',
      )
      .leftJoin(
        'case_sync_allegation_referral_organisation',
        'caro',
        'caro.allegation_referral_id = car.id',
      )
      .select('COUNT(DISTINCT case_uuid)', 'count')
      .addSelect('caro.type', 'organisationType')
      .where({ allegationType })
      .andWhere(
        new Brackets((qb) => {
          qb.where('(caro.type is not null and caro.type != "")').orWhere(
            '(caro.name is not null and caro.name != "")',
          );
        }),
      )
      .andWhere('deleted_at is null')
      .groupBy('organisationType');

    if (filters) {
      query = addFilterCasesCondition(filters, query, [
        'case_sync_investigation',
      ]);
    }

    return query.execute().catch((err) => console.log(err));
  }
  countCaseAgesByAllegationType(
    filters: FilterCasesDto,
    allegationType: string,
  ): Promise<{ count: number; age: string }[]> {
    let query = this.createQueryBuilder('case_sync')
      .select('COUNT(DISTINCT case_uuid)', 'count')
      .addSelect('survivor_age', 'age')
      .where({ allegationType })
      .andWhere('deleted_at is null')
      .groupBy('age');

    if (filters) {
      query = addFilterCasesCondition(filters, query);
    }

    return query.execute();
  }
  countWhen(
    where?:
      | string
      | ObjectLiteral
      | FindOptions<CaseSyncEntity>
      | FindOptions<CaseSyncEntity>[],
    filters?: FilterCasesDto,
  ): Promise<number | any> {
    let query = this.createQueryBuilder('case_sync').leftJoin(
      'case_sync_investigation',
      'ci',
      'ci.case_id = case_sync.case_uuid',
    );
    if (where) {
      query.where(where);
    }

    if (filters) {
      query = addFilterCasesCondition(filters, query, [
        'case_sync_allegation_referral',
      ]);
    }
    return query
      .groupBy('case_uuid')
      .getCount()
      .catch((err) => console.log(err));
  }

  async getCasesGroupedByAllegationAndAuthorPerspective(
    filters: FilterCasesDto,
  ): Promise<
    (CaseSyncEntity & { count: number; authorPerspective: string })[]
  > {
    let query = this.createQueryBuilder('case_sync')
      .select('MAX(DISTINCT author_perspective)', 'authorPerspective')
      .leftJoin(
        'case_sync_author_perspective',
        'ap',
        'ap.case_id = case_sync.case_uuid',
      )
      .addSelect('MIN(DISTINCT allegation_type)', 'allegationType')
      .addSelect('COUNT(DISTINCT case_uuid)', 'count')
      .where("allegation_type != '' AND allegation_type IS NOT NULL")
      .andWhere('deleted_at is null')
      .groupBy('author_perspective, allegation_type')
      .orderBy('author_perspective');

    if (filters) {
      query = addFilterCasesCondition(filters, query);
    }

    return query.execute();
  }

  countCaseGenderByAllegationType(
    filters: FilterCasesDto,
    allegationType: string,
  ): Promise<CaseGenderCount[]> {
    let query = this.createQueryBuilder('case_sync')
      .select('COUNT(DISTINCT case_uuid)', 'count')
      .addSelect('survivor_gender', 'gender')
      .where({ allegationType })
      .andWhere('deleted_at is null')
      .groupBy('gender');

    if (filters) {
      query = addFilterCasesCondition(filters, query);
    }

    return query.execute();
  }

  async getCasesWithAllegationTypeByPeriod(
    filters: FilterCasesDto,
  ): Promise<(QuantityPerMonth & { code: string })[]> {
    let query = this.createQueryBuilder('case_sync')
      .select('MAX(DISTINCT case_sync.allegation_type)', 'code')
      .addSelect('DATE_FORMAT(case_sync.case_created, "%Y-%m")', 'month')
      .addSelect('COUNT(DISTINCT case_sync.case_uuid)', 'count')
      .where('case_sync.allegation_type IS NOT NULL')
      .andWhere('case_sync.case_created between :start and :end', {
        start: formatISO(startOfMonth(new Date(filters.from))),
        end: formatISO(endOfMonth(new Date(filters.to))),
      })
      .andWhere('deleted_at is null')
      .orderBy('month, case_sync.allegation_type')
      .groupBy('month, case_sync.allegation_type');

    if (filters) {
      query = addFilterCasesCondition(
        _omit(filters as Record<string, any>, ['from', 'to']),
        query,
      );
    }

    return query.execute();
  }

  async getUrgentCasesByPeriod(
    filters: FilterCasesDto,
  ): Promise<QuantityPerMonth[]> {
    let query = this.createQueryBuilder('case_sync')
      .select('DATE_FORMAT(case_sync.case_created, "%Y-%m")', 'month')
      .addSelect('COUNT(DISTINCT case_sync.case_uuid)', 'count')
      .where('case_sync.urgency = :urgency', {
        urgency: getKeyByValue(URGENT, 1),
      })
      .andWhere('case_sync.case_created between :start and :end', {
        start: formatISO(startOfMonth(new Date(filters.from))),
        end: formatISO(endOfMonth(new Date(filters.to))),
      })
      .andWhere('deleted_at is null')
      .orderBy('month')
      .groupBy('month');

    if (filters) {
      query = addFilterCasesCondition(
        _omit(filters as Record<string, any>, ['from', 'to']),
        query,
      );
    }

    return query.execute();
  }

  async getAverageTakenTimeToProcessAndReferByCaseProcessedDate(
    filters: FilterCasesDto,
  ): Promise<{ average: number; count: number }[]> {
    let query = this.createQueryBuilder('case_sync')
      .select(
        'AVG(timestampdiff(HOUR, case_created, case_processed))',
        'average',
      )
      .addSelect('COUNT(DISTINCT case_uuid)', 'count')
      .where('case_processed IS NOT NULL')
      .andWhere('case_created IS NOT NULL')
      .andWhere('case_processed >= case_created')
      .andWhere(
        "process_and_refer_status = 'Not enough information to assess and refer'",
      )
      .andWhere('deleted_at is null');

    if (filters) {
      query = addFilterCasesCondition(filters, query);
    }

    return query
      .groupBy('case_uuid')
      .execute()
      .catch((err) => console.log(err));
  }

  async getAverageTakenTimeToProcessAndReferByAsistanceReferralMadeDate(
    filters: FilterCasesDto,
  ): Promise<{ average: number; count: number }[]> {
    let query = this.createQueryBuilder('case_sync')
      .select(
        'AVG(timestampdiff(HOUR, case_created, assistance_referral_made))',
        'average',
      )
      .addSelect('COUNT(DISTINCT case_uuid)', 'count')
      .where('assistance_referral_made IS NOT NULL')
      .andWhere('case_created IS NOT NULL')
      .andWhere('assistance_referral_made >= case_created')
      .andWhere(
        "process_and_refer_status != 'Not enough information to assess and refer'",
      )
      .andWhere('deleted_at is null');

    if (filters) {
      query = addFilterCasesCondition(filters, query);
    }

    return query.groupBy('case_uuid').execute();
  }

  async getAverageTakenTimeToRespondToReferral(
    filters: FilterCasesDto,
  ): Promise<{ average: number; count: number }[]> {
    let query = this.createQueryBuilder('case_sync')
      .leftJoin(
        'case_sync_allegation_referral',
        'car',
        'car.case_id = case_sync.case_uuid',
      )
      .leftJoin(
        'case_sync_allegation_referral_organisation',
        'caro',
        'caro.allegation_referral_id = car.id',
      )
      .select(
        'AVG(timestampdiff(HOUR, assistance_referral_made, response_to_allegation_referral_date))',
        'average',
      )
      .addSelect('COUNT(DISTINCT case_uuid)', 'count')
      .where('assistance_referral_made IS NOT NULL')
      .andWhere('response_to_allegation_referral_date IS NOT NULL')
      .andWhere(
        'response_to_allegation_referral_date >= assistance_referral_made',
      )
      .andWhere('deleted_at is null');

    if (filters) {
      query = addFilterCasesCondition(filters, query, [
        'case_sync_investigation',
      ]);
    }

    return query.groupBy('case_uuid').execute();
  }

  async getAverageTakenTimeToAssessWhetherToInvestigateByInvestigationOpenedDate(
    filters: FilterCasesDto,
  ): Promise<{ average: number; count: number }[]> {
    let query = this.createQueryBuilder('case_sync')
      .leftJoin(
        'case_sync_investigation',
        'ci',
        'ci.case_id = case_sync.case_uuid',
      )
      .leftJoin(
        'case_sync_allegation_referral',
        'car',
        'car.case_id = case_sync.case_uuid',
      )
      .leftJoin(
        'case_sync_allegation_referral_organisation',
        'caro',
        'caro.allegation_referral_id = car.id',
      )
      .select(
        'AVG(timestampdiff(HOUR, response_to_allegation_referral_date, investigation_opened))',
        'average',
      )
      .addSelect('COUNT(DISTINCT case_uuid)', 'count')
      .where('response_to_allegation_referral_date IS NOT NULL')
      .andWhere('investigation_opened IS NOT NULL')
      .andWhere('investigation_opened >= response_to_allegation_referral_date')
      .andWhere(
        "investigation_status != 'Not enough information to investigate'",
      )
      .andWhere('deleted_at is null');

    if (filters) {
      query = addFilterCasesCondition(filters, query, []);
    }

    return query.groupBy('case_uuid').execute();
  }

  async getAverageTakenTimeToAssessWhetherToInvestigateByAssessmentMadeDate(
    filters: FilterCasesDto,
  ): Promise<{ average: number; count: number }[]> {
    let query = this.createQueryBuilder('case_sync')
      .leftJoin(
        'case_sync_allegation_referral',
        'car',
        'car.case_id = case_sync.case_uuid',
      )
      .leftJoin(
        'case_sync_allegation_referral_organisation',
        'caro',
        'caro.allegation_referral_id = car.id',
      )
      .select(
        'AVG(timestampdiff(HOUR, response_to_allegation_referral_date, assessment_made))',
        'average',
      )
      .addSelect('COUNT(DISTINCT case_uuid)', 'count')
      .where('response_to_allegation_referral_date IS NOT NULL')
      .andWhere('assessment_made IS NOT NULL')
      .andWhere('assessment_made >= response_to_allegation_referral_date')
      .andWhere(
        "investigation_status = 'Not enough information to investigate'",
      )
      .andWhere('deleted_at is null');

    if (filters) {
      query = addFilterCasesCondition(filters, query, [
        'case_sync_investigation',
      ]);
    }

    return query.groupBy('case_uuid').execute();
  }

  async getAverageTakenTimeToInformTheAuthorOfOutcomeByCaseProcessed(
    filters: FilterCasesDto,
  ): Promise<{ average: number; count: number }[]> {
    let query = this.createQueryBuilder('case_sync')
      .select(
        'AVG(DISTINCT timestampdiff(HOUR, case_processed, author_informed_of_case_outcomes_last_update))',
        'average',
      )
      .addSelect('COUNT(DISTINCT case_uuid)', 'count')
      .where('case_processed IS NOT NULL')
      .andWhere('author_informed_of_case_outcomes_last_update IS NOT NULL')
      .andWhere(
        'author_informed_of_case_outcomes_last_update >= case_processed',
      )
      .andWhere(
        'process_and_refer_status = "Not enough information to assess and refer"',
      )
      .andWhere('deleted_at is null');

    if (filters) {
      query = addFilterCasesCondition(filters, query);
    }

    return query.groupBy('case_uuid').execute();
  }

  async getAverageTakenTimeToInformTheAuthorOfOutcomeByAssessmentMade(
    filters: FilterCasesDto,
  ): Promise<{ average: number; count: number }[]> {
    let query = this.createQueryBuilder('case_sync')
      .select(
        'AVG(DISTINCT timestampdiff(HOUR, assessment_made, author_informed_of_case_outcomes_last_update))',
        'average',
      )
      .addSelect('COUNT(DISTINCT case_uuid)', 'count')
      .where('assessment_made IS NOT NULL')
      .andWhere('author_informed_of_case_outcomes_last_update IS NOT NULL')
      .andWhere(
        'author_informed_of_case_outcomes_last_update >= assessment_made',
      )
      .andWhere(
        'investigation_status = "Not enough information to investigate"',
      )
      .andWhere('deleted_at is null');

    if (filters) {
      query = addFilterCasesCondition(filters, query);
    }

    return query.groupBy('case_uuid').execute();
  }

  async getAverageTakenTimeToInformTheAuthorOfOutcomeByInvestigationClosed(
    filters: FilterCasesDto,
  ): Promise<{ average: number; count: number }[]> {
    let query = this.createQueryBuilder('case_sync')
      .leftJoin(
        'case_sync_investigation',
        'ci',
        'ci.case_id = case_sync.case_uuid',
      )
      .select(
        'AVG(DISTINCT timestampdiff(HOUR, investigation_closed, author_informed_of_case_outcomes_last_update))',
        'average',
      )
      .addSelect('COUNT(DISTINCT case_uuid)', 'count')
      .where('investigation_closed IS NOT NULL')
      .andWhere('author_informed_of_case_outcomes_last_update IS NOT NULL')
      .andWhere(
        'author_informed_of_case_outcomes_last_update >= investigation_closed',
      )
      .andWhere(
        'process_and_refer_status != "Not enough information to assess and refer"',
      )
      .andWhere(
        'investigation_status != "Not enough information to investigate"',
      )
      .andWhere('deleted_at is null');

    if (filters) {
      query = addFilterCasesCondition(filters, query, [
        'case_sync_allegation_referral',
      ]);
    }

    return query.groupBy('case_uuid').execute();
  }

  async getAverageTakenTimeToCompleteInvestigation(
    filters: FilterCasesDto,
  ): Promise<{ average: number; count: number }[]> {
    let query = this.createQueryBuilder('case_sync')
      .leftJoin(
        'case_sync_investigation',
        'ci',
        'ci.case_id = case_sync.case_uuid',
      )
      .select(
        'AVG(timestampdiff(HOUR, investigation_opened, investigation_closed))',
        'average',
      )
      .addSelect('COUNT(DISTINCT case_uuid)', 'count')
      .where('investigation_opened IS NOT NULL')
      .andWhere('investigation_closed IS NOT NULL')
      .andWhere('investigation_closed >= investigation_opened')
      .andWhere('deleted_at is null');

    if (filters) {
      query = addFilterCasesCondition(filters, query, [
        'case_sync_allegation_referral',
      ]);
    }

    return query.groupBy('case_uuid').execute();
  }

  getCountOfOrganizationsByColumnsAndValues(
    filters: FilterCasesDto,
    condition: string,
    parameters?: ObjectLiteral,
  ): Promise<any> {
    let query = this.createQueryBuilder('case_sync')
      .select('COUNT(DISTINCT case_uuid)', 'count')
      .addSelect('caro.type', 'organisationType')
      .leftJoin(
        'case_sync_allegation_referral',
        'car',
        'car.case_id = case_sync.case_uuid',
      )
      .leftJoin(
        'case_sync_allegation_referral_organisation',
        'caro',
        'caro.allegation_referral_id = car.id',
      )
      .where('deleted_at IS NULL')
      .andWhere(condition, parameters)
      .andWhere(
        new Brackets((qb) => {
          qb.where('(caro.type is not null and caro.type != "")').orWhere(
            '(caro.name is not null and caro.name != "")',
          );
        }),
      );

    if (filters) {
      query = addFilterCasesCondition(filters, query, [
        'case_sync_investigation',
      ]);
    }

    return query.groupBy('organisationType').execute();
  }

  getCountOfOpenCasesByColumnsAndValues(
    filters: FilterCasesDto,
    columns?: { name: string; values: string[] }[],
  ): Promise<number> {
    let query = this.createQueryBuilder('case_sync')
      .where('case_status = :status', {
        status: CASE_STATUS.open,
      })
      .andWhere('deleted_at IS NULL');

    for (const column of columns) {
      query.andWhere(
        new Brackets((qb) => {
          qb.where(`${column.name} IN(:${column.name})`, {
            [column.name]: column.values,
          });

          if (column.values.includes(null)) {
            qb.orWhere(`${column.name} is null`);
          }
        }),
      );
    }

    if (filters) {
      query = addFilterCasesCondition(filters, query);
    }

    return query.groupBy('case_uuid').getCount();
  }

  getCountOfClosedCases(filters: FilterCasesDto): Promise<number> {
    let query = this.createQueryBuilder('case_sync')
      .where('case_status = :status', {
        status: CASE_STATUS.closed,
      })
      .andWhere('deleted_at IS NULL');

    if (filters) {
      query = addFilterCasesCondition(filters, query);
    }

    return query.groupBy('case_uuid').getCount();
  }

  async getUniqueCountries(): Promise<{ country: string }[]> {
    return this.createQueryBuilder()
      .select('incident_country', 'country')
      .where('incident_country IS NOT NULL')
      .andWhere('incident_country != ""')
      .groupBy('incident_country')
      .orderBy('incident_country')
      .execute();
  }

  async getUniqueAllegationType(): Promise<{ allegationType: string }[]> {
    return this.createQueryBuilder()
      .select('allegation_type', 'allegationType')
      .where('allegation_type IS NOT NULL')
      .andWhere('allegation_type != ""')
      .groupBy('allegation_type')
      .execute();
  }

  async getUniqueOrganisationType(): Promise<{ organisationType: string }[]> {
    return this.createQueryBuilder()
      .select('organisation_type', 'organisationType')
      .where('organisation_type IS NOT NULL')
      .andWhere('organisation_type != ""')
      .groupBy('organisation_type')
      .execute();
  }

  async getUniqueInvestigationOutcome(): Promise<
    { investigationOutcome: string }[]
  > {
    return this.createQueryBuilder()
      .select('investigation_outcome', 'investigationOutcome')
      .leftJoin(
        'case_sync_investigation',
        'ci',
        'ci.case_id = case_sync.case_uuid',
      )
      .where('investigation_outcome IS NOT NULL')
      .andWhere('investigation_outcome != ""')
      .groupBy('investigation_outcome')
      .execute();
  }

  async getUniqueReferredToAssistance(): Promise<
    { referredToAssistance: string }[]
  > {
    return this.createQueryBuilder()
      .select('referred_to_assistance', 'referredToAssistance')
      .where('referred_to_assistance IS NOT NULL')
      .andWhere('referred_to_assistance != ""')
      .groupBy('referred_to_assistance')
      .execute();
  }

  async getUniqueAgeValues(): Promise<{ age: string }[]> {
    return this.createQueryBuilder()
      .select('survivor_age', 'age')
      .where('survivor_age IS NOT NULL')
      .andWhere('survivor_age != ""')
      .groupBy('survivor_age')
      .execute();
  }

  async getUniqueGender(): Promise<{ gender: string }[]> {
    return this.createQueryBuilder()
      .select('survivor_gender', 'gender')
      .where('survivor_gender IS NOT NULL')
      .andWhere('survivor_gender != ""')
      .groupBy('survivor_gender')
      .execute();
  }

  async getUniqueDisability(): Promise<{ disability: string }[]> {
    return this.createQueryBuilder('case_sync')
      .select('survivor_disability', 'disability')
      .leftJoin(
        'case_sync_survivor_disability',
        'sd',
        'sd.case_id = case_sync.case_uuid',
      )
      .where('survivor_disability IS NOT NULL')
      .andWhere('survivor_disability != ""')
      .groupBy('survivor_disability')
      .execute();
  }
}
