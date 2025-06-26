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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryService = void 0;
const common_1 = require("@nestjs/common");
const country_repository_1 = require("../repository/country.repository");
const shared_1 = require("@ourloop/shared");
const story_service_1 = require("../../story/service/story.service");
let CountryService = class CountryService {
    constructor(storyService, countryRepository) {
        this.storyService = storyService;
        this.countryRepository = countryRepository;
    }
    async getCountries(params = {}) {
        return this.countryRepository.find(params);
    }
    async getCountriesWithNumberOfStories(onlyWithStory) {
        const countries = await this.countryRepository
            .getCountriesWithNumberOfStories()
            .then((result) => result.filter((item) => !onlyWithStory || item.numberOfStories > 0));
        if (onlyWithStory) {
            for (const index in countries) {
                countries[index].numberOfAdministrativeDataConnections =
                    await this.storyService.getNumberOfAdministrativeDataConnectionsByCountryId(countries[index].id);
            }
        }
        return countries;
    }
    findByCode(code) {
        if (!code)
            return;
        return this.countryRepository.findOne({ where: { code } });
    }
    findByIdOrFail(id) {
        if (!id) {
            throw new common_1.BadRequestException(shared_1.COUNTRY_NOT_FOUND);
        }
        return this.countryRepository.findOne({ where: { id } }).then((data) => {
            if (!data) {
                throw new common_1.BadRequestException(shared_1.COUNTRY_NOT_FOUND);
            }
            return data;
        });
    }
    findByCodeOrFail(code) {
        if (!code)
            return;
        return this.countryRepository
            .findOne({ where: { code }, relations: ['language'] })
            .then((data) => {
            if (!data) {
                throw new common_1.BadRequestException(shared_1.COUNTRY_NOT_FOUND);
            }
            return data;
        });
    }
    findByPhrase(phrase) {
        return this.countryRepository.getCountriesByPhrase(phrase);
    }
};
exports.CountryService = CountryService;
exports.CountryService = CountryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => story_service_1.StoryService))),
    __metadata("design:paramtypes", [story_service_1.StoryService,
        country_repository_1.CountryRepository])
], CountryService);
//# sourceMappingURL=country.service.js.map