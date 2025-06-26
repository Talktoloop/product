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
exports.OrganisationEntity = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../user/entity/user.entity");
const organisation_application_entity_1 = require("../../user/entity/organisation-application.entity");
const country_entity_1 = require("../../country/entity/country.entity");
const story_entity_1 = require("../../story/entity/story.entity");
const organisation_token_entity_1 = require("../../subscription/entity/organisation-token.entity");
let OrganisationEntity = class OrganisationEntity {
};
exports.OrganisationEntity = OrganisationEntity;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'varchar', length: 32 }),
    __metadata("design:type", String)
], OrganisationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], OrganisationEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], OrganisationEntity.prototype, "verified", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint', name: 'country_id' }),
    __metadata("design:type", Number)
], OrganisationEntity.prototype, "countryId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 16 }),
    __metadata("design:type", String)
], OrganisationEntity.prototype, "acronym", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], OrganisationEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 32, name: 'external_id' }),
    __metadata("design:type", String)
], OrganisationEntity.prototype, "externalId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_entity_1.UserEntity, (user) => user.organisation),
    __metadata("design:type", Array)
], OrganisationEntity.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => organisation_application_entity_1.OrganisationApplicationEntity, (application) => application.organisation),
    __metadata("design:type", Array)
], OrganisationEntity.prototype, "organisationApplications", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        select: false,
        insert: false,
        readonly: true,
        default: 0,
    }),
    __metadata("design:type", Boolean)
], OrganisationEntity.prototype, "replied", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => country_entity_1.CountryEntity, (country) => country.organisations),
    (0, typeorm_1.JoinColumn)({ name: 'country_id' }),
    __metadata("design:type", country_entity_1.CountryEntity)
], OrganisationEntity.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => story_entity_1.StoryEntity),
    (0, typeorm_1.JoinTable)({
        name: 'story_organisation',
        joinColumns: [{ name: 'organisation_id' }],
        inverseJoinColumns: [{ name: 'story_id' }],
    }),
    __metadata("design:type", Array)
], OrganisationEntity.prototype, "stories", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => organisation_token_entity_1.OrganisationTokenEntity, (organisationToken) => organisationToken.organisation),
    __metadata("design:type", organisation_token_entity_1.OrganisationTokenEntity)
], OrganisationEntity.prototype, "subscriptionToken", void 0);
exports.OrganisationEntity = OrganisationEntity = __decorate([
    (0, typeorm_1.Entity)('organisation')
], OrganisationEntity);
//# sourceMappingURL=organisation.entity.js.map