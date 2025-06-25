import { StoryEntity } from '../entity/story.entity';
import { messageMapper } from '../../messenger/mapper/messages.mapper';
import { storyWebDetailsMapper } from './story-web-details.mapper';
import { StoryMessengerModeratorRO } from '../response/story-messenger-moderator.ro';
import { isContactAccepted } from '../../common/helpers';
import { LanguageEntity } from '../../language/entity/language.entity';
import { MessengerMessageEntity } from '../../messenger/entity/messenger-message.entity';

export const storyMessengerDetailsMapper = (
  story: StoryEntity,
  historicalContent: string,
  storyLanguageId: number,
  userLanguageId: number,
  defaultLanguage: LanguageEntity,
  messages: MessengerMessageEntity[],
): StoryMessengerModeratorRO => {
  return {
    ...storyWebDetailsMapper(
      story,
      historicalContent,
      storyLanguageId,
      userLanguageId,
      defaultLanguage,
    ),
    messages: messageMapper(messages, story),
    contactAccepted: isContactAccepted(story),
  };
};
