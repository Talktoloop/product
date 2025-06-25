import {
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import { StoryConversationEntity } from '../../story/entity/story-conversation.entity';
import { UserEntity } from '../../user/entity/user.entity';

export const MESSAGE_MAX_LENGTH = 640;

@Entity('message')
export class MessageEntity {
  constructor(
    data: {
      conversationId?: number;
      languageId?: number;
      content?: string;
      isPinned?: boolean;
      isStory?: boolean;
      isUser?: boolean;
      userId?: string;
      createdAt?: Date;
    } = {},
  ) {
    this.content = data.content;
    this.isPinned = data.isPinned;
    this.isStory = data.isStory;
    this.conversationId = data.conversationId;
    this.isUser = data.isUser;
    this.userId = data.userId;
    this.createdAt = data.createdAt;
  }

  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ name: 'is_user', type: 'boolean', default: true })
  isUser: boolean;

  @Column({ name: 'conversation_id', type: 'int' })
  conversationId: number;

  @ManyToOne(
    () => StoryConversationEntity,
    (conversation: StoryConversationEntity) => conversation.smsMessages,
  )
  @JoinColumn({ name: 'conversation_id' })
  conversation: StoryConversationEntity;

  @Column({ type: 'varchar', length: MESSAGE_MAX_LENGTH })
  content: string;

  @Column({
    type: 'boolean',
    name: 'is_pinned',
    default: false,
  })
  isPinned: boolean;

  @Column({ name: 'user_id', type: 'string' })
  userId: string;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.messages)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @Column({
    type: 'boolean',
    name: 'is_story',
    default: false,
  })
  isStory: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  createdAt: Date;
}
