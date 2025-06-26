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
exports.StoriesAuthorPerAgeAndGenderRO = exports.StoriesCodeValuesRO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
let StoriesCodeValuesRO = class StoriesCodeValuesRO {
};
exports.StoriesCodeValuesRO = StoriesCodeValuesRO;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 'concern' }),
    __metadata("design:type", String)
], StoriesCodeValuesRO.prototype, "code", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: [1, 2, 3, 4] }),
    __metadata("design:type", Array)
], StoriesCodeValuesRO.prototype, "values", void 0);
exports.StoriesCodeValuesRO = StoriesCodeValuesRO = __decorate([
    (0, class_transformer_1.Exclude)()
], StoriesCodeValuesRO);
let StoriesAuthorPerAgeAndGenderRO = class StoriesAuthorPerAgeAndGenderRO {
};
exports.StoriesAuthorPerAgeAndGenderRO = StoriesAuthorPerAgeAndGenderRO;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: StoriesCodeValuesRO }),
    __metadata("design:type", Array)
], StoriesAuthorPerAgeAndGenderRO.prototype, "age", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: StoriesCodeValuesRO }),
    __metadata("design:type", Array)
], StoriesAuthorPerAgeAndGenderRO.prototype, "gender", void 0);
exports.StoriesAuthorPerAgeAndGenderRO = StoriesAuthorPerAgeAndGenderRO = __decorate([
    (0, class_transformer_1.Exclude)()
], StoriesAuthorPerAgeAndGenderRO);
//# sourceMappingURL=stories-author-per-age-and-gender.ro.js.map