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
exports.CommentModeratorRO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const translation_1 = require("../../common/response/translation");
const comment_list_ro_1 = require("./comment-list.ro");
const channel_constant_1 = require("../../common/constant/channel.constant");
const lexicon_ro_1 = require("../../lexicon/response/lexicon.ro");
let CommentModeratorRO = class CommentModeratorRO extends comment_list_ro_1.CommentListRO {
};
exports.CommentModeratorRO = CommentModeratorRO;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: Boolean }),
    __metadata("design:type", Boolean)
], CommentModeratorRO.prototype, "emailProvided", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: translation_1.TranslationRO, isArray: true }),
    __metadata("design:type", Array)
], CommentModeratorRO.prototype, "translations", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], CommentModeratorRO.prototype, "language", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], CommentModeratorRO.prototype, "s3FileId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], CommentModeratorRO.prototype, "storyLanguage", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], CommentModeratorRO.prototype, "parentCommentId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    __metadata("design:type", Number)
], CommentModeratorRO.prototype, "status", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'boolean' }),
    __metadata("design:type", Boolean)
], CommentModeratorRO.prototype, "solution_proposed", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], CommentModeratorRO.prototype, "userId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], CommentModeratorRO.prototype, "publishedAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], CommentModeratorRO.prototype, "channel", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], CommentModeratorRO.prototype, "storyChannel", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], CommentModeratorRO.prototype, "rejectRationale", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: lexicon_ro_1.LexiconRO, isArray: true }),
    __metadata("design:type", Array)
], CommentModeratorRO.prototype, "rejectReasons", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: Number, isArray: true }),
    __metadata("design:type", Array)
], CommentModeratorRO.prototype, "thematics", void 0);
exports.CommentModeratorRO = CommentModeratorRO = __decorate([
    (0, class_transformer_1.Exclude)()
], CommentModeratorRO);
//# sourceMappingURL=comment-moderator.ro.js.map