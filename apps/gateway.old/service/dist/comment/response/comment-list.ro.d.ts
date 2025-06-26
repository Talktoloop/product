import { UserCommentDetailsRO } from '../../user/response/user-comment-details.ro';
import { TRANSLATION_TYPE_CONSTANTS } from '../../common/constant/translation-type.constant';
export declare class CommentListRO {
    content: string;
    id: string;
    createdAt: string;
    user?: UserCommentDetailsRO;
    votes: number;
    authorNickname?: string;
    storyId: string;
    status: number;
    contentType: TRANSLATION_TYPE_CONSTANTS;
    language: string;
    solution_proposed: boolean;
    thematics: number[];
}
