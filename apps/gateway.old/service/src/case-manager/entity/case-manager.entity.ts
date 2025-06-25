import {
  Column,
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { CaseManagerLanguageEntity } from './case-manager-language.entity';

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

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @OneToMany(
    () => CaseManagerLanguageEntity,
    (caseManager) => caseManager.caseManager,
  )
  languages: CaseManagerLanguageEntity[];
}
