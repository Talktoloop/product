import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { CommentEntity } from '../../comment/entity/comment.entity';
import { MessageEntity } from '../../sms/entity/message.entity';

@Entity('user_consent')
export class UserConsentEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 150 })
  document: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @OneToMany(() => CommentEntity, (comment: CommentEntity) => comment.user)
  public comments?: CommentEntity[];

  @OneToMany(() => MessageEntity, (message: MessageEntity) => message.user)
  public messages?: MessageEntity[];
}
