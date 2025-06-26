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
exports.EditUserDataDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const consents_dto_1 = require("./consents.dto");
class EditUserDataDto {
}
exports.EditUserDataDto = EditUserDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, type: String }),
    __metadata("design:type", String)
], EditUserDataDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, type: String }),
    __metadata("design:type", String)
], EditUserDataDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, type: Boolean }),
    __metadata("design:type", Boolean)
], EditUserDataDto.prototype, "hideLastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: consents_dto_1.ConsentsDto }),
    __metadata("design:type", consents_dto_1.ConsentsDto)
], EditUserDataDto.prototype, "consents", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: String }),
    __metadata("design:type", String)
], EditUserDataDto.prototype, "organisationApplicationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: Boolean }),
    __metadata("design:type", Boolean)
], EditUserDataDto.prototype, "optin_marketing", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: String }),
    __metadata("design:type", String)
], EditUserDataDto.prototype, "email", void 0);
//# sourceMappingURL=edit-user-data.dto.js.map