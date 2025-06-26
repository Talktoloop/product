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
exports.UNDataExportDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class UNDataExportDto {
    constructor(partial) {
        Object.assign(this, partial);
    }
}
exports.UNDataExportDto = UNDataExportDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unique ID of the feedback', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "uniqueId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'SCOPE Card Number', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "scopeCardNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date of receipt', type: Date }),
    __metadata("design:type", Object)
], UNDataExportDto.prototype, "dateOfReceipt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the data collector', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "nameOfDataCollector", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Country of the feedback', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Region of the feedback', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "region", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'District of the feedback', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "district", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Settlement or Site Name', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "settlementOrSiteName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Feedback channel', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "feedbackChannel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Language of the interaction', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "languageOfInteraction", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provided independently or with assistance', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "providedIndependentlyOrWithAssistance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Reason for not sharing feedback independently', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "reasonForNotSharingFeedbackIndependently", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Consent to record feedback', type: Boolean }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "consentToRecordFeedback", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of feedback provider', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "nameOfFeedbackProvider", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Contact number of feedback provider', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "contactNumberOfFeedbackProvider", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Age range', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "ageRange", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sex', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "sex", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Population type', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "populationType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Communities with Minority Affiliations', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "communitiesWithMinorityAffiliations", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Vulnerability factor', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "vulnerabilityFactor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Washington Group Q1 - Difficulty seeing', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "washingtonGroupQ1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Washington Group Q2 - Difficulty hearing', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "washingtonGroupQ2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Washington Group Q3 - Difficulty walking or climbing steps', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "washingtonGroupQ3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Washington Group Q4 - Difficulty remembering or concentrating', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "washingtonGroupQ4", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Washington Group Q5 - Difficulty washing and/or dressing', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "washingtonGroupQ5", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Washington Group Q6 - Difficulty communicating', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "washingtonGroupQ6", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Complaint or Feedback Details', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "complaintOrFeedbackDetails", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Operational relevance or Service Mapping Sector', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "operationalRelevanceOrServiceMappingSector", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Responsibility Category (level-1)', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "responsibilityCategoryLevel1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sensitivity Category (level-2)', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "sensitivityCategoryLevel2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Specific Sensitivity Category (level-2)', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "specificSensitivityCategoryLevel2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Criticality Category (level-3)', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "criticalityCategoryLevel3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status of feedback', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "statusOfFeedback", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'What action was taken?', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "actionTaken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date of referral', type: Date }),
    __metadata("design:type", Object)
], UNDataExportDto.prototype, "dateOfReferral", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Referred to (organization and department)', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "referredTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of focal point', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "nameOfFocalPoint", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Contact details of the focal point', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "contactDetailsOfFocalPoint", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date of case resolution', type: Date }),
    __metadata("design:type", Object)
], UNDataExportDto.prototype, "dateOfCaseResolution", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Reason for action not possible', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "reasonForActionNotPossible", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date of closing the loop', type: Date }),
    __metadata("design:type", Object)
], UNDataExportDto.prototype, "dateOfClosingTheLoop", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Comments', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "comments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Key quote', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "keyQuote", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rumour', type: String }),
    __metadata("design:type", String)
], UNDataExportDto.prototype, "rumour", void 0);
//# sourceMappingURL=un-data-export.dto.js.map