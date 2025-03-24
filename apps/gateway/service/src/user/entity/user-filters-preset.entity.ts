import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { PresetEntity } from './filters-preset.entity';

@Entity('user_filters_preset')
export class UserFiltersPresetEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id', type: 'uuid' })
  userId: string;

  @Column({ name: 'filters_preset_id', type: 'uuid' })
  filtersPresetId: string;

  @ManyToOne(() => PresetEntity, (preset) => preset.userFiltersPresets, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'filters_preset_id' })
  preset: PresetEntity;

  @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
