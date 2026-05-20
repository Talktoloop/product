import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { OrganisationEntity } from '../../organisation/entity/organisation.entity';
import { UserEntity } from './user.entity';

@Entity('user_organisation_application')
export class OrganisationApplicationEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ name: 'user_id', type: 'varchar', length: 36 })
  userId: string;

  @OneToOne(() => UserEntity, (user) => user.organisationApplication)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @Column({ name: 'organisation_id', type: 'varchar', length: 36 })
  organisationId: string;

  @ManyToOne(
    () => OrganisationEntity,
    (organisation: OrganisationEntity) => organisation.organisationApplications,
  )
  @JoinColumn({ name: 'user_id' })
  organisation?: UserEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
