import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import { SourceType } from '../enum/source-type.enum';
import { SchedulerStatus } from '../enum/status.enum';

@Entity('ivrr_scheduler')
export class SchedulerEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ name: 'source_id', type: 'varchar', length: 36 })
  sourceId: string;

  @Column({ type: 'enum', enum: SourceType })
  type: SourceType;

  @Column({ type: 'enum', enum: SchedulerStatus })
  status: SchedulerStatus;

  @Column({ type: 'varchar', length: 3 })
  lang: string;

  @Column({ name: 'provider_number', type: 'varchar', length: 36 })
  providerNumber: string;

  @Column({ name: 'call_id', type: 'varchar', length: 36 })
  callId: string;

  @CreateDateColumn()
  time?: Date;

  @Column({ type: 'tinyint' })
  timezone: number;

  @Column({ name: 'sequence_number', type: 'tinyint' })
  sequenceNumber: number;
}
