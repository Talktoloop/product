import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { StoryEntity } from '../../story/entity/story.entity';

@Entity('category')
export class CategoryEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 100 })
  code: string;

  @Column({ type: 'integer' })
  order: number;

  @ManyToMany(() => StoryEntity)
  @JoinTable({
    name: 'story_category',
    joinColumns: [{ name: 'category_id' }],
    inverseJoinColumns: [{ name: 'story_id' }],
  })
  stories: StoryEntity[];

  @Column({ type: 'int', select: false, insert: false, readonly: true })
  count: number;
}
