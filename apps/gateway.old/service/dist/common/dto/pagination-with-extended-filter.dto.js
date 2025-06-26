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
exports.PaginationWithExtendedFilterDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const languages_constants_1 = require("../constant/languages.constants");
const pagination_with_order_and_filter_dto_1 = require("./pagination-with-order-and-filter.dto");
class PaginationWithExtendedFilterDto extends pagination_with_order_and_filter_dto_1.PaginationWithOrderAndFilterDto {
}
exports.PaginationWithExtendedFilterDto = PaginationWithExtendedFilterDto;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: languages_constants_1.LANGUAGES_CONSTANTS, required: false }),
    __metadata("design:type", String)
], PaginationWithExtendedFilterDto.prototype, "language", void 0);
//# sourceMappingURL=pagination-with-extended-filter.dto.js.map