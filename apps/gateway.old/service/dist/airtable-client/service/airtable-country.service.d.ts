import { CountryRepository } from '../../country/repository/country.repository';
import { ConfigService } from '@nestjs/config';
import { AirTableCountryInterface } from '../interface/airtable-country.interface';
export declare class AirTableCountryService {
    private readonly config;
    private readonly countryRepository;
    private readonly logger;
    private readonly apiKey;
    private readonly countriesUrl;
    private axiosInstance;
    constructor(config: ConfigService, countryRepository: CountryRepository);
    importCountriesToAirTable(): Promise<AirTableCountryInterface[]>;
    postCountriesToAirTable(countries: {
        fields: AirTableCountryInterface;
    }[]): Promise<AirTableCountryInterface[]>;
}
