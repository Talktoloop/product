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
exports.PresetEntity = void 0;
const typeorm_1 = require("typeorm");
const user_filters_preset_entity_1 = require("./user-filters-preset.entity");
let PresetEntity = class PresetEntity {
};
exports.PresetEntity = PresetEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PresetEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'preset_name' }),
    __metadata("design:type", String)
], PresetEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Array)
], PresetEntity.prototype, "filters", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_filters_preset_entity_1.UserFiltersPresetEntity, (userFiltersPresetEntity) => userFiltersPresetEntity.preset),
    __metadata("design:type", Array)
], PresetEntity.prototype, "userFiltersPresets", void 0);
exports.PresetEntity = PresetEntity = __decorate([
    (0, typeorm_1.Entity)('filters_preset')
], PresetEntity);
//# sourceMappingURL=filters-preset.entity.js.map