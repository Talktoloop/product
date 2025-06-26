import {
    Entity,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { StoryEntity } from './story.entity';
import { OrganisationEntity } from '../../organisation/entity/organisation.entity';

@Entity('story_organisation_tag')
export class StoryOrganisationTagEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @ManyToOne(() => StoryEntity, (story) => story.organisationsTagged)
    @JoinColumn({ name: 'story_id' })
    story: StoryEntity;

    @ManyToOne(() => OrganisationEntity, (organisation) => organisation.storyTagged)
    @JoinColumn({ name: 'organisation_id' })
    organisation: OrganisationEntity;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt?: Date;
}
