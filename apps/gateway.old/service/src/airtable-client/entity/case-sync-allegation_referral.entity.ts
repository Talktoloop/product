import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { CaseSyncEntity } from './case-sync.entity';
import { CaseSyncAllegationReferralOrganisationEntity } from './case-sync-allegation_referral_organisation.entity';

@Entity('case_sync_allegation_referral')
export class CaseSyncAllegationReferralEntity {
  constructor(data?: {
    allegationReferralDate?: Date;
    responseToAllegationReferralDate?: Date;
    organisations?: CaseSyncAllegationReferralOrganisationEntity[];
    caseId?: string;
  }) {
    if (data) {
      this.allegationReferralDate = data?.allegationReferralDate ?? undefined;
      this.responseToAllegationReferralDate =
        data?.responseToAllegationReferralDate ?? undefined;
      this.organisations = data?.organisations ?? undefined;
      this.caseId = data?.caseId ?? undefined;
    }
  }

  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ name: 'case_id', type: 'varchar', length: 36 })
  caseId: string;

  @Column({ name: 'allegation_referral_date', type: 'datetime' })
  allegationReferralDate?: Date;

  @Column({ name: 'response_to_allegation_referral_date', type: 'datetime' })
  responseToAllegationReferralDate: Date;

  @JoinColumn({ name: 'case_id', referencedColumnName: 'caseUUID' })
  @ManyToOne(
    () => CaseSyncEntity,
    (entity: CaseSyncEntity) => entity.authorPerspective,
  )
  case: CaseSyncEntity;

  @OneToMany(
    () => CaseSyncAllegationReferralOrganisationEntity,
    (organisation: CaseSyncAllegationReferralOrganisationEntity) =>
      organisation.allegationReferral,
    { cascade: true },
  )
  organisations: CaseSyncAllegationReferralOrganisationEntity[];
}
