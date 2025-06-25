import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Entity('user')
export class ModeratorEntity {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  id: string;

  @Column({ name: 'email', type: 'varchar', length: 100 })
  @Index({ unique: true })
  email: string;

  @Column({ name: 'nickname', type: 'varchar', length: 60 })
  nickname?: string;

  @Column({ name: 'first_name', type: 'varchar', length: 50 })
  firstName?: string;

  @Column({ name: 'last_name', type: 'varchar', length: 50 })
  lastName?: string;

  @Column({ name: 'role', type: 'int' })
  role: number;
}
