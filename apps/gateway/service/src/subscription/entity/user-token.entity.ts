import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  CreateDateColumn,
} from 'typeorm';
import { UserEntity } from '../../user/entity/user.entity';

@Entity('user_token')
export class UserTokenEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar' })
  token: string;

  @Column({ type: 'varchar', name: 'user_id' })
  userId: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @OneToOne(() => UserEntity, (user) => user.subscriptionToken)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
