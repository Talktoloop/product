import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { StoryOrganisationTagEntity } from '../entity/story-organisation-tag.entity';

@EntityRepository(StoryOrganisationTagEntity)
export class StoryOrganisationTagRepository extends Repository<StoryOrganisationTagEntity> { }
