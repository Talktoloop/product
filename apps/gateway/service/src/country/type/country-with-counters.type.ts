import { CountryEntity } from '../entity/country.entity';

export type CountryWithCounters = CountryEntity & {
  numberOfStories: number;
  numberOfAdministrativeDataConnections: number;
};
