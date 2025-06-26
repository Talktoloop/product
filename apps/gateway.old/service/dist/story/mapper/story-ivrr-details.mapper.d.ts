import { StoryEntity } from '../entity/story.entity';
import { StoryIvrrModeratorRO } from '../response/story-ivrr-moderator.ro';
import { LanguageEntity } from '../../language/entity/language.entity';
import { StoryConversationEntity } from '../entity/story-conversation.entity';
export declare const storyIvrrDetailsMapper: (story: StoryEntity, conversation: StoryConversationEntity, historicalContent: string, storyLanguageId: number, userLanguageId: number, defaultLanguage: LanguageEntity, otherStoriesSameRecipient: {
    id: string;
    status: string;
    createdAt: any;
}[]) => StoryIvrrModeratorRO;
