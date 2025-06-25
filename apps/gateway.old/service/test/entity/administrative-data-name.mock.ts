import { faker } from '@faker-js/faker';
import { CountryAdministrativeDataNameEntity } from '../../src/country/entity/country-administrative-data-name.entity';
import config from '../../src/config/typeorm';
import { getConnection } from '../../src/common/helpers';

export interface AdministrativeDataName {
  administrativeAreaId: number;
  languageId: number;
  name?: string;
}

export const getAdministrativeDataNameStub = (
  data: AdministrativeDataName,
): CountryAdministrativeDataNameEntity => {
  const administrativeDataName = new CountryAdministrativeDataNameEntity();

  administrativeDataName.name = data.name ?? faker.lorem.word();
  administrativeDataName.languageId = data.languageId;
  administrativeDataName.administrativeAreaId = data.administrativeAreaId;

  return administrativeDataName;
};

export const addAdministrativeDataName = async (
  data: AdministrativeDataName,
): Promise<CountryAdministrativeDataNameEntity> => {
  const connection = await getConnection(config);

  return connection
    .getRepository(CountryAdministrativeDataNameEntity)
    .save(getAdministrativeDataNameStub(data));
};
