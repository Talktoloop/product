import { CountryEntity } from '../../src/country/entity/country.entity';
import { getCountries, getRandomCountry } from '../entity/country.mock';

export const initializeDataset = async (): Promise<{
  countries: CountryEntity[];
}> => {
  const countries = await getCountries();

  return {
    countries: [
      getRandomCountry(countries),
      getRandomCountry(countries),
      getRandomCountry(countries),
    ],
  };
};
