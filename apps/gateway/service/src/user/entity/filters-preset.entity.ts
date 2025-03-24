import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserFiltersPresetEntity } from './user-filters-preset.entity';

@Entity('filters_preset')
export class PresetEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({name: 'preset_name'})
  name: string;

  @Column({ type: 'json' })
  filters: string[];

  @OneToMany(() => UserFiltersPresetEntity, (userFiltersPresetEntity) => userFiltersPresetEntity.preset)
  userFiltersPresets: UserFiltersPresetEntity[];
}
