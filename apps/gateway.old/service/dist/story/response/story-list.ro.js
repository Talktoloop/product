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
exports.StoryListRO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const organisation_stories_ro_1 = require("../../organisation/response/organisation-stories.ro");
const user_comment_details_ro_1 = require("../../user/response/user-comment-details.ro");
const translation_type_constant_1 = require("../../common/constant/translation-type.constant");
const category_ro_1 = require("../../category/response/category.ro");
let StoryListRO = class StoryListRO {
};
exports.StoryListRO = StoryListRO;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], StoryListRO.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], StoryListRO.prototype, "content", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StoryListRO.prototype, "publishedAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StoryListRO.prototype, "place", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], StoryListRO.prototype, "channel", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], StoryListRO.prototype, "authorNickname", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], StoryListRO.prototype, "country", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], StoryListRO.prototype, "countryId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: category_ro_1.CategoryRO, isArray: true }),
    __metadata("design:type", Array)
], StoryListRO.prototype, "categories", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: organisation_stories_ro_1.OrganisationStoriesRO, isArray: true }),
    (0, class_transformer_1.Transform)(({ value }) => (0, class_transformer_1.plainToClass)(organisation_stories_ro_1.OrganisationStoriesRO, value)),
    __metadata("design:type", Array)
], StoryListRO.prototype, "organisations", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], StoryListRO.prototype, "votes", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], StoryListRO.prototype, "views", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], StoryListRO.prototype, "comments", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", user_comment_details_ro_1.UserCommentDetailsRO)
], StoryListRO.prototype, "user", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ enum: translation_type_constant_1.TRANSLATION_TYPE_CONSTANTS }),
    __metadata("design:type", String)
], StoryListRO.prototype, "contentType", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], StoryListRO.prototype, "language", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'string', isArray: true }),
    __metadata("design:type", Array)
], StoryListRO.prototype, "translations", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: Number, isArray: true }),
    __metadata("design:type", Array)
], StoryListRO.prototype, "thematics", void 0);
exports.StoryListRO = StoryListRO = __decorate([
    (0, class_transformer_1.Exclude)()
], StoryListRO);
//# sourceMappingURL=story-list.ro.js.map