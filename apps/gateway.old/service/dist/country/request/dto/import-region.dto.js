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
exports.ImportXlsxRegionDTO = exports.ImportRegionDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ImportRegionDTO {
}
exports.ImportRegionDTO = ImportRegionDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, required: true }),
    __metadata("design:type", String)
], ImportRegionDTO.prototype, "countryCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
        default: 4,
        description: 'It is nesting level in https://overpass-api.de/',
    }),
    __metadata("design:type", Number)
], ImportRegionDTO.prototype, "firstLevel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
        default: 6,
        description: 'It is nesting level in https://overpass-api.de/',
    }),
    __metadata("design:type", Number)
], ImportRegionDTO.prototype, "lastLevel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, required: true, default: false }),
    __metadata("design:type", Boolean)
], ImportRegionDTO.prototype, "saveDataInDB", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        description: 'IDs in https://overpass-api.de/',
    }),
    __metadata("design:type", String)
], ImportRegionDTO.prototype, "exceptionIds", void 0);
class ImportXlsxRegionDTO {
}
exports.ImportXlsxRegionDTO = ImportXlsxRegionDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, required: true }),
    __metadata("design:type", String)
], ImportXlsxRegionDTO.prototype, "countryCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, required: true, default: false }),
    __metadata("design:type", Boolean)
], ImportXlsxRegionDTO.prototype, "saveDataInDB", void 0);
//# sourceMappingURL=import-region.dto.js.map