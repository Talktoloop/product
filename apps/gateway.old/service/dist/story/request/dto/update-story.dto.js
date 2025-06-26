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
exports.UpdateStoryDto = exports.TranslationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const types_1 = require("../../../common/types");
const helpers_1 = require("../../../common/helpers");
class TranslationDto {
}
exports.TranslationDto = TranslationDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], TranslationDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], TranslationDto.prototype, "content", void 0);
class UpdateStoryDto {
}
exports.UpdateStoryDto = UpdateStoryDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], UpdateStoryDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], UpdateStoryDto.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', isArray: true }),
    __metadata("design:type", Array)
], UpdateStoryDto.prototype, "organisations", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number', isArray: true }),
    __metadata("design:type", Array)
], UpdateStoryDto.prototype, "categories", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number', isArray: true }),
    __metadata("design:type", Array)
], UpdateStoryDto.prototype, "difficulties", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number', isArray: true }),
    __metadata("design:type", Array)
], UpdateStoryDto.prototype, "maternityStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number', isArray: true }),
    __metadata("design:type", Array)
], UpdateStoryDto.prototype, "thematics", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: false }),
    __metadata("design:type", String)
], UpdateStoryDto.prototype, "language", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: false }),
    __metadata("design:type", String)
], UpdateStoryDto.prototype, "authorNickname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: false }),
    __metadata("design:type", String)
], UpdateStoryDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'enum',
        required: false,
        enum: (0, helpers_1.getKeysWithLowerCase)(types_1.DIFFICULTY_VALUE),
        example: (0, helpers_1.getKeysWithLowerCase)(types_1.DIFFICULTY_VALUE)[0],
    }),
    __metadata("design:type", String)
], UpdateStoryDto.prototype, "difficulty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, required: false }),
    __metadata("design:type", String)
], UpdateStoryDto.prototype, "place", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, required: false }),
    __metadata("design:type", Boolean)
], UpdateStoryDto.prototype, "isSensitive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: TranslationDto, isArray: true }),
    __metadata("design:type", Array)
], UpdateStoryDto.prototype, "translations", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number', isArray: true }),
    __metadata("design:type", Array)
], UpdateStoryDto.prototype, "pinnedMessageIds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Number)
], UpdateStoryDto.prototype, "regionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Number)
], UpdateStoryDto.prototype, "countryId", void 0);
//# sourceMappingURL=update-story.dto.js.map