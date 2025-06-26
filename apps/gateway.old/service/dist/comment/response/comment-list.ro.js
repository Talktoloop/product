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
exports.CommentListRO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const user_comment_details_ro_1 = require("../../user/response/user-comment-details.ro");
const translation_type_constant_1 = require("../../common/constant/translation-type.constant");
let CommentListRO = class CommentListRO {
};
exports.CommentListRO = CommentListRO;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], CommentListRO.prototype, "content", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], CommentListRO.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], CommentListRO.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", user_comment_details_ro_1.UserCommentDetailsRO)
], CommentListRO.prototype, "user", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CommentListRO.prototype, "votes", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], CommentListRO.prototype, "authorNickname", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], CommentListRO.prototype, "storyId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    __metadata("design:type", Number)
], CommentListRO.prototype, "status", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ enum: translation_type_constant_1.TRANSLATION_TYPE_CONSTANTS }),
    __metadata("design:type", String)
], CommentListRO.prototype, "contentType", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], CommentListRO.prototype, "language", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'boolean' }),
    __metadata("design:type", Boolean)
], CommentListRO.prototype, "solution_proposed", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: Number, isArray: true }),
    __metadata("design:type", Array)
], CommentListRO.prototype, "thematics", void 0);
exports.CommentListRO = CommentListRO = __decorate([
    (0, class_transformer_1.Exclude)()
], CommentListRO);
//# sourceMappingURL=comment-list.ro.js.map