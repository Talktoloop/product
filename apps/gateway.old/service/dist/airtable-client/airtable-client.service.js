"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirTableClientService = void 0;
const common_1 = require("@nestjs/common");
const airtable_client_repository_1 = require("./repository/airtable-client.repository");
const case_sync_entity_1 = require("./entity/case-sync.entity");
const case_sync_author_perspective_entity_1 = require("./entity/case-sync-author-perspective.entity");
const case_author_perspective_repository_1 = require("./repository/case-author-perspective.repository");
const case_thematic_area_repository_1 = require("./repository/case-thematic-area.repository");
const case_thematic_area_subsection_repository_1 = require("./repository/case-thematic-area-subsection.repository");
const case_sync_thematic_area_entity_1 = require("./entity/case-sync-thematic-area.entity");
const case_sync_thematic_area_subsection_entity_1 = require("./entity/case-sync-thematic-area-subsection.entity");
const case_sync_investigation_entity_1 = require("./entity/case-sync-investigation.entity");
const AirTable = __importStar(require("airtable-node"));
const case_sync_survivor_disability_entity_1 = require("./entity/case-sync-survivor-disability.entity");
const case_survivor_disability_repository_1 = require("./repository/case-survivor-disability.repository");
const case_investigation_repository_1 = require("./repository/case-investigation.repository");
const case_allegation_referral_repository_1 = require("./repository/case-allegation-referral.repository");
const case_sync_allegation_referral_entity_1 = require("./entity/case-sync-allegation_referral.entity");
const case_allegation_referral_organisation_repository_1 = require("./repository/case-allegation-referral-organisation.repository");
const case_sync_allegation_referral_organisation_entity_1 = require("./entity/case-sync-allegation_referral_organisation.entity");
const relation_enum_1 = require("./enum/relation.enum");
const di_constant_1 = require("../common/constant/di.constant");
const shared_1 = require("@ourloop/shared");
const story_moderator_service_1 = require("../story/service/story-moderator.service");
const story_service_1 = require("../story/service/story.service");
const reject_reason_service_1 = require("../lexicon/service/reject-reason.service");
let AirTableClientService = class AirTableClientService {
    constructor(storyModeratorService, storyService, airTableClientRepository, caseAuthorPerspectiveRepository, caseThematicAreaRepository, caseSurvivorDisabilityAreaRepository, caseThematicAreaSubsectionRepository, caseSyncInvestigationRepository, rejectionReasonService, caseSyncAllegationReferralRepository, caseSyncAllegationReferralOrganisationRepository, airTable) {
        this.storyModeratorService = storyModeratorService;
        this.storyService = storyService;
        this.airTableClientRepository = airTableClientRepository;
        this.caseAuthorPerspectiveRepository = caseAuthorPerspectiveRepository;
        this.caseThematicAreaRepository = caseThematicAreaRepository;
        this.caseSurvivorDisabilityAreaRepository = caseSurvivorDisabilityAreaRepository;
        this.caseThematicAreaSubsectionRepository = caseThematicAreaSubsectionRepository;
        this.caseSyncInvestigationRepository = caseSyncInvestigationRepository;
        this.rejectionReasonService = rejectionReasonService;
        this.caseSyncAllegationReferralRepository = caseSyncAllegationReferralRepository;
        this.caseSyncAllegationReferralOrganisationRepository = caseSyncAllegationReferralOrganisationRepository;
        this.airTable = airTable;
    }
    async removeRow(caseUUID) {
        return this.airTableClientRepository.softDelete(caseUUID);
    }
    async removeRows(ids) {
        var _a;
        const cases = await this.airTableClientRepository.findNotAnonymized();
        const caseIds = cases.map((item) => item.caseUUID);
        let item;
        const operations = [];
        for (const caseId of caseIds.filter((value) => !ids.includes(value))) {
            item = await this.airTable.table('Cases').retrieve(caseId);
            if (item.error === 'NOT_FOUND' ||
                ((_a = item.error) === null || _a === void 0 ? void 0 : _a.type) === 'MODEL_ID_NOT_FOUND') {
                operations.push(this.airTableClientRepository.update({
                    caseUUID: caseId,
                }, {
                    deletedAt: new Date(),
                }));
            }
        }
        if (operations.length > 0) {
            return Promise.all(operations);
        }
    }
    async saveRelation(parentId, parentKey, isUpdate, values, key, repository, entity) {
        if (isUpdate) {
            const toRemove = await repository.find({
                [parentKey]: parentId,
            });
            await repository.remove(toRemove);
            entity[key] = await repository.save(values);
        }
        else {
            entity[key] = values;
        }
        return entity;
    }
    prepareAuthorPerspectiveEntities(caseId, data) {
        return data.map((value) => new case_sync_author_perspective_entity_1.CaseSyncAuthorPerspectiveEntity({
            caseId,
            authorPerspective: value,
        }));
    }
    prepareSurvivorDisabilityEntities(caseId, data) {
        return data.map((value) => new case_sync_survivor_disability_entity_1.CaseSyncSurvivorDisabilityEntity({
            caseId,
            survivorDisability: value,
        }));
    }
    prepareThematicAreaEntities(caseId, data) {
        return data.map((value) => new case_sync_thematic_area_entity_1.CaseSyncThematicAreaEntity({
            caseId,
            thematicArea: value,
        }));
    }
    prepareThematicAreaSubsectionEntities(caseId, data) {
        return data.map((value) => new case_sync_thematic_area_subsection_entity_1.CaseSyncThematicAreaSubsectionEntity({
            caseId,
            thematicAreaSubsection: value,
        }));
    }
    prepareInvestigationsEntities(caseId, data) {
        return data
            .filter((item) => item.investigationOpened)
            .map((item) => new case_sync_investigation_entity_1.CaseSyncInvestigationEntity({
            caseId,
            investigationOpened: item.investigationOpened,
            investigationClosed: item.investigationClosed,
            whichOrganisationDoingInvestigation: item.whichOrganisationDoingInvestigation,
            investigationOutcome: item.investigationOutcome,
            referralToClearCheckMade: item.referralToClearCheckMade,
        }));
    }
    prepareAllegationReferralsEntities(caseId, data) {
        return data
            .filter((item) => item.allegationReferralDate)
            .map((item) => new case_sync_allegation_referral_entity_1.CaseSyncAllegationReferralEntity({
            caseId,
            allegationReferralDate: item.allegationReferralDate,
            responseToAllegationReferralDate: item.responseToAllegationReferralDate,
        }));
    }
    prepareAllegationReferralOrgansationsEntities(allegationReferralId, data) {
        return data
            .filter((item) => item.name || item.type)
            .map((item) => new case_sync_allegation_referral_organisation_entity_1.CaseSyncAllegationReferralOrganisationEntity({
            allegationReferralId,
            name: item.name,
            type: item.type,
        }));
    }
    async prepareDataAndSaveRelation(data, isUpdate, key, transformedData) {
        let values, repository;
        switch (key) {
            case relation_enum_1.RELATION.AUTHOR_PERSPECTIVE:
                values = this.prepareAuthorPerspectiveEntities(data.caseUUID, data[key]);
                repository = this.caseAuthorPerspectiveRepository;
                break;
            case relation_enum_1.RELATION.SURVIVOR_DISABILITY:
                values = this.prepareSurvivorDisabilityEntities(data.caseUUID, data[key]);
                repository = this.caseSurvivorDisabilityAreaRepository;
                break;
            case relation_enum_1.RELATION.THEMATIC_AREA:
                values = this.prepareThematicAreaEntities(data.caseUUID, data[key]);
                repository = this.caseThematicAreaRepository;
                break;
            case relation_enum_1.RELATION.THEMATIC_AREA_SUBSECTION:
                values = this.prepareThematicAreaSubsectionEntities(data.caseUUID, data[key]);
                repository = this.caseThematicAreaSubsectionRepository;
                break;
            case relation_enum_1.RELATION.INVESTIGATION:
                values = this.prepareInvestigationsEntities(data.caseUUID, data[key]);
                repository = this.caseSyncInvestigationRepository;
                break;
            case relation_enum_1.RELATION.ALLEGATION_REFERRAL:
                values = this.prepareAllegationReferralsEntities(data.caseUUID, data[key]);
                repository = this.caseSyncAllegationReferralRepository;
                break;
        }
        return this.saveRelation(data.caseUUID, 'caseId', isUpdate, values, key, repository, transformedData);
    }
    async transformAllegationReferralOrganisations(data, isUpdate, transformedData) {
        const operations = [];
        for (const index in transformedData) {
            const allegationReferral = transformedData[index];
            operations.push(this.saveRelation(allegationReferral.id, 'allegationReferralId', isUpdate, this.prepareAllegationReferralOrgansationsEntities(allegationReferral.id, data.allegationReferrals[index].organisations), 'organisations', this.caseSyncAllegationReferralOrganisationRepository, allegationReferral));
        }
        if (operations.length > 0) {
            transformedData = await Promise.all(operations);
        }
        return transformedData;
    }
    async transformRow(data, isUpdate) {
        const objectKeys = Object.keys(data);
        const relationKeys = Object.values(relation_enum_1.RELATION);
        let transformedData = {};
        for (const key of objectKeys.filter((item) => !relationKeys.includes(item))) {
            if (Array.isArray(data[key])) {
                transformedData[key] = data[key].join('|');
            }
            else {
                transformedData[key] = data[key];
            }
        }
        if (!isUpdate) {
            transformedData.initialUrgency = data.urgency;
        }
        for (const key of objectKeys.filter((item) => relationKeys.includes(item))) {
            transformedData = await this.prepareDataAndSaveRelation(data, isUpdate, key, transformedData);
            if (key === relation_enum_1.RELATION.ALLEGATION_REFERRAL) {
                transformedData[key] =
                    await this.transformAllegationReferralOrganisations(data, isUpdate, transformedData.allegationReferrals);
            }
        }
        return transformedData;
    }
    async deleteNotSensitiveData(data) {
        var _a;
        const story = await this.storyService.findById(data.loopId);
        if (story && ((_a = story.language) === null || _a === void 0 ? void 0 : _a.code) && story.status !== shared_1.STORY_STATUS.REJECTED) {
            const rejectionReason = await this.rejectionReasonService.findOneByParamsOrFail({ code: 'notSensitive' });
            await this.storyModeratorService.checkStoryAndReject(story.id, { reasonIds: [rejectionReason.id], rationale: '', reasonTexts: ['Not sensitive'], notificationLanguage: story.language.code });
            return await this.airTable.delete(data.recordId);
        }
    }
    async saveOrUpdateRow(row) {
        var _a;
        let updateRow = await this.airTableClientRepository.findByUUID(row.caseUUID);
        let isUpdate = true;
        if (!updateRow) {
            isUpdate = false;
            updateRow = new case_sync_entity_1.CaseSyncEntity();
        }
        const data = await this.transformRow(row, isUpdate);
        if (row.notSensitive && row.loopId) {
            try {
                const story = await this.storyService.findById(row.loopId);
                if (story && ((_a = story.language) === null || _a === void 0 ? void 0 : _a.code) && story.status !== shared_1.STORY_STATUS.REJECTED) {
                    const rejectionReason = await this.rejectionReasonService.findOneByParamsOrFail({ code: 'notSensitive' });
                    await this.storyModeratorService.checkStoryAndReject(story.id, { reasonIds: [rejectionReason.id], rationale: '', reasonTexts: ['Not sensitive'], notificationLanguage: story.language.code });
                    await this.airTable.delete(row.caseUUID);
                }
            }
            catch (error) {
                console.error('Error while rejecting story', error);
            }
        }
        return this.airTableClientRepository.save(data);
    }
};
exports.AirTableClientService = AirTableClientService;
exports.AirTableClientService = AirTableClientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => story_moderator_service_1.StoryModeratorService))),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => story_service_1.StoryService))),
    __param(11, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.AIRTABLE)),
    __metadata("design:paramtypes", [story_moderator_service_1.StoryModeratorService,
        story_service_1.StoryService,
        airtable_client_repository_1.AirTableClientRepository,
        case_author_perspective_repository_1.CaseAuthorPerspectiveRepository,
        case_thematic_area_repository_1.CaseThematicAreaRepository,
        case_survivor_disability_repository_1.CaseSurvivorDisabilityAreaRepository,
        case_thematic_area_subsection_repository_1.CaseThematicAreaSubsectionRepository,
        case_investigation_repository_1.CaseSyncInvestigationRepository,
        reject_reason_service_1.RejectReasonService,
        case_allegation_referral_repository_1.CaseSyncAllegationReferralRepository,
        case_allegation_referral_organisation_repository_1.CaseSyncAllegationReferralOrganisationRepository, typeof (_a = typeof AirTable !== "undefined" && AirTable) === "function" ? _a : Object])
], AirTableClientService);
//# sourceMappingURL=airtable-client.service.js.map