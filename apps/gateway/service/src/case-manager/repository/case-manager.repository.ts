import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { Logger } from '@nestjs/common';
import { CaseManagerEntity } from '../entity/case-manager.entity';

@EntityRepository(CaseManagerEntity)
export class CaseManagerRepository extends Repository<CaseManagerEntity> {
  protected readonly logger = new Logger(CaseManagerRepository.name);

  async getRandomManager(): Promise<CaseManagerEntity> {
    const query = this.createQueryBuilder('case_manager')
      .select('case_manager')
      .leftJoinAndSelect('case_manager.languages', 'languages')
      .where('visible = 1')
      .addOrderBy('RAND()')
      .limit(1);

    return query.getOne();
  }

  async findByParams(
    params: Record<string, unknown>,
  ): Promise<CaseManagerEntity[] | void> {
    return this.find({ where: params }).catch((error) =>
      this.logger.error(error),
    );
  }
}
