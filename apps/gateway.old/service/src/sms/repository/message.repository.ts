import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { MessageEntity } from '../entity/message.entity';

@EntityRepository(MessageEntity)
export class MessageRepository extends Repository<MessageEntity> {}
