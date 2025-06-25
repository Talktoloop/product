import { Injectable } from '@nestjs/common';
import { FiltersPresetRepository } from '../repository/filters-preset.repository';

@Injectable()
export class FiltersPresetService {
  constructor(private readonly presetFiltersRepository: FiltersPresetRepository) {}

  async getPresetFilters(userId: string) {
    return await this.presetFiltersRepository.getPresetFilters(userId);
  }

  async createUserPresetFilters(userId: string, filters: any, presetName: string) {
    await this.presetFiltersRepository.createUserPresetFilters(userId, filters, presetName);
  }

  async shareUserPresetFilters(presetId: string, organisationId: string) {
    await this.presetFiltersRepository.shareUserPresetFilters(presetId, organisationId);
  }

  async updateUserPresetFilters(filterId: string, filters: any) {
    await this.presetFiltersRepository.updateUserPresetFilters(filterId, filters);
  }

  async deleteUserPresetFilters(userId: string, filterId: string) {
    await this.presetFiltersRepository.deleteUserPresetFilters(userId, filterId);
  }
}
