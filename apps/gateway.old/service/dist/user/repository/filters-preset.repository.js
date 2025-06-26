"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiltersPresetRepository = void 0;
const typeorm_1 = require("typeorm");
const filters_preset_entity_1 = require("../entity/filters-preset.entity");
const database_decorator_1 = require("../../database/database.decorator");
let FiltersPresetRepository = class FiltersPresetRepository extends typeorm_1.Repository {
    async getPresetFilters(userId) {
        return await this.createQueryBuilder('fp')
            .innerJoin('user_filters_preset', 'ufp', 'ufp.filters_preset_id = fp.id')
            .where('ufp.user_id = :userId', { userId })
            .getMany();
    }
    async createUserPresetFilters(userId, filters, presetName) {
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
    async shareUserPresetFilters(presetId, organisationId) {
        await this.createQueryBuilder()
            .insert()
            .into('user_filters_preset')
            .values(this.createQueryBuilder()
            .select([
            'u.id AS user_id',
            ':presetId AS filters_preset_id',
            'CURRENT_TIMESTAMP AS created_at',
            'CURRENT_TIMESTAMP AS updated_at',
        ])
            .from('user', 'u')
            .where('u.organisation_id = :organisationId', { organisationId }))
            .setParameters({ presetId })
            .orIgnore()
            .execute();
    }
    async updateUserPresetFilters(filterId, filters) {
        await this.createQueryBuilder()
            .update('filters_preset')
            .set({ filters: filters })
            .where('id = :filterId', { filterId })
            .execute();
    }
    async deleteUserPresetFilters(userId, presetId) {
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
};
exports.FiltersPresetRepository = FiltersPresetRepository;
exports.FiltersPresetRepository = FiltersPresetRepository = __decorate([
    (0, database_decorator_1.EntityRepository)(filters_preset_entity_1.PresetEntity)
], FiltersPresetRepository);
//# sourceMappingURL=filters-preset.repository.js.map