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
exports.ResponsiveByStepRO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const type_value_ro_1 = require("./type-value.ro");
let ResponsiveByStepRO = class ResponsiveByStepRO {
};
exports.ResponsiveByStepRO = ResponsiveByStepRO;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: type_value_ro_1.TypeValuesRO, isArray: true }),
    __metadata("design:type", Array)
], ResponsiveByStepRO.prototype, "steps", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    __metadata("design:type", Number)
], ResponsiveByStepRO.prototype, "closedCases", void 0);
exports.ResponsiveByStepRO = ResponsiveByStepRO = __decorate([
    (0, class_transformer_1.Exclude)()
], ResponsiveByStepRO);
//# sourceMappingURL=responsive-by-step.ro.js.map