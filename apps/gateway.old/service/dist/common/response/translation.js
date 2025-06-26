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
exports.TranslationRO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const translation_status_constants_1 = require("../constant/translation-status.constants");
const translation_type_constant_1 = require("../constant/translation-type.constant");
let TranslationRO = class TranslationRO {
};
exports.TranslationRO = TranslationRO;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 'Loren ipsum' }),
    __metadata("design:type", String)
], TranslationRO.prototype, "content", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 'en' }),
    __metadata("design:type", String)
], TranslationRO.prototype, "code", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        enum: translation_type_constant_1.TRANSLATION_TYPE_CONSTANTS,
        example: translation_type_constant_1.TRANSLATION_TYPE_CONSTANTS.MACHINE,
    }),
    __metadata("design:type", String)
], TranslationRO.prototype, "type", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        enum: translation_status_constants_1.TRANSLATION_STATUS_CONSTANTS,
        example: translation_status_constants_1.TRANSLATION_STATUS_CONSTANTS.TRANSLATING,
    }),
    __metadata("design:type", Number)
], TranslationRO.prototype, "status", void 0);
exports.TranslationRO = TranslationRO = __decorate([
    (0, class_transformer_1.Exclude)()
], TranslationRO);
//# sourceMappingURL=translation.js.map