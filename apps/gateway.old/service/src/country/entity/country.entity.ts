import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { StoryEntity } from '../../story/entity/story.entity';
import { CaseSyncEntity } from '../../airtable-client/entity/case-sync.entity';
import { CountryAdministrativeDataEntity } from './country-administrative-data.entity';
import { LanguageEntity } from '../../language/entity/language.entity';
import { OrganisationEntity } from '../../organisation/entity/organisation.entity';

@Entity('country')
export class CountryEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 2 })
  code: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'int' })
  prefix: number;

  @Column({ type: 'int', name: 'default_language_id_for_administrative_data' })
  defaultLanguageId: number;

  @ManyToOne(() => LanguageEntity, (lang: LanguageEntity) => lang.countries)
  @JoinColumn({ name: 'default_language_id_for_administrative_data' })
  language: LanguageEntity;

  @OneToMany(
    () => CountryAdministrativeDataEntity,
    (administrativeArea: CountryAdministrativeDataEntity) =>
      administrativeArea.country,
  )
  public administrativeData?: CountryAdministrativeDataEntity[];

  @OneToMany(
    () => OrganisationEntity,
    (organisation: OrganisationEntity) => organisation.country,
  )
  public organisations?: OrganisationEntity[];

  @OneToMany(() => StoryEntity, (story: StoryEntity) => story.country)
  public stories?: StoryEntity[];

  @OneToMany(
    () => CaseSyncEntity,
    (caseSync: CaseSyncEntity) => caseSync.country,
  )
  cases?: CaseSyncEntity[];
}
