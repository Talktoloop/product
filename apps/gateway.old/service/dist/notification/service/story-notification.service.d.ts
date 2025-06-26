import { StoryEntity } from '../../story/entity/story.entity';
import { UserService } from '../../user/service/user.service';
import { NotificationService } from './notification.service';
import { RejectContentDto } from '../../common/dto/reject-content.dto';
import { ConfigService } from '@nestjs/config';
import { CaseManagerService } from '../../case-manager/service/case-manager.service';
export declare class StoryNotificationService {
    private readonly notificationService;
    private readonly userService;
    private readonly config;
    private caseManagerService;
    private readonly logger;
    constructor(notificationService: NotificationService, userService: UserService, config: ConfigService, caseManagerService: CaseManagerService);
    sendNotificationsAfterStoryPublication(story: StoryEntity): Promise<void>;
    sendNotificationAfterUrgentStory(storyId: string): Promise<void>;
    sendNotificationsAfterRejectingStory(story: StoryEntity, rejectContent: RejectContentDto): Promise<void>;
}
