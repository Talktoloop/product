import { Repository } from 'typeorm';
import { EntityRepository } from '../database/database.decorator';
import { LanguageEntity } from './entity/language.entity';

@EntityRepository(LanguageEntity)
export class LanguageRepository extends Repository<LanguageEntity> {
  async findAllLanguageProviders(): Promise<LanguageEntity[]> {
    return this.createQueryBuilder('language')
      .select('language.provider', 'provider')
      .where('provider IS NOT NULL')
      .groupBy('provider')
      .getRawMany();
  }

  async findMachineTranslatedLanguages(
    order?: string[],
  ): Promise<LanguageEntity[]> {
    let query =
      'SELECT *, alternative_provider as alternativeProvider FROM language WHERE provider IS NOT NULL';
    if (order) {
      query += ` ORDER BY FIELD(provider, '${order.join("','")}'), id ASC`;
    }
    return this.query(query);
  }

  findByCodeOrDefault(code: string): Promise<LanguageEntity[]> {
    return this.find({
      where: [{ code }, { isDefault: true }],
    });
  }
}
