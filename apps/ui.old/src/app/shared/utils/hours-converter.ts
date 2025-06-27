export enum TimeUnit {
  HOUR = 'hour',
  HOURS = 'hours',
  DAY = 'day',
  DAYS = 'days',
  WEEK = 'week',
  WEEKS = 'weeks',
  MONTH = 'month',
  MONTHS = 'months',
  YEAR = 'year',
  YEARS = 'years',
}

export interface ITimeWithUnit {
  value: number;
  unit: TimeUnit;
}

const getUnitTime = (time: number, unit: TimeUnit): ITimeWithUnit => {
  return { value: time, unit };
};
export const getTimeWithUnit = (hours: number): ITimeWithUnit => {
  const days = Math.round(hours / 24);
  const weeks = Math.round(days / 7);
  const months = Math.round(weeks / 30);

  if (hours === 1) {
    // one hour
    return getUnitTime(hours, TimeUnit.HOUR);
  } else if (hours < 24) {
    // less than one day
    return getUnitTime(hours, TimeUnit.HOURS);
  } else if (days === 1) {
    // one day
    return getUnitTime(days, TimeUnit.DAY);
  } else if (days < 7) {
    // less than one week
    return getUnitTime(days, TimeUnit.DAYS);
  } else if (weeks === 1) {
    // one week
    return getUnitTime(weeks, TimeUnit.WEEK);
  } else if (weeks < 12) {
    // less than 12 weeks
    return getUnitTime(weeks, TimeUnit.WEEKS);
  } else {
    // more than 12 weeks
    return getUnitTime(months, TimeUnit.MONTHS);
  }
};
