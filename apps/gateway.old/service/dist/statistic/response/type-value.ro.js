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
exports.TypeValuesRO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
let TypeValuesRO = class TypeValuesRO {
};
exports.TypeValuesRO = TypeValuesRO;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: String, example: 'SEAH' }),
    __metadata("design:type", String)
], TypeValuesRO.prototype, "type", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: Boolean, required: false }),
    __metadata("design:type", Boolean)
], TypeValuesRO.prototype, "isAnonymousData", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: Number, isArray: true, example: [0, 1, 1, 0] }),
    __metadata("design:type", Array)
], TypeValuesRO.prototype, "values", void 0);
exports.TypeValuesRO = TypeValuesRO = __decorate([
    (0, class_transformer_1.Exclude)()
], TypeValuesRO);
//# sourceMappingURL=type-value.ro.js.map