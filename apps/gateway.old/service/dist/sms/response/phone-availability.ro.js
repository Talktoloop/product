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
exports.PhoneAvailabilityRO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const shared_1 = require("@ourloop/shared");
let PhoneAvailabilityRO = class PhoneAvailabilityRO {
};
exports.PhoneAvailabilityRO = PhoneAvailabilityRO;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 'sms' }),
    __metadata("design:type", String)
], PhoneAvailabilityRO.prototype, "type", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: '379937ea-e310-4f4f-b6f1-df5d34b2d3fe' }),
    __metadata("design:type", String)
], PhoneAvailabilityRO.prototype, "storyId", void 0);
exports.PhoneAvailabilityRO = PhoneAvailabilityRO = __decorate([
    (0, class_transformer_1.Exclude)()
], PhoneAvailabilityRO);
//# sourceMappingURL=phone-availability.ro.js.map