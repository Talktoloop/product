import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  CreateDateColumn,
} from 'typeorm';
import { OrganisationEntity } from '../../organisation/entity/organisation.entity';

@Entity('organisation_token')
export class OrganisationTokenEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar' })
  token: string;

  @Column({ type: 'varchar', name: 'organisation_id' })
  organisationId: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @OneToOne(
    () => OrganisationEntity,
    (organisation) => organisation.subscriptionToken,
  )
  @JoinColumn({ name: 'organisation_id' })
  organisation: OrganisationEntity;
}
