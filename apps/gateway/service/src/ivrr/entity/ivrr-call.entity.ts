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

export interface IvrrCallPayload {
  twilioCallSid: string;
  s3FileId: string;
  conversation: StoryConversationEntity;
  isStory: boolean;
  isModeratorCall: boolean;
  twilioFlowXml?: string;
  user?: UserEntity;
  callDate: Date;
  recordingDuration?: number;
}

@Entity('ivrr_call')
export class IvrrCallEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({
    type: 'varchar',
    name: 'twilio_call_sid',
  })
  twilioCallSid: string;

  @Column({
    type: 'text',
    name: 's3_file_id',
  })
  s3FileId: string;

  @Column({
    type: 'int',
    name: 'percentage_level_of_listening_call',
    default: 0,
  })
  percentageLevelOfListeningCall: number;

  @Column({
    type: 'varchar',
    name: 'twilio_flow_xml',
  })
  twilioFlowXml?: string;

  @Column({
    type: 'varchar',
    name: 'content',
  })
  content?: string;

  @Column({
    type: 'varchar',
    name: 'comment_id',
  })
  commentId?: string;

  @Column({
    type: 'int',
    name: 'transcription_status',
  })
  transcriptionStatus?: number;

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
    name: 'is_moderator_call',
    default: false,
  })
  isModeratorCall: boolean;

  @Column({
    type: 'datetime',
    name: 'call_date',
  })
  callDate: Date;

  @Column({
    type: 'int',
    name: 'recording_duration',
  })
  recordingDuration: number;

  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  createdAt: Date;

  @ManyToOne(() => StoryConversationEntity, (entity) => entity.ivrrMessages)
  @JoinColumn({ name: 'conversation_id' })
  conversation: StoryConversationEntity;

  @Column({ name: 'user_id', type: 'string' })
  userId: string;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.messages)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  public static createFrom(payload: IvrrCallPayload): IvrrCallEntity {
    return Object.assign(new IvrrCallEntity(), {
      ...payload,
      conversationId: payload.conversation.id,
      userId: payload?.user?.id,
    });
  }
}
