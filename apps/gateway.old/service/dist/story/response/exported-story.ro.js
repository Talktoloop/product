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
exports.ExportedStoryRO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const types_1 = require("../../common/types");
const difficulty_constant_1 = require("../../airtable-client/constant/difficulty.constant");
const thematic_constant_1 = require("../../airtable-client/constant/thematic.constant");
const channel_constant_1 = require("../../common/constant/channel.constant");
const shared_1 = require("@ourloop/shared");
const helpers_1 = require("../../common/helpers");
let ExportedStoryRO = class ExportedStoryRO {
};
exports.ExportedStoryRO = ExportedStoryRO;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], ExportedStoryRO.prototype, "feedbackId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ enum: Object.values(types_1.CATEGORY_VALUE), isArray: true }),
    __metadata("design:type", Array)
], ExportedStoryRO.prototype, "categories", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: Date }),
    __metadata("design:type", Date)
], ExportedStoryRO.prototype, "publishedAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], ExportedStoryRO.prototype, "countryCode", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], ExportedStoryRO.prototype, "location", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        enum: Object.keys(types_1.AGE_VALUE).map((value) => value.toLowerCase().replace(/ /g, '_')),
    }),
    __metadata("design:type", String)
], ExportedStoryRO.prototype, "age", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        enum: Object.keys(types_1.GENDER_VALUE).map((value) => value.toLowerCase()),
    }),
    __metadata("design:type", String)
], ExportedStoryRO.prototype, "gender", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        enum: difficulty_constant_1.DIFFICULTY,
        isArray: true,
    }),
    __metadata("design:type", Array)
], ExportedStoryRO.prototype, "difficulties", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        enum: Object.values(thematic_constant_1.THEMATIC).filter((value) => value.split('.').length === 1),
    }),
    __metadata("design:type", Array)
], ExportedStoryRO.prototype, "thematicParents", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        enum: (0, helpers_1.getThematicAreaChildrenKeys)(),
    }),
    __metadata("design:type", Array)
], ExportedStoryRO.prototype, "thematicChildren", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: String, isArray: true }),
    __metadata("design:type", Array)
], ExportedStoryRO.prototype, "organisations", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], ExportedStoryRO.prototype, "content", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], ExportedStoryRO.prototype, "originalContent", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], ExportedStoryRO.prototype, "url", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        enum: Object.values(channel_constant_1.CHANNEL_CONSTANTS),
    }),
    __metadata("design:type", String)
], ExportedStoryRO.prototype, "communicationChannel", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: Boolean }),
    __metadata("design:type", Boolean)
], ExportedStoryRO.prototype, "didAnyoneComment", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        enum: Object.keys(shared_1.LANGUAGE).map((value) => value.toLowerCase()),
    }),
    __metadata("design:type", String)
], ExportedStoryRO.prototype, "originalContentLanguage", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: Boolean }),
    __metadata("design:type", Boolean)
], ExportedStoryRO.prototype, "isMinority", void 0);
exports.ExportedStoryRO = ExportedStoryRO = __decorate([
    (0, class_transformer_1.Exclude)()
], ExportedStoryRO);
//# sourceMappingURL=exported-story.ro.js.map