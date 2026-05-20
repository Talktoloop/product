import { StoryEntity } from '../entity/story.entity';
import { messagesMapper } from '../../sms/mapper/messages.mapper';
import { storyWebDetailsMapper } from './story-web-details.mapper';
import { StorySMSModeratorRO } from '../response/story-sms-moderator.ro';
import { isContactAccepted } from '../../common/helpers';
import { LanguageEntity } from '../../language/entity/language.entity';
import { MessageEntity } from '../../sms/entity/message.entity';

export const storySMSDetailsMapper = (
  story: StoryEntity,
  historicalContent: string,
  storyLanguageId: number,
  userLanguageId: number,
  defaultLanguage: LanguageEntity,
  messages: MessageEntity[],
): StorySMSModeratorRO => {
  return {
    ...storyWebDetailsMapper(
      story,
      historicalContent,
      storyLanguageId,
      userLanguageId,
      defaultLanguage,
    ),
    messages: messagesMapper(messages),
    contactAccepted: isContactAccepted(story),
  };
};
