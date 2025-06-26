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
exports.StoryWebModeratorRO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const translation_1 = require("../../common/response/translation");
const category_ro_1 = require("../../category/response/category.ro");
const lexicon_ro_1 = require("../../lexicon/response/lexicon.ro");
const story_list_ro_1 = require("./story-list.ro");
const marked_as_sensitive_constant_1 = require("../../common/constant/marked-as-sensitive.constant");
let StoryWebModeratorRO = class StoryWebModeratorRO extends story_list_ro_1.StoryListRO {
};
exports.StoryWebModeratorRO = StoryWebModeratorRO;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: category_ro_1.CategoryRO, isArray: true }),
    __metadata("design:type", Array)
], StoryWebModeratorRO.prototype, "categories", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: lexicon_ro_1.LexiconRO, isArray: true }),
    __metadata("design:type", Array)
], StoryWebModeratorRO.prototype, "difficulties", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: lexicon_ro_1.LexiconRO, isArray: true }),
    __metadata("design:type", Array)
], StoryWebModeratorRO.prototype, "maternityStatus", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], StoryWebModeratorRO.prototype, "difficulty", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], StoryWebModeratorRO.prototype, "historicalContent", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: Boolean }),
    __metadata("design:type", Boolean)
], StoryWebModeratorRO.prototype, "contactAccepted", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], StoryWebModeratorRO.prototype, "age", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], StoryWebModeratorRO.prototype, "gender", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StoryWebModeratorRO.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: Boolean }),
    __metadata("design:type", Boolean)
], StoryWebModeratorRO.prototype, "emailProvided", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Transform)(({ value }) => !!value),
    __metadata("design:type", Boolean)
], StoryWebModeratorRO.prototype, "isSensitive", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: translation_1.TranslationRO, isArray: true }),
    __metadata("design:type", Array)
], StoryWebModeratorRO.prototype, "translations", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StoryWebModeratorRO.prototype, "language", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'markedAsSensitiveByRole' }),
    (0, swagger_1.ApiProperty)({
        enum: marked_as_sensitive_constant_1.MARKED_AS_SENSITIVE_BY,
        example: marked_as_sensitive_constant_1.MARKED_AS_SENSITIVE_BY.AUTHOR,
    }),
    __metadata("design:type", String)
], StoryWebModeratorRO.prototype, "markedAsSensitiveBy", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StoryWebModeratorRO.prototype, "caseManagerNote", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], StoryWebModeratorRO.prototype, "status", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], StoryWebModeratorRO.prototype, "caseManagerReturnedAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: Boolean }),
    __metadata("design:type", Boolean)
], StoryWebModeratorRO.prototype, "isUrgent", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: Boolean }),
    __metadata("design:type", Boolean)
], StoryWebModeratorRO.prototype, "isMinority", void 0);
exports.StoryWebModeratorRO = StoryWebModeratorRO = __decorate([
    (0, class_transformer_1.Exclude)()
], StoryWebModeratorRO);
//# sourceMappingURL=story-web-moderator.ro.js.map