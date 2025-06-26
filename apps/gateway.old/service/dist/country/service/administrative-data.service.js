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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var AdministrativeDataService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministrativeDataService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
const default_1 = require("../../config/default");
const country_administrative_data_repository_1 = require("../repository/country-administrative-data.repository");
const story_service_1 = require("../../story/service/story.service");
const helpers_1 = require("../../common/helpers");
const country_administrative_data_name_repository_1 = require("../repository/country-administrative-data-name.repository");
const uuid_1 = require("uuid");
const notification_service_1 = require("../../notification/service/notification.service");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const shared_1 = require("@ourloop/shared");
const date_fns_1 = require("date-fns");
const di_constant_1 = require("../../common/constant/di.constant");
const config_1 = require("@nestjs/config");
const country_service_1 = require("./country.service");
let AdministrativeDataService = AdministrativeDataService_1 = class AdministrativeDataService {
    constructor(administrativeDataRepository, administrativeDataNameRepository, storyService, notificationService, config, countryService) {
        this.administrativeDataRepository = administrativeDataRepository;
        this.administrativeDataNameRepository = administrativeDataNameRepository;
        this.storyService = storyService;
        this.notificationService = notificationService;
        this.config = config;
        this.countryService = countryService;
        this.logger = new common_1.Logger(AdministrativeDataService_1.name);
    }
    async findByCountryCodeAndPhrase(countryCode, phrase, languageId) {
        const country = await this.countryService.findByCode(countryCode);
        if (!country) {
            return [];
        }
        return this.administrativeDataNameRepository.findByCountryIdAndPhrase(country.id, phrase, languageId);
    }
    async findAdministrativeDataOrFail(id, relations = []) {
        return this.administrativeDataRepository.findAdministrativeDataByIdOrFail(id, relations);
    }
    async fetchOneLevel(name, level, exceptionIds = [], defaultLanguageCode, languageCodes) {
        var _a, _b;
        console.log('fetchOneLevel', name, level);
        const overpassQuery = `
    [out:json][timeout:10];
    ${level === 4
            ? `area["ISO3166-1"="${name.toUpperCase()}"]->.searchArea;`
            : `area[name="${name}"]->.searchArea;`} 
    (
      relation["admin_level"="${level}"]["boundary"="administrative"](area.searchArea);
    );
    out body;
    >;
    
    out skel qt;
    `;
        try {
            const response = await axios_1.default.get(default_1.staticConfig.administrativeData.apiUrl, {
                params: {
                    data: overpassQuery,
                    timeout: default_1.staticConfig.administrativeData.timeout,
                },
            });
            return (_b = (_a = response.data.elements) === null || _a === void 0 ? void 0 : _a.filter((element) => element.tags &&
                element.tags.admin_level === `${level}` &&
                element.tags.boundary === 'administrative' &&
                element.tags.name &&
                !exceptionIds.includes(element.id))) === null || _b === void 0 ? void 0 : _b.map((element) => {
                var _a, _b;
                const names = languageCodes
                    .map((code) => ({
                    code,
                    name: element.tags[`name:${code}`],
                }))
                    .filter((item) => item.name);
                const nativeCode = (_b = (_a = element.tags['wikipedia']) === null || _a === void 0 ? void 0 : _a.split(':')[0]) !== null && _b !== void 0 ? _b : defaultLanguageCode;
                if (!names.find((item) => item.code === nativeCode)) {
                    names.push({
                        code: nativeCode,
                        name: element.tags.name,
                    });
                }
                return {
                    id: element.id,
                    names,
                    level: parseInt(element.tags.admin_level),
                    children: [],
                };
            });
        }
        catch (error) {
            console.log(error);
            throw new common_1.ForbiddenException('API calls limit reached, try again later');
        }
    }
    async checkIfAdministrativeDataExists(countryId) {
        return this.administrativeDataRepository
            .find({ where: { countryId } })
            .then((data) => data.length > 0);
    }
    async saveAdministrativeData(languages, data, country, defaultLanguageCode, level = 1, parentId = null) {
        var _a;
        let entity;
        let names = [];
        let defaultName;
        for (const item of data) {
            names = item.names;
            if (!names.find((value) => value.code === defaultLanguageCode)) {
                defaultName = (_a = names.find((value) => { var _a; return value.code === ((_a = country.language) === null || _a === void 0 ? void 0 : _a.code); })) === null || _a === void 0 ? void 0 : _a.name;
                if (defaultName) {
                    names.push({
                        code: defaultLanguageCode,
                        name: defaultName,
                    });
                }
            }
            entity = await this.administrativeDataRepository.save({
                names: item.names
                    .filter((value) => languages[value.code])
                    .map((value) => ({
                    name: value.name,
                    languageId: languages[value.code],
                })),
                countryId: country.id,
                hasChild: item.children.length > 0,
                parentId,
                level,
                externalId: item.id,
            });
            await this.saveAdministrativeData(languages, item.children, country, defaultLanguageCode, level + 1, entity.id);
        }
    }
    async fetchAdministrativeData(phrase, level, limit, defaultLanguageCode, exceptionIds, languageCodes, arr = []) {
        if (!(phrase && level) || level > limit) {
            return arr;
        }
        let data = await this.fetchOneLevel(phrase, level, exceptionIds, defaultLanguageCode, languageCodes);
        let dataForNextLevel;
        if (level + 1 <= limit) {
            dataForNextLevel = await this.fetchOneLevel(phrase, level + 1, exceptionIds, defaultLanguageCode, languageCodes);
        }
        if (data && data.length == 1 && data[0].names.includes(phrase)) {
            data = dataForNextLevel;
        }
        else if (dataForNextLevel) {
            for (const item of dataForNextLevel) {
                if (!data.find((element) => element.names[0] === item.names[0])) {
                    data.push(item);
                }
            }
        }
        for (let i = 2; i < limit; i++) {
            if ((!data || !data[0]) && level + i <= limit) {
                data = await this.fetchOneLevel(phrase, level + i, exceptionIds, defaultLanguageCode, languageCodes);
            }
            if (data && data.length > 0) {
                break;
            }
        }
        let names = [];
        for (const key in data) {
            names = data[key].names.reverse();
            data[key].children = await this.fetchAdministrativeData(names[0].name, data[key].level + 1, limit, defaultLanguageCode, exceptionIds, languageCodes, data[key].children);
        }
        return data;
    }
    removeDuplicates(data) {
        var _a, _b, _c, _d, _e, _f;
        for (const key in data) {
            data[key].children = (_a = data[key].children) === null || _a === void 0 ? void 0 : _a.reduce((unique, item) => {
                if (!unique.some((obj) => obj.names[0].name === item.names[0].name)) {
                    unique.push(item);
                }
                return unique;
            }, []);
            if (((_b = data[key]) === null || _b === void 0 ? void 0 : _b.children) &&
                data[key].children.length === 1 &&
                ((_c = data[key]) === null || _c === void 0 ? void 0 : _c.names[0].name) === data[key].children[0].names[0].name) {
                data[key].children = [];
            }
        }
        const names = [];
        for (const item of data) {
            if (item.children) {
                for (const child of item.children) {
                    for (const value of child.names) {
                        names.push(value.name);
                    }
                }
            }
        }
        data = data === null || data === void 0 ? void 0 : data.filter((item) => {
            var _a;
            return !names.includes(item.names[0].name) ||
                ((_a = item.children) === null || _a === void 0 ? void 0 : _a.find((child) => child.names[0].name === item.names[0].name));
        });
        for (const key in data) {
            data[key].children = (_d = data[key].children) === null || _d === void 0 ? void 0 : _d.filter((child) => child.names[0].name !== data[key].names[0].name);
            data[key].children = this.removeDuplicates((_f = (_e = data[key]) === null || _e === void 0 ? void 0 : _e.children) !== null && _f !== void 0 ? _f : []);
        }
        return data;
    }
    async checkIfHasChild(data, onlyWithStory) {
        if (!onlyWithStory) {
            return data;
        }
        const parentHasChild = {};
        for (const index in data) {
            if (data[index].hasChild && !parentHasChild[data[index].id]) {
                const numberOfStories = await this.administrativeDataRepository.getNumberOfStoriesByAdministrationDataParentId(data[index].id);
                parentHasChild[data[index].id] = numberOfStories;
            }
            data[index].hasChild = parentHasChild[data[index].id] > 0 ? true : false;
        }
        return data;
    }
    async findAdministrativeDataWithCounters(countryId, parentId, onlyWithStory) {
        const data = await this.administrativeDataRepository
            .getAdministrativeDataWithNumberOfStories(countryId, parentId)
            .then((result) => result.filter((item) => !onlyWithStory || item.numberOfStories > 0));
        return this.checkIfHasChild(data, onlyWithStory);
    }
    async findPlaces(phrase, className = 'boundary') {
        try {
            return axios_1.default
                .get(`https://nominatim.openstreetmap.org/search?q=${phrase}&format=json`, {
                params: {
                    timeout: default_1.staticConfig.administrativeData.timeout,
                },
            })
                .then((result) => {
                var _a;
                const data = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.filter((item) => item.class === className);
                return (0, helpers_1.removeObjectDuplicatesByKey)(data, 'display_name');
            });
        }
        catch (error) {
            throw new common_1.ForbiddenException('API calls limit reached, try again later');
        }
    }
    async findPlaceDetails(id) {
        try {
            return axios_1.default
                .get(`https://nominatim.openstreetmap.org/details?osmtype=R&osmid=${id}&format=json`, {
                params: {
                    timeout: default_1.staticConfig.administrativeData.timeout,
                },
            })
                .then((result) => result.data);
        }
        catch (error) {
            throw new common_1.ForbiddenException('API calls limit reached, try again later');
        }
    }
    async parseStoryPlaces(stories) {
        var _a;
        let locationName;
        let numberOfParsedPlaces = 0;
        let storyIdsWithoutRegionFound = false;
        const unparsedLocations = [];
        const storyNotParsedIds = [];
        for (const story of stories) {
            storyIdsWithoutRegionFound = false;
            locationName = await this.prepareLocationName(story);
            let placeArr = locationName.split(', ').reverse();
            placeArr = placeArr.filter((value) => !/\d/.test(value));
            if (placeArr.length > 1) {
                placeArr.shift();
            }
            const items = [];
            let administrativeArea;
            let children = [];
            let filteredChildren = [];
            let searchedName;
            for (const name of placeArr) {
                if (children.length > 0) {
                    filteredChildren = children.filter((item) => item.name === name);
                    if (filteredChildren.length !== 1) {
                        break;
                    }
                    searchedName = filteredChildren[0].name;
                }
                else {
                    searchedName = name;
                }
                const administrativeDataIds = await this.administrativeDataNameRepository
                    .findByCountryIdAndPhrase(story.countryId, searchedName === null || searchedName === void 0 ? void 0 : searchedName.replace(/'/g, "\\'"), null, true)
                    .then((result) => result.map((value) => value.administrativeAreaId));
                if (administrativeDataIds.length === 0) {
                    storyNotParsedIds.push(story.id);
                    storyIdsWithoutRegionFound = true;
                }
                administrativeArea = await this.administrativeDataRepository
                    .findByIdsWithRelations(administrativeDataIds, ['children'])
                    .then((result) => (result.length === 1 ? result[0] : null));
                if (!administrativeArea) {
                    break;
                }
                children = (_a = administrativeArea.children) !== null && _a !== void 0 ? _a : [];
                items.push(administrativeArea);
            }
            if (items.length > 0) {
                numberOfParsedPlaces++;
                await Promise.all(items.map((item) => this.storyService.saveAdministrativeArea({
                    storyId: story.id,
                    administrativeAreaId: item.id,
                })));
            }
            else if (!storyIdsWithoutRegionFound) {
                unparsedLocations.push({
                    storyId: story.id,
                    location: story.place,
                    url: this.getStoryUrl(story),
                });
            }
        }
        return this.parseFilteredStoryPlaces(stories, storyNotParsedIds, numberOfParsedPlaces, unparsedLocations);
    }
    getStoryUrl(story) {
        return `${this.config.get('frontend.url')}${story.status === shared_1.STORY_STATUS.PUBLISHED
            ? `/story/details/${story.id}`
            : `/inbox/stories/story/${story.channel}/${story.id}/review`}`;
    }
    async prepareLocationName(story) {
        let locationName = story.place;
        console.log('place', story.place);
        const places = await this.findPlaces(story.place).then((result) => result.filter((item) => item.display_name.split(', ').length < 6));
        const details = await Promise.all(places.map((place) => this.findPlaceDetails(place.osm_id))).then((result) => result.filter((item) => { var _a; return item.country_code === ((_a = story.country) === null || _a === void 0 ? void 0 : _a.code); }));
        if (details.length === 1) {
            const place = places.filter((place) => place.place_id === details[0].place_id)[0];
            if (place) {
                locationName = place.display_name;
            }
        }
        return locationName;
    }
    async parseFilteredStoryPlaces(stories, storyNotParsedIds, numberOfParsedPlaces, unparsedLocations) {
        var _a;
        for (const story of stories.filter((story) => storyNotParsedIds.includes(story.id))) {
            const administrativeDataIds = await this.administrativeDataNameRepository
                .findByCountryIdAndPhrase(story.countryId, (_a = story.place.split(', ')[0]) === null || _a === void 0 ? void 0 : _a.replace(/'/g, "\\'"), null, true)
                .then((result) => result.map((value) => value.administrativeAreaId));
            if (administrativeDataIds.length === 1) {
                numberOfParsedPlaces++;
                const parents = await this.findParentsById(administrativeDataIds.pop());
                await Promise.all(parents.map((parent) => this.storyService.saveAdministrativeArea({
                    storyId: story.id,
                    administrativeAreaId: parent.id,
                })));
            }
            else {
                unparsedLocations.push({
                    storyId: story.id,
                    location: story.place,
                    url: this.getStoryUrl(story),
                });
            }
        }
        return { unparsedLocations, numberOfParsedPlaces };
    }
    async findParentsById(id, parents = []) {
        const item = await this.administrativeDataRepository.findById(id, [
            'names',
        ]);
        if (item) {
            parents.push(item);
        }
        if (!(item === null || item === void 0 ? void 0 : item.parentId)) {
            return parents;
        }
        return this.findParentsById(item === null || item === void 0 ? void 0 : item.parentId, parents);
    }
    async findParents(items, parents = []) {
        if (!items[0]) {
            return parents;
        }
        if (Object.keys(parents).length === 0) {
            for (const item of items) {
                parents.push({ list: [], key: item.parentId, childId: item.id });
            }
        }
        items = await this.administrativeDataRepository.findByIds(items.map((item) => item.parentId), ['names']);
        for (const item of items) {
            for (const index in parents) {
                if (parents[index].key == item.id) {
                    parents[index].list.push(item);
                    parents[index].key = item.parentId;
                }
            }
        }
        if (!items[0]) {
            return parents;
        }
        return this.findParents(items, parents);
    }
    async findByCountryAndPhraseWithParents(params, userLanguageId, defaultLanguageId) {
        userLanguageId = userLanguageId !== null && userLanguageId !== void 0 ? userLanguageId : defaultLanguageId;
        const languageIds = await this.administrativeDataNameRepository.findLanguagesByCountryId(params.countryId);
        if (!languageIds.find((item) => item.languageId === userLanguageId)) {
            userLanguageId = defaultLanguageId;
        }
        const names = await this.administrativeDataNameRepository.findByCountryIdAndPhrase(params.countryId, params.phrase, userLanguageId);
        if (!names[0]) {
            return { items: [], parents: {} };
        }
        let items = await this.administrativeDataRepository.findByCountryIdAndIds(names.map((item) => item.administrativeAreaId), params.countryId, params.onlyWithStory);
        items = await this.checkIfHasChild(items, params.onlyWithStory);
        const parents = await this.findParents(items);
        const parsedParents = {};
        for (const parent of parents) {
            parsedParents[parent.childId] = parent.list;
        }
        return { items, parents: parsedParents };
    }
    async assignAdministrativeDataToStory(regionId, storyId) {
        await this.findAdministrativeDataOrFail(regionId);
        const administrativeData = await this.findParentsById(regionId);
        if (administrativeData.length > 0) {
            for (const item of administrativeData) {
                await this.storyService.saveAdministrativeArea({
                    storyId: storyId,
                    administrativeAreaId: item.id,
                });
            }
        }
    }
    async exportUnparsedLocationsToCSV(countryName, unparsedLocations) {
        const filePath = `storage/${(0, uuid_1.v4)()}.csv`;
        let dataAsString = 'Story ID\tLocation\tCountry Name\tURL\n';
        unparsedLocations.forEach((item) => {
            var _a;
            dataAsString += `${[
                item.storyId,
                (_a = item.location) === null || _a === void 0 ? void 0 : _a.replace(/,/g, ' | '),
                countryName,
                item.url,
            ].join('\t')}\n`;
        });
        let base64content;
        try {
            fs.appendFileSync(filePath, dataAsString);
            base64content = fs.readFileSync(path.resolve(filePath), {
                encoding: 'base64',
            });
            fs.unlinkSync(path.resolve(filePath));
            return base64content;
        }
        catch (error) {
            this.logger.error(error);
        }
    }
    async exportUnparsedLocationsToCSVAndSendEmail(email, country, unparsedLocations) {
        const dataAsBase64 = await this.exportUnparsedLocationsToCSV(country.name, unparsedLocations);
        if (!dataAsBase64) {
            return;
        }
        return this.notificationService
            .sendEmail(shared_1.EMAIL_TEMPLATES.EXPORT_TO_CSV, {}, {}, [{ Email: email }], [
            {
                ContentType: 'text/csv',
                Filename: `exported-data-${country.code}-${(0, date_fns_1.format)(new Date(), 'yyyy-MM-dd_hh:mm:ss')}.csv`,
                Base64Content: dataAsBase64,
            },
        ])
            .catch((error) => {
            this.logger.error(error);
            return error;
        });
    }
    async getCountryByRegionId(regionId) {
        const administrativeData = await this.administrativeDataRepository.findOneOrFail({
            where: { id: regionId },
            relations: ['country'],
        });
        const country = administrativeData === null || administrativeData === void 0 ? void 0 : administrativeData.country;
        return country;
    }
};
exports.AdministrativeDataService = AdministrativeDataService;
exports.AdministrativeDataService = AdministrativeDataService = AdministrativeDataService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => story_service_1.StoryService))),
    __param(4, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.CONFIG)),
    __metadata("design:paramtypes", [country_administrative_data_repository_1.CountryAdministrativeDataRepository,
        country_administrative_data_name_repository_1.CountryAdministrativeDataNameRepository,
        story_service_1.StoryService,
        notification_service_1.NotificationService,
        config_1.ConfigService,
        country_service_1.CountryService])
], AdministrativeDataService);
//# sourceMappingURL=administrative-data.service.js.map