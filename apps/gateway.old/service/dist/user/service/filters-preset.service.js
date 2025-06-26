"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiltersPresetService = void 0;
const common_1 = require("@nestjs/common");
const filters_preset_repository_1 = require("../repository/filters-preset.repository");
let FiltersPresetService = class FiltersPresetService {
    constructor(presetFiltersRepository) {
        this.presetFiltersRepository = presetFiltersRepository;
    }
    async getPresetFilters(userId) {
        return await this.presetFiltersRepository.getPresetFilters(userId);
    }
    async createUserPresetFilters(userId, filters, presetName) {
        await this.presetFiltersRepository.createUserPresetFilters(userId, filters, presetName);
    }
    async shareUserPresetFilters(presetId, organisationId) {
        await this.presetFiltersRepository.shareUserPresetFilters(presetId, organisationId);
    }
    async updateUserPresetFilters(filterId, filters) {
        await this.presetFiltersRepository.updateUserPresetFilters(filterId, filters);
    }
    async deleteUserPresetFilters(userId, filterId) {
        await this.presetFiltersRepository.deleteUserPresetFilters(userId, filterId);
    }
};
exports.FiltersPresetService = FiltersPresetService;
exports.FiltersPresetService = FiltersPresetService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [filters_preset_repository_1.FiltersPresetRepository])
], FiltersPresetService);
//# sourceMappingURL=filters-preset.service.js.map