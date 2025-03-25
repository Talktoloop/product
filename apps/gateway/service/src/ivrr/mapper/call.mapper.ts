import { plainToClass } from 'class-transformer';
import { CallRO } from '../response/call.ro';
import { StoryConversationEntity } from '../../story/entity/story-conversation.entity';

export const callMapper = (conversation: StoryConversationEntity): CallRO[] => {
  return conversation.ivrrMessages?.map((call) => {
    return plainToClass(CallRO, {
      ...call,
      storyId: call.isStory ? conversation.storyId : undefined,
    });
  });
};
