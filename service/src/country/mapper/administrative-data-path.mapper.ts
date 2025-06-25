import { plainToClass } from 'class-transformer';
import { CountryAdministrativeDataEntity } from '../entity/country-administrative-data.entity';
import { CountryAdministrativeDataNameEntity } from '../entity/country-administrative-data-name.entity';
import { AdministrativeDataPathRO } from '../response/administrative-data-path.ro';
import { findAdministrativeDataByLanguage } from './administrative-data.mapper';
export const administrativeDataPathMapper = (
  parents: CountryAdministrativeDataEntity[],
  userLanguageId: number,
  defaultLanguageId: number,
  defaultLanguageIdForAdministrativeData: number,
): AdministrativeDataPathRO => {
  const path: string[] = [];
  let variant: CountryAdministrativeDataNameEntity;

  for (const parent of parents) {
    variant = findAdministrativeDataByLanguage(
      parent.names,
      userLanguageId,
      defaultLanguageId,
      defaultLanguageIdForAdministrativeData,
    );

    if (variant?.name) path.push(variant.name);
  }

  return plainToClass(AdministrativeDataPathRO, { path: path.join(', ') });
};
