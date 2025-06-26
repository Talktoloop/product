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
exports.UpdatePresetDTO = exports.CreatePresetDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class DemographicDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Number], required: false }),
    __metadata("design:type", Array)
], DemographicDTO.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Number], required: false }),
    __metadata("design:type", Array)
], DemographicDTO.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Number], required: false }),
    __metadata("design:type", Array)
], DemographicDTO.prototype, "difficulty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Number], required: false }),
    __metadata("design:type", Array)
], DemographicDTO.prototype, "minority", void 0);
class RegionDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Number], required: false }),
    __metadata("design:type", Array)
], RegionDTO.prototype, "regionIds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], required: false }),
    __metadata("design:type", Array)
], RegionDTO.prototype, "countries", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Number], required: false }),
    __metadata("design:type", Array)
], RegionDTO.prototype, "semiClicked", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Object], isArray: true, required: false }),
    __metadata("design:type", Array)
], RegionDTO.prototype, "selectedRegionsOrCountries", void 0);
class DateDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, required: false }),
    __metadata("design:type", String)
], DateDTO.prototype, "from", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, required: false }),
    __metadata("design:type", String)
], DateDTO.prototype, "to", void 0);
class FiltersDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Number], nullable: true, required: false }),
    __metadata("design:type", Array)
], FiltersDTO.prototype, "presetFilters", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Number], required: false }),
    __metadata("design:type", Array)
], FiltersDTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: DemographicDTO, required: false }),
    __metadata("design:type", DemographicDTO)
], FiltersDTO.prototype, "demographic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: RegionDTO, required: false }),
    __metadata("design:type", RegionDTO)
], FiltersDTO.prototype, "region", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Number], required: false }),
    __metadata("design:type", Array)
], FiltersDTO.prototype, "thematic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], required: false }),
    __metadata("design:type", Array)
], FiltersDTO.prototype, "organisation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: DateDTO, required: false }),
    __metadata("design:type", DateDTO)
], FiltersDTO.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Number], required: false }),
    __metadata("design:type", Array)
], FiltersDTO.prototype, "repliedTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Number], required: false }),
    __metadata("design:type", Array)
], FiltersDTO.prototype, "channelFilter", void 0);
class CreatePresetDTO {
}
exports.CreatePresetDTO = CreatePresetDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, required: false }),
    __metadata("design:type", String)
], CreatePresetDTO.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, required: false }),
    __metadata("design:type", String)
], CreatePresetDTO.prototype, "presetName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: FiltersDTO, required: false }),
    __metadata("design:type", FiltersDTO)
], CreatePresetDTO.prototype, "filters", void 0);
class UpdatePresetDTO {
}
exports.UpdatePresetDTO = UpdatePresetDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, required: false }),
    __metadata("design:type", String)
], UpdatePresetDTO.prototype, "presetId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: FiltersDTO, required: false }),
    __metadata("design:type", FiltersDTO)
], UpdatePresetDTO.prototype, "filters", void 0);
//# sourceMappingURL=add-user-preset-data.dto.js.map