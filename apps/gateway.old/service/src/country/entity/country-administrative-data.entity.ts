import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { CountryEntity } from './country.entity';
import { StoryAdministrativeDataEntity } from '../../story/entity/story-administrative-data.entity';
import { CountryAdministrativeDataNameEntity } from './country-administrative-data-name.entity';

@Entity('country_administrative_area')
export class CountryAdministrativeDataEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'boolean', name: 'has_child' })
  hasChild: boolean;

  @Column({ type: 'smallint', name: 'country_id' })
  countryId: number;

  @Column({ type: 'int', name: 'parent_id' })
  parentId: number;

  @Column({ type: 'int', name: 'external_id' })
  externalId: number;

  @Column({ type: 'tinyint' })
  level: number;

  @ManyToOne(
    () => CountryEntity,
    (country: CountryEntity) => country.administrativeData,
  )
  @JoinColumn({ name: 'country_id' })
  country?: CountryEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(
    () => CountryAdministrativeDataEntity,
    (administrativeArea: CountryAdministrativeDataEntity) =>
      administrativeArea.children,
    {
      onDelete: 'CASCADE',
      cascade: true,
    },
  )
  @JoinColumn({ name: 'parent_id' })
  parent?: CountryAdministrativeDataEntity;

  @OneToMany(
    () => CountryAdministrativeDataEntity,
    (administrativeData: CountryAdministrativeDataEntity) =>
      administrativeData.parent,
  )
  children?: CountryAdministrativeDataEntity[];

  @OneToMany(
    () => StoryAdministrativeDataEntity,
    (storyAdministrativeData: StoryAdministrativeDataEntity) =>
      storyAdministrativeData.administrativeData,
  )
  storyAdministrativeData?: StoryAdministrativeDataEntity[];

  @OneToMany(
    () => CountryAdministrativeDataNameEntity,
    (storyAdministrativeDataName: CountryAdministrativeDataNameEntity) =>
      storyAdministrativeDataName.administrativeData,
    {
      cascade: true,
    },
  )
  names?: CountryAdministrativeDataNameEntity[];
}
