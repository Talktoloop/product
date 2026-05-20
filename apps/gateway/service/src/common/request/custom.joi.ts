import { replaceArray } from '../../common/helpers';
import { isValid, differenceInMilliseconds, parseISO } from 'date-fns';

export const filterNumericIds = (value: string): string =>
  value
    .split(',')
    .map((element) =>
      Number.isInteger(parseInt(element)) ? element : undefined,
    )
    .filter((element) => element)
    .join(',');

export const convertBooleanString = (value: string): boolean =>
  ['true', true].includes(value);

export const stripHtmlTags = (value: string): string =>
  String(value)
    .replace(/<[^>]+>/gm, '')
    .replace(/\s\s+/g, ' ');

export const clearPhoneNumber = (value: string): string => {
  value = replaceArray(value, ['\\s+', '\\+', '\\-', '\\(', '\\)'], '');

  if (value.substr(0, 2) === '00') {
    value = value.substr(2);
  }

  return `+${value}`;
};

export const convertStringToArray = (value: string): string[] =>
  value.split(',');

export const customDatePeriodValidation = (params, helpers) => {
  if (!params.from && !params.to) {
    return params;
  }

  if (params.from && !isValid(parseISO(params.from))) {
    return helpers.error('any.invalid');
  }

  if (params.to && !isValid(parseISO(params.to))) {
    return helpers.error('any.invalid');
  }

  if (
    params.from &&
    params.to &&
    !differenceInMilliseconds(new Date(params.to), new Date(params.from))
  ) {
    return helpers.error('any.invalid');
  }

  return params;
};
