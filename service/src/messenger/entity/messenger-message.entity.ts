import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '../../user/entity/user.entity';
import { StoryConversationEntity } from '../../story/entity/story-conversation.entity';

export interface StoreMessengerFlowMessagePayload {
  content: string;
  type: number;
  messageCreatedAt: Date;
  conversation: StoryConversationEntity;
  isStory: boolean;
  user?: UserEntity;
}

@Entity('messenger_message')
export class MessengerMessageEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({
    type: 'text',
    name: 'content',
  })
  content: string;

  @Column({
    type: 'tinyint',
    name: 'type',
  })
  type: number;

  @Column({
    type: 'int',
    name: 'conversation_id',
  })
  conversationId: number;

  @Column({
    type: 'boolean',
    name: 'is_story',
    default: false,
  })
  isStory: boolean;

  @Column({
    type: 'boolean',
    name: 'is_pinned',
    default: false,
  })
  isPinned: boolean;

  @Column({
    type: 'datetime',
    name: 'message_created_at',
  })
  messageCreatedAt: Date;

  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  createdAt: Date;

  @ManyToOne(
    () => StoryConversationEntity,
    (storyConversationEntity) => storyConversationEntity.messengerMessages,
  )
  @JoinColumn({ name: 'conversation_id' })
  conversation: StoryConversationEntity;

  @Column({ name: 'user_id', type: 'string' })
  userId: string;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.messages)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
