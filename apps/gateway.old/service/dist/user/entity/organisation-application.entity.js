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
exports.OrganisationApplicationEntity = void 0;
const typeorm_1 = require("typeorm");
const organisation_entity_1 = require("../../organisation/entity/organisation.entity");
const user_entity_1 = require("./user.entity");
let OrganisationApplicationEntity = class OrganisationApplicationEntity {
};
exports.OrganisationApplicationEntity = OrganisationApplicationEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], OrganisationApplicationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id', type: 'varchar', length: 36 }),
    __metadata("design:type", String)
], OrganisationApplicationEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.UserEntity, (user) => user.organisationApplication),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], OrganisationApplicationEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'organisation_id', type: 'varchar', length: 36 }),
    __metadata("design:type", String)
], OrganisationApplicationEntity.prototype, "organisationId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => organisation_entity_1.OrganisationEntity, (organisation) => organisation.organisationApplications),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], OrganisationApplicationEntity.prototype, "organisation", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], OrganisationApplicationEntity.prototype, "createdAt", void 0);
exports.OrganisationApplicationEntity = OrganisationApplicationEntity = __decorate([
    (0, typeorm_1.Entity)('user_organisation_application')
], OrganisationApplicationEntity);
//# sourceMappingURL=organisation-application.entity.js.map