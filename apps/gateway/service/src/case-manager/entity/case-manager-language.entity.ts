import { LanguageEntity } from '../../language/entity/language.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CaseManagerEntity } from './case-manager.entity';

@Entity('case_manager_text')
export class CaseManagerLanguageEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'text' })
  text: string;

  @Column({ name: 'language_id', type: 'smallint' })
  languageId: number;

  @ManyToOne(
    () => LanguageEntity,
    (language: LanguageEntity) => language.caseManagers,
  )
  @JoinColumn({ name: 'language_id' })
  language: LanguageEntity;

  @Column({ name: 'case_manager_id', type: 'varchar' })
  caseManagerId: string;

  @ManyToOne(
    () => CaseManagerEntity,
    (caseManger: CaseManagerEntity) => caseManger.languages,
  )
  @JoinColumn({ name: 'case_manager_id' })
  caseManager: CaseManagerEntity;
}
