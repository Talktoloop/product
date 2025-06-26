import { StoryTranslationEntity } from '../../story/entity/story-translation.entity';
import { CommentTranslationEntity } from '../../comment/entity/comment-translation.entity';
import { UserEntity } from '../../user/entity/user.entity';
import { StoryEntity } from '../../story/entity/story.entity';
import { CommentEntity } from '../../comment/entity/comment.entity';
import { PROVIDER_TYPE } from '../interface/provider.enum';
import { CaseManagerLanguageEntity } from '../../case-manager/entity/case-manager-language.entity';
import { StoryConversationEntity } from '../../story/entity/story-conversation.entity';
import { CountryEntity } from '../../country/entity/country.entity';
export declare class LanguageEntity {
    id: number;
    isDefault: boolean;
    visible: boolean;
    provider?: PROVIDER_TYPE;
    alternativeProvider?: PROVIDER_TYPE;
    code: string;
    transcribeLang: string;
    dialect?: string;
    stories: StoryTranslationEntity[];
    countries: CountryEntity[];
    comments: CommentTranslationEntity[];
    users: UserEntity[];
    stories_lang: StoryEntity[];
    comments_lang: CommentEntity[];
    caseManagers: CaseManagerLanguageEntity[];
    conversations?: StoryConversationEntity[];
}
