import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { OrganisationApplicationEntity } from '../entity/organisation-application.entity';

@EntityRepository(OrganisationApplicationEntity)
export class OrganisationApplicationRepository extends Repository<OrganisationApplicationEntity> {}
