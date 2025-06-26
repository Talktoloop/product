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
exports.StoryRO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const category_ro_1 = require("../../category/response/category.ro");
const lexicon_ro_1 = require("../../lexicon/response/lexicon.ro");
const story_list_ro_1 = require("./story-list.ro");
let StoryRO = class StoryRO extends story_list_ro_1.StoryListRO {
};
exports.StoryRO = StoryRO;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: category_ro_1.CategoryRO, isArray: true }),
    __metadata("design:type", Array)
], StoryRO.prototype, "categories", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], StoryRO.prototype, "difficulty", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: lexicon_ro_1.LexiconRO, isArray: true }),
    __metadata("design:type", Array)
], StoryRO.prototype, "difficulties", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: lexicon_ro_1.LexiconRO, isArray: true }),
    __metadata("design:type", Array)
], StoryRO.prototype, "maternityStatus", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], StoryRO.prototype, "age", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], StoryRO.prototype, "gender", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], StoryRO.prototype, "language", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'string', isArray: true }),
    __metadata("design:type", Array)
], StoryRO.prototype, "translations", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], StoryRO.prototype, "channel", void 0);
exports.StoryRO = StoryRO = __decorate([
    (0, class_transformer_1.Exclude)()
], StoryRO);
//# sourceMappingURL=story.ro.js.map