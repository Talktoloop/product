import { StoryEntity } from '../entity/story.entity';
import { StorySMSModeratorRO } from '../response/story-sms-moderator.ro';
import { LanguageEntity } from '../../language/entity/language.entity';
import { MessageEntity } from '../../sms/entity/message.entity';
export declare const storySMSDetailsMapper: (story: StoryEntity, historicalContent: string, storyLanguageId: number, userLanguageId: number, defaultLanguage: LanguageEntity, messages: MessageEntity[]) => StorySMSModeratorRO;
