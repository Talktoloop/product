import * as fs from 'fs';

const getCountries = (): Record<string, string>[] => {
  const countriesRawData = fs.readFileSync(
    `${process.cwd()}/src/migrations/files/countries.json`,
  );
  let countries = [];

  try {
    countries = JSON.parse(countriesRawData.toString());
  } catch {}

  return countries;
};

export default getCountries;
