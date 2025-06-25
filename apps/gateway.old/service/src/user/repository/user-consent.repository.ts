import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { UserConsentEntity } from '../entity/user-consent.entity';

@EntityRepository(UserConsentEntity)
export class UserConsentRepository extends Repository<UserConsentEntity> {}
