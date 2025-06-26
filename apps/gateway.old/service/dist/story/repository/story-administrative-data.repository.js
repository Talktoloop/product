"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var StoryAdministrativeDataRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryAdministrativeDataRepository = void 0;
const typeorm_1 = require("typeorm");
const database_decorator_1 = require("../../database/database.decorator");
const story_administrative_data_entity_1 = require("../entity/story-administrative-data.entity");
const common_1 = require("@nestjs/common");
const shared_1 = require("@ourloop/shared");
let StoryAdministrativeDataRepository = StoryAdministrativeDataRepository_1 = class StoryAdministrativeDataRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger(StoryAdministrativeDataRepository_1.name);
    }
    async findByStoryId(storyId, relations = []) {
        return this.find({
            where: { storyId },
            relations: relations !== null && relations !== void 0 ? relations : [],
        });
    }
    async findAdministrativeDataToExport() {
        return this.createQueryBuilder('storyAdministrativeData')
            .select('storyAdministrativeData.story_id', 'storyId')
            .addSelect('administrativeData.id', 'id')
            .addSelect('administrativeData.level', 'level')
            .addSelect('names.name', 'name')
            .addSelect('names.languageId', 'languageId')
            .innerJoin('storyAdministrativeData.administrativeData', 'administrativeData', 'administrativeData.id = storyAdministrativeData.administrative_area_id')
            .innerJoin('administrativeData.names', 'names', 'names.administrativeAreaId = administrativeData.id')
            .execute()
            .catch((error) => {
            this.logger.error(error);
            throw new common_1.BadRequestException(shared_1.GET_ADMINISTRATIVE_DATA_FAILED);
        });
    }
};
exports.StoryAdministrativeDataRepository = StoryAdministrativeDataRepository;
exports.StoryAdministrativeDataRepository = StoryAdministrativeDataRepository = StoryAdministrativeDataRepository_1 = __decorate([
    (0, database_decorator_1.EntityRepository)(story_administrative_data_entity_1.StoryAdministrativeDataEntity)
], StoryAdministrativeDataRepository);
//# sourceMappingURL=story-administrative-data.repository.js.map