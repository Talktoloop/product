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
exports.StoryService = void 0;
const common_1 = require("@nestjs/common");
const story_repository_1 = require("../repository/story.repository");
const story_vote_repository_1 = require("../repository/story-vote.repository");
const shared_1 = require("@ourloop/shared");
const story_view_repository_1 = require("../repository/story-view.repository");
const types_1 = require("../../common/types");
const uuid_1 = require("uuid");
const uuid_2 = require("uuid");
const category_service_1 = require("../../category/category.service");
const organisation_service_1 = require("../../organisation/organisation.service");
const difficulty_service_1 = require("../../lexicon/service/difficulty.service");
const maternity_status_service_1 = require("../../lexicon/service/maternity-status.service");
const thematic_service_1 = require("../../lexicon/service/thematic.service");
const language_service_1 = require("../../language/language.service");
const marked_as_sensitive_constant_1 = require("../../common/constant/marked-as-sensitive.constant");
const country_service_1 = require("../../country/service/country.service");
const channel_constant_1 = require("../../common/constant/channel.constant");
const typeorm_1 = require("typeorm");
const story_translation_repository_1 = require("../repository/story-translation.repository");
const types_2 = require("../../common/types");
const story_recipient_repository_1 = require("../repository/story-recipient.repository");
const story_administrative_data_repository_1 = require("../repository/story-administrative-data.repository");
const administrative_data_service_1 = require("../../country/service/administrative-data.service");
const message_service_1 = require("../../sms/service/message.service");
const messenger_service_1 = require("../../messenger/service/messenger.service");
const helpers_1 = require("../../common/helpers");
const country_administrative_data_repository_1 = require("./../../country/repository/country-administrative-data.repository");
const airtable_organisation_service_1 = require("../../airtable-client/service/airtable-organisation.service");
const export_service_1 = require("./export.service");
let StoryService = class StoryService {
    constructor(storyRepository, categoryService, thematicService, organisationService, difficultyService, maternityStatusService, storyVoteRepository, storyViewRepository, storyTranslationRepository, storyRecipientRepository, languageService, countryService, storyAdministrativeDataRepository, administrativeDataService, messageService, messengerService, countryAdministrativeDataRepository, airTableOrganisationService, exportService) {
        this.storyRepository = storyRepository;
        this.categoryService = categoryService;
        this.thematicService = thematicService;
        this.organisationService = organisationService;
        this.difficultyService = difficultyService;
        this.maternityStatusService = maternityStatusService;
        this.storyVoteRepository = storyVoteRepository;
        this.storyViewRepository = storyViewRepository;
        this.storyTranslationRepository = storyTranslationRepository;
        this.storyRecipientRepository = storyRecipientRepository;
        this.languageService = languageService;
        this.countryService = countryService;
        this.storyAdministrativeDataRepository = storyAdministrativeDataRepository;
        this.administrativeDataService = administrativeDataService;
        this.messageService = messageService;
        this.messengerService = messengerService;
        this.countryAdministrativeDataRepository = countryAdministrativeDataRepository;
        this.airTableOrganisationService = airTableOrganisationService;
        this.exportService = exportService;
    }
    async removeDuplicateAuthorsScript() {
        const duplicates = await this.storyRecipientRepository
            .createQueryBuilder('sr')
            .select(['sr.email', 'sr.phone', 'COUNT(*) AS duplicateCount'])
            .where('sr.email IS NOT NULL OR sr.phone IS NOT NULL')
            .groupBy('sr.email, sr.phone')
            .having('COUNT(*) > 1')
            .getRawMany();
        const seenIds = new Set();
        const results = [];
        for (const duplicate of duplicates) {
            let whereConditions = [];
            if (duplicate.sr_email)
                whereConditions.push({ email: duplicate.sr_email });
            if (duplicate.sr_phone)
                whereConditions.push({ phone: duplicate.sr_phone });
            const foundRecipients = await this.storyRecipientRepository.find({
                where: whereConditions,
                order: { createdAt: 'DESC' }
            });
            if (foundRecipients.length <= 1)
                continue;
            let [keep, ...toDelete] = foundRecipients;
            if (seenIds.has(keep.id))
                continue;
            seenIds.add(keep.id);
            for (const recipient of toDelete) {
                if (!keep.phone && recipient.phone)
                    keep.phone = recipient.phone;
                if (!keep.email && recipient.email)
                    keep.email = recipient.email;
                if (!keep.firstName && recipient.firstName)
                    keep.firstName = recipient.firstName;
                if (!keep.lastName && recipient.lastName)
                    keep.lastName = recipient.lastName;
                if (!keep.nickname && recipient.nickname)
                    keep.nickname = recipient.nickname;
                if (!keep.genderByUser && recipient.genderByUser !== null)
                    keep.genderByUser = recipient.genderByUser;
                if (!keep.genderByModerator && recipient.genderByModerator !== null)
                    keep.genderByModerator = recipient.genderByModerator;
                if (!keep.ageByUser && recipient.ageByUser !== null)
                    keep.ageByUser = recipient.ageByUser;
                if (!keep.ageByModerator && recipient.ageByModerator !== null)
                    keep.ageByModerator = recipient.ageByModerator;
                if (!keep.difficultyByUser && recipient.difficultyByUser !== null)
                    keep.difficultyByUser = recipient.difficultyByUser;
                if (!keep.difficultyByModerator && recipient.difficultyByModerator !== null)
                    keep.difficultyByModerator = recipient.difficultyByModerator;
                if (!keep.communicatorId && recipient.communicatorId)
                    keep.communicatorId = recipient.communicatorId;
            }
            await this.storyRecipientRepository.save(keep);
            for (const recipient of toDelete) {
                await this.storyRepository.update({ recipientId: recipient.id }, { recipientId: keep.id });
                await this.storyRecipientRepository.delete(recipient.id);
            }
            results.push({ keep, toDelete });
        }
        return results;
    }
    async getNumberOfAdministrativeDataConnectionsByCountryId(countryId) {
        return this.storyRepository
            .getAdministrativeDataIdsByCountryId(countryId)
            .then((result) => result.length);
    }
    async checkThatStoryExist(params, nameOfFunction, relations) {
        const story = await this.storyRepository.findOne({
            where: params,
            relations: relations !== null && relations !== void 0 ? relations : [],
        });
        if (!story) {
            throw new shared_1.CustomError(shared_1.NO_STORY, {
                error: `story doesn\'t exist - function ${nameOfFunction}`,
            });
        }
        console.log('💀'.repeat(10));
        console.log(`story does indeed exist`);
        return story;
    }
    async addNewVote(id, hash, user) {
        const story = await this.checkThatStoryExist({ id }, 'addNewVote');
        return await this.storyVoteRepository.saveVoteIfNotExits(story, hash, user);
    }
    async removeVote(storyId, hash, user) {
        const story = await this.checkThatStoryExist({ id: storyId }, 'removeVote');
        return await this.storyVoteRepository.removeVoteIfNotExits(story, hash, user);
    }
    getCommonStoryIds(selectedStoryIds, newStoryIds) {
        return selectedStoryIds
            ? selectedStoryIds.filter((value) => {
                return newStoryIds.indexOf(value) !== -1;
            })
            : newStoryIds;
    }
    getNotCommonStoryIds(selectedStoryIds, newStoryIds) {
        return selectedStoryIds
            ? selectedStoryIds.filter((value) => {
                return newStoryIds.indexOf(value) === -1;
            })
            : newStoryIds;
    }
    async findStoryIdsByParams(params, isExport = false, statuses = [shared_1.STORY_STATUS.PUBLISHED]) {
        var _a;
        if (params.country) {
            params.countryIds = await this.countryService
                .getCountries({
                where: {
                    code: (0, typeorm_1.In)(params.country.toString().split(',')),
                },
            })
                .then((result) => result.map((item) => item.id));
            if (params.countryIds.length === 0) {
                return [];
            }
            delete params.country;
        }
        if (params.organisation) {
            params.storyIds = await this.findStoryIdsByOrganisationIdsOrGetFromCache(params.organisation.toString(), isExport);
            delete params.organisation;
        }
        if (params.difficulty) {
            const storyIdsByDifficulty = await this.findStoryIdsByDifficultyIdsOrGetFromCache(params.difficulty.toString(), isExport);
            params.storyIds = this.getCommonStoryIds(params.storyIds, storyIdsByDifficulty);
            delete params.difficulty;
        }
        if (params.regionId) {
            const storyIdsByRegionsIds = await this.findStoryIdsByRegionIdsOrGetFromCache(params.regionId.toString(), params.countryIds, isExport);
            params.storyIds = this.getCommonStoryIds(params.storyIds, storyIdsByRegionsIds);
            delete params.regionId;
        }
        if (params.q) {
            const storyIdsByContent = await this.storyTranslationRepository
                .getStoriesByPhrase(params.q)
                .then((result) => result.map((item) => item.storyId));
            params.storyIds = this.getCommonStoryIds(params.storyIds, storyIdsByContent);
            delete params.q;
        }
        if (params.thematic) {
            const storyIdsByThematicArea = await this.findStoryIdsByThematicAreaIdsOrGetFromCache(params.thematic.toString(), isExport);
            params.storyIds = this.getCommonStoryIds(params.storyIds, storyIdsByThematicArea);
            delete params.thematic;
        }
        if (params.minority !== undefined) {
            const storyIdsByMinority = await this.findStoryIdsByMinorityOrGetFromCache(params.minority.toString(), isExport);
            params.storyIds = this.getCommonStoryIds(params.storyIds, storyIdsByMinority);
            delete params.minority;
        }
        if (params.searchTerm) {
            const storyIdsBySearchTerm = await this.findStoryIdsBySearchTermOrGetFromCache(params.searchTerm, isExport);
            params.storyIds = this.getCommonStoryIds(params.storyIds, storyIdsBySearchTerm);
            delete params.searchTerm;
        }
        if (((_a = params.storyIds) === null || _a === void 0 ? void 0 : _a.length) === 0) {
            return [];
        }
        let storyIds = await this.findStoryIdsByParamsOrGetFromCache(params, isExport, statuses);
        if (params.withSensitiveStories !== undefined &&
            !params.withSensitiveStories) {
            const storyIdForSensitiveStories = await this.findSensitiveStoriesOrGetFromCache(isExport);
            storyIds = this.getNotCommonStoryIds(storyIds, storyIdForSensitiveStories);
            delete params.withSensitiveStories;
        }
        return storyIds;
    }
    async findStoryIdsByOrganisationIdsOrGetFromCache(organisationIds, isExport) {
        const md5 = (0, helpers_1.generateMD5)(organisationIds);
        const prefix = `story-ids-by-organisation-${md5}`;
        let fileName;
        let storyIds = [];
        if (isExport) {
            fileName = this.exportService.findCacheFile(prefix);
        }
        if (fileName) {
            storyIds = JSON.parse(this.exportService.readFile(fileName, 'utf-8'));
        }
        else {
            storyIds = await this.storyRepository
                .findStoryIdsByOrganisationIds(organisationIds.split(','))
                .then((result) => result.map((item) => item.story_id));
            if (isExport) {
                this.exportService.saveCacheFile(this.exportService.generateFileName(prefix, 'txt'), JSON.stringify(storyIds));
            }
        }
        return storyIds;
    }
    async findStoryIdsByDifficultyIdsOrGetFromCache(difficultyIds, isExport) {
        const md5 = (0, helpers_1.generateMD5)(difficultyIds);
        const prefix = `story-ids-by-difficulty-${md5}`;
        let fileName;
        let storyIds = [];
        if (isExport) {
            fileName = this.exportService.findCacheFile(prefix);
        }
        if (fileName) {
            storyIds = JSON.parse(this.exportService.readFile(fileName, 'utf-8'));
        }
        else {
            storyIds = await this.storyRepository
                .findStoryIdsByDifficultyIds(difficultyIds
                .toString()
                .split(',')
                .map((value) => parseInt(value)))
                .then((result) => result.map((item) => item.story_id));
            if (isExport) {
                this.exportService.saveCacheFile(this.exportService.generateFileName(prefix, 'txt'), JSON.stringify(storyIds));
            }
        }
        return storyIds;
    }
    async findStoryIdsByMinorityOrGetFromCache(minority, isExport) {
        const md5 = (0, helpers_1.generateMD5)(minority);
        const prefix = `story-ids-by-minority-${md5}`;
        let fileName;
        let storyIds = [];
        if (isExport) {
            fileName = this.exportService.findCacheFile(prefix);
        }
        if (fileName) {
            storyIds = JSON.parse(this.exportService.readFile(fileName, 'utf-8'));
        }
        else {
            storyIds = await this.storyRecipientRepository
                .findStoryIdsByMinority(minority === '1')
                .then((result) => result.map((item) => item.storyId));
            if (isExport) {
                this.exportService.saveCacheFile(this.exportService.generateFileName(prefix, 'txt'), JSON.stringify(storyIds));
            }
        }
        return storyIds;
    }
    async findStoryIdsByRegionIdsOrGetFromCache(regions, countryIds, isExport) {
        const md5 = (0, helpers_1.generateMD5)(regions);
        const prefix = `story-ids-by-region-${md5}`;
        let fileName;
        let storyIds = [];
        if (isExport) {
            fileName = this.exportService.findCacheFile(prefix);
        }
        if (fileName) {
            storyIds = JSON.parse(this.exportService.readFile(fileName, 'utf-8'));
        }
        else {
            storyIds = await this.storyAdministrativeDataRepository
                .find({
                where: {
                    administrativeAreaId: (0, typeorm_1.In)(regions.split(',').map((value) => parseInt(value))),
                },
            })
                .then((result) => result.map((item) => item.storyId));
            const administrativeDataCountries = [];
            const regionIds = regions.split(',');
            for (const regionId of regionIds) {
                if (!isNaN(parseInt(regionId))) {
                    const countryAdministrativeData = await this.countryAdministrativeDataRepository.findOne({
                        where: { id: parseInt(regionId) },
                    });
                    administrativeDataCountries.push(countryAdministrativeData === null || countryAdministrativeData === void 0 ? void 0 : countryAdministrativeData.countryId);
                }
            }
            const countryToAdd = countryIds.filter((id) => !administrativeDataCountries.includes(id));
            for (const country of countryToAdd) {
                await this.storyRepository
                    .find({
                    where: {
                        countryId: country,
                        status: shared_1.STORY_STATUS.PUBLISHED,
                    },
                })
                    .then((result) => result.map((item) => storyIds.push(item.id)));
            }
            if (isExport) {
                this.exportService.saveCacheFile(this.exportService.generateFileName(prefix, 'txt'), JSON.stringify(storyIds));
            }
        }
        return storyIds;
    }
    async findStoryIdsByThematicAreaIdsOrGetFromCache(thematicAreas, isExport) {
        const md5 = (0, helpers_1.generateMD5)(thematicAreas);
        const prefix = `story-ids-by-thematic-area-${md5}`;
        let fileName;
        let storyIds = [];
        if (isExport) {
            fileName = this.exportService.findCacheFile(prefix);
        }
        if (fileName) {
            storyIds = JSON.parse(this.exportService.readFile(fileName, 'utf-8'));
        }
        else {
            storyIds = await this.storyRepository
                .findStoryIdsByThematicAreaIds(thematicAreas.split(',').map((value) => value))
                .then((result) => result.map((item) => item.story_id));
            if (isExport) {
                this.exportService.saveCacheFile(this.exportService.generateFileName(prefix, 'txt'), JSON.stringify(storyIds));
            }
        }
        return storyIds;
    }
    async findStoryIdsBySearchTermOrGetFromCache(searchTerm, isExport) {
        const md5 = (0, helpers_1.generateMD5)(searchTerm);
        const prefix = `story-ids-by-search-term-${md5}`;
        let fileName;
        let storyIds = [];
        if (isExport) {
            fileName = this.exportService.findCacheFile(prefix);
        }
        if (fileName) {
            storyIds = JSON.parse(this.exportService.readFile(fileName, 'utf-8'));
        }
        else {
            storyIds = await this.storyTranslationRepository
                .findStoryIdsBySearchTerm(searchTerm)
                .then((result) => result.map((item) => item.storyId));
            if (isExport) {
                this.exportService.saveCacheFile(this.exportService.generateFileName(prefix, 'txt'), JSON.stringify(storyIds));
            }
        }
        return storyIds;
    }
    async findSensitiveStoriesOrGetFromCache(isExport) {
        const prefix = 'sensitive-story-ids';
        let fileName;
        let storyIds = [];
        if (isExport) {
            fileName = this.exportService.findCacheFile(prefix);
        }
        if (fileName) {
            storyIds = JSON.parse(this.exportService.readFile(fileName, 'utf-8'));
        }
        else {
            storyIds = await this.storyRepository
                .findSensitiveStories()
                .then((result) => result.map((item) => item.id));
            if (isExport) {
                this.exportService.saveCacheFile(this.exportService.generateFileName(prefix, 'txt'), JSON.stringify(storyIds));
            }
        }
        return storyIds;
    }
    async findStoryIdsByParamsOrGetFromCache(params, isExport, statuses) {
        const md5 = (0, helpers_1.generateMD5)(JSON.stringify(params));
        const prefix = `story-ids-by-params-${md5}`;
        let fileName;
        let storyIds = [];
        if (isExport) {
            fileName = this.exportService.findCacheFile(prefix);
        }
        if (fileName) {
            storyIds = JSON.parse(this.exportService.readFile(fileName, 'utf-8'));
        }
        else {
            storyIds = await this.storyRepository
                .findStoryIdsByParams(params, statuses)
                .then(async (result) => result.map((item) => item.id));
            if (isExport) {
                this.exportService.saveCacheFile(this.exportService.generateFileName(prefix, 'txt'), JSON.stringify(storyIds));
            }
        }
        return storyIds;
    }
    async findDetailsByStoryIds(params, storyIds) {
        storyIds = (0, helpers_1.narrowDownIds)(storyIds, params.page, params.limit);
        if (storyIds.length === 0) {
            return [];
        }
        return this.storyRepository.findStoriesByIds(storyIds, params.order);
    }
    async findStoriesByIds(storyIds) {
        if (storyIds.length === 0) {
            return [];
        }
        return this.storyRepository.findStoriesByIds(storyIds, types_2.StoryOrderEnum.NEWEST_FIRST);
    }
    async findStoriesForUNExport(storyIds) {
        if (storyIds.length === 0) {
            return [];
        }
        return this.storyRepository.findStoriesForUNExport(storyIds, types_2.StoryOrderEnum.NEWEST_FIRST);
    }
    async findById(id, status, withDetails = true) {
        return this.storyRepository
            .findStoryByIdAndParams(id, { withDetails, status })
            .then((data) => {
            if (!data) {
                throw new shared_1.CustomError(shared_1.NO_STORY, {
                    error: "story doesn't exist - function findById",
                });
            }
            return data;
        });
    }
    async addNewView(story, hash) {
        return this.storyViewRepository.saveViewIfNotExits(story, hash);
    }
    async setStoryAttributes(story) {
        const operations = { isUrgent: false, isMinority: false };
        if (story.difficulties) {
            operations.difficulties = [];
            for (const difficultyId of story.difficulties) {
                operations.difficulties.push(await this.difficultyService.findByIdOrFail(difficultyId));
            }
        }
        else {
            operations.difficulties = null;
        }
        if (story.organisations) {
            operations.organisations = [];
            for (const organisationIdOrName of [...new Set(story.organisations)]) {
                if ((0, uuid_2.validate)(organisationIdOrName)) {
                    operations.organisations.push(await this.organisationService.findByIdOrFail(organisationIdOrName));
                }
                else {
                    const org = await this.organisationService.findByNameOrCreate(organisationIdOrName, true);
                    operations.organisations.push(org);
                }
            }
        }
        else {
            operations.organisations = null;
        }
        if (story.categories) {
            operations.categories = [];
            for (const categoryId of story.categories) {
                operations.categories.push(await this.categoryService.findByIdOrFail(categoryId));
            }
        }
        else {
            operations.categories = null;
        }
        if (story.maternityStatus) {
            operations.maternityStatus = [];
            for (const maternityStatusID of story.maternityStatus) {
                operations.maternityStatus.push(await this.maternityStatusService.findByIdOrFail(maternityStatusID));
            }
        }
        else {
            operations.maternityStatus = null;
        }
        if (story.thematics) {
            operations.thematics = [];
            for (const thematicsID of story.thematics) {
                operations.thematics.push(await this.thematicService.findByIdOrFail(thematicsID));
            }
        }
        else {
            operations.thematics = null;
        }
        return operations;
    }
    async addStory(languageId, data, hash, user) {
        var _a, _b, _c, _d, _e;
        let country;
        if (data.country) {
            country = await this.countryService.findByCodeOrFail(data.country);
        }
        if (Number.isInteger(data.countryId)) {
            country = await this.countryService.findByIdOrFail(data.countryId);
        }
        if (!data.countryId && Number.isInteger(data.regionId)) {
            country = await this.administrativeDataService.getCountryByRegionId(data.regionId);
        }
        let operations = { isUrgent: false, isMinority: false };
        try {
            operations = await this.setStoryAttributes(data);
            const markedAsSensitiveByRole = data.isSensitive
                ? marked_as_sensitive_constant_1.MARKED_AS_SENSITIVE_BY.AUTHOR
                : undefined;
            const updatedOrSaveBody = {
                email: data.email,
                phone: data.phone,
                nickname: data.authorNickname,
                firstName: data.firstName,
                lastName: data.lastName,
                genderByUser: data.genderByUser,
                genderByModerator: data.gender,
                ageByUser: data.ageByUser,
                ageByModerator: data.age,
                difficultyByUser: data.difficultyByUser,
                difficultyByModerator: data.difficulty
                    ? types_1.DIFFICULTY_VALUE[data.difficulty.toUpperCase()]
                    : null,
                communicatorId: data.communicatorId,
                userWantContact: data.userWantContact,
            };
            const where = {};
            if (data.phone && data.phone.length > 0)
                where['phone'] = data.phone;
            if (data.email && data.email.length > 0)
                where['email'] = data.email;
            let recipient;
            if (where['phone'] || where['email']) {
                recipient = await this.storyRecipientRepository.findOne({ where });
                if (recipient)
                    updatedOrSaveBody.id = recipient.id;
            }
            recipient = await this.storyRecipientRepository.save(updatedOrSaveBody);
            const story = await this.storyRepository.save({
                id: (0, uuid_1.v4)(),
                place: data.place,
                recipientId: recipient.id,
                status: (_a = data.status) !== null && _a !== void 0 ? _a : shared_1.STORY_STATUS.NOT_STARTED,
                countryId: country === null || country === void 0 ? void 0 : country.id,
                organisations: operations.organisations,
                categories: operations.categories,
                maternityStatus: operations.maternityStatus,
                difficulties: operations.difficulties,
                channel: (_b = data.channel) !== null && _b !== void 0 ? _b : undefined,
                conversationId: (_c = data.conversationId) !== null && _c !== void 0 ? _c : undefined,
                user: user !== null && user !== void 0 ? user : null,
                languageId,
                isSensitive: (_d = data.isSensitive) !== null && _d !== void 0 ? _d : undefined,
                markedAsSensitiveByRole,
                markedAsSensitiveByUserId: markedAsSensitiveByRole ? user === null || user === void 0 ? void 0 : user.id : null,
                translations: [
                    {
                        languageId,
                        content: data.content,
                        isOriginalContent: true,
                        numberOfWords: (0, shared_1.calculateNumberOfSubstringsByDivider)(data.content, ' '),
                    },
                ],
            });
            if (hash) {
                await this.storyViewRepository.save({
                    story,
                    hash,
                });
            }
            if (data.content) {
                const language = await this.languageService.getLanguageById(languageId);
                if (language.provider) {
                    this.languageService.invokeTranslation(story.id, data.content, languageId);
                }
            }
            if (((_e = operations === null || operations === void 0 ? void 0 : operations.organisations) === null || _e === void 0 ? void 0 : _e.length) > 0) {
                await this.airTableOrganisationService.syncNumberOfStoriesToAirtable(operations === null || operations === void 0 ? void 0 : operations.organisations);
            }
            return story;
        }
        catch (error) {
            throw new shared_1.CustomError(shared_1.STORY_ADD_ERROR, error);
        }
    }
    async findStoriesWithoutDefinedAdministrativeArea(countryId) {
        return this.storyRepository
            .findStoriesWithoutDefinedAdministrativeArea(countryId)
            .then((result) => result.filter((item) => item.storyAdministrativeData.length === 0));
    }
    async saveAdministrativeArea(data) {
        return this.storyAdministrativeDataRepository.save(data);
    }
    async checkIfModeratorMessageCanBeSent(storyId) {
        const story = await this.findById(storyId);
        if ([
            shared_1.STORY_STATUS.PUBLISHED,
            shared_1.STORY_STATUS.REJECTED,
            shared_1.STORY_STATUS.SENT_TO_CASE_MANAGER,
        ].includes(story.status)) {
            throw new common_1.BadRequestException(shared_1.STORY_INCORRECT_STATUS);
        }
    }
    async chooseChannelMessages(conversationId, channel) {
        if (channel === channel_constant_1.CHANNEL_CONSTANTS.SMS) {
            return this.messageService.getSmsMessagesByConversationId(conversationId);
        }
        if ([
            channel_constant_1.CHANNEL_CONSTANTS.MESSENGER,
            channel_constant_1.CHANNEL_CONSTANTS.WHATSAPP,
            channel_constant_1.CHANNEL_CONSTANTS.TELEGRAM,
        ].includes(channel)) {
            return this.messengerService.getMessengerMessagesByConversationId(conversationId);
        }
    }
    async sanitizeSearchTerm(term) {
        const sanitizedTerm = term.replace(/[^a-zA-Z0-9 ]/g, '');
        if (!sanitizedTerm)
            return undefined;
        return sanitizedTerm.includes(' ') ? `"${sanitizedTerm}"` : `${sanitizedTerm}`;
    }
};
exports.StoryService = StoryService;
exports.StoryService = StoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [story_repository_1.StoryRepository,
        category_service_1.CategoryService,
        thematic_service_1.ThematicService,
        organisation_service_1.OrganisationService,
        difficulty_service_1.DifficultyService,
        maternity_status_service_1.MaternityStatusService,
        story_vote_repository_1.StoryVoteRepository,
        story_view_repository_1.StoryViewRepository,
        story_translation_repository_1.StoryTranslationRepository,
        story_recipient_repository_1.StoryRecipientRepository,
        language_service_1.LanguageService,
        country_service_1.CountryService,
        story_administrative_data_repository_1.StoryAdministrativeDataRepository,
        administrative_data_service_1.AdministrativeDataService,
        message_service_1.MessageService,
        messenger_service_1.MessengerService,
        country_administrative_data_repository_1.CountryAdministrativeDataRepository,
        airtable_organisation_service_1.AirTableOrganisationService,
        export_service_1.ExportService])
], StoryService);
//# sourceMappingURL=story.service.js.map