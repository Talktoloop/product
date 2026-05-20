import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  OneToMany,
  DeleteDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { CASE_STATUS } from '../constant/case-status.constant';
import { CaseSyncAuthorPerspectiveEntity } from './case-sync-author-perspective.entity';
import { CaseSyncThematicAreaEntity } from './case-sync-thematic-area.entity';
import { CaseSyncThematicAreaSubsectionEntity } from './case-sync-thematic-area-subsection.entity';
import { CaseSyncSurvivorDisabilityEntity } from './case-sync-survivor-disability.entity';
import { CountryEntity } from '../../country/entity/country.entity';
import { CaseSyncInvestigationEntity } from './case-sync-investigation.entity';
import { CaseSyncAllegationReferralEntity } from './case-sync-allegation_referral.entity';

@Entity('case_sync')
export class CaseSyncEntity {
  @PrimaryColumn({ type: 'varchar', name: 'case_uuid' })
  caseUUID: string;

  @CreateDateColumn({ name: 'story_created' })
  storyCreated: Date;

  @Column({ name: 'urgency', type: 'varchar' })
  urgency?: string;

  @Column({ name: 'initial_urgency', type: 'varchar' })
  initialUrgency?: string;

  @Column({ name: 'case_status', type: 'enum', enum: CASE_STATUS })
  caseStatus: CASE_STATUS;

  @CreateDateColumn({ name: 'case_created' })
  caseCreated: Date;

  @Column({ name: 'allegation_type', type: 'varchar' })
  allegationType?: string;

  @Column({ name: 'referred_to_assistance', type: 'varchar' })
  referredToAssistance?: string;

  @Column({ name: 'allegation_organization', type: 'varchar' })
  allegationOrganization?: string;

  @CreateDateColumn({ name: 'incident_date' })
  incidentDate?: Date;

  @Column({ name: 'incident_country', type: 'varchar' })
  incidentCountry?: string;

  @Column({ name: 'incident_province', type: 'varchar' })
  incidentProvince?: string;

  @Column({ name: 'survivor_gender', type: 'varchar' })
  survivorGender?: string;

  @Column({ name: 'survivor_age', type: 'varchar' })
  survivorAge?: string;

  @Column({ name: 'author_need_assistance', type: 'varchar' })
  authorNeedAssistance?: string;

  @Column({ name: 'assistance_status', type: 'varchar' })
  assistanceStatus?: string;

  @CreateDateColumn({ name: 'case_processed' })
  caseProcessed?: Date;

  @Column({ name: 'referral_response', type: 'varchar' })
  referralResponse?: string;

  @CreateDateColumn({ name: 'assessment_made' })
  assessmentMade?: Date;

  @Column({ name: 'investigation_status', type: 'varchar' })
  investigationStatus?: string;

  @Column({ name: 'informing_author', type: 'varchar' })
  informingAuthor?: string;

  @CreateDateColumn({ name: 'case_closed' })
  caseClosed?: Date;

  @Column({ name: 'case_unaccounted_closed_status', type: 'varchar' })
  caseUnaccountedClosedStatus?: string;

  @CreateDateColumn({ name: 'assistance_referral_made' })
  assistanceReferralMade?: Date;

  @Column({ name: 'assistance_who_made_referral', type: 'varchar' })
  assistanceWhoMadeReferral?: string;

  @Column({
    name: 'has_the_survivor_been_rendered_assistance',
    type: 'varchar',
  })
  hasTheSurvivorBeenRenderedAssistance?: string;

  @Column({ name: 'organisation_type', type: 'varchar' })
  organisationType?: string;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt?: Date;

  @OneToMany(
    () => CaseSyncAuthorPerspectiveEntity,
    (caseAuthorPerspective: CaseSyncAuthorPerspectiveEntity) =>
      caseAuthorPerspective.case,
    { cascade: true },
  )
  authorPerspective?: CaseSyncAuthorPerspectiveEntity[];

  @Column({ name: 'case_accountability', type: 'varchar' })
  caseAccountability?: string;

  @Column({ name: 'process_and_refer_last_update_time', type: 'datetime' })
  processAndReferLastUpdateTime?: Date;

  @Column({ name: 'response_to_referral_last_update_time', type: 'datetime' })
  responseToReferralLastUpdateTime?: Date;

  @Column({
    name: 'enough_information_to_investigate_last_update',
    type: 'datetime',
  })
  enoughInformationToInvestigateLastUpdate?: Date;

  @Column({
    name: 'investigation_status_last_update',
    type: 'datetime',
  })
  investigationStatusLastUpdate?: Date;

  @Column({
    name: 'author_informed_of_case_outcomes_last_update',
    type: 'datetime',
  })
  authorInformedOfCaseOutcomesLastUpdate?: Date;

  @Column({
    name: 'decision_to_investigate_status_last_update',
    type: 'datetime',
  })
  decisionToInvestigateStatusLastUpdate?: Date;

  @OneToMany(
    () => CaseSyncAllegationReferralEntity,
    (caseAllegationReferral: CaseSyncAllegationReferralEntity) =>
      caseAllegationReferral.case,
    { cascade: true },
  )
  allegationReferrals?: CaseSyncAllegationReferralEntity[];

  @OneToMany(
    () => CaseSyncSurvivorDisabilityEntity,
    (survivorDisability: CaseSyncSurvivorDisabilityEntity) =>
      survivorDisability.case,
    { cascade: true },
  )
  survivorDisability?: CaseSyncSurvivorDisabilityEntity[];

  @OneToMany(
    () => CaseSyncThematicAreaEntity,
    (caseThematicArea: CaseSyncThematicAreaEntity) => caseThematicArea.case,
    { cascade: true },
  )
  thematicArea?: CaseSyncThematicAreaEntity[];

  @OneToMany(
    () => CaseSyncThematicAreaSubsectionEntity,
    (caseThematicAreaSubsection: CaseSyncThematicAreaSubsectionEntity) =>
      caseThematicAreaSubsection.case,
    { cascade: true },
  )
  thematicAreaSubsection?: CaseSyncThematicAreaSubsectionEntity[];

  @OneToMany(
    () => CaseSyncInvestigationEntity,
    (investigation: CaseSyncInvestigationEntity) => investigation.case,
    { cascade: true },
  )
  investigations?: CaseSyncInvestigationEntity[];

  @Column({ name: 'process_and_refer_status', type: 'varchar' })
  processAndReferStatus?: string;

  @Column({ name: 'investigation_result', type: 'varchar' })
  investigationResult?: string;

  @Column({
    name: 'has_the_survivor_been_rendered_assistance_value',
    type: 'varchar',
  })
  hasTheSurvivorBeenRenderedAssistanceValue?: string;

  @JoinColumn({ name: 'incident_country', referencedColumnName: 'name' })
  @ManyToOne(() => CountryEntity, (entity: CountryEntity) => entity.cases)
  country?: CountryEntity;
}
