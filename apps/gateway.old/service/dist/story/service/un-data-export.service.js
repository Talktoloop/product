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
var UNDataExportService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNDataExportService = void 0;
const common_1 = require("@nestjs/common");
const un_data_export_dto_1 = require("../request/dto/un-data-export.dto");
const export_united_type_1 = require("../type/export-united.type");
const languages_constants_1 = require("../../common/constant/languages.constants");
const story_service_1 = require("./story.service");
const export_service_1 = require("./export.service");
const helpers_1 = require("../../common/helpers");
let UNDataExportService = UNDataExportService_1 = class UNDataExportService {
    constructor(storyService, exportService) {
        this.storyService = storyService;
        this.exportService = exportService;
        this.logger = new common_1.Logger(UNDataExportService_1.name);
    }
    async processCsvExport(filters, storyIds, response, filename) {
        const rawDataCollection = [];
        const isFirstBatch = true;
        let csvContent = '';
        try {
            const totalPages = Math.ceil(storyIds.length / filters.limit);
            for (let page = filters.page; page <= totalPages; page++) {
                await new Promise((resolve) => setImmediate(resolve));
                const batchIds = (0, helpers_1.narrowDownIds)(storyIds, page, filters.limit);
                if (batchIds.length === 0)
                    continue;
                const batchRawData = await this.storyService.findStoriesForUNExport(batchIds);
                rawDataCollection.push(...batchRawData);
            }
            const mappedData = await this.packageStories(rawDataCollection);
            const preparedContent = await this.prepareContent(mappedData, filters.repliedTo);
            csvContent = this.exportService.prepareCSVContent(preparedContent, isFirstBatch);
            this.exportService.saveCacheFile(this.exportService.generateFileName(filename, 'csv'), csvContent);
            return response
                .set({
                'Content-Type': 'text/csv',
                'Content-Disposition': `attachment; filename="${filename}.csv"`,
            })
                .send(csvContent);
        }
        catch (error) {
            this.logger.error('Error during CSV export for the UN', error);
            throw new common_1.BadRequestException('Error while exporting CSV for the UN');
        }
    }
    async packageStories(stories) {
        const mergedData = new Map();
        stories.forEach(story => {
            const storyId = story.story_id;
            if (!mergedData.has(storyId)) {
                mergedData.set(storyId, Object.assign(Object.assign({}, story), { translations_content: story.translations_content ? [story.translations_content] : [], administrativeDataNames_name: story.administrativeDataNames_name ? [story.administrativeDataNames_name] : [], administrative_level: story.administrative_level ? [story.administrative_level] : [], organisations_name: story.organisations_name ? [story.organisations_name] : [] }));
            }
            else {
                const existing = mergedData.get(storyId);
                if (story.translations_content && !existing.translations_content.includes(story.translations_content)) {
                    existing.translations_content.push(story.translations_content);
                }
                if (!existing.administrativeDataNames_name.includes(story.administrativeDataNames_name)) {
                    existing.administrativeDataNames_name.push(story.administrativeDataNames_name);
                }
                if (!existing.administrative_level.includes(story.administrative_level)) {
                    existing.administrative_level.push(story.administrative_level);
                }
                if (story.organisations_name && !existing.organisations_name.includes(story.organisations_name)) {
                    existing.organisations_name.push(story.organisations_name);
                }
                mergedData.set(storyId, existing);
            }
        });
        return Array.from(mergedData.values());
    }
    async prepareContent(stories, repliedTo) {
        return Promise.all(stories.map(async (story) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            const uniqueId = this.generateUniqueId(story);
            const administrativeData = this.getRegionAndDistrict(story.administrativeDataNames_name, story.administrative_level);
            const disability = this.hasSpecificDisability(story.difficultyIds);
            const [mappedGender, mappedPopulationType, originalContent, mappedSector, responsibilityCategory,] = await Promise.all([
                this.mapGender(story),
                this.getMappedThematicTypes(story.thematic_id, export_united_type_1.populationTypeMapping),
                this.getOriginalContent(story),
                this.getSectors(story.thematic_id, export_united_type_1.sectorMapping),
                this.getResponsibilityCategory(story),
            ]);
            const referredTo = Array.isArray(story.organisations_name)
                ? story.organisations_name.join(' | ')
                : (_a = story.organisations_name) !== null && _a !== void 0 ? _a : 'N/A';
            return new un_data_export_dto_1.UNDataExportDto({
                uniqueId,
                scopeCardNumber: 'N/A',
                dateOfReceipt: story.story_created_at.toDateString(),
                nameOfDataCollector: 'N/A',
                country: (_b = story.country_name) !== null && _b !== void 0 ? _b : 'N/A',
                region: administrativeData.region,
                district: administrativeData.district,
                settlementOrSiteName: (_c = story.story_place) !== null && _c !== void 0 ? _c : 'N/A',
                feedbackChannel: ((_d = story.story_channel) === null || _d === void 0 ? void 0 : _d.toUpperCase()) || 'N/A',
                languageOfInteraction: (_e = languages_constants_1.LANGUAGE_NAMES[story.story_language_id]) !== null && _e !== void 0 ? _e : 'N/A',
                providedIndependentlyOrWithAssistance: 'N/A',
                reasonForNotSharingFeedbackIndependently: 'N/A',
                consentToRecordFeedback: 'Yes',
                nameOfFeedbackProvider: (_f = story.recipient_nickname) !== null && _f !== void 0 ? _f : 'N/A',
                contactNumberOfFeedbackProvider: (_g = story.recipient_email) !== null && _g !== void 0 ? _g : 'N/A',
                ageRange: export_united_type_1.ageMapping[story.age_by_moderator] || export_united_type_1.ageMapping.default,
                sex: mappedGender,
                populationType: mappedPopulationType,
                communitiesWithMinorityAffiliations: story.is_minority_by_moderator ? 'Yes' : 'No',
                vulnerabilityFactor: 'N/A',
                washingtonGroupQ1: disability['1'],
                washingtonGroupQ2: disability['2'],
                washingtonGroupQ3: disability['3'],
                washingtonGroupQ4: disability['4'],
                washingtonGroupQ5: disability['5'],
                washingtonGroupQ6: disability['6'],
                complaintOrFeedbackDetails: originalContent,
                operationalRelevanceOrServiceMappingSector: mappedSector,
                responsibilityCategoryLevel1: responsibilityCategory,
                sensitivityCategoryLevel2: export_united_type_1.sensitivityCategoryMapping[story.story_isSensitive ? 1 : 0],
                specificSensitivityCategoryLevel2: Array.isArray(story.categories_id)
                    ? (_h = export_united_type_1.feedbackCategoryMapping[story.categories_id[0]]) !== null && _h !== void 0 ? _h : 'N/A'
                    : (_j = export_united_type_1.feedbackCategoryMapping[story.categories_id]) !== null && _j !== void 0 ? _j : 'N/A',
                criticalityCategoryLevel3: export_united_type_1.criticalityCategoryMapping.regular,
                statusOfFeedback: repliedTo && repliedTo.split(',').map(Number).includes(1)
                    ? export_united_type_1.statusMapping[1]
                    : export_united_type_1.statusMapping[2],
                actionTaken: 'Relevant org tagged',
                dateOfReferral: story.story_published_at.toDateString(),
                referredTo: referredTo,
                nameOfFocalPoint: (_k = story.story_place) !== null && _k !== void 0 ? _k : 'N/A',
                contactDetailsOfFocalPoint: 'N/A',
                dateOfCaseResolution: 'N/A',
                reasonForActionNotPossible: 'N/A',
                dateOfClosingTheLoop: story.story_published_at.toDateString(),
                comments: 'N/A',
                keyQuote: 'N/A',
                rumour: 'N/A',
            });
        }));
    }
    getMappedThematicTypes(data, mapping) {
        const thematics = Array.isArray(data) ? data : [data];
        if (thematics.length === 0)
            return 'N/A';
        const matchedTypes = Object.entries(mapping)
            .filter(([_, codes]) => thematics.some(thematicId => codes.includes(thematicId)))
            .map(([type]) => type);
        return matchedTypes.length > 0 ? matchedTypes.join(' | ') : 'N/A';
    }
    getSectors(thematicId, mapping) {
        const thematicIds = Array.isArray(thematicId) ? thematicId : [thematicId];
        const matchedSectors = Object.keys(mapping)
            .filter(key => mapping[key].some(id => thematicIds.includes(id)));
        return matchedSectors.length > 0 ? matchedSectors.join(' | ') : 'N/A';
    }
    mapGender(story) {
        return export_united_type_1.genderMapping[story.gender_by_moderator] || 'N/A';
    }
    hasSpecificDisability(difficultyIds) {
        const result = { 1: 'No', 2: 'No', 3: 'No', 4: 'No', 5: 'No', 6: 'No' };
        difficultyIds = Array.isArray(difficultyIds) ? difficultyIds : [difficultyIds];
        difficultyIds.forEach(num => {
            if (result.hasOwnProperty(num)) {
                result[+num] = 'Yes';
            }
        });
        return result;
    }
    getResponsibilityCategory(story) {
        return story.organisations_name === 'Loop'
            ? export_united_type_1.responsibilityCategoryMapping.internal
            : export_united_type_1.responsibilityCategoryMapping.external;
    }
    getOriginalContent(story) {
        var _a;
        const contents = Array.isArray(story.translations_content)
            ? story.translations_content.filter(content => content !== '')
            : [];
        return (_a = contents[0]) !== null && _a !== void 0 ? _a : 'N/A';
    }
    generateUniqueId(story) {
        var _a, _b;
        const district = (_a = story.country_name) !== null && _a !== void 0 ? _a : 'UNK';
        const date = story.story_created_at;
        const serial = (_b = parseInt(story.story_id, 10)) !== null && _b !== void 0 ? _b : 0;
        const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        return `${district.substring(0, 3).toUpperCase()}${date.getDate().toString().padStart(2, '0')}${monthNames[date.getMonth()]}${serial.toString().padStart(5, '0')}`;
    }
    getRegionAndDistrict(names, levels) {
        var _a, _b, _c, _d;
        if (!Array.isArray(names) || !Array.isArray(levels) || names.length !== levels.length) {
            return { region: 'N/A', district: 'N/A' };
        }
        const sortedData = levels
            .map((level, index) => {
            var _a;
            return ({
                level,
                name: (_a = names[index]) !== null && _a !== void 0 ? _a : 'N/A'
            });
        })
            .sort((a, b) => a.level - b.level);
        const region = (_b = (_a = sortedData.find(item => item.level === 1)) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : 'N/A';
        const district = (_d = (_c = sortedData.find(item => item.level === 2)) === null || _c === void 0 ? void 0 : _c.name) !== null && _d !== void 0 ? _d : 'N/A';
        return { region, district };
    }
};
exports.UNDataExportService = UNDataExportService;
exports.UNDataExportService = UNDataExportService = UNDataExportService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [story_service_1.StoryService,
        export_service_1.ExportService])
], UNDataExportService);
//# sourceMappingURL=un-data-export.service.js.map