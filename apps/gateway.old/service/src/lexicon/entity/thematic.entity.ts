import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('thematic')
export class ThematicEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 100 })
  code: string;

  @Column({ type: 'integer' })
  order: number;

  @Column({ name: 'parent_thematic_id', type: 'int' })
  parentThematicId?: number;

  @ManyToOne(
    () => ThematicEntity,
    (thematic: ThematicEntity) => thematic.children,
    {
      onDelete: 'CASCADE',
      cascade: true,
    },
  )
  @JoinColumn({ name: 'parent_thematic_id' })
  parent?: ThematicEntity;

  @OneToMany(
    () => ThematicEntity,
    (subThematic: ThematicEntity) => subThematic.parent,
  )
  children?: ThematicEntity[];
}
