import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  OneToOne,
} from 'typeorm';
import { UserEntity } from '../../user/entity/user.entity';
import { OrganisationApplicationEntity } from '../../user/entity/organisation-application.entity';
import { CountryEntity } from '../../country/entity/country.entity';
import { StoryEntity } from '../../story/entity/story.entity';
import { OrganisationTokenEntity } from '../../subscription/entity/organisation-token.entity';
import { StoryOrganisationTagEntity } from '../../story/entity/story-organisation-tag.entity';

@Entity('organisation')
export class OrganisationEntity {
  @PrimaryColumn({ type: 'varchar', length: 32 })
  id: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'boolean', default: false })
  verified: boolean;

  @Column({ type: 'smallint', name: 'country_id' })
  countryId: number;

  @Column({ type: 'varchar', length: 16 })
  acronym: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Column({ type: 'varchar', length: 32, name: 'external_id' })
  externalId: string;

  @OneToMany(() => UserEntity, (user: UserEntity) => user.organisation)
  public users?: UserEntity[];

  @OneToMany(
    () => OrganisationApplicationEntity,
    (application: OrganisationApplicationEntity) => application.organisation,
  )
  public organisationApplications?: OrganisationApplicationEntity[];

  @Column({
    type: 'varchar',
    select: false,
    insert: false,
    readonly: true,
    default: 0,
  })
  replied: boolean;

  @ManyToOne(
    () => CountryEntity,
    (country: CountryEntity) => country.organisations,
  )
  @JoinColumn({ name: 'country_id' })
  country?: CountryEntity;

  @ManyToMany(() => StoryEntity)
  @JoinTable({
    name: 'story_organisation',
    joinColumns: [{ name: 'organisation_id' }],
    inverseJoinColumns: [{ name: 'story_id' }],
  })
  stories: StoryEntity[];

  @OneToOne(
    () => OrganisationTokenEntity,
    (organisationToken) => organisationToken.organisation,
  )
  subscriptionToken: OrganisationTokenEntity;

  @OneToMany(() => StoryOrganisationTagEntity, (tag) => tag.organisation)
  storyTagged: StoryOrganisationTagEntity[];
}
