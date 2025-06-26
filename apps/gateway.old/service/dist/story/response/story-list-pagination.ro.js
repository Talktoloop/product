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
exports.StoryListPaginationRO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const pagination_ro_1 = require("../../common/response/pagination.ro");
const story_list_ro_1 = require("./story-list.ro");
let StoryListPaginationRO = class StoryListPaginationRO {
};
exports.StoryListPaginationRO = StoryListPaginationRO;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: pagination_ro_1.PaginationRO }),
    __metadata("design:type", pagination_ro_1.PaginationRO)
], StoryListPaginationRO.prototype, "meta", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: story_list_ro_1.StoryListRO, isArray: true }),
    __metadata("design:type", Array)
], StoryListPaginationRO.prototype, "items", void 0);
exports.StoryListPaginationRO = StoryListPaginationRO = __decorate([
    (0, class_transformer_1.Exclude)()
], StoryListPaginationRO);
//# sourceMappingURL=story-list-pagination.ro.js.map