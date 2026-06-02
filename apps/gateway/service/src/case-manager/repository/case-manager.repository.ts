import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { CaseManagerEntity } from '../entity/case-manager.entity';

@EntityRepository(CaseManagerEntity)
export class CaseManagerRepository extends Repository<CaseManagerEntity> {
  async getRandomManager(): Promise<CaseManagerEntity> {
    const query = this.createQueryBuilder('case_manager')
      .select('case_manager')
      .leftJoinAndSelect('case_manager.languages', 'languages')
      .where('visible = 1')
      .addOrderBy('RAND()')
      .limit(1);

    return query.getOne();
  }

  async findRecipientsForCountry(
    countryId: number,
  ): Promise<CaseManagerEntity[]> {
    return this.createQueryBuilder('case_manager')
      .where('email IS NOT NULL')
      .andWhere('(country_id IS NULL OR country_id = :countryId)', {
        countryId,
      })
      .getMany();
  }
}
