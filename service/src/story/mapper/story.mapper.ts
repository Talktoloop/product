import { plainToClass } from 'class-transformer';
import { StoryEntity } from '../entity/story.entity';
import { StoryRO } from '../response/story.ro';
import { formatOrganisations } from './organizations.mapper';
import { getTranslationByLanguageId } from '../../common/helpers';
import { formatUser } from '../../common/mapper/user.mapper';
import { translationsMapper } from '../../common/mapper/translations.mapper';
import { DIFFICULTY_VALUE } from '../../common/types';
import { getKeyByValue, parseGooglePlacesLocation } from '../../common/helpers';
import { placeMapper } from '../../country/mapper/place.mapper';
import { LanguageEntity } from '../../language/entity/language.entity';

export const storyToStoryRO = (
  story: StoryEntity,
  userLanguageId: number,
  defaultLanguage: LanguageEntity,
): StoryRO => {
  if (story) {
    const translation = getTranslationByLanguageId(
      story.translations,
      story.languageId,
      userLanguageId,
    );
    const place = placeMapper(
      story.storyAdministrativeData.map((item) => item.administrativeData),
      userLanguageId,
      defaultLanguage.id,
      story.country?.defaultLanguageId,
    );

    return plainToClass(StoryRO, {
      ...story,
      difficulty: getKeyByValue(
        DIFFICULTY_VALUE,
        story.recipient?.difficultyByModerator,
      ),
      place: place ?? parseGooglePlacesLocation(story.place),
      country: story.country?.code,
      language: story.language.code,
      translations: translationsMapper(
        story.translations,
        null,
        story.languageId,
      ),
      content: translation?.content,
      contentType: translation?.type,
      organisations: story ? formatOrganisations(story.organisations) : [],
      user: story ? formatUser(story.user) : null,
      comments: story.comments ?? 0,
      publishedAt: story.publishedAt,
      thematics: story.thematics?.map(({ id }) => id),
      gender: story.recipient?.genderByModerator ?? null,
      age: story.recipient?.ageByModerator ?? null,
      authorNickname: story.onBehalfOf ?? null,
      isUrgent: story.isUrgent,
      isMinority: story.recipient?.isMinority ?? null,
    });
  }
};
