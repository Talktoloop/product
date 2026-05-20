import { StoryEntity } from '../entity/story.entity';
import { storyWebDetailsMapper } from './story-web-details.mapper';
import { isContactAccepted } from '../../common/helpers';
import { StoryIvrrModeratorRO } from '../response/story-ivrr-moderator.ro';
import { callMapper } from '../../ivrr/mapper/call.mapper';
import { LanguageEntity } from '../../language/entity/language.entity';
import { StoryConversationEntity } from '../entity/story-conversation.entity';

export const storyIvrrDetailsMapper = (
  story: StoryEntity,
  conversation: StoryConversationEntity,
  historicalContent: string,
  storyLanguageId: number,
  userLanguageId: number,
  defaultLanguage: LanguageEntity,
  otherStoriesSameRecipient: { id: string, status: string, createdAt: Date, channel: string, url: string }[],
  vulnerabilityFactors?: any[],
): StoryIvrrModeratorRO => {
  return {
    ...storyWebDetailsMapper(
      story,
      historicalContent,
      storyLanguageId,
      userLanguageId,
      defaultLanguage,
      vulnerabilityFactors,
    ),
    calls: callMapper(conversation),
    contactAccepted: isContactAccepted(story),
    otherStoriesSameRecipient
  };
};
