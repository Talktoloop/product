import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CountryRO } from '../response/country.ro';
import { countiesMapper } from '../mapper/countries.mapper';
import { CountryService } from '../service/country.service';
import { ValidationPipe, BaseAuthGuard } from '@ourloop/shared';
import { GetCountriesDTO } from '../request/dto/get-countries.dto';
import { getCountriesSchema } from '../request/schema/get-countries.schema';
import { SuccessRO } from '../../common/response/success.ro';
import { AirTableCountryService } from '../../airtable-client/service/airtable-country.service';

@ApiTags('Country')
@Controller('country')
export class CountryController {
  constructor(
    private readonly countryService: CountryService,
    private readonly airTableCountryService: AirTableCountryService,
  ) {}

  @UseGuards(AuthGuard(['anonymous']))
  @Get()
  @ApiOperation({ summary: 'Get list of countries' })
  @ApiResponse({ status: 200, type: CountryRO, isArray: true })
  async getCountries(
    @Query(new ValidationPipe(getCountriesSchema))
    params: GetCountriesDTO,
  ): Promise<CountryRO[]> {
    const countries = await this.countryService.getCountriesWithNumberOfStories(
      params.onlyWithStory ?? false,
    );

    return countiesMapper(countries);
  }

  @UseGuards(AuthGuard(['anonymous']))
  @Get('/codes')
  @ApiOperation({ summary: 'Get country codes' })
  @ApiResponse({ status: 200, type: String, isArray: true })
  async getCountryCodes(): Promise<string[]> {
    return this.countryService
      .getCountries()
      .then((countries) => countries.map((country) => country.code));
  }

  @UseGuards(BaseAuthGuard)
  @ApiOperation({ summary: 'Import countries to airtable' })
  @ApiResponse({ status: 200, type: SuccessRO })
  @Get('import-to-airtable')
  async importToAirtable() {
    const result =
      await this.airTableCountryService.importCountriesToAirTable();
    return { success: result?.length > 0 };
  }
}
