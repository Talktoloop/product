import { faker } from '@faker-js/faker';
import config from '../../src/config/typeorm';
import { getConnection } from '../../src/common/helpers';
import { CountryEntity } from '../../src/country/entity/country.entity';
import getRandomValueWithExcluded from '../../src/migrations/utils/get-random-value-with-excluded';

export const getCountryStub = (): CountryEntity => {
  const country = new CountryEntity();

  country.code = faker.string.alphanumeric(2);
  country.name = faker.lorem.word();
  country.prefix = faker.number.int(999);

  return country;
};

export const addCountry = async (): Promise<CountryEntity> => {
  const connection = await getConnection(config);

  return connection.getRepository(CountryEntity).save(getCountryStub());
};

export const getRandomCountry = (
  countries: CountryEntity[],
  excluded: number[] = [],
): CountryEntity => {
  return getRandomValueWithExcluded(
    countries.filter((item) => !excluded.includes(item.id)),
  );
};

export const getCountryById = async (id: number): Promise<CountryEntity> => {
  const connection = await getConnection(config);

  return connection.getRepository(CountryEntity).findOne({ where: { id } });
};

export const getCountries = async (): Promise<CountryEntity[]> => {
  const connection = await getConnection(config);

  return connection.getRepository(CountryEntity).find();
};

export const getCountryByCode = async (
  code: string,
): Promise<CountryEntity> => {
  const connection = await getConnection(config);

  return connection
    .getRepository(CountryEntity)
    .findOne({ where: { code: code } });
};
