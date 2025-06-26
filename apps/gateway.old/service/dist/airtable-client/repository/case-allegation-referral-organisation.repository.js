"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseSyncAllegationReferralOrganisationRepository = void 0;
const typeorm_1 = require("typeorm");
const database_decorator_1 = require("../../database/database.decorator");
const case_sync_allegation_referral_organisation_entity_1 = require("../entity/case-sync-allegation_referral_organisation.entity");
let CaseSyncAllegationReferralOrganisationRepository = class CaseSyncAllegationReferralOrganisationRepository extends typeorm_1.Repository {
};
exports.CaseSyncAllegationReferralOrganisationRepository = CaseSyncAllegationReferralOrganisationRepository;
exports.CaseSyncAllegationReferralOrganisationRepository = CaseSyncAllegationReferralOrganisationRepository = __decorate([
    (0, database_decorator_1.EntityRepository)(case_sync_allegation_referral_organisation_entity_1.CaseSyncAllegationReferralOrganisationEntity)
], CaseSyncAllegationReferralOrganisationRepository);
//# sourceMappingURL=case-allegation-referral-organisation.repository.js.map