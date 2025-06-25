import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { CommentRecipientEntity } from '../entity/comment-recipient.entity';

@EntityRepository(CommentRecipientEntity)
export class CommentRecipientRepository extends Repository<CommentRecipientEntity> {}
