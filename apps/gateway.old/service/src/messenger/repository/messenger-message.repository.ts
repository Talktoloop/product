import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { MessengerMessageEntity } from '../entity/messenger-message.entity';

@EntityRepository(MessengerMessageEntity)
export class MessengerMessageRepository extends Repository<MessengerMessageEntity> {}
