import { S3Service, IvrrCommentDTO, IvrrStoryDTO } from '@ourloop/shared';
import { SuccessRO } from '../../common/response/success.ro';
import { IvrrService } from '../service/ivrr.service';
import { SaveIvrrStoryDto } from '../request/dto/save-ivrr-story.dto';
import { SaveIvrrCallDto } from '../request/dto/save-ivrr-call.dto';
import { ConfigService } from '@nestjs/config';
import { UploadedFilesRO } from '../response/uploaded-files.ro';
import { CommentService } from '../../comment/service/comment.service';
import { CommentModeratorService } from '../../comment/service/comment-moderator.service';
import { RecordingsRO } from '../response/recordings.ro';
import { SetCommentAsPublishedDto } from '../request/dto/set-comment-as-published.dto';
import { UpdateIvrrCallFlowDto } from '../request/dto/update-ivrr-call-flow.dto';
import { StoryModeratorService } from '../../story/service/story-moderator.service';
import { TranscribeHistoricalStoriesDto } from '../request/dto/transcribe-historical-stories.dto';
export declare class IvrrController {
    private readonly ivrrService;
    private readonly commentService;
    private readonly storyModeratorService;
    private readonly commentModeratorService;
    private readonly s3Service;
    private readonly config;
    private readonly logger;
    constructor(ivrrService: IvrrService, commentService: CommentService, storyModeratorService: StoryModeratorService, commentModeratorService: CommentModeratorService, s3Service: S3Service, config: ConfigService);
    testToIvrr(): Promise<any>;
    testInternal(): Promise<any>;
    testInternalMessage(): Promise<any>;
    getIvrrCommentDetails(data: {
        commentId: string;
    }): Promise<IvrrCommentDTO>;
    getIvrrStoryDetails(data: {
        storyId: string;
    }): Promise<IvrrStoryDTO>;
    test(): Promise<SuccessRO>;
    saveIvrrStory(data: SaveIvrrStoryDto): Promise<SuccessRO>;
    saveIvrrModeratorCall(data: SaveIvrrCallDto): Promise<SuccessRO>;
    setCommentAsPublished(data: SetCommentAsPublishedDto): Promise<SuccessRO>;
    updateTwilioCall(data: UpdateIvrrCallFlowDto): Promise<SuccessRO>;
    getIVRRFileSignedUrl(s3FileId: string): Promise<string>;
    getRecordings(language: string): Promise<RecordingsRO>;
    uploadMultipleFiles(data: {
        commentId: string;
    }, files: Express.Multer.File[]): Promise<UploadedFilesRO>;
    updateRecordingDuration(): Promise<void>;
    transcribeHistoricalFeedback(params: TranscribeHistoricalStoriesDto): Promise<void>;
}
