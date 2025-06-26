import { TranslationRO } from '../../common/response/translation';
import { CommentListRO } from './comment-list.ro';
import { CHANNEL_CONSTANTS } from '../../common/constant/channel.constant';
import { LexiconRO } from '../../lexicon/response/lexicon.ro';
export declare class CommentModeratorRO extends CommentListRO {
    emailProvided: boolean;
    translations: TranslationRO[];
    language: string;
    s3FileId: string;
    storyLanguage: string;
    parentCommentId: string;
    status: number;
    solution_proposed: boolean;
    userId: string;
    publishedAt: string;
    channel: CHANNEL_CONSTANTS;
    storyChannel: CHANNEL_CONSTANTS;
    rejectRationale: string;
    rejectReasons: LexiconRO[];
    thematics: number[];
}
