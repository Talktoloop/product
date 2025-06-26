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
exports.IncomingDataDashboardFilterDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const helpers_1 = require("../../../common/helpers");
const dashboard_filter_dto_1 = require("./dashboard-filter.dto");
class IncomingDataDashboardFilterDTO extends dashboard_filter_dto_1.DashboardFilterDTO {
}
exports.IncomingDataDashboardFilterDTO = IncomingDataDashboardFilterDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: [...(0, helpers_1.getPendingStoryStatuses)()],
        required: false,
    }),
    __metadata("design:type", String)
], IncomingDataDashboardFilterDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: Date }),
    __metadata("design:type", String)
], IncomingDataDashboardFilterDTO.prototype, "from", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: Date }),
    __metadata("design:type", String)
], IncomingDataDashboardFilterDTO.prototype, "to", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, required: false }),
    __metadata("design:type", Number)
], IncomingDataDashboardFilterDTO.prototype, "durationMin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, required: false }),
    __metadata("design:type", Number)
], IncomingDataDashboardFilterDTO.prototype, "durationMax", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, required: false }),
    __metadata("design:type", Boolean)
], IncomingDataDashboardFilterDTO.prototype, "isSensitive", void 0);
//# sourceMappingURL=incoming-data-dashboard-filter.dto.js.map