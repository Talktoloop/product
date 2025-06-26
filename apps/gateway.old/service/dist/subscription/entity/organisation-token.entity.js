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
exports.OrganisationTokenEntity = void 0;
const typeorm_1 = require("typeorm");
const organisation_entity_1 = require("../../organisation/entity/organisation.entity");
let OrganisationTokenEntity = class OrganisationTokenEntity {
};
exports.OrganisationTokenEntity = OrganisationTokenEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], OrganisationTokenEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], OrganisationTokenEntity.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'organisation_id' }),
    __metadata("design:type", String)
], OrganisationTokenEntity.prototype, "organisationId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], OrganisationTokenEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => organisation_entity_1.OrganisationEntity, (organisation) => organisation.subscriptionToken),
    (0, typeorm_1.JoinColumn)({ name: 'organisation_id' }),
    __metadata("design:type", organisation_entity_1.OrganisationEntity)
], OrganisationTokenEntity.prototype, "organisation", void 0);
exports.OrganisationTokenEntity = OrganisationTokenEntity = __decorate([
    (0, typeorm_1.Entity)('organisation_token')
], OrganisationTokenEntity);
//# sourceMappingURL=organisation-token.entity.js.map