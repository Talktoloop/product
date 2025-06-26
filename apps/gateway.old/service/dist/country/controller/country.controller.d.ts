import { CountryRO } from '../response/country.ro';
import { CountryService } from '../service/country.service';
import { GetCountriesDTO } from '../request/dto/get-countries.dto';
import { AirTableCountryService } from '../../airtable-client/service/airtable-country.service';
export declare class CountryController {
    private readonly countryService;
    private readonly airTableCountryService;
    constructor(countryService: CountryService, airTableCountryService: AirTableCountryService);
    getCountries(params: GetCountriesDTO): Promise<CountryRO[]>;
    getCountryCodes(): Promise<string[]>;
    importToAirtable(): Promise<{
        success: boolean;
    }>;
}
