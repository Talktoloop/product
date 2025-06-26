import { StoryEntity } from '../entity/story.entity';
import { StoryMessengerModeratorRO } from '../response/story-messenger-moderator.ro';
import { LanguageEntity } from '../../language/entity/language.entity';
import { MessengerMessageEntity } from '../../messenger/entity/messenger-message.entity';
export declare const storyMessengerDetailsMapper: (story: StoryEntity, historicalContent: string, storyLanguageId: number, userLanguageId: number, defaultLanguage: LanguageEntity, messages: MessengerMessageEntity[]) => StoryMessengerModeratorRO;
