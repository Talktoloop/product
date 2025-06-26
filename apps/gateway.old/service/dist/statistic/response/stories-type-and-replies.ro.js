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
exports.StoriesTypeAndRepliesRO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
let StoriesTypeAndRepliesRO = class StoriesTypeAndRepliesRO {
};
exports.StoriesTypeAndRepliesRO = StoriesTypeAndRepliesRO;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], StoriesTypeAndRepliesRO.prototype, "percentOfStoriesWithResponded", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], StoriesTypeAndRepliesRO.prototype, "percentOfStoriesWithOrganisationResponded", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], StoriesTypeAndRepliesRO.prototype, "countOfTaggedOrganisation", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], StoriesTypeAndRepliesRO.prototype, "uniqueAuthors", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], StoriesTypeAndRepliesRO.prototype, "countOfFeedbacks", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], StoriesTypeAndRepliesRO.prototype, "avgResponseTime", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], StoriesTypeAndRepliesRO.prototype, "countOfResponses", void 0);
exports.StoriesTypeAndRepliesRO = StoriesTypeAndRepliesRO = __decorate([
    (0, class_transformer_1.Exclude)()
], StoriesTypeAndRepliesRO);
//# sourceMappingURL=stories-type-and-replies.ro.js.map