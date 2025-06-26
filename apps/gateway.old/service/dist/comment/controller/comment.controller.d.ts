import { CommentService } from '../service/comment.service';
import { AddCommentDto } from '../request/dto/add-comment.dto';
import { SuccessRO } from '../../common/response/success.ro';
import { StoryService } from '../../story/service/story.service';
import { CommentStoryListRO } from '../response/comment-story-list.ro';
import { UserEntity } from '../../user/entity/user.entity';
import { SendCommentDto } from '../request/dto/send-comment.dto';
import { ConfigService } from '@nestjs/config';
export declare class CommentController {
    private readonly commentService;
    private readonly storyService;
    private readonly config;
    constructor(commentService: CommentService, storyService: StoryService, config: ConfigService);
    addNewComment(user: UserEntity, storyId: string, data: AddCommentDto, languageId: number): Promise<SuccessRO>;
    addCommentVote(user: UserEntity, commentId: string, ipAddress: string, reqHeaders: Headers): Promise<SuccessRO>;
    unVoteComment(user: UserEntity, commentId: string, ipAddress: string, reqHeaders: Headers): Promise<SuccessRO>;
    getListOfComments(storyId: string, languageId: number): Promise<CommentStoryListRO[]>;
    saveReplyAsComment(user: UserEntity, data: SendCommentDto): Promise<void>;
}
