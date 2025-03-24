import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { CaseSyncEntity } from './case-sync.entity';

@Entity('case_sync_thematic_area_subsection')
export class CaseSyncThematicAreaSubsectionEntity {
  constructor(data?: { thematicAreaSubsection: string; caseId?: string }) {
    if (data) {
      this.thematicAreaSubsection = data?.thematicAreaSubsection ?? undefined;
      this.caseId = data?.caseId ?? undefined;
    }
  }

  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ name: 'case_id', type: 'varchar', length: 36 })
  caseId: string;

  @Column({ name: 'thematic_area_subsection', type: 'varchar' })
  thematicAreaSubsection?: string;

  @JoinColumn({ name: 'case_id', referencedColumnName: 'caseUUID' })
  @ManyToOne(
    () => CaseSyncEntity,
    (entity: CaseSyncEntity) => entity.thematicAreaSubsection,
  )
  case: CaseSyncEntity;
}
