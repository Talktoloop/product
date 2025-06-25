import {
  Injectable,
  BadRequestException,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { CountryEntity } from '../entity/country.entity';
import { CountryRepository } from '../repository/country.repository';
import { COUNTRY_NOT_FOUND } from '@ourloop/shared';
import { FindManyOptions } from 'typeorm';
import { CountryWithCounters } from '../type/country-with-counters.type';
import { StoryService } from '../../story/service/story.service';

@Injectable()
export class CountryService {
  constructor(
    @Inject(forwardRef(() => StoryService))
    private readonly storyService: StoryService,
    private readonly countryRepository: CountryRepository,
  ) {}
  async getCountries(
    params: FindManyOptions<CountryEntity> = {},
  ): Promise<CountryEntity[]> {
    return this.countryRepository.find(params);
  }

  async getCountriesWithNumberOfStories(
    onlyWithStory: boolean,
  ): Promise<CountryWithCounters[]> {
    const countries = await this.countryRepository
      .getCountriesWithNumberOfStories()
      .then((result) =>
        result.filter((item) => !onlyWithStory || item.numberOfStories > 0),
      );

    if (onlyWithStory) {
      for (const index in countries) {
        countries[index].numberOfAdministrativeDataConnections =
          await this.storyService.getNumberOfAdministrativeDataConnectionsByCountryId(
            countries[index].id,
          );
      }
    }

    return countries;
  }

  findByCode(code: string): Promise<CountryEntity> {
    if (!code) return;

    return this.countryRepository.findOne({ where: { code } });
  }

  findByIdOrFail(id: number): Promise<CountryEntity> {
    if (!id) {
      throw new BadRequestException(COUNTRY_NOT_FOUND);
    }

    return this.countryRepository.findOne({ where: { id } }).then((data) => {
      if (!data) {
        throw new BadRequestException(COUNTRY_NOT_FOUND);
      }

      return data;
    });
  }

  findByCodeOrFail(code: string): Promise<CountryEntity> {
    if (!code) return;

    return this.countryRepository
      .findOne({ where: { code }, relations: ['language'] })
      .then((data) => {
        if (!data) {
          throw new BadRequestException(COUNTRY_NOT_FOUND);
        }

        return data;
      });
  }

  findByPhrase(phrase: string): Promise<CountryEntity[]> {
    return this.countryRepository.getCountriesByPhrase(phrase);
  }
}
