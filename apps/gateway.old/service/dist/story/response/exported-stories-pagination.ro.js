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
exports.ExportedStoriesWithPaginationRO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const pagination_ro_1 = require("../../common/response/pagination.ro");
const exported_story_ro_1 = require("./exported-story.ro");
let ExportedStoriesWithPaginationRO = class ExportedStoriesWithPaginationRO {
};
exports.ExportedStoriesWithPaginationRO = ExportedStoriesWithPaginationRO;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: pagination_ro_1.PaginationRO }),
    __metadata("design:type", pagination_ro_1.PaginationRO)
], ExportedStoriesWithPaginationRO.prototype, "meta", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: exported_story_ro_1.ExportedStoryRO, isArray: true }),
    __metadata("design:type", Array)
], ExportedStoriesWithPaginationRO.prototype, "items", void 0);
exports.ExportedStoriesWithPaginationRO = ExportedStoriesWithPaginationRO = __decorate([
    (0, class_transformer_1.Exclude)()
], ExportedStoriesWithPaginationRO);
//# sourceMappingURL=exported-stories-pagination.ro.js.map