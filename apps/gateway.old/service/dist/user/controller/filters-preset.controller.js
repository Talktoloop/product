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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiltersPresetController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const filters_preset_service_1 = require("../service/filters-preset.service");
const passport_1 = require("@nestjs/passport");
const add_user_preset_data_dto_1 = require("../request/dto/add-user-preset-data.dto");
const user_entity_1 = require("../entity/user.entity");
const auth_decorator_1 = require("../../auth/auth.decorator");
const class_transformer_1 = require("class-transformer");
let FiltersPresetController = class FiltersPresetController {
    constructor(presetFiltersService) {
        this.presetFiltersService = presetFiltersService;
    }
    async getUserPresetFilters(user) {
        const userId = user.id;
        const presets = await this.presetFiltersService.getPresetFilters(userId);
        return (0, class_transformer_1.instanceToPlain)(presets);
    }
    async createUserPresetFilters(user, data) {
        const userId = user.id;
        return await this.presetFiltersService.createUserPresetFilters(userId, data.filters, data.presetName);
    }
    async shareUserPresetFilters(user, presetId) {
        const userOrganisationId = user.organisation_id;
        return await this.presetFiltersService.shareUserPresetFilters(presetId, userOrganisationId);
    }
    async updateUserPresetFilters(filtersData) {
        const { presetId, filters } = filtersData;
        return await this.presetFiltersService.updateUserPresetFilters(presetId, filters);
    }
    async deleteUserPresetFilters(user, presetId) {
        const userId = user.id;
        return await this.presetFiltersService.deleteUserPresetFilters(userId, presetId);
    }
};
exports.FiltersPresetController = FiltersPresetController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get user preset-filters' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: Array }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('cognito')),
    (0, common_1.Get)(),
    __param(0, (0, auth_decorator_1.Auth)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], FiltersPresetController.prototype, "getUserPresetFilters", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create user preset-filters' }),
    (0, swagger_1.ApiResponse)({ status: 201 }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('cognito')),
    (0, common_1.Post)('create'),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        add_user_preset_data_dto_1.CreatePresetDTO]),
    __metadata("design:returntype", Promise)
], FiltersPresetController.prototype, "createUserPresetFilters", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Share user filters-preset' }),
    (0, swagger_1.ApiResponse)({ status: 201 }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('cognito')),
    (0, common_1.Post)('share'),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Body)('presetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String]),
    __metadata("design:returntype", Promise)
], FiltersPresetController.prototype, "shareUserPresetFilters", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update user filters-preset' }),
    (0, swagger_1.ApiResponse)({ status: 201 }),
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_user_preset_data_dto_1.UpdatePresetDTO]),
    __metadata("design:returntype", Promise)
], FiltersPresetController.prototype, "updateUserPresetFilters", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Remove user preset-filters' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('cognito')),
    (0, common_1.Delete)('delete'),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Query)('presetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String]),
    __metadata("design:returntype", Promise)
], FiltersPresetController.prototype, "deleteUserPresetFilters", null);
exports.FiltersPresetController = FiltersPresetController = __decorate([
    (0, swagger_1.ApiTags)('Preset Filters'),
    (0, common_1.Controller)('filters-preset'),
    __metadata("design:paramtypes", [filters_preset_service_1.FiltersPresetService])
], FiltersPresetController);
//# sourceMappingURL=filters-preset.controller.js.map