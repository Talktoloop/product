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
exports.DashboardFilterDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const channel_constant_1 = require("../../../common/constant/channel.constant");
const languages_constants_1 = require("../../../common/constant/languages.constants");
class DashboardFilterDTO {
}
exports.DashboardFilterDTO = DashboardFilterDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: languages_constants_1.LANGUAGES_CONSTANTS, required: false }),
    __metadata("design:type", String)
], DashboardFilterDTO.prototype, "language", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: false }),
    __metadata("design:type", String)
], DashboardFilterDTO.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: channel_constant_1.CHANNEL_CONSTANTS, required: false }),
    __metadata("design:type", String)
], DashboardFilterDTO.prototype, "channel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: Date }),
    __metadata("design:type", String)
], DashboardFilterDTO.prototype, "from", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: Date }),
    __metadata("design:type", String)
], DashboardFilterDTO.prototype, "to", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: String }),
    __metadata("design:type", String)
], DashboardFilterDTO.prototype, "searchTerm", void 0);
//# sourceMappingURL=dashboard-filter.dto.js.map