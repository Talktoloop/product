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
exports.StoryAdministrativeDataEntity = void 0;
const typeorm_1 = require("typeorm");
const story_entity_1 = require("../../story/entity/story.entity");
const country_administrative_data_entity_1 = require("../../country/entity/country-administrative-data.entity");
let StoryAdministrativeDataEntity = class StoryAdministrativeDataEntity {
};
exports.StoryAdministrativeDataEntity = StoryAdministrativeDataEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], StoryAdministrativeDataEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'administrative_area_id', type: 'int' }),
    __metadata("design:type", Number)
], StoryAdministrativeDataEntity.prototype, "administrativeAreaId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'story_id', type: 'varchar' }),
    __metadata("design:type", String)
], StoryAdministrativeDataEntity.prototype, "storyId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => country_administrative_data_entity_1.CountryAdministrativeDataEntity, (administrativeData) => administrativeData.storyAdministrativeData),
    (0, typeorm_1.JoinColumn)({ name: 'administrative_area_id' }),
    __metadata("design:type", country_administrative_data_entity_1.CountryAdministrativeDataEntity)
], StoryAdministrativeDataEntity.prototype, "administrativeData", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => story_entity_1.StoryEntity, (story) => story.storyAdministrativeData),
    (0, typeorm_1.JoinColumn)({ name: 'story_id' }),
    __metadata("design:type", story_entity_1.StoryEntity)
], StoryAdministrativeDataEntity.prototype, "story", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], StoryAdministrativeDataEntity.prototype, "createdAt", void 0);
exports.StoryAdministrativeDataEntity = StoryAdministrativeDataEntity = __decorate([
    (0, typeorm_1.Entity)('story_country_administrative_area')
], StoryAdministrativeDataEntity);
//# sourceMappingURL=story-administrative-data.entity.js.map