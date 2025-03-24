import { QuantityPerMonth } from '../interfaces/quantity-per-month.interface';
import { StoriesCodeDatesRO } from '../response/stories-code-dates.ro';
import { cloneArrayWithoutReference } from '../../common/helpers';
import { FilterCasesDto } from '../request/dto/filter.dto';
import { ALLEGATION_TYPE_TEXT } from '../../airtable-client/constant/allegation-type.constant';
import { getKeyByValue } from '../../common/helpers';
import {
  startOfDay,
  differenceInMilliseconds,
  endOfDay,
  format,
  addMonths,
} from 'date-fns';

const setValue = (
  response: StoriesCodeDatesRO[],
  code: string,
  data: QuantityPerMonth,
): void => {
  const categoryDetails = response.find((item) => item.code === code);

  const arrayItem = categoryDetails?.values.find(
    (value) => value[0] === data.month,
  );

  if (arrayItem) {
    arrayItem[1] = data.count;
  }
};

export const timelineForCasesMapper = (
  params: FilterCasesDto,
  casesWithAllegationTypeByPeriod: (QuantityPerMonth & {
    code: string;
  })[],
  urgentCasesByPeriod: QuantityPerMonth[],
): StoriesCodeDatesRO[] => {
  let start = startOfDay(new Date(params.from));
  const dates = [];

  while (differenceInMilliseconds(endOfDay(new Date(params.to)), start) > 0) {
    dates.push([format(start, 'yyyy-MM'), 0]);
    start = addMonths(start, 1);
  }

  const response = Object.keys(ALLEGATION_TYPE_TEXT).map((allegationType) => ({
    code: allegationType,
    values: cloneArrayWithoutReference(dates),
  }));

  for (const row of casesWithAllegationTypeByPeriod) {
    setValue(
      response,
      getKeyByValue(ALLEGATION_TYPE_TEXT, row.code, false),
      row,
    );
  }

  response.push({
    code: 'urgentCases',
    values: cloneArrayWithoutReference(dates),
  });

  for (const row of urgentCasesByPeriod) {
    setValue(response, 'urgentCases', row);
  }

  return response;
};
