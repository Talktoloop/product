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
exports.AddStoryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const types_1 = require("../../../common/types");
const helpers_1 = require("../../../common/helpers");
const shared_1 = require("@ourloop/shared");
class AddStoryDto {
}
exports.AddStoryDto = AddStoryDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AddStoryDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ maxLength: 100, required: false }),
    __metadata("design:type", String)
], AddStoryDto.prototype, "place", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Number)
], AddStoryDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ maxLength: 100, required: false }),
    __metadata("design:type", String)
], AddStoryDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Number)
], AddStoryDto.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Number)
], AddStoryDto.prototype, "countryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ maxLength: 60, required: false }),
    __metadata("design:type", String)
], AddStoryDto.prototype, "authorNickname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ maxLength: 3, required: false }),
    __metadata("design:type", String)
], AddStoryDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'enum',
        required: false,
        enum: (0, helpers_1.getKeysWithLowerCase)(types_1.DIFFICULTY_VALUE),
        example: (0, helpers_1.getKeysWithLowerCase)(types_1.DIFFICULTY_VALUE)[0],
    }),
    (0, swagger_1.ApiProperty)({ type: Number, required: false }),
    __metadata("design:type", String)
], AddStoryDto.prototype, "difficulty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', isArray: true, required: false }),
    __metadata("design:type", Array)
], AddStoryDto.prototype, "organisations", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number', isArray: true, required: false }),
    __metadata("design:type", Array)
], AddStoryDto.prototype, "categories", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number', isArray: true, required: false }),
    __metadata("design:type", Array)
], AddStoryDto.prototype, "difficulties", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number', isArray: true, required: false }),
    __metadata("design:type", Array)
], AddStoryDto.prototype, "maternityStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: false }),
    __metadata("design:type", String)
], AddStoryDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: false }),
    __metadata("design:type", String)
], AddStoryDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'boolean', required: false, example: true }),
    __metadata("design:type", Boolean)
], AddStoryDto.prototype, "isSensitive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'boolean', required: false, example: true }),
    __metadata("design:type", Boolean)
], AddStoryDto.prototype, "userWantContact", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Number)
], AddStoryDto.prototype, "regionId", void 0);
//# sourceMappingURL=add-story.dto.js.map