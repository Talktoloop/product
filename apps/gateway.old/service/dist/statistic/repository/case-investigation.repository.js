"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseInvestigationRepository = void 0;
const common_1 = require("@nestjs/common");
const case_sync_investigation_entity_1 = require("../../airtable-client/entity/case-sync-investigation.entity");
const typeorm_1 = require("typeorm");
const database_decorator_1 = require("../../database/database.decorator");
const helpers_1 = require("../../common/helpers");
let CaseInvestigationRepository = class CaseInvestigationRepository extends typeorm_1.Repository {
    countWhen(where, filters) {
        let query = this.createQueryBuilder('case_sync_investigation').innerJoin('case_sync', 'case_sync', 'case_sync.case_uuid = case_sync_investigation.case_id');
        if (where) {
            query.where(where);
        }
        if (filters) {
            query = (0, helpers_1.addFilterCasesCondition)(filters, query, [
                'case_sync_allegation_referral',
            ]);
        }
        return query
            .groupBy('c.id')
            .getCount()
            .catch((err) => console.log(err));
    }
};
exports.CaseInvestigationRepository = CaseInvestigationRepository;
exports.CaseInvestigationRepository = CaseInvestigationRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, database_decorator_1.EntityRepository)(case_sync_investigation_entity_1.CaseSyncInvestigationEntity)
], CaseInvestigationRepository);
//# sourceMappingURL=case-investigation.repository.js.map