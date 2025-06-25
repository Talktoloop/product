import { plainToClass } from 'class-transformer';
import { CountryRO } from '../response/country.ro';
import { CountryWithCounters } from '../type/country-with-counters.type';

export const countiesMapper = (countries: CountryWithCounters[]): CountryRO[] =>
  countries.map((country) =>
    plainToClass(CountryRO, {
      ...country,
      hasChild: country.numberOfAdministrativeDataConnections > 0,
    }),
  );
