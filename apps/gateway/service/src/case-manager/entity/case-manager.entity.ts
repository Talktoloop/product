import {
  Column,
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CaseManagerLanguageEntity } from './case-manager-language.entity';
import { CountryEntity } from '../../country/entity/country.entity';

@Entity('case_manager')
export class CaseManagerEntity {
  @PrimaryColumn({ type: 'varchar' })
  id: string;

  @Column({ type: 'varchar', length: 30 })
  nickname: string;

  @Column({ type: 'varchar', length: 100 })
  email: string;

  @Column({ type: 'tinyint' })
  visible: boolean;

  @Column({ type: 'varchar', length: 255 })
  avatar: string;

  @Column({ name: 'country_id', type: 'smallint', nullable: true })
  countryId: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(() => CountryEntity)
  @JoinColumn({ name: 'country_id' })
  country?: CountryEntity;

  @OneToMany(
    () => CaseManagerLanguageEntity,
    (caseManager) => caseManager.caseManager,
  )
  languages: CaseManagerLanguageEntity[];
}
