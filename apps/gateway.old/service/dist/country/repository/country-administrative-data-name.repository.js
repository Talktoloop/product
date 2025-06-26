"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CountryAdministrativeDataNameRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryAdministrativeDataNameRepository = void 0;
const typeorm_1 = require("typeorm");
const database_decorator_1 = require("../../database/database.decorator");
const country_administrative_data_name_entity_1 = require("../entity/country-administrative-data-name.entity");
const common_1 = require("@nestjs/common");
const shared_1 = require("@ourloop/shared");
let CountryAdministrativeDataNameRepository = CountryAdministrativeDataNameRepository_1 = class CountryAdministrativeDataNameRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger(CountryAdministrativeDataNameRepository_1.name);
    }
    async findLanguagesByCountryId(countryId) {
        return this.createQueryBuilder('administrativeDataName')
            .select('administrativeDataName.language_id', 'languageId')
            .innerJoin('country_administrative_area', 'administrativeData', 'administrativeData.id = administrativeDataName.administrative_area_id and administrativeData.country_id = :countryId', {
            countryId,
        })
            .groupBy('languageId')
            .execute()
            .catch((error) => {
            this.logger.error(error);
            throw new common_1.BadRequestException(shared_1.GET_ADMINISTRATIVE_DATA_FAILED);
        });
    }
    async findByCountryIdAndPhrase(countryId, phrase, languageId, exactlySame = false) {
        const query = this.createQueryBuilder('administrativeDataName')
            .select('administrativeDataName.administrative_area_id', 'administrativeAreaId')
            .leftJoin('country_administrative_area', 'administrativeData', 'administrativeData.id = administrativeDataName.administrative_area_id')
            .where('administrativeData.countryId = :countryId', {
            countryId,
        });
        if (exactlySame) {
            query.andWhere(`administrativeDataName.name LIKE :phrase`, {
                phrase,
            });
        }
        else {
            query.andWhere('MATCH(administrativeDataName.name) AGAINST(:phrase IN BOOLEAN MODE)', {
                phrase: `*${phrase}*`,
            });
        }
        if (languageId) {
            query.andWhere('administrativeDataName.languageId = :languageId', {
                languageId,
            });
        }
        return query.execute().catch((error) => {
            this.logger.error(error);
            throw new common_1.BadRequestException(shared_1.GET_ADMINISTRATIVE_DATA_FAILED);
        });
    }
};
exports.CountryAdministrativeDataNameRepository = CountryAdministrativeDataNameRepository;
exports.CountryAdministrativeDataNameRepository = CountryAdministrativeDataNameRepository = CountryAdministrativeDataNameRepository_1 = __decorate([
    (0, database_decorator_1.EntityRepository)(country_administrative_data_name_entity_1.CountryAdministrativeDataNameEntity)
], CountryAdministrativeDataNameRepository);
//# sourceMappingURL=country-administrative-data-name.repository.js.map