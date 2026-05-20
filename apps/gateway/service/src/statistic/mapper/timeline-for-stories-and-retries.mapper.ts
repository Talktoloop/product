import { QuantityPerMonth } from '../interfaces/quantity-per-month.interface';
import { CategoryEntity } from '../../category/entity/category.entity';
import { StoriesCodeDatesRO } from '../response/stories-code-dates.ro';
import { cloneArrayWithoutReference } from '../../common/helpers';
import { FilterDto } from '../../common/dto/filter.dto';
import {
  startOfDay,
  differenceInMilliseconds,
  endOfMonth,
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

export const timelineForStoriesAndRetriesMapper = (
  params: FilterDto,
  categories: CategoryEntity[],
  noSensitiveStoriesWithCategoryByPeriod: (QuantityPerMonth & {
    code: string;
  })[],
  sensitiveStoriesByPeriod: QuantityPerMonth[],
  commentsByPeriod: QuantityPerMonth[],
): StoriesCodeDatesRO[] => {
  let start = startOfDay(new Date(params.from));
  const dates = [];

  while (differenceInMilliseconds(endOfMonth(new Date(params.to)), start) > 0) {
    dates.push([format(start, 'yyyy-MM'), 0]);
    start = addMonths(start, 1);
  }

  const response = categories.map((category) => ({
    code: category.code,
    values: cloneArrayWithoutReference(dates),
  }));

  for (const row of noSensitiveStoriesWithCategoryByPeriod) {
    setValue(response, row.code, row);
  }

  response.push({
    code: 'sensitive',
    values: cloneArrayWithoutReference(dates),
  });

  for (const row of sensitiveStoriesByPeriod) {
    setValue(response, 'sensitive', row);
  }

  response.push({
    code: 'comments',
    values: cloneArrayWithoutReference(dates),
  });

  for (const row of commentsByPeriod) {
    setValue(response, 'comments', row);
  }

  return response;
};
