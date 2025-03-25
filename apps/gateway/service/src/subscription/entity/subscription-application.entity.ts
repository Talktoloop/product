import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { UserEntity } from '../../user/entity/user.entity';
import { SUBSCRIPTION_TYPE } from '../../subscription/constant/subscription-type.constant';
import { ACCESS_TYPE } from '../../subscription/constant/access-type.constant';

@Entity('subscription_application')
export class SubscriptionApplicationEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'enum', enum: SUBSCRIPTION_TYPE, name: 'type' })
  type: string;

  @Column({ type: 'enum', enum: ACCESS_TYPE, name: 'access' })
  access: string;

  @Column({ type: 'varchar', name: 'user_id' })
  userId: string;

  @CreateDateColumn({ name: 'timestamp' })
  timestamp: Date;

  @ManyToOne(() => UserEntity, (user) => user.subscriptionApplication)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
