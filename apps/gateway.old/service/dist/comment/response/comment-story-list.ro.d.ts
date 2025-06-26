import { CommentListRO } from './comment-list.ro';
import { TranslationRO } from '../../common/response/translation';
export declare class CommentStoryListRO extends CommentListRO {
    children?: CommentListRO[];
    translations: TranslationRO[];
}
