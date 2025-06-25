import { ExportedStory } from '../type/exported-story.type';
import { ExportedStoryRO } from '../response/exported-story.ro';
import { plainToClass } from 'class-transformer';
import { CountryEntity } from '../../country/entity/country.entity';
import { placeMapper } from '../../country/mapper/place.mapper';
import { preparePaginationMetadata } from '../../common/helpers';
import { ExportedStoriesWithPaginationRO } from '../response/exported-stories-pagination.ro';
import { PaginationMeta } from '../../common/type/pagination-meta.type';

export const exportedStoriesMapper = (
  data: ExportedStory[],
  countries: CountryEntity[],
  userLanguageId: number,
  defaultLanguageId: number,
  frontendUrl: string,
  storyIds: string[],
  page: number,
  limit: number,
): ExportedStoriesWithPaginationRO => {
  const countryCodes = {};

  for (const country of countries) {
    countryCodes[country.name] = country.code;
  }

  const items = [];

  for (const key in data) {
    items.push(
      plainToClass(ExportedStoryRO, {
        ...data[key],
        feedbackId: key,
        age: data[key].age?.replace(/ /g, '_'),
        gender: data[key].gender?.replace(/ /g, '_'),
        countryCode: countryCodes[data[key].country],
        location: placeMapper(
          data[key].administrativeData,
          userLanguageId,
          defaultLanguageId,
          data[key].defaultLanguageIdForAdministrativeData,
          ', ',
        ),
        communicationChannel: data[key].channel,
        url: `${frontendUrl}story/details/${key}`,
        didAnyoneComment: !!data[key].numberOfComments,
      }),
    );
  }

  const response: { meta: PaginationMeta; items: ExportedStoryRO[] } = {
    meta: preparePaginationMetadata(storyIds, limit, page),
    items,
  };

  response.meta.itemCount = data.length;

  return response;
};
