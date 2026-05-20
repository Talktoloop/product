import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { CaseSyncEntity } from './case-sync.entity';

@Entity('case_sync_thematic_area')
export class CaseSyncThematicAreaEntity {
  constructor(data?: { thematicArea: string; caseId?: string }) {
    if (data) {
      this.thematicArea = data?.thematicArea ?? undefined;
      this.caseId = data?.caseId ?? undefined;
    }
  }

  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ name: 'case_id', type: 'varchar', length: 36 })
  caseId: string;

  @Column({ name: 'thematic_area', type: 'varchar' })
  thematicArea?: string;

  @JoinColumn({ name: 'case_id', referencedColumnName: 'caseUUID' })
  @ManyToOne(
    () => CaseSyncEntity,
    (entity: CaseSyncEntity) => entity.thematicArea,
  )
  case: CaseSyncEntity;
}
