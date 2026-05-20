import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { CaseSyncAllegationReferralEntity } from './case-sync-allegation_referral.entity';

@Entity('case_sync_allegation_referral_organisation')
export class CaseSyncAllegationReferralOrganisationEntity {
  constructor(data?: {
    name?: string;
    type?: string;
    allegationReferralId?: number;
  }) {
    if (data) {
      this.name = data?.name ?? undefined;
      this.type = data?.type ?? undefined;
      this.allegationReferralId = data?.allegationReferralId ?? undefined;
    }
  }

  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ name: 'allegation_referral_id', type: 'int' })
  allegationReferralId: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  type: string;

  @JoinColumn({ name: 'allegation_referral_id', referencedColumnName: 'id' })
  @ManyToOne(
    () => CaseSyncAllegationReferralEntity,
    (entity: CaseSyncAllegationReferralEntity) => entity.organisations,
  )
  allegationReferral: CaseSyncAllegationReferralEntity;
}
