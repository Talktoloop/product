import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { Logger } from '@nestjs/common';
import { RejectReasonEntity } from '../entity/reject-reason.entity';

@EntityRepository(RejectReasonEntity)
export class RejectReasonRepository extends Repository<RejectReasonEntity> {
  protected readonly logger = new Logger(RejectReasonEntity.name);

  findAll(): Promise<RejectReasonEntity[]> {
    return this.find();
  }

  findOneByParams(
    params: Record<string, unknown>,
  ): Promise<RejectReasonEntity | void> {
    return this.findOne({ where: params }).catch((error) =>
      this.logger.error(error),
    );
  }
}
