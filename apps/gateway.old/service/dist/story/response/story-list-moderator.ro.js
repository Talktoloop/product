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
exports.StoryListModeratorRO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
let StoryListModeratorRO = class StoryListModeratorRO {
};
exports.StoryListModeratorRO = StoryListModeratorRO;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], StoryListModeratorRO.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StoryListModeratorRO.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], StoryListModeratorRO.prototype, "country", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], StoryListModeratorRO.prototype, "channel", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], StoryListModeratorRO.prototype, "status", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], StoryListModeratorRO.prototype, "language", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'string', isArray: true }),
    __metadata("design:type", Array)
], StoryListModeratorRO.prototype, "types", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], StoryListModeratorRO.prototype, "s3FileId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], StoryListModeratorRO.prototype, "moderatorId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], StoryListModeratorRO.prototype, "moderatorName", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], StoryListModeratorRO.prototype, "moderatorEmail", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], StoryListModeratorRO.prototype, "recordingDuration", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], StoryListModeratorRO.prototype, "content", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'boolean' }),
    __metadata("design:type", Boolean)
], StoryListModeratorRO.prototype, "isSensitive", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], StoryListModeratorRO.prototype, "numberOfWords", void 0);
exports.StoryListModeratorRO = StoryListModeratorRO = __decorate([
    (0, class_transformer_1.Exclude)()
], StoryListModeratorRO);
//# sourceMappingURL=story-list-moderator.ro.js.map