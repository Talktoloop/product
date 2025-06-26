import { OrganisationStoriesRO } from '../../organisation/response/organisation-stories.ro';
import { UserCommentDetailsRO } from '../../user/response/user-comment-details.ro';
import { TRANSLATION_TYPE_CONSTANTS } from '../../common/constant/translation-type.constant';
import { TranslationRO } from '../../common/response/translation';
import { CategoryRO } from '../../category/response/category.ro';
export declare class StoryListRO {
    id: string;
    content: string;
    publishedAt: string;
    place: string;
    channel: string;
    authorNickname?: string;
    country: string;
    countryId: number;
    categories: CategoryRO[];
    organisations: OrganisationStoriesRO[];
    votes: number;
    views: number;
    comments: number;
    user?: UserCommentDetailsRO;
    contentType: TRANSLATION_TYPE_CONSTANTS;
    language: string;
    translations: TranslationRO[];
    thematics: number[];
}
