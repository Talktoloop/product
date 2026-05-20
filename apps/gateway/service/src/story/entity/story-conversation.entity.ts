import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  OneToOne,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { MessageEntity } from '../../sms/entity/message.entity';
import { MessengerMessageEntity } from '../../messenger/entity/messenger-message.entity';
import { IvrrCallEntity } from '../../ivrr/entity/ivrr-call.entity';
import { StoryEntity } from './story.entity';
import { LanguageEntity } from '../../language/entity/language.entity';
import { TwilioAudioDto } from '../../ivrr/request/dto/twilio-audio.dto';
import { UserEntity } from '../../user/entity/user.entity';

export interface StoreIvrrConversationEntityPayload {
  uuid: string;
  senderId: string;
  language?: LanguageEntity;
  shortCodeNumber: string;
  startedAt: Date;
  calls: Array<TwilioAudioDto>;
}

export interface StoreMessengerFlowMessagePayload {
  content: string;
  type: number;
  messageCreatedAt: Date;
  conversation: StoryConversationEntity;
  isStory: boolean;
  user?: UserEntity;
}

@Entity('story_communicator_conversation')
export class StoryConversationEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ name: 'language_id', type: 'smallint' })
  languageId: number;

  @ManyToOne(() => LanguageEntity, (lang: LanguageEntity) => lang.stories_lang)
  @JoinColumn({ name: 'language_id' })
  language: LanguageEntity;

  @Column({ type: 'varchar' })
  provider: string;

  @Column({ name: 'service_number', type: 'varchar' })
  serviceNumber: string;

  @Column({ name: 'story_id', type: 'varchar' })
  storyId: string;

  @OneToOne(() => StoryEntity, (story: StoryEntity) => story.conversation)
  @JoinColumn({ name: 'story_id' })
  story: StoryEntity;

  @Column({ type: 'varchar' })
  uuid: string;

  @Column({ name: 'additional_info', type: 'varchar' })
  additionalInfo: string;

  @Column({ name: 'started_at', type: 'datetime' })
  startedAt: Date;

  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  createdAt: Date;

  @OneToMany(
    () => MessageEntity,
    (message: MessageEntity) => message.conversation,
  )
  public smsMessages: MessageEntity[];

  @OneToMany(
    () => MessengerMessageEntity,
    (message: MessengerMessageEntity) => message.conversation,
  )
  public messengerMessages: MessengerMessageEntity[];

  @OneToMany(
    () => IvrrCallEntity,
    (message: IvrrCallEntity) => message.conversation,
  )
  public ivrrMessages: IvrrCallEntity[];

  public static saveMessengerConversation(
    payload: StoreMessengerFlowMessagePayload,
  ): MessengerMessageEntity {
    return Object.assign(new MessengerMessageEntity(), {
      ...payload,
      conversationId: payload.conversation.id,
      userId: payload?.user?.id,
    });
  }

  public static saveIvrrConversation(
    payload: StoreIvrrConversationEntityPayload,
  ): StoryConversationEntity {
    const payloadFiltered = { ...payload };
    delete payloadFiltered.calls;

    const ivrrConversationEntity = Object.assign(
      new StoryConversationEntity(),
      {
        ...payloadFiltered,
        languageId: payload.language?.id,
      },
    );

    return ivrrConversationEntity;
  }
}
