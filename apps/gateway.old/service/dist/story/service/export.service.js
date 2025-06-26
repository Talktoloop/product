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
var ExportService_1;
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportService = void 0;
const common_1 = require("@nestjs/common");
const notification_service_1 = require("../../notification/service/notification.service");
const uuid_1 = require("uuid");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const shared_1 = require("@ourloop/shared");
const date_fns_1 = require("date-fns");
const helpers_1 = require("../../common/helpers");
const config_1 = require("@nestjs/config");
const di_constant_1 = require("../../common/constant/di.constant");
const story_repository_1 = require("../repository/story.repository");
const types_1 = require("../../common/types");
const AirTable = __importStar(require("airtable-node"));
const default_1 = require("../../config/default");
const language_service_1 = require("../../language/language.service");
const category_service_1 = require("../../category/category.service");
const difficulty_service_1 = require("../../lexicon/service/difficulty.service");
const organisation_service_1 = require("../../organisation/organisation.service");
const thematic_service_1 = require("../../lexicon/service/thematic.service");
const helpers_2 = require("../../common/helpers");
const story_administrative_data_repository_1 = require("../repository/story-administrative-data.repository");
const country_service_1 = require("../../country/service/country.service");
const story_recipient_repository_1 = require("../repository/story-recipient.repository");
const user_export_csv_activity_repository_1 = require("../../user/repository/user-export-csv-activity.repository");
const typeorm_1 = require("typeorm");
const comment_repository_1 = require("../../comment/repository/comment.repository");
const shared_2 = require("@ourloop/shared");
const export_united_type_1 = require("../type/export-united.type");
const disability_enum_1 = require("../enum/disability.enum");
let ExportService = ExportService_1 = class ExportService {
    constructor(thematicAreaService, difficultyService, organisationService, categoryService, languageService, storyRepository, notificationService, config, airTable, storyAdministrativeDataRepository, countryService, storyRecipientRepository, userExportCsvActivityRepository, connection, commentRepository) {
        this.thematicAreaService = thematicAreaService;
        this.difficultyService = difficultyService;
        this.organisationService = organisationService;
        this.categoryService = categoryService;
        this.languageService = languageService;
        this.storyRepository = storyRepository;
        this.notificationService = notificationService;
        this.config = config;
        this.airTable = airTable;
        this.storyAdministrativeDataRepository = storyAdministrativeDataRepository;
        this.countryService = countryService;
        this.storyRecipientRepository = storyRecipientRepository;
        this.userExportCsvActivityRepository = userExportCsvActivityRepository;
        this.connection = connection;
        this.commentRepository = commentRepository;
        this.logger = new common_1.Logger(ExportService_1.name);
    }
    makeDateReadable(date, dateFormat) {
        return date
            ? (0, date_fns_1.format)(new Date(date), dateFormat !== null && dateFormat !== void 0 ? dateFormat : 'yyyy-MM-dd hh:mm:ss XXX')
            : date;
    }
    makeAsReadable(key) {
        var _a;
        return (_a = default_1.staticConfig.dataExport.readableNames[key]) !== null && _a !== void 0 ? _a : key;
    }
    clearCSVData(value) {
        return value
            ? value
                .replace(/,/g, ' ')
                .replace(/\n/g, ' ')
                .replace(/\t/g, ' ')
                .replace(/\//g, '-')
            : value;
    }
    collectColumnNames(userLanguage, item, itemKeys, omittedColumns = []) {
        Object.keys((0, shared_1._omit)(item, omittedColumns)).forEach((key) => itemKeys.push(`${(0, helpers_1.upperCaseFirst)(this.makeAsReadable(key), false)}`.replace(':language', (0, helpers_1.upperCaseFirst)((0, helpers_1.getKeyByValue)(shared_1.LANGUAGE, userLanguage.code)))));
        return [...itemKeys, this.makeAsReadable('url')];
    }
    prepareStoryColumnsToExport(story, userLanguage, omittedColumns, extended = true) {
        const itemKeys = this.collectColumnNames(userLanguage, story, [], omittedColumns);
        let columnNames = [];
        if (extended) {
            columnNames.push('');
        }
        columnNames = [...columnNames, ...itemKeys];
        if (extended) {
            columnNames = [
                ...columnNames,
                ...[
                    '',
                    'Sensitive Story type',
                    'Organisation type',
                    'Outcomes of Investigations',
                    'Assistance provided',
                ],
            ];
        }
        return {
            itemKeys: columnNames,
        };
    }
    async mapData(data, userLanguageId, withExternalData = true) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const items = [];
        const languages = await this.languageService.getLanguages();
        const storyIds = Array.from(new Set((_a = data === null || data === void 0 ? void 0 : data.stories) === null || _a === void 0 ? void 0 : _a.filter((story) => story.status === shared_1.STORY_STATUS.SENT_TO_CASE_MANAGER).map((story) => story.id)));
        let externalData = {};
        if (withExternalData) {
            externalData = await this.findExternalData(storyIds);
        }
        if (!(data === null || data === void 0 ? void 0 : data.stories)) {
            return items;
        }
        const countryNames = [];
        for (const country of data.countries) {
            countryNames[country.id] = country.name;
        }
        for (const story of data.stories) {
            items[story.id] = {
                status: story.status,
                isSensitive: story.isSensitive,
                categories: [],
                country: (_b = countryNames[story.countryId]) !== null && _b !== void 0 ? _b : null,
                district: null,
                place: story.place,
                age: null,
                gender: null,
                difficulties: [],
                thematicParents: [],
                thematicChildren: [],
                organisations: [],
                administrativeData: [],
                publishedAt: story.publishedAt,
                numberOfComments: 0,
                channel: story.channel,
                content: null,
                originalContent: null,
                originalContentLanguage: (0, helpers_1.getKeyByValue)(shared_1.LANGUAGE, (_c = languages.find((language) => language.id === story.languageId)) === null || _c === void 0 ? void 0 : _c.code, true),
                allegationTypes: (_d = externalData[story.id]) === null || _d === void 0 ? void 0 : _d.allegationTypes,
                organisationTypes: (_e = externalData[story.id]) === null || _e === void 0 ? void 0 : _e.organisationTypes,
                outcomesOfInvestigation: (_f = externalData[story.id]) === null || _f === void 0 ? void 0 : _f.outcomesOfInvestigation,
                assistanceProvided: (_g = externalData[story.id]) === null || _g === void 0 ? void 0 : _g.assistanceProvided,
                defaultLanguageIdForAdministrativeData: null,
                isMinority: null,
            };
        }
        for (const recipient of data.storyRecipients) {
            items[recipient.storyId].isMinority = recipient.isMinority ? true : false;
        }
        for (const comment of data.comments) {
            items[comment.storyId].numberOfComments++;
        }
        for (const translation of data.translations) {
            if (translation.languageId === translation.storyLanguageId) {
                items[translation.storyId].originalContent = translation.content;
            }
            if (userLanguageId === translation.languageId) {
                items[translation.storyId].content = translation.content;
            }
        }
        let item;
        for (const administrativeArea of data.administrativeData) {
            item = items[administrativeArea.storyId].administrativeData.find((item) => item.id === administrativeArea.id);
            if (!item) {
                item = {
                    names: [],
                    level: administrativeArea.level,
                    id: administrativeArea.id,
                };
                items[administrativeArea.storyId].administrativeData.push(item);
            }
            item.names.push({
                name: administrativeArea.name,
                languageId: administrativeArea.languageId,
            });
        }
        const categoryCodes = [];
        for (const category of data.categories) {
            categoryCodes[category.id] = category.code;
        }
        for (const item of data.storyCategories) {
            items[item.storyId].categories.push(categoryCodes[item.categoryId]);
        }
        for (const item of data.recipients) {
            items[item.storyId].age =
                item.ageByModerator !== null
                    ? (_h = (0, helpers_1.getKeyByValue)(types_1.AGE_VALUE, item.ageByModerator)) === null || _h === void 0 ? void 0 : _h.replace('_', ' ')
                    : null;
            items[item.storyId].gender =
                item.genderByModerator !== null
                    ? (_j = (0, helpers_1.getKeyByValue)(types_1.GENDER_VALUE, item.genderByModerator)) === null || _j === void 0 ? void 0 : _j.replace('_', ' ')
                    : null;
        }
        const difficultyCodes = [];
        for (const difficulty of data.difficulties) {
            difficultyCodes[difficulty.id] = difficulty.code;
        }
        for (const item of data.storyDifficulties) {
            const difficultyCode = difficultyCodes[item.difficultyId];
            const mappedDifficulty = disability_enum_1.DISABILITY[difficultyCode] || difficultyCode;
            items[item.storyId].difficulties.push(mappedDifficulty);
        }
        const organisationNames = [];
        for (const organisaiton of data.organisations) {
            organisationNames[organisaiton.id] = organisaiton.name;
        }
        for (const item of data.storyOrganisations) {
            items[item.storyId].organisations.push(organisationNames[item.organisationId]);
        }
        const thematicAreaData = [];
        for (const thematicArea of data.thematicAreas) {
            thematicAreaData[thematicArea.id] = {
                code: thematicArea.code,
                parentId: thematicArea.parentThematicId,
            };
        }
        let thematicAreaParentCode;
        for (const item of data.storyThematicAreas) {
            thematicAreaParentCode =
                (_k = thematicAreaData[thematicAreaData[item.thematicAreaId].parentId]) === null || _k === void 0 ? void 0 : _k.code;
            if (!items[item.storyId].thematicParents.includes(thematicAreaParentCode)) {
                items[item.storyId].thematicParents.push(thematicAreaParentCode);
            }
            items[item.storyId].thematicChildren.push((_l = thematicAreaData[item.thematicAreaId]) === null || _l === void 0 ? void 0 : _l.code);
        }
        return items;
    }
    async findOrganisationsExternalData(data, ids) {
        const result = await this.airTable.table('Organisations').list({
            filterByFormula: `OR(${Object.keys(ids)
                .map((caseId) => `FIND('${caseId}',{Index Rollup (from Linked Cases)})`)
                .join(', ')})`,
        });
        const columnName = 'Type of organisation';
        if (!Array.isArray(result === null || result === void 0 ? void 0 : result.records)) {
            return data;
        }
        for (const record of result === null || result === void 0 ? void 0 : result.records) {
            if (record.fields) {
                for (const caseId of record.fields['Linked Cases']) {
                    if (ids[caseId]) {
                        if (!data[ids[caseId]].organisationTypes) {
                            data[ids[caseId]].organisationTypes = [];
                        }
                        if (record.fields[columnName]) {
                            data[ids[caseId]].organisationTypes.push(record.fields[columnName]);
                        }
                    }
                }
            }
        }
        return data;
    }
    async findInvestigationsExternalData(data, ids) {
        const result = await this.airTable.table('Investigations').list({
            filterByFormula: `OR(${Object.keys(ids)
                .map((caseId) => `FIND('${caseId}',{Index Rollup (from Case the investigation is linked to)})`)
                .join(', ')})`,
        });
        const columnName = 'Select the outcome of the investigation 📊';
        if (!Array.isArray(result === null || result === void 0 ? void 0 : result.records)) {
            return data;
        }
        for (const record of result === null || result === void 0 ? void 0 : result.records) {
            if (record.fields) {
                for (const caseId of record.fields['Case the investigation is linked to']) {
                    if (ids[caseId]) {
                        if (!data[ids[caseId]].outcomesOfInvestigation) {
                            data[ids[caseId]].outcomesOfInvestigation = [];
                        }
                        if (record.fields[columnName]) {
                            data[ids[caseId]].outcomesOfInvestigation.push(record.fields[columnName]);
                        }
                    }
                }
            }
        }
        return data;
    }
    async findAssistanceReferralsExternalData(data, ids) {
        const result = await this.airTable.table('Assistance referrals').list({
            filterByFormula: `OR(${Object.keys(ids)
                .map((caseId) => `FIND('${caseId}',{Index Rollup (from Cases)})`)
                .join(', ')})`,
        });
        const columnName = 'Has the survivor been rendered assistance?';
        if (!Array.isArray(result === null || result === void 0 ? void 0 : result.records)) {
            return data;
        }
        for (const record of result === null || result === void 0 ? void 0 : result.records) {
            if (record.fields) {
                for (const caseId of record.fields['Cases']) {
                    if (ids[caseId]) {
                        if (!data[ids[caseId]].assistanceProvided) {
                            data[ids[caseId]].assistanceProvided = [];
                        }
                        if (record.fields[columnName]) {
                            data[ids[caseId]].assistanceProvided.push(record.fields[columnName]);
                        }
                    }
                }
            }
        }
        return data;
    }
    async findCasesExternalData(data, ids) {
        const result = await this.airTable.table('Cases').list({
            filterByFormula: `OR(${Object.keys(ids)
                .map((caseId) => `RECORD_ID() = '${caseId}'`)
                .join(', ')})`,
        });
        const columnName = 'Type of Allegation 📊';
        if (!Array.isArray(result === null || result === void 0 ? void 0 : result.records)) {
            return data;
        }
        for (const record of result === null || result === void 0 ? void 0 : result.records) {
            if (!data[ids[record.id]]) {
                data[ids[record.id]] = {
                    allegationTypes: [],
                };
            }
            if (record.fields &&
                !data[ids[record.id]].allegationTypes.includes(record.fields[columnName])) {
                data[ids[record.id]].allegationTypes.push(record.fields[columnName]);
            }
        }
        return data;
    }
    async findExternalData(storyIds) {
        let result = await this.airTable.table('Sensitive Stories').list({
            filterByFormula: `OR(${storyIds
                .map((storyId) => `{Loop ID} = '${storyId}'`)
                .join(', ')})`,
        });
        const ids = {};
        let data = {};
        if (!Array.isArray(result === null || result === void 0 ? void 0 : result.records)) {
            return data;
        }
        for (const record of result === null || result === void 0 ? void 0 : result.records) {
            if (record.fields && record.fields['Case the story is submitted to']) {
                for (const caseId of record.fields['Case the story is submitted to']) {
                    ids[caseId] = record.fields['Loop ID'];
                }
            }
        }
        result = await this.airTable.table('Cases').list({
            filterByFormula: `OR(${Object.keys(ids)
                .map((caseId) => `RECORD_ID() = '${caseId}'`)
                .join(', ')})`,
        });
        if (!Array.isArray(result === null || result === void 0 ? void 0 : result.records)) {
            return data;
        }
        for (const record of result === null || result === void 0 ? void 0 : result.records) {
            if (!data[ids[record.id]]) {
                data[ids[record.id]] = {
                    allegationTypes: [],
                };
            }
            if (record.fields) {
                data[ids[record.id]].allegationTypes.push(record.fields['Type of Allegation 📊']);
            }
        }
        data = await this.findCasesExternalData(data, ids);
        data = await this.findOrganisationsExternalData(data, ids);
        data = await this.findInvestigationsExternalData(data, ids);
        data = await this.findAssistanceReferralsExternalData(data, ids);
        return data;
    }
    getFirstItem(items) {
        let firstItem;
        for (const key in items) {
            firstItem = items[key];
            break;
        }
        return firstItem;
    }
    async prepareStoriesToExport(userLanguage, dataToExport, preparedData, extended = true) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        if (!Array.isArray(dataToExport === null || dataToExport === void 0 ? void 0 : dataToExport.stories) ||
            ((_a = dataToExport === null || dataToExport === void 0 ? void 0 : dataToExport.stories) === null || _a === void 0 ? void 0 : _a.length) === 0) {
            return preparedData;
        }
        const items = await this.mapData(dataToExport, userLanguage.id, extended);
        const firstItem = this.getFirstItem(items);
        let itemKeys = [];
        ({ itemKeys } = this.prepareStoryColumnsToExport(firstItem, userLanguage, [
            'id',
            'isSensitive',
            'status',
            'allegationTypes',
            'organisationTypes',
            'outcomesOfInvestigation',
            'assistanceProvided',
            'defaultLanguageIdForAdministrativeData',
            'administrativeData',
        ], extended));
        [
            extended
                ? [
                    'All stories',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    'Sensitive Stories only',
                ]
                : undefined,
            itemKeys,
        ].forEach((values) => {
            if (values) {
                preparedData.push(values.reduce(function (previousValue, currentValue, index) {
                    previousValue[index] = currentValue;
                    return previousValue;
                }, {}));
            }
        });
        let row = [];
        let obj;
        const separator = ' | ';
        for (const key in items) {
            const transformCategory = (category) => {
                switch (category) {
                    case 'request':
                        return 'Request for Assistance';
                    case 'question':
                        return 'Request for Information';
                    default:
                        return category;
                }
            };
            const categories = items[key].isSensitive
                ? [...items[key].categories, 'sensitive']
                : items[key].categories.map(transformCategory);
            const formattedCategories = categories
                .map((value) => (0, helpers_1.upperCaseFirst)(value))
                .join(separator);
            const district = (_e = (_d = (_c = (_b = items[key].administrativeData) === null || _b === void 0 ? void 0 : _b.find((administrativeData) => administrativeData.level == 1)) === null || _c === void 0 ? void 0 : _c.names) === null || _d === void 0 ? void 0 : _d.filter((nameObj) => nameObj.languageId === 1)) === null || _e === void 0 ? void 0 : _e.map((nameObj) => nameObj.name).toString();
            const place = (_j = (_h = (_g = (_f = items[key].administrativeData) === null || _f === void 0 ? void 0 : _f.find((administrativeData) => administrativeData.level == 2)) === null || _g === void 0 ? void 0 : _g.names) === null || _h === void 0 ? void 0 : _h.filter((nameObj) => nameObj.languageId === 1)) === null || _j === void 0 ? void 0 : _j.map((nameObj) => nameObj.name).toString();
            obj = {
                isSensitive: `${items[key].isSensitive ? 'Sensitive ' : ''}Story`,
                categories: formattedCategories,
                country: items[key].country,
                district: district ? this.clearCSVData(district) : null,
                place: place
                    ? this.clearCSVData(place)
                    : items[key].place
                        ? this.clearCSVData(items[key].place)
                        : items[key].place,
                age: items[key].age,
                gender: items[key].gender,
                difficulties: (_k = items[key].difficulties) === null || _k === void 0 ? void 0 : _k.map((key) => this.makeAsReadable(key)).join(separator),
                thematicParents: (_l = items[key].thematicParents) === null || _l === void 0 ? void 0 : _l.map((key) => this.makeAsReadable(key)).join(separator),
                thematicChildren: (_m = items[key].thematicChildren) === null || _m === void 0 ? void 0 : _m.map((key) => this.makeAsReadable(this.clearCSVData(key))).join(separator),
                organisations: (_o = items[key].organisations) === null || _o === void 0 ? void 0 : _o.map((value) => this.clearCSVData(value)).join(separator),
                date: items[key].publishedAt
                    ? this.makeDateReadable(items[key].publishedAt)
                    : undefined,
                didAnyoneComment: items[key].numberOfComments ? 'true' : 'false',
                channel: items[key].channel,
                content: this.clearCSVData(items[key].content),
                originalContent: this.clearCSVData(items[key].originalContent),
                originalContentLanguage: items[key].originalContentLanguage,
                isMinority: items[key].isMinority,
                url: `${this.config.get('frontend.url')}/story/details/${key}`,
                '': '',
                allegationTypes: (_p = items[key].allegationTypes) === null || _p === void 0 ? void 0 : _p.map((value) => this.clearCSVData(value)).join(separator),
                organisationTypes: (_q = items[key].organisationTypes) === null || _q === void 0 ? void 0 : _q.map((value) => this.clearCSVData(value)).join(separator),
                outcomesOfInvestigation: (_r = items[key].outcomesOfInvestigation) === null || _r === void 0 ? void 0 : _r.map((value) => this.clearCSVData(value)).join(separator),
                assistanceProvided: (_s = items[key].assistanceProvided) === null || _s === void 0 ? void 0 : _s.map((value) => this.clearCSVData(value)).join(separator),
            };
            if (!extended) {
                delete obj.isSensitive;
            }
            row = Object.values(obj);
            preparedData.push(row.reduce(function (previousValue, currentValue, index) {
                previousValue[index] = currentValue;
                return previousValue;
            }, {}));
        }
        return preparedData;
    }
    prepareCSVContent(dataAsArray, useHeader) {
        let dataAsString = '';
        const formatValue = (value) => {
            if (typeof value === 'string' &&
                (value.includes(',') ||
                    value.includes(';') ||
                    value.includes('"') ||
                    value.includes('\n') ||
                    value.includes('\r'))) {
                return `"${value.replace(/"/g, '""')}"`;
            }
            return value !== null && value !== void 0 ? value : 'N/A';
        };
        if (useHeader) {
            dataAsString += `${export_united_type_1.csvHeaders.join(',')}\n`;
        }
        Object.values(dataAsArray).forEach((item) => {
            dataAsString += `${Object.values(item)
                .filter((value) => value !== undefined)
                .map(formatValue).join(',')}\n`;
        });
        return dataAsString;
    }
    generateCsvFileName(filters, language) {
        return this.generateFileName(`${(0, helpers_2.generateMD5)(JSON.stringify(filters))}-${language}`, 'csv');
    }
    generateFileName(prefix, extension) {
        return `${prefix}_${(0, date_fns_1.format)(new Date(), 'yyyy-MM-dd-HH-mm')}_.${extension}`;
    }
    findCacheFile(prefix) {
        let fileNameArr;
        let dateArr;
        const fileNames = fs.readdirSync(path.resolve('storage'));
        for (const fileName of fileNames) {
            fileNameArr = fileName.split('_');
            if (fileNameArr.length > 1) {
                dateArr = fileNameArr[1].split('-');
                if ((0, date_fns_1.differenceInMinutes)(new Date(), new Date(`${dateArr[0]}-${dateArr[1]}-${dateArr[2]} ${dateArr[3]}:${dateArr[4]}`)) > default_1.staticConfig.dataExport.cacheTtlInMinutes) {
                    this.unlinkFile(fileName);
                }
                else if (fileNameArr[0] === prefix) {
                    return fileName;
                }
            }
        }
    }
    checkIfFileAlreadyExists(newFileName) {
        const fileNames = fs.readdirSync(path.resolve('storage'));
        for (const fileName of fileNames) {
            if (fileName === newFileName) {
                return true;
            }
        }
        return false;
    }
    readFile(fileName, encoding) {
        try {
            return fs.readFileSync(path.resolve(`storage/${fileName}`), {
                encoding,
            });
        }
        catch (error) {
            this.logger.error(error);
        }
    }
    unlinkFile(fileName) {
        try {
            return fs.unlinkSync(path.resolve(`storage/${fileName}`));
        }
        catch (error) {
            this.logger.error(error);
        }
    }
    saveCacheFile(fileName, data) {
        if (this.checkIfFileAlreadyExists(fileName)) {
            return;
        }
        try {
            return fs.appendFileSync(`storage/${fileName}`, data);
        }
        catch (error) {
            this.logger.error(error);
        }
    }
    saveJSONFile(fileName, data) {
        if (this.checkIfFileAlreadyExists(fileName)) {
            return;
        }
        try {
            return fs.appendFileSync(`storage/${fileName}`, JSON.stringify(data));
        }
        catch (error) {
            this.logger.error(error);
        }
    }
    async exportStoriesToCSV(defaultLanguage, data) {
        const fileName = `${(0, uuid_1.v4)()}.csv`;
        const dataAsArray = await this.prepareStoriesToExport(defaultLanguage, data, []);
        this.saveCacheFile(fileName, this.prepareCSVContent(dataAsArray));
        const base64content = this.readFile(fileName, 'base64');
        this.unlinkFile(fileName);
        return base64content;
    }
    async exportStoriesToCSVAndSendEmail(email, defaultLanguage, data) {
        const dataAsBase64 = await this.exportStoriesToCSV(defaultLanguage, data);
        if (!dataAsBase64) {
            return;
        }
        return this.notificationService
            .sendEmail(shared_1.EMAIL_TEMPLATES.EXPORT_TO_CSV, {}, {}, [{ Email: email }], [
            {
                ContentType: 'text/csv',
                Filename: `exported-data-${(0, date_fns_1.format)(new Date(), 'yyyy-MM-dd_hh:mm:ss')}.csv`,
                Base64Content: dataAsBase64,
            },
        ])
            .catch((error) => {
            this.logger.error(error);
            return error;
        });
    }
    async findCategoriesToExportByStoryIds(queryRunner, storyIds) {
        const prefix = 'categories';
        const fileName = this.findCacheFile(prefix);
        let data = [];
        if (fileName) {
            data = JSON.parse(this.readFile(fileName, 'utf-8'));
        }
        else {
            data = await queryRunner.manager
                .createQueryBuilder()
                .select('category.story_id', 'storyId')
                .addSelect('category.category_id', 'categoryId')
                .from('story_category', 'category')
                .execute()
                .catch((error) => {
                this.logger.error(error);
                throw new common_1.BadRequestException(shared_1.GET_STORY_FAILED);
            });
            this.saveCacheFile(this.generateFileName(prefix, 'txt'), JSON.stringify(data));
        }
        return data.filter((item) => storyIds.includes(item.storyId));
    }
    async findDifficultiesToExportByStoryIds(queryRunner, storyIds) {
        const prefix = 'difficulties';
        const fileName = this.findCacheFile(prefix);
        let data = [];
        if (fileName) {
            data = JSON.parse(this.readFile(fileName, 'utf-8'));
        }
        else {
            data = await queryRunner.manager
                .createQueryBuilder()
                .select('difficulty.story_id', 'storyId')
                .addSelect('difficulty.difficulty_id', 'difficultyId')
                .from('story_difficulty', 'difficulty')
                .execute()
                .catch((error) => {
                this.logger.error(error);
                throw new common_1.BadRequestException(shared_1.GET_STORY_FAILED);
            });
            this.saveCacheFile(this.generateFileName(prefix, 'txt'), JSON.stringify(data));
        }
        return data.filter((item) => storyIds.includes(item.storyId));
    }
    async findOrganisationsToExportByStoryIds(queryRunner, storyIds) {
        const prefix = 'organisations';
        const fileName = this.findCacheFile(prefix);
        let data = [];
        if (fileName) {
            data = JSON.parse(this.readFile(fileName, 'utf-8'));
        }
        else {
            data = await queryRunner.manager
                .createQueryBuilder()
                .select('organisation.story_id', 'storyId')
                .addSelect('organisation.organisation_id', 'organisationId')
                .from('story_organisation', 'organisation')
                .execute()
                .catch((error) => {
                this.logger.error(error);
                throw new common_1.BadRequestException(shared_1.GET_STORY_FAILED);
            });
            this.saveCacheFile(this.generateFileName(prefix, 'txt'), JSON.stringify(data));
        }
        return data.filter((item) => storyIds.includes(item.storyId));
    }
    async findThematicAreasToExportByStoryIds(queryRunner, storyIds) {
        const prefix = 'thematic-areas';
        const fileName = this.findCacheFile(prefix);
        let data = [];
        if (fileName) {
            data = JSON.parse(this.readFile(fileName, 'utf-8'));
        }
        else {
            data = await queryRunner.manager
                .createQueryBuilder()
                .select('thematicArea.story_id', 'storyId')
                .addSelect('thematicArea.thematic_id', 'thematicAreaId')
                .from('story_thematic', 'thematicArea')
                .execute()
                .catch((error) => {
                this.logger.error(error);
                throw new common_1.BadRequestException(shared_1.GET_STORY_FAILED);
            });
            this.saveCacheFile(this.generateFileName(prefix, 'txt'), JSON.stringify(data));
        }
        return data.filter((item) => storyIds.includes(item.storyId));
    }
    async findStoryRecipientToExportByStoryIds(queryRunner, storyIds) {
        let data = [];
        data = await queryRunner.manager
            .createQueryBuilder()
            .select('story.id', 'storyId')
            .addSelect('recipient.id', 'storyRecipientId')
            .addSelect('recipient.is_minority_by_moderator', 'isMinority')
            .from('story_recipient', 'recipient')
            .innerJoin('story', 'story', 'story.recipient_id = recipient.id')
            .where('story.id IN (:...storyIds)', { storyIds })
            .getRawMany();
        return data.filter((item) => storyIds.includes(item.storyId));
    }
    async findCommentIdsToExportByStoryIds(storyIds) {
        const prefix = 'comment-id';
        const fileName = this.findCacheFile(prefix);
        let data = [];
        if (fileName) {
            data = JSON.parse(this.readFile(fileName, 'utf-8'));
        }
        else {
            data = await this.commentRepository.findCommentIdsByStatus(shared_2.COMMENT_STATUS.PUBLISHED);
            this.saveCacheFile(this.generateFileName(prefix, 'txt'), JSON.stringify(data));
        }
        return data.filter((item) => storyIds.includes(item.storyId));
    }
    async findStoriesToExportByIds(storyIds) {
        const prefix = 'stories';
        const fileName = this.findCacheFile(prefix);
        let data = [];
        if (fileName) {
            data = JSON.parse(this.readFile(fileName, 'utf-8'));
        }
        else {
            data = await this.storyRepository.findStoriesToExport();
            this.saveCacheFile(this.generateFileName(prefix, 'txt'), JSON.stringify(data));
        }
        return data.filter((item) => storyIds.includes(item.id));
    }
    async findTranslationsByStoryIds(storyIds) {
        const prefix = 'translations';
        const fileName = this.findCacheFile(prefix);
        let data = [];
        if (fileName) {
            data = JSON.parse(this.readFile(fileName, 'utf-8'));
        }
        else {
            data = await this.storyRepository.findTranslationsToExport();
            this.saveCacheFile(this.generateFileName(prefix, 'txt'), JSON.stringify(data));
        }
        return data.filter((item) => storyIds.includes(item.storyId));
    }
    async findAdministrativeDataToExportByStoryIds(storyIds) {
        const prefix = 'administrative-data';
        const fileName = this.findCacheFile(prefix);
        let data = [];
        if (fileName) {
            data = JSON.parse(this.readFile(fileName, 'utf-8'));
        }
        else {
            data =
                await this.storyAdministrativeDataRepository.findAdministrativeDataToExport();
            this.saveCacheFile(this.generateFileName(prefix, 'txt'), JSON.stringify(data));
        }
        return data.filter((item) => storyIds.includes(item.storyId));
    }
    async findRecipientsToExportByStoryIds(storyIds) {
        const prefix = 'recipients';
        const fileName = this.findCacheFile(prefix);
        let data = [];
        if (fileName) {
            data = JSON.parse(this.readFile(fileName, 'utf-8'));
        }
        else {
            data = await this.storyRecipientRepository.findDataToExport();
            this.saveCacheFile(this.generateFileName(prefix, 'txt'), JSON.stringify(data));
        }
        return data.filter((item) => storyIds.includes(item.storyId));
    }
    async findDataByStoryIds(storyIds, params) {
        if ((params === null || params === void 0 ? void 0 : params.page) && (params === null || params === void 0 ? void 0 : params.limit)) {
            storyIds = (0, helpers_1.narrowDownIds)(storyIds, params.page, params.limit);
        }
        if (storyIds.length === 0) {
            return;
        }
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        const [comments, stories, translations, administrativeData, categories, storyCategories, countries, recipients, difficulties, storyDifficulties, organisations, storyOrganisations, thematicAreas, storyThematicAreas, storyRecipients,] = await Promise.all([
            this.findCommentIdsToExportByStoryIds(storyIds),
            this.findStoriesToExportByIds(storyIds),
            this.findTranslationsByStoryIds(storyIds),
            this.findAdministrativeDataToExportByStoryIds(storyIds),
            this.categoryService.findAll(),
            this.findCategoriesToExportByStoryIds(queryRunner, storyIds),
            this.countryService.getCountries(),
            this.findRecipientsToExportByStoryIds(storyIds),
            this.difficultyService.findAll(),
            this.findDifficultiesToExportByStoryIds(queryRunner, storyIds),
            this.organisationService.findAll(),
            this.findOrganisationsToExportByStoryIds(queryRunner, storyIds),
            this.thematicAreaService.findDataToExport(),
            this.findThematicAreasToExportByStoryIds(queryRunner, storyIds),
            this.findStoryRecipientToExportByStoryIds(queryRunner, storyIds),
        ]);
        await queryRunner.release();
        return {
            stories,
            comments,
            translations,
            administrativeData,
            categories,
            storyCategories,
            countries,
            recipients,
            difficulties,
            storyDifficulties,
            organisations,
            storyOrganisations,
            thematicAreas,
            storyThematicAreas,
            storyRecipients,
        };
    }
    async prepareSearchParameters(params) {
        var _a, _b, _c, _d, _e, _f, _g;
        const filters = Object.assign(Object.assign({}, params), { type: undefined, age: undefined, gender: undefined, difficulty: undefined, thematic: undefined });
        let countryCodes;
        if (!params.country) {
            filters.country = undefined;
        }
        else {
            countryCodes = (!Array.isArray(params.country)
                ? params.country.split(',')
                : params.country).filter((code) => code);
            filters.country = countryCodes.length
                ? countryCodes.join(',')
                : undefined;
        }
        if (params.type && !Array.isArray(params.type)) {
            params.type = params.type.split(',');
        }
        if ((_a = params.type) === null || _a === void 0 ? void 0 : _a.length) {
            const categories = await this.categoryService.findByCodes(params.type);
            filters.type = categories.map((category) => category.id).join(',');
        }
        if (params.age && !Array.isArray(params.age)) {
            params.age = params.age.split(',');
        }
        if ((_b = params.age) === null || _b === void 0 ? void 0 : _b.length) {
            filters.age = params.age
                .map((value) => types_1.AGE_VALUE[(0, helpers_1.upperCaseFirst)(value.replace(/_/g, ' '))])
                .join(',');
        }
        if (params.gender && !Array.isArray(params.gender)) {
            params.gender = params.gender.split(',');
        }
        if ((_c = params.gender) === null || _c === void 0 ? void 0 : _c.length) {
            filters.gender = params.gender
                .map((value) => types_1.GENDER_VALUE[value.toUpperCase()])
                .join(',');
        }
        if (params.difficulty && !Array.isArray(params.difficulty)) {
            params.difficulty = params.difficulty.split(',');
        }
        if ((_d = params.difficulty) === null || _d === void 0 ? void 0 : _d.length) {
            const difficulties = await this.difficultyService.findByCodes(params.difficulty);
            filters.difficulty = difficulties
                .map((difficulty) => difficulty.id)
                .join(',');
        }
        if (params.organisation) {
            const organisationIds = await this.organisationService.findOrganisationIdsByPhrase(params.organisation);
            if (organisationIds.length) {
                filters.organisation = organisationIds.join(',');
            }
        }
        if (params.thematic && !Array.isArray(params.thematic)) {
            params.thematic = params.thematic.split(',');
        }
        if ((_e = params.thematic) === null || _e === void 0 ? void 0 : _e.length) {
            if (params.thematic && !Array.isArray(params.thematic)) {
                params.thematic = params.thematic.split(',');
            }
            const thematicAreas = await this.thematicAreaService.findAll();
            const thematicAreaIds = [];
            for (const thematicAreaCode of params.thematic) {
                const thematicAreaArr = thematicAreaCode.split('.');
                const thematicArea = (_g = (_f = thematicAreas
                    .find((item) => item.code === thematicAreaArr[0])) === null || _f === void 0 ? void 0 : _f.children) === null || _g === void 0 ? void 0 : _g.find((item) => item.code === thematicAreaArr[1]);
                if (thematicArea) {
                    thematicAreaIds.push(thematicArea.id);
                }
            }
            filters.thematic = thematicAreaIds.length
                ? thematicAreaIds.join(',')
                : params.thematic.join(',');
        }
        return filters;
    }
    async saveUserExportCsvActivity(userId) {
        return await this.userExportCsvActivityRepository.save({ userId });
    }
};
exports.ExportService = ExportService;
exports.ExportService = ExportService = ExportService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(7, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.CONFIG)),
    __param(8, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.AIRTABLE)),
    __metadata("design:paramtypes", [thematic_service_1.ThematicService,
        difficulty_service_1.DifficultyService,
        organisation_service_1.OrganisationService,
        category_service_1.CategoryService,
        language_service_1.LanguageService,
        story_repository_1.StoryRepository,
        notification_service_1.NotificationService,
        config_1.ConfigService, typeof (_a = typeof AirTable !== "undefined" && AirTable) === "function" ? _a : Object, story_administrative_data_repository_1.StoryAdministrativeDataRepository,
        country_service_1.CountryService,
        story_recipient_repository_1.StoryRecipientRepository,
        user_export_csv_activity_repository_1.UserExportCsvActivityRepository,
        typeorm_1.Connection,
        comment_repository_1.CommentRepository])
], ExportService);
//# sourceMappingURL=export.service.js.map