import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { UserEntity } from '../../user/entity/user.entity';

@Entity('user_export_csv_activity')
export class UserExportCsvActivityEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', name: 'user_id' })
  userId: string;

  @CreateDateColumn({ name: 'timestamp' })
  timestamp: Date;

  @ManyToOne(() => UserEntity, (user) => user.exportCsvActivities)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;
}
