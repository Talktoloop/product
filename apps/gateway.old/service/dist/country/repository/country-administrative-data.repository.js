"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CountryAdministrativeDataRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryAdministrativeDataRepository = void 0;
const typeorm_1 = require("typeorm");
const database_decorator_1 = require("../../database/database.decorator");
const country_administrative_data_entity_1 = require("../entity/country-administrative-data.entity");
const common_1 = require("@nestjs/common");
const shared_1 = require("@ourloop/shared");
const story_administrative_data_entity_1 = require("../../story/entity/story-administrative-data.entity");
const shared_2 = require("@ourloop/shared");
let CountryAdministrativeDataRepository = CountryAdministrativeDataRepository_1 = class CountryAdministrativeDataRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger(CountryAdministrativeDataRepository_1.name);
    }
    async findById(id, relations = []) {
        if (!id)
            return;
        return this.findOne({
            where: { id },
            relations: relations !== null && relations !== void 0 ? relations : [],
        });
    }
    async findByIds(ids, relations = []) {
        return this.find({ where: { id: (0, typeorm_1.In)(ids) }, relations: relations !== null && relations !== void 0 ? relations : [] });
    }
    async findAdministrativeDataByIdOrFail(id, relations = []) {
        return this.findOneOrFail({
            where: { id },
            relations: relations !== null && relations !== void 0 ? relations : [],
        }).catch((error) => {
            throw new shared_1.CustomError(shared_1.GET_ADMINISTRATIVE_DATA_FAILED, {
                error: error === null || error === void 0 ? void 0 : error.message,
            });
        });
    }
    getNumberOfStoriesByAdministrationDataParentId(parentId) {
        return this.createQueryBuilder('administrativeData')
            .select('story.id')
            .where('administrativeData.parentId = :parentId', { parentId })
            .innerJoin('administrativeData.storyAdministrativeData', 'storyAdministrativeData')
            .innerJoin('storyAdministrativeData.story', 'story', 'story.status = :status', {
            status: shared_2.STORY_STATUS.PUBLISHED,
        })
            .execute()
            .then((result) => result.length)
            .catch((error) => {
            this.logger.error(error);
            throw new common_1.BadRequestException(shared_1.GET_ADMINISTRATIVE_DATA_FAILED);
        });
    }
    getNumberOfStories(subQuery) {
        return subQuery
            .select('COUNT(*)')
            .from(story_administrative_data_entity_1.StoryAdministrativeDataEntity, 'saa')
            .where('saa.administrative_area_id = administrativeData.id')
            .innerJoin('saa.story', 'story', 'story.status = :status', {
            status: shared_2.STORY_STATUS.PUBLISHED,
        });
    }
    async findByCountryIdAndIds(ids, countryId, onlyWithStory = false) {
        const query = this.createQueryBuilder('administrativeData')
            .select('administrativeData.id', 'id')
            .addSelect('administrativeData.parent_id', 'parentId')
            .addSelect('administrativeData.has_child', 'hasChild')
            .addSelect('names.name', 'name')
            .addSelect('names.language_id', 'languageId')
            .addSelect('country.default_language_id_for_administrative_data', 'defaultLanguageIdForAdministrativeData')
            .addSelect((subQuery) => this.getNumberOfStories(subQuery), 'numberOfStories')
            .leftJoinAndSelect('administrativeData.names', 'names')
            .leftJoinAndSelect('administrativeData.country', 'country')
            .where('administrativeData.countryId = :countryId', {
            countryId,
        })
            .andWhere('administrativeData.id IN (:ids)', {
            ids,
        });
        if (onlyWithStory) {
            query
                .innerJoin('administrativeData.storyAdministrativeData', 'storyAdministrativeData')
                .innerJoin('storyAdministrativeData.story', 'story', 'story.status = :status', {
                status: shared_2.STORY_STATUS.PUBLISHED,
            });
        }
        return query.execute().catch((error) => {
            this.logger.error(error);
            throw new common_1.BadRequestException(shared_1.GET_ADMINISTRATIVE_DATA_FAILED);
        });
    }
    async findByIdsWithRelations(ids, relations) {
        return this.find({
            where: {
                id: (0, typeorm_1.In)(ids),
            },
            relations,
        });
    }
    async getAdministrativeDataWithNumberOfStories(countryId, parentId) {
        const query = this.createQueryBuilder('administrativeData')
            .select('administrativeData.id', 'id')
            .addSelect('names.name', 'name')
            .addSelect('country.default_language_id_for_administrative_data', 'defaultLanguageIdForAdministrativeData')
            .addSelect('names.language_id', 'languageId')
            .addSelect('administrativeData.has_child', 'hasChild')
            .addSelect((subQuery) => this.getNumberOfStories(subQuery), 'numberOfStories')
            .leftJoinAndSelect('administrativeData.names', 'names')
            .leftJoinAndSelect('administrativeData.country', 'country')
            .where('administrativeData.countryId = :countryId', {
            countryId,
        });
        if (parentId) {
            query.andWhere('administrativeData.parentId = :parentId', {
                parentId,
            });
        }
        else {
            query.andWhere('administrativeData.parentId is null');
        }
        return query.execute().catch((error) => {
            this.logger.error(error);
            throw new common_1.BadRequestException(shared_1.GET_ADMINISTRATIVE_DATA_FAILED);
        });
    }
};
exports.CountryAdministrativeDataRepository = CountryAdministrativeDataRepository;
exports.CountryAdministrativeDataRepository = CountryAdministrativeDataRepository = CountryAdministrativeDataRepository_1 = __decorate([
    (0, database_decorator_1.EntityRepository)(country_administrative_data_entity_1.CountryAdministrativeDataEntity)
], CountryAdministrativeDataRepository);
//# sourceMappingURL=country-administrative-data.repository.js.map