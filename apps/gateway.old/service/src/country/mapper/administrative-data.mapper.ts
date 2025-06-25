import { plainToClass } from 'class-transformer';
import { AdministrativeDataRO } from '../response/administrative-data.ro';
import { AdministrativeDataWithDetails } from '../type/administrative-data-with-details.type';
import { LanguageEntity } from '../../language/entity/language.entity';
import { CountryAdministrativeDataNameEntity } from '../entity/country-administrative-data-name.entity';

export const findAdministrativeDataByLanguage = (
  variants: CountryAdministrativeDataNameEntity[],
  userLanguageId: number,
  defaultLanguageId: number,
  defaultLanguageIdForAdministrativeData: number,
): CountryAdministrativeDataNameEntity => {
  let element = variants?.find(
    (variant) => variant.languageId === userLanguageId,
  );

  if (!element) {
    element = variants?.find(
      (variant) => variant.languageId === defaultLanguageId,
    );
  }

  return (
    element ??
    variants?.find(
      (variant) =>
        variant.languageId === defaultLanguageIdForAdministrativeData,
    )
  );
};

export const filterAdministrativeDataByLanguage = (
  administrativeData: Array<AdministrativeDataWithDetails>,
  userLanguageId: number,
  defaultLanguageId: number,
): AdministrativeDataWithDetails[] => {
  const data = [];
  let languageId: number;
  let variants = [];

  administrativeData.forEach((value, index) => {
    languageId = value.languageId;

    if (languageId && administrativeData[index - 1]?.id !== value.id) {
      variants = [];
    }

    if (languageId) {
      variants.push(value);
    }

    if (
      languageId &&
      variants[0] &&
      administrativeData[index + 1]?.id !== value.id
    ) {
      const element = findAdministrativeDataByLanguage(
        variants,
        userLanguageId,
        defaultLanguageId,
        variants[0].defaultLanguageIdForAdministrativeData,
      );

      if (element) {
        data.push(element);
      }

      variants = [];
    }

    if (!languageId) {
      data.push(value);
    }
  });

  if (variants[0]) {
    const element = findAdministrativeDataByLanguage(
      variants,
      userLanguageId,
      defaultLanguageId,
      variants[0].defaultLanguageIdForAdministrativeData,
    );

    if (element) {
      data.push(element);
    }
  }

  return data;
};

export const administrativeDataMapper = (
  administrativeData: Array<AdministrativeDataWithDetails>,
  userLanguageId: number,
  defaultLanguage: LanguageEntity,
): AdministrativeDataRO[] => {
  const data = filterAdministrativeDataByLanguage(
    administrativeData,
    userLanguageId,
    defaultLanguage.id,
  );

  return data.map((item) =>
    plainToClass(AdministrativeDataRO, {
      ...item,
      hasChild: !!item.hasChild,
    }),
  );
};
