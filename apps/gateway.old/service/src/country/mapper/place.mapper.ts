import { CountryAdministrativeDataEntity } from '../entity/country-administrative-data.entity';
import { findAdministrativeDataByLanguage } from './administrative-data.mapper';

export const placeMapper = (
  data: CountryAdministrativeDataEntity[],
  userLanguageId: number,
  defaultLanguageId: number,
  countryDefaultLanguageId: number,
  divider = ', ',
): string => {
  if (!data[0]) {
    return null;
  }

  return data
    .sort((prev, next) => next.level - prev.level)
    .map((item) => {
      const element = findAdministrativeDataByLanguage(
        item.names,
        userLanguageId,
        defaultLanguageId,
        countryDefaultLanguageId,
      );

      return element?.name ?? '';
    })
    .filter((value) => value)
    .join(divider);
};
