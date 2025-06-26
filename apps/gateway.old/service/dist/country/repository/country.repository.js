"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CountryRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryRepository = void 0;
const typeorm_1 = require("typeorm");
const database_decorator_1 = require("../../database/database.decorator");
const country_entity_1 = require("../entity/country.entity");
const country_administrative_data_entity_1 = require("../entity/country-administrative-data.entity");
const story_entity_1 = require("../../story/entity/story.entity");
const common_1 = require("@nestjs/common");
const shared_1 = require("@ourloop/shared");
let CountryRepository = CountryRepository_1 = class CountryRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger(CountryRepository_1.name);
    }
    async getCountriesWithNumberOfStories() {
        return this.createQueryBuilder('country')
            .select('country.id', 'id')
            .addSelect('country.prefix', 'prefix')
            .addSelect('country.code', 'code')
            .addSelect((subQuery) => {
            return subQuery
                .select('COUNT(*)')
                .from(story_entity_1.StoryEntity, 'story')
                .where('story.country_id = country.id')
                .andWhere('story.status = :status', {
                status: shared_1.STORY_STATUS.PUBLISHED,
            });
        }, 'numberOfStories')
            .addSelect((subQuery) => subQuery
            .select('COUNT(*)')
            .from(country_administrative_data_entity_1.CountryAdministrativeDataEntity, 'administrativeData')
            .where('administrativeData.country_id = country.id'), 'numberOfAdministrativeDataConnections')
            .orderBy('country.prefix', 'ASC')
            .execute()
            .catch((error) => {
            this.logger.error(error);
            throw new common_1.BadRequestException(shared_1.GET_COUNTRIES_FAILED);
        });
    }
    getCountriesByPhrase(phrase) {
        return this.find({
            where: [{ name: (0, typeorm_1.Like)(`%${phrase}%`) }, { code: (0, typeorm_1.Like)(`%${phrase}%`) }],
        });
    }
    async findCountriesToAirtable() {
        const queryBuilder = this.createQueryBuilder('country').select('name', 'Name');
        return queryBuilder.execute().catch((error) => {
            this.logger.error(error);
            throw new common_1.BadRequestException(shared_1.GET_COUNTRIES_FAILED);
        });
    }
};
exports.CountryRepository = CountryRepository;
exports.CountryRepository = CountryRepository = CountryRepository_1 = __decorate([
    (0, database_decorator_1.EntityRepository)(country_entity_1.CountryEntity)
], CountryRepository);
//# sourceMappingURL=country.repository.js.map