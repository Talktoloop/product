import { CommentRepository } from '../repository/comment.repository';
import { AddCommentDto } from '../request/dto/add-comment.dto';
import { StoryEntity } from '../../story/entity/story.entity';
import { CommentEntity } from '../entity/comment.entity';
import { COMMENT_STATUS } from '@ourloop/shared';
import { CommentVoteRepository } from '../repository/comment-vote.repository';
import { UserEntity } from '../../user/entity/user.entity';
import { LanguageService } from '../../language/language.service';
import { CHANNEL_CONSTANTS } from '../../common/constant/channel.constant';
import { CommentRecipientRepository } from '../repository/comment-recipient.repository';
export declare class CommentService {
    private readonly commentRepository;
    private readonly commentVoteRepository;
    private readonly languageService;
    private readonly commentRecipientRepository;
    constructor(commentRepository: CommentRepository, commentVoteRepository: CommentVoteRepository, languageService: LanguageService, commentRecipientRepository: CommentRecipientRepository);
    findComment(id: string, relations?: string[]): Promise<CommentEntity>;
    addComment(languageId: number, story: StoryEntity, data: AddCommentDto, user?: UserEntity, channel?: CHANNEL_CONSTANTS): Promise<CommentEntity>;
    findAllByStoryId(id: string): Promise<CommentEntity[]>;
    findCommentIdsByCountryAndStatus(countryId: number, status: COMMENT_STATUS): Promise<any>;
    addNewVote(id: string, hash: string, user?: UserEntity): Promise<boolean>;
    removeVote(id: string, hash: string, user?: UserEntity): Promise<boolean>;
}
