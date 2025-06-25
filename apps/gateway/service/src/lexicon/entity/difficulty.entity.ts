import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('difficulty')
export class DifficultyEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 100 })
  code: string;
}
