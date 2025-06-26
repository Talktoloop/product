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
exports.UserProfileRO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const organisation_ro_1 = require("../../organisation/response/organisation.ro");
const registration_status_constant_1 = require("./../constant/registration-status.constant");
let UserProfileRO = class UserProfileRO {
};
exports.UserProfileRO = UserProfileRO;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UserProfileRO.prototype, "nickname", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UserProfileRO.prototype, "email", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UserProfileRO.prototype, "firstName", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UserProfileRO.prototype, "lastName", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ enum: registration_status_constant_1.REGISTRATION_STATUS }),
    __metadata("design:type", String)
], UserProfileRO.prototype, "registrationStatus", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UserProfileRO.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", organisation_ro_1.OrganisationRO)
], UserProfileRO.prototype, "organisation", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], UserProfileRO.prototype, "notifications", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], UserProfileRO.prototype, "reminders", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], UserProfileRO.prototype, "role", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], UserProfileRO.prototype, "hideLastName", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], UserProfileRO.prototype, "validityTimeInDays", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UserProfileRO.prototype, "plan", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UserProfileRO.prototype, "optin_marketing", void 0);
exports.UserProfileRO = UserProfileRO = __decorate([
    (0, class_transformer_1.Exclude)()
], UserProfileRO);
//# sourceMappingURL=user-profile.ro.js.map