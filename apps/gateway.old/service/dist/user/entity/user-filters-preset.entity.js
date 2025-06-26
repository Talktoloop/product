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
exports.UserFiltersPresetEntity = void 0;
const typeorm_1 = require("typeorm");
const filters_preset_entity_1 = require("./filters-preset.entity");
let UserFiltersPresetEntity = class UserFiltersPresetEntity {
};
exports.UserFiltersPresetEntity = UserFiltersPresetEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UserFiltersPresetEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id', type: 'uuid' }),
    __metadata("design:type", String)
], UserFiltersPresetEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'filters_preset_id', type: 'uuid' }),
    __metadata("design:type", String)
], UserFiltersPresetEntity.prototype, "filtersPresetId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => filters_preset_entity_1.PresetEntity, (preset) => preset.userFiltersPresets, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'filters_preset_id' }),
    __metadata("design:type", filters_preset_entity_1.PresetEntity)
], UserFiltersPresetEntity.prototype, "preset", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], UserFiltersPresetEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], UserFiltersPresetEntity.prototype, "updatedAt", void 0);
exports.UserFiltersPresetEntity = UserFiltersPresetEntity = __decorate([
    (0, typeorm_1.Entity)('user_filters_preset')
], UserFiltersPresetEntity);
//# sourceMappingURL=user-filters-preset.entity.js.map