import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CountryAdministrativeDataEntity } from './country-administrative-data.entity';

@Entity('country_administrative_area_name')
export class CountryAdministrativeDataNameEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ name: 'administrative_area_id', type: 'int' })
  administrativeAreaId: number;

  @Column({ name: 'language_id', type: 'int' })
  languageId: number;

  @Column({ type: 'varchar' })
  name: string;

  @ManyToOne(
    () => CountryAdministrativeDataEntity,
    (administrativeData: CountryAdministrativeDataEntity) =>
      administrativeData.names,
  )
  @JoinColumn({ name: 'administrative_area_id' })
  administrativeData?: CountryAdministrativeDataEntity;
}
