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
exports.StoryFilterAndOrderDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const filter_with_pagination_dto_1 = require("../../../common/dto/filter-with-pagination.dto");
const types_1 = require("../../../common/types");
const channel_constant_1 = require("../../../common/constant/channel.constant");
class StoryFilterAndOrderDto extends filter_with_pagination_dto_1.FilterWithPaginationDto {
}
exports.StoryFilterAndOrderDto = StoryFilterAndOrderDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: false }),
    __metadata("design:type", String)
], StoryFilterAndOrderDto.prototype, "q", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: false }),
    __metadata("design:type", String)
], StoryFilterAndOrderDto.prototype, "regionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: types_1.StoryOrderEnum, required: false }),
    __metadata("design:type", String)
], StoryFilterAndOrderDto.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: false }),
    __metadata("design:type", String)
], StoryFilterAndOrderDto.prototype, "repliedTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: channel_constant_1.CHANNEL_CONSTANTS, required: false }),
    __metadata("design:type", String)
], StoryFilterAndOrderDto.prototype, "channelFilter", void 0);
//# sourceMappingURL=story-filter-and-order.dto.js.map