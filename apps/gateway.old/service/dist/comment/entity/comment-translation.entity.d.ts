import { CommentEntity } from './comment.entity';
import { LanguageEntity } from '../../language/entity/language.entity';
import { TRANSLATION_TYPE_CONSTANTS } from '../../common/constant/translation-type.constant';
import { TRANSLATION_STATUS_CONSTANTS } from '../../common/constant/translation-status.constants';
export declare class CommentTranslationEntity {
    constructor(data?: {
        commentId?: string;
        languageId?: number;
        content?: string;
    });
    id: number;
    languageId: number;
    commentId: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    type: TRANSLATION_TYPE_CONSTANTS;
    comment: CommentEntity;
    language: LanguageEntity;
    status: TRANSLATION_STATUS_CONSTANTS;
    isOriginalContent?: boolean;
}
