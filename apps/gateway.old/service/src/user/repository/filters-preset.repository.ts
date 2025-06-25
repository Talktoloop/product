import { Repository } from 'typeorm';
import { PresetEntity } from '../entity/filters-preset.entity';
import { EntityRepository } from '../../database/database.decorator';

@EntityRepository(PresetEntity)
export class FiltersPresetRepository extends Repository<PresetEntity> {
  async getPresetFilters(userId: string) {
    return await this.createQueryBuilder('fp')
      .innerJoin('user_filters_preset', 'ufp', 'ufp.filters_preset_id = fp.id')
      .where('ufp.user_id = :userId', { userId })
      .getMany();
  }


  async createUserPresetFilters(userId: string, filters: any, presetName: string) {
    const preset = await this.createQueryBuilder()
      .insert()
      .into('filters_preset')
      .values({
        name: presetName,
        filters: filters,
      })
      .execute();

    const presetId = preset.identifiers[0].id;

    await this.createQueryBuilder()
      .insert()
      .into('user_filters_preset')
      .values({
        userId: userId,
        filtersPresetId: presetId,
      })
      .execute();
  }

  async shareUserPresetFilters(presetId: string, organisationId: string) {
    await this.createQueryBuilder()
      .insert()
      .into('user_filters_preset')
      .values(
        this.createQueryBuilder()
          .select([
            'u.id AS user_id',
            ':presetId AS filters_preset_id',
            'CURRENT_TIMESTAMP AS created_at',
            'CURRENT_TIMESTAMP AS updated_at',
          ])
          .from('user', 'u')
          .where('u.organisation_id = :organisationId', { organisationId }),
      )
      .setParameters({ presetId })
      .orIgnore()
      .execute();
  }


  async updateUserPresetFilters(filterId: string, filters: any) {
    await this.createQueryBuilder()
      .update('filters_preset')
      .set({ filters: filters })
      .where('id = :filterId', { filterId })
      .execute();
  }


  async deleteUserPresetFilters(userId: string, presetId: string) {
    await this.createQueryBuilder()
      .delete()
      .from('user_filters_preset')
      .where('user_id = :userId', { userId })
      .andWhere('filters_preset_id = :presetId', { presetId })
      .execute();

    const presetConnections = await this.createQueryBuilder()
      .select('1')
      .from('user_filters_preset', 'ufp')
      .where('ufp.filters_preset_id = :presetId', { presetId })
      .getRawOne();

    if (!presetConnections) {
      await this.createQueryBuilder()
        .delete()
        .from('filters_preset')
        .where('id = :presetId', { presetId })
        .execute();
    }
  }
}
