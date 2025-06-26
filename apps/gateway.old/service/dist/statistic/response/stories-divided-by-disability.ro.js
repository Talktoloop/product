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
exports.StoriesDividedByDisabilityRO = exports.StoriesDividedByDisabilityQueryResult = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
let StoriesDividedByDisabilityQueryResult = class StoriesDividedByDisabilityQueryResult {
};
exports.StoriesDividedByDisabilityQueryResult = StoriesDividedByDisabilityQueryResult;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 'seeing' }),
    __metadata("design:type", String)
], StoriesDividedByDisabilityQueryResult.prototype, "code", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 5 }),
    __metadata("design:type", Number)
], StoriesDividedByDisabilityQueryResult.prototype, "count", void 0);
exports.StoriesDividedByDisabilityQueryResult = StoriesDividedByDisabilityQueryResult = __decorate([
    (0, class_transformer_1.Exclude)()
], StoriesDividedByDisabilityQueryResult);
let StoriesDividedByDisabilityRO = class StoriesDividedByDisabilityRO extends StoriesDividedByDisabilityQueryResult {
};
exports.StoriesDividedByDisabilityRO = StoriesDividedByDisabilityRO;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 10 }),
    __metadata("design:type", Number)
], StoriesDividedByDisabilityRO.prototype, "percent", void 0);
exports.StoriesDividedByDisabilityRO = StoriesDividedByDisabilityRO = __decorate([
    (0, class_transformer_1.Exclude)()
], StoriesDividedByDisabilityRO);
//# sourceMappingURL=stories-divided-by-disability.ro.js.map