import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { StoryEntity } from '../../story/entity/story.entity';
import { CountryAdministrativeDataEntity } from '../../country/entity/country-administrative-data.entity';

@Entity('story_country_administrative_area')
export class StoryAdministrativeDataEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ name: 'administrative_area_id', type: 'int' })
  administrativeAreaId: number;

  @Column({ name: 'story_id', type: 'varchar' })
  storyId: string;

  @ManyToOne(
    () => CountryAdministrativeDataEntity,
    (administrativeData: CountryAdministrativeDataEntity) =>
      administrativeData.storyAdministrativeData,
  )
  @JoinColumn({ name: 'administrative_area_id' })
  administrativeData?: CountryAdministrativeDataEntity;

  @ManyToOne(
    () => StoryEntity,
    (story: StoryEntity) => story.storyAdministrativeData,
  )
  @JoinColumn({ name: 'story_id' })
  story?: StoryEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
