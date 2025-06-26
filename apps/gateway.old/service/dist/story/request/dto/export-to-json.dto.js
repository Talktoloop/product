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
exports.ExportToJsonDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const types_1 = require("../../../common/types");
const types_2 = require("../../../common/types");
const difficulty_constant_1 = require("../../../airtable-client/constant/difficulty.constant");
const helpers_1 = require("../../../common/helpers");
class ExportToJsonDTO {
}
exports.ExportToJsonDTO = ExportToJsonDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        isArray: true,
        description: 'Country code in format https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements',
    }),
    __metadata("design:type", String)
], ExportToJsonDTO.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: Object.values(types_2.CATEGORY_VALUE),
        isArray: true,
        required: false,
    }),
    __metadata("design:type", Object)
], ExportToJsonDTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: Object.keys(types_2.AGE_VALUE).map((value) => value.toLowerCase().replace(/ /g, '_')),
        isArray: true,
        required: false,
    }),
    __metadata("design:type", Object)
], ExportToJsonDTO.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: Object.keys(types_2.GENDER_VALUE).map((value) => value.toLowerCase()),
        isArray: true,
        required: false,
    }),
    __metadata("design:type", Object)
], ExportToJsonDTO.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: Object.values(difficulty_constant_1.DIFFICULTY),
        isArray: true,
        required: false,
    }),
    __metadata("design:type", Object)
], ExportToJsonDTO.prototype, "difficulty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: false,
        description: 'A phrase containing the name of the organization',
    }),
    __metadata("design:type", String)
], ExportToJsonDTO.prototype, "organisation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: (0, helpers_1.getThematicAreaChildrenKeys)(),
        isArray: true,
        required: false,
    }),
    __metadata("design:type", Object)
], ExportToJsonDTO.prototype, "thematic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: Date }),
    __metadata("design:type", String)
], ExportToJsonDTO.prototype, "from", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: Date }),
    __metadata("design:type", String)
], ExportToJsonDTO.prototype, "to", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number', required: true }),
    __metadata("design:type", Number)
], ExportToJsonDTO.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number', required: true }),
    __metadata("design:type", Number)
], ExportToJsonDTO.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: types_1.OrderEnum, required: false }),
    __metadata("design:type", String)
], ExportToJsonDTO.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: false }),
    __metadata("design:type", String)
], ExportToJsonDTO.prototype, "searchTerm", void 0);
//# sourceMappingURL=export-to-json.dto.js.map