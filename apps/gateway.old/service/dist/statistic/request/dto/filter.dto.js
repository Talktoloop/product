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
exports.FilterCasesDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class FilterCasesDto {
}
exports.FilterCasesDto = FilterCasesDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: false }),
    __metadata("design:type", Object)
], FilterCasesDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: false }),
    __metadata("design:type", Object)
], FilterCasesDto.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: false }),
    __metadata("design:type", Object)
], FilterCasesDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: false }),
    __metadata("design:type", Object)
], FilterCasesDto.prototype, "organisationType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: false }),
    __metadata("design:type", Object)
], FilterCasesDto.prototype, "investigationOutcome", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: false }),
    __metadata("design:type", Object)
], FilterCasesDto.prototype, "referredForAssistance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: false }),
    __metadata("design:type", Object)
], FilterCasesDto.prototype, "caseType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: false }),
    __metadata("design:type", Object)
], FilterCasesDto.prototype, "disability", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: false }),
    __metadata("design:type", Object)
], FilterCasesDto.prototype, "thematic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: Date }),
    __metadata("design:type", String)
], FilterCasesDto.prototype, "from", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: Date }),
    __metadata("design:type", String)
], FilterCasesDto.prototype, "to", void 0);
//# sourceMappingURL=filter.dto.js.map