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
exports.RejectStoriesDto = exports.RejectContentWithStoryDto = exports.RejectContentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class RejectContentDto {
}
exports.RejectContentDto = RejectContentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number', required: true, isArray: true }),
    __metadata("design:type", Array)
], RejectContentDto.prototype, "reasonIds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: true, isArray: true }),
    __metadata("design:type", Array)
], RejectContentDto.prototype, "reasonTexts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], RejectContentDto.prototype, "rationale", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], RejectContentDto.prototype, "notificationLanguage", void 0);
class RejectContentWithStoryDto extends RejectContentDto {
}
exports.RejectContentWithStoryDto = RejectContentWithStoryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], RejectContentWithStoryDto.prototype, "storyId", void 0);
class RejectStoriesDto {
}
exports.RejectStoriesDto = RejectStoriesDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: RejectContentWithStoryDto,
        required: true,
        isArray: true,
    }),
    __metadata("design:type", Array)
], RejectStoriesDto.prototype, "storiesToReject", void 0);
//# sourceMappingURL=reject-content.dto.js.map