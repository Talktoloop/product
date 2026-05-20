import { plainToClass } from 'class-transformer';
import { StoryEntity } from '../entity/story.entity';
import { StoryListRO } from '../response/story-list.ro';
import { StoryListPaginationRO } from '../response/story-list-pagination.ro';
import {
  getTranslationByLanguageId,
  preparePaginationMetadata,
  parseGooglePlacesLocation,
} from '../../common/helpers';
import { formatOrganisations } from './organizations.mapper';
import { formatUser } from '../../common/mapper/user.mapper';
import { translationsMapper } from '../../common/mapper/translations.mapper';
import { StoryFilterAndOrderDto } from '../request/dto/story-filter-and-order.dto';
import { PaginationMeta } from '../../common/type/pagination-meta.type';
import { placeMapper } from '../../country/mapper/place.mapper';
import { LanguageEntity } from '../../language/entity/language.entity';

export const storiesToStoriesRO = (stories: StoryEntity[]): StoryListRO[] => {
  return stories.map((story: StoryEntity) =>
    plainToClass(StoryListRO, {
      ...story,
    }),
  );
};

export const mapStoryDetails = (
  story: Record<string, unknown>,
  translations: any[],
  organisations: any[],
  categories: any[],
  thematicIds: string[],
  administrativeData: any[],
  userLanguageId: number,
  defaultLanguage: LanguageEntity,
): StoryListRO => {
  const translation = getTranslationByLanguageId(
    translations,
    story.languageId as number,
    userLanguageId,
  );
  const place = placeMapper(
    administrativeData,
    userLanguageId,
    defaultLanguage.id,
    Number(story.defaultLanguageIdForAdministrativeData),
  );

  story.place = place ?? parseGooglePlacesLocation(story.place);
  story.content = translation?.content;
  story.contentType = translation?.type;
  story.organisations = formatOrganisations(organisations);
  story.categories = categories
  story.thematics = thematicIds
  story.language = translations.find(
    (translation) => translation.languageId === story.languageId,
  )?.language.code;
  story.translations = translationsMapper(
    translations,
    null,
    story.languageId as number,
  );

  return plainToClass(StoryListRO, story);
};

export const storiesToStoriesPaginationRO = (
  data: Record<string, string>[],
  storyIds: string[],
  params: StoryFilterAndOrderDto,
  languageId: number,
  defaultLanguage: LanguageEntity,
): StoryListPaginationRO => {
  const items = [];
  let story: Record<string, unknown>;
  let translations: Record<string, unknown>[] = [];
  let translationIds: string[] = [];
  let organisations: Record<string, string>[] = [];
  let categories: Record<string, string>[] = [];
  let categoryIds: string[] = [];
  let thematicIds: string[] = [];
  let organisationIds: string[] = [];
  let administrativeDataNameIds: string[] = [];
  let administrativeData: Record<string, any>[] = [];

  for (const item of data) {
    if (story?.id !== item.story_id) {
      if (story) {
        items.push(
          mapStoryDetails(
            story,
            translations,
            organisations,
            categories,
            thematicIds,
            administrativeData,
            languageId,
            defaultLanguage,
          ),
        );
      }

      translations = [];
      translationIds = [];
      organisations = [];
      categories = [];
      categoryIds = [];
      thematicIds = [];
      organisationIds = [];
      administrativeData = [];
      administrativeDataNameIds = [];
      story = {
        id: item.story_id,
        votes: item.vote_count,
        views: item.view_count,
        channel: item.story_channel,
        country: item.country_code,
        place: item.story_place,
        authorNickname: item.story_on_behalf_of,
        defaultLanguageIdForAdministrativeData:
          item.country_default_language_id_for_administrative_data,
        user: item.user_id
          ? formatUser({
              organisation: {
                name: item.organisation_name,
              },
            })
          : null,
        comments: item.story_comments,
        publishedAt: item.story_published_at,
        createdAt: item.story_created_at,
        languageId: item.story_language_id,
        isMinority: item.isMinority !== null && item.isMinority !== undefined ? Boolean(Number(item.isMinority)) : null,
      };

    }

    if (
      item.translations_id &&
      !translationIds.includes(item.translations_id)
    ) {
      translationIds.push(item.translations_id);
      translations.push({
        id: item.translations_id,
        content: item.translations_content,
        type: item.translations_type,
        languageId: item.translations_language_id,
        status: item.translations_status,
        language: {
          code: item.language_code,
          isDefault: !!item.language_is_default,
        },
        storyId: item.translations_story_id,
      });
    }
    if (
      item.organisations_id &&
      !organisationIds.includes(item.organisations_id)
    ) {
      organisationIds.push(item.organisations_id);
      organisations.push({
        id: item.organisations_id,
        name: item.organisations_name,
        replied: item.organisations_replied,
        verified: item.organisations_verified,
      });


    }

    if (item.categories_id &&
      !categoryIds.includes(item.categories_id)
    ) {
      categoryIds.push(item.categories_id)
      categories.push({
        id: item.categories_id,
        code: item.categories_code,
        order: item.categories_order
      })
    }

    if (!thematicIds.includes(item.thematic_id)) {
      thematicIds.push(item.thematic_id)
    }

    if (
      item.administrativeDataNames_id &&
      !administrativeDataNameIds.includes(item.administrativeDataNames_id)
    ) {
      const element = administrativeData.find(
        (obj) => obj.id === item.administrativeData_id,
      );

      if (!element) {
        administrativeData.push({
          id: item.administrativeData_id,
          level: item.administrativeData_level,
          names: [
            {
              name: item.administrativeDataNames_name,
              languageId: item.administrativeDataNames_language_id,
            },
          ],
        });
      } else {
        element.names.push({
          name: item.administrativeDataNames_name,
          languageId: item.administrativeDataNames_language_id,
        });
      }

      administrativeDataNameIds.push(item.administrativeDataNames_id);
    }
  }

  if (story) {
    items.push(
      mapStoryDetails(
        story,
        translations,
        organisations,
        categories,
        thematicIds,
        administrativeData,
        languageId,
        defaultLanguage,
      ),
    );
  }

  const response: { meta: PaginationMeta; items: StoryListRO[] } = {
    meta: preparePaginationMetadata(storyIds, params.limit, params.page),
    items,
  };

  response.meta.itemCount = items.length;

  return response;
};
