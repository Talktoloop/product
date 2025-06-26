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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateThematicFilters = exports.getThematicAreaChildrenKeys = exports.countUnique = exports.isEmpty = exports.addFilterJoins = exports.arrayIncludeAnotherArrayItem = exports.cloneArrayWithoutReference = exports.prepareUsername = exports.getDomainFromEmail = exports.checkRegistrationStatus = exports.includesTranslatableContent = exports.prepareNotificationData = exports.isContactAccepted = exports.prepareURL = exports.addFilterCondition = exports.addSensitiveStoryFilter = exports.addFilterCasesCondition = exports.flatArray = exports.thematicConditionAdd = exports.getTranslationByLanguageId = exports._sort = exports.parseGooglePlacesLocation = exports.replaceArray = exports._pick = exports.upperCaseString = exports.upperCaseFirst = exports.getKeyByValue = exports.getKeysWithLowerCase = exports.getRandomNumber = exports.generateHash = exports.parseStringArrayToInt = exports.arrayRemoveEmptyVal = exports.checkRejectReason = exports.removeArrayDuplicates = exports.updatedOriginalContent = exports.calculateCustomNumberOfDays = exports.round = exports.getAverageValue = exports.chartShouldBeAnonymous = exports.paginateQueryResult = exports.getPendingStoryStatuses = exports.paginate = exports.preparePaginationMetadata = exports.removeObjectDuplicatesByKey = exports.removeLastDot = exports.narrowDownIds = exports.stopMeasuring = exports.getConnection = exports.generateMD5 = exports.startMeasuring = void 0;
exports.getCurrentDateInCustomFormat = exports.chunkArray = void 0;
const hash = __importStar(require("crypto"));
const typeorm_1 = require("typeorm");
const gender_constant_1 = require("../airtable-client/constant/gender.constant");
const age_constant_1 = require("../airtable-client/constant/age.constant");
const referred_for_assistance_constant_1 = require("../airtable-client/constant/referred-for-assistance.constant");
const investigation_outcome_constant_1 = require("../airtable-client/constant/investigation-outcome.constant");
const organisation_type_constant_1 = require("../airtable-client/constant/organisation-type.constant");
const allegation_type_constant_1 = require("../airtable-client/constant/allegation-type.constant");
const urgent_constant_1 = require("../airtable-client/constant/urgent.constant");
const difficulty_constant_1 = require("../airtable-client/constant/difficulty.constant");
const time_unit_constant_1 = require("./constant/time-unit.constant");
const shared_1 = require("@ourloop/shared");
const thematic_constant_1 = require("../airtable-client/constant/thematic.constant");
const date_fns_1 = require("date-fns");
const registration_status_constant_1 = require("../user/constant/registration-status.constant");
const md5_1 = __importDefault(require("crypto-js/md5"));
const story_comment_entity_1 = require("../story/entity/story-comment.entity");
const channel_constant_1 = require("./constant/channel.constant");
const allowFilters = [
    'difficulty',
    'type',
    'age',
    'gender',
    'minority',
    'place',
    'organisation',
    'country',
    'q',
    'from',
    'to',
    'regionId',
    'repliedTo',
    'channelFilter',
    'searchTerm'
];
const relationsToUpdate = ['difficulty', 'type', 'organisation'];
const relationsToConvertToInt = [
    'age',
    'gender',
    'difficulty',
    'type',
    'type.id',
    'difficulty.id',
];
var casesMap;
(function (casesMap) {
    casesMap["country"] = "incident_country";
    casesMap["location"] = "incident_province";
    casesMap["gender"] = "survivor_gender";
    casesMap["age"] = "survivor_age";
    casesMap["disability"] = "survivor_disability";
    casesMap["referredForAssistance"] = "referred_to_assistance";
    casesMap["investigationOutcome"] = "investigation_outcome";
    casesMap["organisationType"] = "organisation_type";
    casesMap["caseType"] = "allegation_type";
})(casesMap || (casesMap = {}));
let measurement;
let measurementTimer;
const startMeasuring = () => {
    measurementTimer = process.hrtime();
};
exports.startMeasuring = startMeasuring;
const generateMD5 = (value) => {
    return (0, md5_1.default)(value).toString();
};
exports.generateMD5 = generateMD5;
const getConnection = async (config) => {
    const connection = await config;
    if (!connection.isInitialized) {
        await connection.initialize();
    }
    return connection;
};
exports.getConnection = getConnection;
const stopMeasuring = () => {
    if (!measurement) {
        measurement = 0;
    }
    const hrtime = process.hrtime(measurementTimer);
    measurement += hrtime[0] + hrtime[1] / 1e9;
    measurementTimer = null;
    return measurement;
};
exports.stopMeasuring = stopMeasuring;
const narrowDownIds = (storyIds, page, limit) => {
    const first = page * limit - limit;
    const last = first + limit;
    return storyIds.slice(first, last);
};
exports.narrowDownIds = narrowDownIds;
const removeLastDot = (value) => {
    if ((value === null || value === void 0 ? void 0 : value.slice(-1)) !== '.') {
        return value;
    }
    return value.slice(0, -1);
};
exports.removeLastDot = removeLastDot;
const removeObjectDuplicatesByKey = (data, key) => {
    return data === null || data === void 0 ? void 0 : data.reduce((unique, item) => {
        if (!unique.some((obj) => obj[key] === item[key])) {
            unique.push(item);
        }
        return unique;
    }, []);
};
exports.removeObjectDuplicatesByKey = removeObjectDuplicatesByKey;
const preparePaginationMetadata = (data, itemsPerPage, currentPage) => {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    itemsPerPage = itemsPerPage !== null && itemsPerPage !== void 0 ? itemsPerPage : 10;
    if (!currentPage || currentPage < 1 || currentPage > totalPages) {
        currentPage = 1;
    }
    return {
        totalItems: data.length,
        itemsPerPage,
        totalPages: Math.ceil(data.length / itemsPerPage),
        currentPage,
    };
};
exports.preparePaginationMetadata = preparePaginationMetadata;
const paginate = (data, itemsPerPage, currentPage) => {
    const meta = (0, exports.preparePaginationMetadata)(data, itemsPerPage, currentPage);
    const items = [];
    for (let i = (meta.currentPage - 1) * meta.itemsPerPage; i < meta.currentPage * meta.itemsPerPage; i++) {
        if (data[i]) {
            items.push(data[i]);
        }
    }
    meta.itemCount = items.length;
    return {
        meta,
        items,
    };
};
exports.paginate = paginate;
const getPendingStoryStatuses = () => [...Object.values(shared_1.STORY_STATUS)].filter((status) => ![
    shared_1.STORY_STATUS.PUBLISHED,
    shared_1.STORY_STATUS.REJECTED,
    shared_1.STORY_STATUS.SENT_TO_CASE_MANAGER,
    shared_1.STORY_STATUS.CONDITIONALLY_REJECTED,
].includes(status));
exports.getPendingStoryStatuses = getPendingStoryStatuses;
const paginateQueryResult = async (query, itemsPerPage, currentPage) => {
    const data = await query.getMany();
    return (0, exports.paginate)(data, itemsPerPage, currentPage);
};
exports.paginateQueryResult = paginateQueryResult;
const chartShouldBeAnonymous = (data) => {
    let anonymize = false;
    for (const item of data) {
        for (const value of item.values) {
            if (value > 0 && value < 7) {
                anonymize = true;
                break;
            }
        }
    }
    return anonymize;
};
exports.chartShouldBeAnonymous = chartShouldBeAnonymous;
const getAverageValue = (data) => {
    var _a, _b;
    let average = 0;
    let count = 0;
    for (const item of data) {
        if (item === null || item === void 0 ? void 0 : item.average) {
            count += (_a = item === null || item === void 0 ? void 0 : item.count) !== null && _a !== void 0 ? _a : 0;
        }
    }
    for (const item of data) {
        average +=
            (item === null || item === void 0 ? void 0 : item.average) && count ? (item.average * ((_b = item === null || item === void 0 ? void 0 : item.count) !== null && _b !== void 0 ? _b : 0)) / count : 0;
    }
    return {
        average: (0, exports.round)(average, 2),
        count,
    };
};
exports.getAverageValue = getAverageValue;
const round = (value, places) => Math.round(value * Math.pow(10, places)) / Math.pow(10, places);
exports.round = round;
const calculateCustomNumberOfDays = (hours, timeUnit) => {
    const days = hours / 24;
    if (!timeUnit) {
        timeUnit =
            days > 365
                ? time_unit_constant_1.TIME_UNIT.YEAR
                : days > 30
                    ? time_unit_constant_1.TIME_UNIT.MONTH
                    : days > 1
                        ? time_unit_constant_1.TIME_UNIT.DAY
                        : time_unit_constant_1.TIME_UNIT.HOUR;
    }
    if (timeUnit === time_unit_constant_1.TIME_UNIT.HOUR) {
        return { averageTime: hours, timeUnit };
    }
    const divider = timeUnit === time_unit_constant_1.TIME_UNIT.YEAR ? 366 : timeUnit === time_unit_constant_1.TIME_UNIT.MONTH ? 31 : 1;
    const resultOfDivisionWithoutRest = Math.trunc(days / divider);
    const partOfUnit = (days % divider) / divider;
    return {
        averageTime: resultOfDivisionWithoutRest +
            (partOfUnit > 0
                ? timeUnit === time_unit_constant_1.TIME_UNIT.DAY
                    ? partOfUnit < 0.5
                        ? 0.5
                        : 1
                    : (0, exports.round)(partOfUnit, 1)
                : 0),
        timeUnit,
    };
};
exports.calculateCustomNumberOfDays = calculateCustomNumberOfDays;
const updatedOriginalContent = (originalLanguageCode, languageCode, oldContent, newContent) => originalLanguageCode === languageCode && oldContent !== newContent;
exports.updatedOriginalContent = updatedOriginalContent;
const removeArrayDuplicates = (array) => array.filter((item, index) => index === array.indexOf(item));
exports.removeArrayDuplicates = removeArrayDuplicates;
const checkRejectReason = (data) => {
    if (data.reasonIds.length !== (0, exports.removeArrayDuplicates)(data.reasonIds).length ||
        data.reasonTexts.length !== (0, exports.removeArrayDuplicates)(data.reasonTexts).length) {
        throw new shared_1.CustomError(shared_1.VALIDATION_FAILED, {
            error: 'Reject reason is invalid',
        });
    }
};
exports.checkRejectReason = checkRejectReason;
const arrayRemoveEmptyVal = (array) => array.filter((e) => e !== '');
exports.arrayRemoveEmptyVal = arrayRemoveEmptyVal;
const parseStringArrayToInt = (array) => array.map((e) => {
    const value = parseInt(e, 10);
    return Number.isInteger(value) ? value : -1;
});
exports.parseStringArrayToInt = parseStringArrayToInt;
const generateHash = (ipAddress, userAgent) => hash.createHash('sha1').update(`${ipAddress}${userAgent}`).digest('base64');
exports.generateHash = generateHash;
const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};
exports.getRandomNumber = getRandomNumber;
const getKeysWithLowerCase = (data, withLowerCase = true) => {
    return Object.keys(data).map((value) => withLowerCase ? value.toLowerCase() : value);
};
exports.getKeysWithLowerCase = getKeysWithLowerCase;
const getKeyByValue = (data, value, withLowerCase = true) => {
    if (!value && !Number.isInteger(value)) {
        return;
    }
    let index = 0;
    for (const item of Object.values(data)) {
        if (item === value) {
            break;
        }
        index++;
    }
    return value !== null
        ? (0, exports.getKeysWithLowerCase)(data, withLowerCase)[index]
        : null;
};
exports.getKeyByValue = getKeyByValue;
const upperCaseFirst = (value, lowerCase = true) => typeof value === 'string'
    ? `${value.charAt(0).toUpperCase()}${lowerCase ? value.slice(1).toLowerCase() : value.slice(1)}`
    : value;
