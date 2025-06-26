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
exports.SummaryRO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
let SummaryRO = class SummaryRO {
};
exports.SummaryRO = SummaryRO;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 10 }),
    __metadata("design:type", Number)
], SummaryRO.prototype, "numberOfOrganisations", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 10 }),
    __metadata("design:type", Number)
], SummaryRO.prototype, "numberOfLanguages", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 10 }),
    __metadata("design:type", Number)
], SummaryRO.prototype, "numberOfFeedback", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 10 }),
    __metadata("design:type", Number)
], SummaryRO.prototype, "numberOfComments", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SummaryRO.prototype, "currentTime", void 0);
exports.SummaryRO = SummaryRO = __decorate([
    (0, class_transformer_1.Exclude)()
], SummaryRO);
//# sourceMappingURL=summary.ro.js.map