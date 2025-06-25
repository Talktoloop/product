import { Body, Controller } from '@nestjs/common';
import {
  ValidationPipe,
  SMSConversationModel,
  STORY_STATUS,
} from '@ourloop/shared';
import { StoryConversationService } from '../../story/service/story-conversation.service';
import { MessageService } from '../service/message.service';
import { MessagePattern } from '@nestjs/microservices';
import { saveConversationSchema } from '../request/schema/save-conversation-schema';
import { ConversationRO } from '../../common/response/conversation.ro';
import { plainToClass } from 'class-transformer';
import { StoryModeratorService } from '../../story/service/story-moderator.service';
import { LanguageService } from '../../language/language.service';
import { StoryConversationEntity } from '../../story/entity/story-conversation.entity';

@Controller('conversation')
export class ConversationController {
  constructor(
    private readonly storyConversationService: StoryConversationService,
    private readonly messageService: MessageService,
    private readonly storyModeratorService: StoryModeratorService,
    private readonly languageService: LanguageService,
  ) {}

  @MessagePattern({ cmd: 'saveConversation' })
  async saveMessages(
    @Body(new ValidationPipe(saveConversationSchema, { isRpcException: true }))
    data: SMSConversationModel,
  ): Promise<ConversationRO> {
    let conversation: StoryConversationEntity;

    if (data.uuid) {
      conversation = await this.storyConversationService.findByUUID(data.uuid);
    }

    if (conversation) {
      return plainToClass(ConversationRO, conversation);
    }

    await this.storyModeratorService.changeStoryStatus(
      STORY_STATUS.AWAITING_REPLAY,
      STORY_STATUS.ISSUER_DID_NOT_REPLIED,
    );
    const language = await this.languageService.getLanguageByCode(
      data.messages[0]?.language,
    );
    conversation = await this.storyConversationService.saveConversation({
      serviceNumber: data.loopPhoneNumber,
      createdAt: new Date(data.messages[0]?.timestamp),
      storyId: data.storyId,
      provider: data.messages[0]?.provider,
      languageId: language?.id,
      uuid: data.uuid,
    });
    const { story } = await this.messageService.saveMessages(
      conversation,
      data,
    );
    await this.storyConversationService.setStoryId(conversation.id, story?.id);

    return plainToClass(ConversationRO, conversation);
  }
}
