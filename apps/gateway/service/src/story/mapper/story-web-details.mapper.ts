import { plainToClass } from 'class-transformer';
import { getTranslationByLanguageId } from '../../common/helpers';
import { StoryEntity } from '../entity/story.entity';
import { StoryWebModeratorRO } from '../response/story-web-moderator.ro';
import { formatOrganisations } from './organizations.mapper';
import { formatUser } from '../../common/mapper/user.mapper';
import { translationsMapper } from '../../common/mapper/translations.mapper';
import { DIFFICULTY_VALUE } from '../../common/types';
import { getKeyByValue } from '../../common/helpers';
import {
  isContactAccepted,
  parseGooglePlacesLocation,
} from '../../common/helpers';
import { placeMapper } from '../../country/mapper/place.mapper';
import { LanguageEntity } from '../../language/entity/language.entity';

export const storyWebDetailsMapper = (
  story: StoryEntity,
  historicalContent: string,
  storyLanguageId: number,
  userLanguageId: number,
  defaultLanguage: LanguageEntity,
): StoryWebModeratorRO => {
  console.log('💀'.repeat(10));
  console.log(`storyWebDetailsMapper Entry`);
  const translation = getTranslationByLanguageId(
    story.translations,
    story.languageId,
    storyLanguageId,
  );
  const place = placeMapper(
    story.storyAdministrativeData.map((item) => item.administrativeData),
    userLanguageId,
    defaultLanguage.id,
    story.country?.defaultLanguageId,
  );
  return plainToClass(StoryWebModeratorRO, {
    ...story,
    difficulty: getKeyByValue(
      DIFFICULTY_VALUE,
      story.recipient?.difficultyByModerator,
    ),
    place: place ?? parseGooglePlacesLocation(story.place),
    content: translation?.content,
    historicalContent: historicalContent ?? null,
    country: story.country?.code,
    language: story.language.code,
    organisations: formatOrganisations(story.organisations),
    user: story.user ? formatUser(story.user) : null,
    comments: story.comments ?? 0,
    publishedAt: story.publishedAt,
    createdAt: story.createdAt,
    emailProvided: !!(story.recipient?.email || story.user?.email),
    translations: translationsMapper(
      story.translations,
      null,
      story.languageId,
    ),
    thematics: story.thematics?.map((t) => t.id),
    contactAccepted: isContactAccepted(story),
    age: story.recipient.ageByModerator,
    gender: story.recipient.genderByModerator,
    authorNickname: story.recipient.nickname,
    isUrgent: story.isUrgent,
    isMinority: story.recipient.isMinority,
  });
};
