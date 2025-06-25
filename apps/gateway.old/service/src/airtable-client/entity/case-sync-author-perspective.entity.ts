import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { CaseSyncEntity } from './case-sync.entity';

@Entity('case_sync_author_perspective')
export class CaseSyncAuthorPerspectiveEntity {
  constructor(data?: { authorPerspective: string; caseId?: string }) {
    if (data) {
      this.authorPerspective = data?.authorPerspective ?? undefined;
      this.caseId = data?.caseId ?? undefined;
    }
  }

  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ name: 'case_id', type: 'varchar', length: 36 })
  caseId: string;

  @Column({ name: 'author_perspective', type: 'varchar' })
  authorPerspective?: string;

  @JoinColumn({ name: 'case_id', referencedColumnName: 'caseUUID' })
  @ManyToOne(
    () => CaseSyncEntity,
    (entity: CaseSyncEntity) => entity.authorPerspective,
  )
  case: CaseSyncEntity;
}
