import { CaseSyncEntity } from '../../airtable-client/entity/case-sync.entity';
import { CASE_ACCOUNTABILITY } from '../../airtable-client/constant/case-accountability.constant';
import { ORGANISATION_TYPE_TEXT } from '../../airtable-client/constant/organisation-type.constant';
import { cloneArrayWithoutReference } from '../../common/helpers';
import { TypeValuesRO } from '../response/type-value.ro';

export const casesGroupedByCaseAccountabilityAndOrganisationTypeMapper = (
  data: Array<(CaseSyncEntity & { count: number })[]>,
): TypeValuesRO[] => {
  const caseAccountabilityKeys = Object.keys(CASE_ACCOUNTABILITY);
  const organisationTypes = Object.values(ORGANISATION_TYPE_TEXT);
  const filteredOrganisationKeys: string[] = Object.values(
    ORGANISATION_TYPE_TEXT,
  ).filter((key) => key != ORGANISATION_TYPE_TEXT.other);
  const result = [];

  for (const index in data) {
    const values = [] as number[];

    for (const type of organisationTypes) {
      values.push(
        data[index].find((item) =>
          type !== ORGANISATION_TYPE_TEXT.other
            ? item.organisationType === type
            : !filteredOrganisationKeys.includes(item.organisationType),
        )?.count ?? 0,
      );
    }

    result.push({
      type: caseAccountabilityKeys[index],
      values: cloneArrayWithoutReference(values),
    });
  }

  return result;
};