exports.upperCaseFirst = upperCaseFirst;
const upperCaseString = (value) => value ? value.toUpperCase() : value;
exports.upperCaseString = upperCaseString;
const _pick = (obj, pickKeys, removeEmpty = false) => {
    return Object.entries(obj)
        .filter(([key]) => pickKeys.includes(key) && (removeEmpty !== undefined || obj[key]))
        .reduce((obj, [key, val]) => Object.assign(obj, { [key]: val }), {});
};
exports._pick = _pick;
const replaceArray = (value, oldValues, newValue) => {
    for (const oldValue of oldValues) {
        value = value.replace(new RegExp(oldValue, 'g'), newValue);
    }
    return value;
};
exports.replaceArray = replaceArray;
const parseGooglePlacesLocation = (value) => {
    if (!value) {
        return null;
    }
    const locationArr = value.toString().split(', ');
    if (locationArr.length > 1) {
        locationArr.pop();
    }
    return locationArr.join(', ');
};
exports.parseGooglePlacesLocation = parseGooglePlacesLocation;
const _sort = (array) => array.sort((a, b) => {
    return a - b;
});
exports._sort = _sort;
const getTranslationByLanguageId = (translations, originLanguageId, selectedLanguageId) => {
    console.log('getTranslationByLanguageId:translations', translations);
    console.log('getTranslationByLanguageId:originLanguageId', originLanguageId);
    console.log('getTranslationByLanguageId:selectedLanguageId', selectedLanguageId);
    let translation = translations.filter((entity) => entity.languageId === selectedLanguageId && !!entity.content)[0];
    if (!translation) {
        translation = translations.filter((entity) => { var _a; return ((_a = entity.language) === null || _a === void 0 ? void 0 : _a.isDefault) && !!entity.content; })[0];
    }
    if (!translation) {
        translation = translations.filter((entity) => entity.languageId === originLanguageId)[0];
    }
    return translation;
};
exports.getTranslationByLanguageId = getTranslationByLanguageId;
const thematicConditionAdd = (thematicGroupObject, query) => {
    const subQueries = [];
    const data = Object.keys(thematicGroupObject);
    if (data.length === 0) {
        return query;
    }
    query.andWhere((qb) => {
        data.forEach((thematic, idx) => {
            const value = thematicGroupObject[thematic];
            const subQuery = qb
                .subQuery()
                .select('COUNT(story_thematic.thematic_id)')
                .from('story_thematic', 'story_thematic')
                .where(`story_thematic.thematic_id IN (:...thematic${idx})`, {
                [`thematic${idx}`]: value,
            })
                .andWhere('story_thematic.story_id = story.id')
                .getQuery();
            subQueries.push(`${subQuery} > 0`);
        });
        return `(${subQueries.join(' OR ')})`;
    });
    return query;
};
exports.thematicConditionAdd = thematicConditionAdd;
const casePropertyIsUndefined = (values) => values.filter((splitValue) => ['noAnswer', 'none', 'notApplicable'].includes(splitValue)).length > 0;
const flatArray = (values) => Array.prototype.concat.apply([], values);
exports.flatArray = flatArray;
const addFilterCasesCondition = (filters, query, joins = [
    'case_sync_investigation',
    'case_sync_allegation_referral',
]) => {
    if (filters) {
        for (const [key, value] of Object.entries(filters)) {
            if (key === 'from' && value) {
                query.andWhere(`DATE(case_created) >= :from`, {
                    from: (0, date_fns_1.formatISO)(value),
                });
            }
            else if (key === 'to' && value) {
                query.andWhere(`DATE(case_created) <= :to`, {
                    to: (0, date_fns_1.formatISO)(value),
                });
            }
            else if (key === 'caseType' && value) {
                const splitValues = value.split(',');
                const values = splitValues.map((splitValue) => allegation_type_constant_1.ALLEGATION_TYPE_TEXT[splitValue]);
                query.andWhere(new typeorm_1.Brackets((qb) => {
                    qb.where(`allegation_type IN (:allegationType)`, {
                        allegationType: values,
                    });
                    if (splitValues.includes('urgentCases')) {
                        qb.orWhere('urgency = :urgency', {
                            urgency: (0, exports.getKeyByValue)(urgent_constant_1.URGENT, 1, false),
                        });
                    }
                }));
            }
            else if (key === 'country' && value) {
                query
                    .leftJoin('case_sync.country', 'country')
                    .andWhere(`country.code IN (:country)`, {
                    country: value.split(','),
                });
            }
            else if (key === 'thematic' && value) {
                const splitValues = value.split(',');
                const values = splitValues.map((splitValue) => (0, exports.getKeyByValue)(thematic_constant_1.THEMATIC, splitValue, false));
                query
                    .leftJoin('case_sync.thematicAreaSubsection', 'thematicAreaSubsection')
                    .andWhere('thematicAreaSubsection.thematicAreaSubsection IN (:thematicAreas)', {
                    thematicAreas: values,
                });
            }
            else if (key === 'disability' && value) {
                const splitValues = value.split(',');
                const values = splitValues.map((splitValue) => (0, exports.getKeyByValue)(difficulty_constant_1.DIFFICULTY, splitValue, false));
                if (casePropertyIsUndefined(splitValues)) {
                    values.push('');
                }
                query
                    .leftJoin('case_sync.survivorDisability', 'survivorDisability')
                    .andWhere(new typeorm_1.Brackets((qb) => {
                    qb.where('survivorDisability.survivorDisability IN (:survivorDisabilityValues)', {
                        survivorDisabilityValues: values,
                    });
                    if (casePropertyIsUndefined(splitValues)) {
                        qb.orWhere('survivorDisability.survivorDisability IS NULL');
                    }
                }));
            }
            else if (key === 'organisationType' && value) {
                const splitValues = value.split(',');
                const values = splitValues.map((splitValue) => organisation_type_constant_1.ORGANISATION_TYPE_TEXT[splitValue]);
                if (joins.includes('case_sync_allegation_referral')) {
                    query
                        .leftJoin('case_sync_allegation_referral', 'car', 'car.case_id = case_sync.case_uuid')
                        .leftJoin('case_sync_allegation_referral_organisation', 'caro', 'caro.allegation_referral_id = car.id');
                }
                query.andWhere('caro.type IN (:organisationType)', {
                    organisationType: values,
                });
            }
            else {
                const splitValues = value.split(',');
                let values;
                const keyFromDb = casesMap[key];
                if (key === 'age') {
                    values = splitValues.map((splitValue) => age_constant_1.AGE_TEXT[splitValue]);
                }
                else if (key === 'gender') {
                    values = splitValues.map((splitValue) => gender_constant_1.GENDER_TEXT[splitValue]);
                }
                else if (key === 'referredForAssistance') {
                    values = splitValues.map((splitValue) => referred_for_assistance_constant_1.REFERRED_FOR_ASSISTANCE[splitValue]);
                }
                else if (key === 'investigationOutcome') {
                    if (joins.includes('case_sync_investigation')) {
                        query.leftJoin('case_sync_investigation', 'ci', 'ci.case_id = case_sync.case_uuid');
                    }
                    values = splitValues.map((splitValue) => investigation_outcome_constant_1.INVESTIGATION_OUTCOME[splitValue]);
                }
                else if (key === 'country') {
                    values = splitValues.map((splitValue) => organisation_type_constant_1.ORGANISATION_TYPE_TEXT[splitValue]);
                }
                if (values) {
                    query.andWhere(new typeorm_1.Brackets((qb) => {
                        if (casePropertyIsUndefined(splitValues)) {
                            values.push('');
                        }
                        qb.where(`${keyFromDb} IN (:...${keyFromDb})`, {
                            [keyFromDb]: values,
                        });
                        if (casePropertyIsUndefined(splitValues)) {
                            qb.orWhere(`${keyFromDb} IS NULL`);
                        }
                    }));
                }
            }
        }
    }
    return query;
};
exports.addFilterCasesCondition = addFilterCasesCondition;
const addSensitiveStoryFilter = (query) => {
    query.where(new typeorm_1.Brackets((qb) => {
        qb.where('story.isSensitive is true').andWhere('story.status = :sensitiveStoryStatus', {
            sensitiveStoryStatus: shared_1.STORY_STATUS.SENT_TO_CASE_MANAGER,
        });
    }));
    return query;
};
exports.addSensitiveStoryFilter = addSensitiveStoryFilter;
const addFilterCondition = (filter, query, acceptSensitiveStories = false) => {
    if (filter.thematicAreaToFiltration) {
        query = (0, exports.thematicConditionAdd)(filter.thematicAreaToFiltration, query);
    }
    filter = (0, exports._pick)(filter, allowFilters);
    let idx = 0;
    for (let [key, value] of Object.entries(filter)) {
        if (!['place', 'q'].includes(key) && (value === null || value === void 0 ? void 0 : value.toString().includes(','))) {
            value = value.split(',');
        }
        if (key === 'q' && value) {
            query.andWhere('translations.content like :content', {
                content: `%${value}%`,
            });
        }
        else if (key === 'country' && value) {
            query.andWhere(`country.code IN (:...${key})`, {
                [key]: Array.isArray(value) ? value : value.split(','),
            });
        }
        else if (key === 'from' && value) {
            if (acceptSensitiveStories) {
                query.andWhere(new typeorm_1.Brackets((qb) => {
                    qb.where(`DATE(story.publishedAt) >= :from`, {
                        from: (0, date_fns_1.parseISO)(value),
                    }).orWhere('story.publishedAt IS NULL');
                }));
            }
            else {
                query.andWhere(`DATE(story.publishedAt) >= :from`, {
                    from: (0, date_fns_1.parseISO)(value),
                });
            }
        }
        else if (key === 'regionId' && value) {
            query.andWhere(`storyAdministrativeData.administrativeAreaId IN (:...${key})`, {
                [key]: Array.isArray(value)
                    ? value.map((element) => parseInt(element))
                    : [parseInt(value)],
            });
        }
        else if (key === 'to' && value) {
            if (acceptSensitiveStories) {
                query.andWhere(new typeorm_1.Brackets((qb) => {
                    qb.where(`DATE(story.publishedAt) <= :to`, {
                        to: (0, date_fns_1.parseISO)(value),
                    }).orWhere('story.publishedAt IS NULL');
                }));
            }
            else {
                query.andWhere(`DATE(story.publishedAt) <= :to`, {
                    to: (0, date_fns_1.parseISO)(value),
                });
            }
        }
        else if (key === 'repliedTo' && value) {
            query.leftJoin(story_comment_entity_1.StoryCommentEntity, 'comments', 'comments.story = story.id AND comments.status IN (:...statuses)', {
                statuses: [
                    shared_1.COMMENT_STATUS.PUBLISHED,
                    shared_1.COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL,
                ],
            });
            const repliedToValues = value.toString().split(',').map(Number);
            const repliedToByOrganisation = repliedToValues.includes(1);
            const repliedToByCommunity = repliedToValues.includes(2);
            const notRepliedTo = repliedToValues.includes(3);
            if (repliedToByOrganisation) {
                query.andHaving('COUNT(comments.id) > 0');
            }
            if (repliedToByCommunity) {
                query.andHaving('COUNT(comments.id) > 0');
            }
            if (notRepliedTo) {
                query.andHaving('COUNT(comments.id) = 0');
            }
        }
        else if (key === 'channelFilter' && value) {
            const channelStrings = value
                .toString()
                .split(',')
                .map((id) => channel_constant_1.CHANNEL_NUMBER_TO_CONSTANT[parseInt(id, 10)])
                .filter(Boolean);
            if (channelStrings.length) {
                query.andWhere('story.channel IN (:...channelFilter)', {
                    channelFilter: channelStrings,
                });
            }
        }
        else {
            if (relationsToUpdate.includes(key)) {
                if (key === 'organisation') {
                    key = 'organisations.id';
                }
                else if (key !== 'age') {
                    key = `${key}.id`;
                }
            }
            if (Array.isArray(value)) {
                value = (0, exports.arrayRemoveEmptyVal)(value);
                if (relationsToConvertToInt.includes(key)) {
                    value = (0, exports.parseStringArrayToInt)(value);
                }
                if (key === 'age' || key === 'gender') {
                    query.andWhere(`recipient.${key}ByModerator IN (:...${key})`, {
                        [key]: value,
                    });
                }
                else {
                    query.andWhere(`${key} IN (:...${key})`, { [key]: value });
                }
            }
            else if (value !== undefined && value !== null) {
                if (relationsToConvertToInt.includes(key)) {
                    value = parseInt(value, 10);
                    if (isNaN(value)) {
                        value = -1;
                    }
                }
                if (key === 'age' || key === 'gender') {
                    query.andWhere(`recipient.${key}ByModerator = :val${idx}`, {
                        [`val${idx}`]: value,
                    });
                }
                else
                    query.andWhere(`${key} = :val${idx}`, { [`val${idx}`]: value });
            }
        }
        idx++;
    }
    return query;
};
exports.addFilterCondition = addFilterCondition;
const prepareURL = (url, route, id) => {
    if (route) {
        url = `${url}/${route}`;
    }
    if (id) {
        url = `${url}/${id}`;
    }
    return url;
};
exports.prepareURL = prepareURL;
const isContactAccepted = (story) => {
    var _a, _b, _c, _d;
    return ((_a = story.recipient) === null || _a === void 0 ? void 0 : _a.userWantContact) !== false &&
        !!(((_b = story.recipient) === null || _b === void 0 ? void 0 : _b.phone) ||
            ((_c = story.recipient) === null || _c === void 0 ? void 0 : _c.email) ||
            ((_d = story.recipient) === null || _d === void 0 ? void 0 : _d.communicatorId));
};
exports.isContactAccepted = isContactAccepted;
const prepareNotificationData = (entity) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    let email = '';
    let phone = '';
    let name = '';
    if (((_a = entity.recipient) === null || _a === void 0 ? void 0 : _a.phone) ||
        ((_b = entity.recipient) === null || _b === void 0 ? void 0 : _b.email) ||
        (((_c = entity.user) === null || _c === void 0 ? void 0 : _c.email) && ((_d = entity.user) === null || _d === void 0 ? void 0 : _d.notifications))) {
        email = (_f = (_e = entity.recipient) === null || _e === void 0 ? void 0 : _e.email) !== null && _f !== void 0 ? _f : (_g = entity.user) === null || _g === void 0 ? void 0 : _g.email;
        phone = (_h = entity.recipient) === null || _h === void 0 ? void 0 : _h.phone;
        name = ((_j = entity.user) === null || _j === void 0 ? void 0 : _j.nickname) || name;
    }
    return { email, phone, name, language: (_k = entity.user) === null || _k === void 0 ? void 0 : _k.language };
};
exports.prepareNotificationData = prepareNotificationData;
const includesTranslatableContent = (translations) => {
    return translations.some(({ content, language: { provider } }) => provider && !!content);
};
exports.includesTranslatableContent = includesTranslatableContent;
const checkRegistrationStatus = (user) => {
    if (!user.nickname) {
        if (user.organisation_id) {
            return registration_status_constant_1.REGISTRATION_STATUS.INVITED;
        }
        return registration_status_constant_1.REGISTRATION_STATUS.REQUIRE_PROFILE_UPDATE;
    }
    if (user.organisationApplication && !user.organisation_id) {
        return registration_status_constant_1.REGISTRATION_STATUS.AWAITING_TO_ASSIGN_TO_ORGANISATION;
    }
    else {
        return registration_status_constant_1.REGISTRATION_STATUS.COMPLETE;
    }
};
exports.checkRegistrationStatus = checkRegistrationStatus;
const getDomainFromEmail = (email) => email === null || email === void 0 ? void 0 : email.split('@')[1];
exports.getDomainFromEmail = getDomainFromEmail;
const prepareUsername = (user, hideLastName = false) => {
    var _a, _b;
    if (!(user === null || user === void 0 ? void 0 : user.firstName) && !(user === null || user === void 0 ? void 0 : user.lastName)) {
        return null;
    }
    return `${(_a = user === null || user === void 0 ? void 0 : user.firstName) !== null && _a !== void 0 ? _a : ''} ${!hideLastName ? (_b = user.lastName) !== null && _b !== void 0 ? _b : '' : ''}`.trim();
};
exports.prepareUsername = prepareUsername;
const cloneArrayWithoutReference = (array) => JSON.parse(JSON.stringify(array));
exports.cloneArrayWithoutReference = cloneArrayWithoutReference;
const arrayIncludeAnotherArrayItem = (firstArray, secondArray) => firstArray.some((item) => secondArray.includes(item));
exports.arrayIncludeAnotherArrayItem = arrayIncludeAnotherArrayItem;
const addFilterJoins = (query, exceptions = []) => {
    if (!exceptions.includes('story.categories')) {
        query.leftJoin('story.categories', 'type');
    }
    if (!exceptions.includes('story.organisations')) {
        query.leftJoin('story.organisations', 'organisations');
    }
    if (!exceptions.includes('story.country')) {
        query.leftJoin('story.country', 'country');
    }
    if (!exceptions.includes('story.difficulties')) {
        query.leftJoin('story.difficulties', 'difficulty');
    }
    if (!exceptions.includes('story.storyAdministrativeData')) {
        query.leftJoin('story.storyAdministrativeData', 'storyAdministrativeData');
    }
    if (!exceptions.includes('story.recipient')) {
        query.leftJoin('story.recipient', 'recipient');
    }
    return query;
};
exports.addFilterJoins = addFilterJoins;
const isEmpty = (obj) => Object.keys(obj).length === 0;
exports.isEmpty = isEmpty;
const countUnique = (iterable) => {
    return new Set(iterable).size;
};
exports.countUnique = countUnique;
const getThematicAreaChildrenKeys = () => Object.values(thematic_constant_1.THEMATIC).filter((value) => value.split('.').length > 1);
exports.getThematicAreaChildrenKeys = getThematicAreaChildrenKeys;
const updateThematicFilters = async (filter, thematicService) => {
    if (filter.thematic) {
        let thematicGroupObject = {};
        const thematics = (0, exports._sort)((0, exports.parseStringArrayToInt)((0, exports.arrayRemoveEmptyVal)(filter.thematic.toString().split(','))));
        await Promise.all(thematics.map(async (thematic) => {
            const thematicEntity = await thematicService.findByIdOrFail(thematic);
            const parentId = thematicEntity.parentThematicId;
            if (parentId in thematicGroupObject) {
                thematicGroupObject = Object.assign(Object.assign({}, thematicGroupObject), { [parentId]: [...thematicGroupObject[parentId], thematic] });
            }
            else {
                thematicGroupObject = Object.assign(Object.assign({}, thematicGroupObject), { [parentId]: [thematic] });
            }
        }));
        delete filter.thematic;
        filter.thematicAreaToFiltration = thematicGroupObject;
    }
    return filter;
};
exports.updateThematicFilters = updateThematicFilters;
const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
};
exports.chunkArray = chunkArray;
const getCurrentDateInCustomFormat = (time) => {
    const today = time ? time : new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    if (dd < 10)
        dd = '0' + dd;
    if (mm < 10)
        mm = '0' + mm;
    return mm + '/' + dd + '/' + yyyy;
};
exports.getCurrentDateInCustomFormat = getCurrentDateInCustomFormat;
//# sourceMappingURL=helpers.js.map