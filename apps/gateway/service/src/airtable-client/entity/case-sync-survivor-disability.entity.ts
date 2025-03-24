import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { CaseSyncEntity } from './case-sync.entity';

@Entity('case_sync_survivor_disability')
export class CaseSyncSurvivorDisabilityEntity {
  constructor(data?: { survivorDisability: string; caseId?: string }) {
    if (data) {
      this.survivorDisability = data?.survivorDisability ?? undefined;
      this.caseId = data?.caseId ?? undefined;
    }
  }

  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ name: 'case_id', type: 'varchar', length: 36 })
  caseId: string;

  @Column({ name: 'survivor_disability', type: 'varchar' })
  survivorDisability?: string;

  @JoinColumn({ name: 'case_id', referencedColumnName: 'caseUUID' })
  @ManyToOne(
    () => CaseSyncEntity,
    (entity: CaseSyncEntity) => entity.survivorDisability,
  )
  case: CaseSyncEntity;
}
