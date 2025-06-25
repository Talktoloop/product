import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { SubscriptionApplicationEntity } from '../entity/subscription-application.entity';

@EntityRepository(SubscriptionApplicationEntity)
export class SubscriptionApplicationRepository extends Repository<SubscriptionApplicationEntity> {}
