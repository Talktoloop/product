import { Injectable, Inject, Logger } from '@nestjs/common';
import { chunkArray } from '../../common/helpers';
import axios from 'axios';
import { CountryRepository } from '../../country/repository/country.repository';
import { DI_CONSTANTS } from '../../common/constant/di.constant';
import { ConfigService } from '@nestjs/config';
import { AirTableCountryInterface } from '../interface/airtable-country.interface';
import rateLimit from 'axios-rate-limit';

@Injectable()
export class AirTableCountryService {
  private readonly logger = new Logger(AirTableCountryService.name);
  private readonly apiKey: string = this.config.get('airTable.apiKey');
  private readonly countriesUrl: string = this.config.get(
    'airTable.url.countries',
  );
  private axiosInstance: any;

  constructor(
    @Inject(DI_CONSTANTS.CONFIG)
    private readonly config: ConfigService,
    private readonly countryRepository: CountryRepository,
  ) {
    this.axiosInstance = rateLimit(axios.create(), {
      maxRequests: 5,
      perMilliseconds: 1000,
    });
  }

  async importCountriesToAirTable(): Promise<AirTableCountryInterface[]> {
    const countries = await this.countryRepository.findCountriesToAirtable();
    const countriesChunks = chunkArray(countries, 10);
    const allAirTableCountries = [];

    for (const chunk of countriesChunks) {
      const mappedCountries = chunk.map((item) => {
        return { fields: JSON.parse(JSON.stringify(item)) };
      });
      const airTableCountries = await this.postCountriesToAirTable(
        mappedCountries,
      );
      allAirTableCountries.push(airTableCountries);
    }
    return allAirTableCountries;
  }

  async postCountriesToAirTable(
    countries: {
      fields: AirTableCountryInterface;
    }[],
  ): Promise<AirTableCountryInterface[]> {
    return await this.axiosInstance
      .post(
        this.countriesUrl,
        { records: countries },
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
          },
        },
      )
      .then((result) => {
        return result?.data?.['records']
          .filter((field) => !!field)
          .map((country) => ({
            Name: country['Name'] as string,
          }));
      })
      .catch((error) => {
        this.logger.error(error.message);
      });
  }
}
