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
exports.AverageTakenTimeToCompleteStepRO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class AverageTakenTimeToCompleteStepTooltipRO {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    __metadata("design:type", Number)
], AverageTakenTimeToCompleteStepTooltipRO.prototype, "averageTime", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], AverageTakenTimeToCompleteStepTooltipRO.prototype, "timeUnit", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    __metadata("design:type", Number)
], AverageTakenTimeToCompleteStepTooltipRO.prototype, "numberOfCases", void 0);
class AverageTakenTimeToCompleteStepItemRO {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    __metadata("design:type", Number)
], AverageTakenTimeToCompleteStepItemRO.prototype, "days", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: AverageTakenTimeToCompleteStepTooltipRO }),
    __metadata("design:type", AverageTakenTimeToCompleteStepTooltipRO)
], AverageTakenTimeToCompleteStepItemRO.prototype, "tooltip", void 0);
let AverageTakenTimeToCompleteStepRO = class AverageTakenTimeToCompleteStepRO {
};
exports.AverageTakenTimeToCompleteStepRO = AverageTakenTimeToCompleteStepRO;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: AverageTakenTimeToCompleteStepItemRO }),
    __metadata("design:type", AverageTakenTimeToCompleteStepItemRO)
], AverageTakenTimeToCompleteStepRO.prototype, "processAndRefer", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: AverageTakenTimeToCompleteStepItemRO }),
    __metadata("design:type", AverageTakenTimeToCompleteStepItemRO)
], AverageTakenTimeToCompleteStepRO.prototype, "respondToReferral", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: AverageTakenTimeToCompleteStepItemRO }),
    __metadata("design:type", AverageTakenTimeToCompleteStepItemRO)
], AverageTakenTimeToCompleteStepRO.prototype, "assessWhetherToInvestigate", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: AverageTakenTimeToCompleteStepItemRO }),
    __metadata("design:type", AverageTakenTimeToCompleteStepItemRO)
], AverageTakenTimeToCompleteStepRO.prototype, "completeInvestigation", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: AverageTakenTimeToCompleteStepItemRO }),
    __metadata("design:type", AverageTakenTimeToCompleteStepItemRO)
], AverageTakenTimeToCompleteStepRO.prototype, "informTheAuthorOfOutcome", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: AverageTakenTimeToCompleteStepItemRO }),
    __metadata("design:type", AverageTakenTimeToCompleteStepItemRO)
], AverageTakenTimeToCompleteStepRO.prototype, "closeCase", void 0);
exports.AverageTakenTimeToCompleteStepRO = AverageTakenTimeToCompleteStepRO = __decorate([
    (0, class_transformer_1.Exclude)()
], AverageTakenTimeToCompleteStepRO);
//# sourceMappingURL=average-taken-time-to-complete-step.ro.js.map