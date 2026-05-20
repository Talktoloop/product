import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { CaseSyncEntity } from './case-sync.entity';

@Entity('case_sync_investigation')
export class CaseSyncInvestigationEntity {
  constructor(data?: {
    investigationOpened?: Date;
    investigationClosed?: Date;
    whichOrganisationDoingInvestigation?: string;
    investigationOutcome?: string;
    referralToClearCheckMade?: boolean;
    caseId?: string;
  }) {
    if (data) {
      this.caseId = data?.caseId ?? undefined;
      this.investigationOpened = data?.investigationOpened ?? undefined;
      this.investigationClosed = data?.investigationClosed ?? undefined;
      this.whichOrganisationDoingInvestigation =
        data?.whichOrganisationDoingInvestigation ?? undefined;
      this.investigationOutcome = data?.investigationOutcome ?? undefined;
      this.referralToClearCheckMade =
        data?.referralToClearCheckMade ?? undefined;
    }
  }

  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ name: 'case_id', type: 'varchar', length: 36 })
  caseId: string;

  @Column({ name: 'investigation_opened', type: 'datetime' })
  investigationOpened: Date;

  @Column({ name: 'investigation_closed', type: 'datetime' })
  investigationClosed: Date;

  @Column({ name: 'which_organisation_doing_investigation', type: 'varchar' })
  whichOrganisationDoingInvestigation: string;

  @Column({ name: 'investigation_outcome', type: 'varchar' })
  investigationOutcome: string;

  @Column({ name: 'referral_to_clear_check_made', type: 'boolean' })
  referralToClearCheckMade?: boolean;

  @JoinColumn({ name: 'case_id', referencedColumnName: 'caseUUID' })
  @ManyToOne(
    () => CaseSyncEntity,
    (entity: CaseSyncEntity) => entity.investigations,
  )
  case: CaseSyncEntity;
}
