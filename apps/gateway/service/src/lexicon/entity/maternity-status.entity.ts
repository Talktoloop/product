import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pregnancy_status')
export class MaternityStatusEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 100 })
  code: string;
}
