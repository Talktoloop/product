import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CommentEntity } from './comment.entity';
import { UserEntity } from '../../user/entity/user.entity';

@Entity('story_comment_vote')
export class CommentVoteEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ name: 'hash', type: 'varchar' })
  hash: string;

  @Column({ name: 'comment_id', type: 'varchar' })
  commentId: string;

  @ManyToOne(() => CommentEntity, (comments: CommentEntity) => comments.votes)
  @JoinColumn({ name: 'comment_id' })
  comment: CommentEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'user_id', type: 'varchar' })
  userId?: string;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.commentVotes)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;
}
