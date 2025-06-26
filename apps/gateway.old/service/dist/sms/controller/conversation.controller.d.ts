import { SMSConversationModel } from '@ourloop/shared';
import { StoryConversationService } from '../../story/service/story-conversation.service';
import { MessageService } from '../service/message.service';
import { ConversationRO } from '../../common/response/conversation.ro';
import { StoryModeratorService } from '../../story/service/story-moderator.service';
import { LanguageService } from '../../language/language.service';
export declare class ConversationController {
    private readonly storyConversationService;
    private readonly messageService;
    private readonly storyModeratorService;
    private readonly languageService;
    constructor(storyConversationService: StoryConversationService, messageService: MessageService, storyModeratorService: StoryModeratorService, languageService: LanguageService);
    saveMessages(data: SMSConversationModel): Promise<ConversationRO>;
}
