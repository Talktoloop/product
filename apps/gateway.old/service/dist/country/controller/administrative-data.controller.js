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
exports.AdministrativeDataController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const administrative_data_service_1 = require("../service/administrative-data.service");
const administrative_xlsx_data_service_1 = require("../service/administrative-xlsx-data.service");
const country_service_1 = require("../service/country.service");
const shared_1 = require("@ourloop/shared");
const platform_express_1 = require("@nestjs/platform-express");
const import_region_dto_1 = require("../request/dto/import-region.dto");
const import_region_schema_1 = require("../request/schema/import-region.schema");
const get_administrative_data_dto_1 = require("../request/dto/get-administrative-data.dto");
const get_administrative_data_schema_1 = require("../request/schema/get-administrative-data.schema");
const administrative_data_ro_1 = require("../response/administrative-data.ro");
const administrative_data_mapper_1 = require("../mapper/administrative-data.mapper");
const story_service_1 = require("../../story/service/story.service");
const parse_region_dto_1 = require("../request/dto/parse-region.dto");
const parse_region_schema_1 = require("../request/schema/parse-region.schema");
const find_regions_dto_1 = require("../request/dto/find-regions.dto");
const find_region_schema_1 = require("../request/schema/find-region.schema");
const search_result_ro_1 = require("../response/search-result.ro");
const search_result_mapper_1 = require("../mapper/search-result.mapper");
const languages_constants_1 = require("../../common/constant/languages.constants");
const language_id_decorator_1 = require("../../language/language-id.decorator");
const language_service_1 = require("../../language/language.service");
const langage_code_to_id_mapper_1 = require("../../language/mapper/langage-code-to-id.mapper");
const administrative_data_path_ro_1 = require("../response/administrative-data-path.ro");
const number_id_validation_pipe_1 = require("../../common/pipe/number-id-validation.pipe");
const administrative_data_path_mapper_1 = require("../mapper/administrative-data-path.mapper");
let AdministrativeDataController = class AdministrativeDataController {
    constructor(storyService, countryService, languageService, administrativeDataService, administrativeXlsxDataService) {
        this.storyService = storyService;
        this.countryService = countryService;
        this.languageService = languageService;
        this.administrativeDataService = administrativeDataService;
        this.administrativeXlsxDataService = administrativeXlsxDataService;
    }
    async getAdministrativeData(userLanguageId, params) {
        var _a;
        if (Number.isInteger(params.parentId)) {
            await this.administrativeDataService.findAdministrativeDataOrFail(params.parentId);
        }
        const defaultLanguage = await this.languageService.getDefaultLanguage();
        const administrativeData = await this.administrativeDataService.findAdministrativeDataWithCounters(params.countryId, params.parentId, (_a = params.onlyWithStory) !== null && _a !== void 0 ? _a : false);
        return (0, administrative_data_mapper_1.administrativeDataMapper)(administrativeData, userLanguageId, defaultLanguage);
    }
    async getAdministrativeDataPath(id, reqHeaders, userLanguageId) {
        const defaultLanguage = await this.languageService.getDefaultLanguage();
        const administrativeData = await this.administrativeDataService.findAdministrativeDataOrFail(id, [
            'names',
            'country',
        ]);
        const parents = await this.administrativeDataService.findParentsById(administrativeData.id);
        return (0, administrative_data_path_mapper_1.administrativeDataPathMapper)(parents, userLanguageId, defaultLanguage.id, administrativeData.country.defaultLanguageId);
    }
    async findAdministrativeData(userLanguageId, params) {
        if (Number.isInteger(params.parentId)) {
            await this.administrativeDataService.findAdministrativeDataOrFail(params.parentId);
        }
        const defaultLanguage = await this.languageService.getDefaultLanguage();
        const country = await this.countryService.findByIdOrFail(params.countryId);
        const data = await this.administrativeDataService.findByCountryAndPhraseWithParents(params, userLanguageId, defaultLanguage.id);
        return (0, search_result_mapper_1.searchResultMapper)(country, params, userLanguageId, defaultLanguage, data);
    }
    async parseCountryRegions(params) {
        const country = await this.countryService.findByCodeOrFail(params.countryCode);
        const stories = await this.storyService.findStoriesWithoutDefinedAdministrativeArea(country.id);
        const { numberOfParsedPlaces, unparsedLocations } = await this.administrativeDataService.parseStoryPlaces(stories);
        if (params.email) {
            this.administrativeDataService.exportUnparsedLocationsToCSVAndSendEmail(params.email, country, unparsedLocations);
        }
        return {
            numberOfParsedPlaces,
            numberOfStoriesWithoutDefinedAdministrativeArea: stories.length,
            unparsedLocations,
        };
    }
    async importCountryRegions(params) {
        var _a;
        const country = await this.countryService.findByCodeOrFail(params.countryCode);
        const administrativeDataExists = await this.administrativeDataService.checkIfAdministrativeDataExists(country.id);
        if (administrativeDataExists && params.saveDataInDB) {
            throw new common_1.BadRequestException('Data is already saved');
        }
        const exceptionIds = params.exceptionIds
            ? params.exceptionIds.split(',').map((value) => parseInt(value))
            : [];
        const defaultLanguage = await this.languageService.getDefaultLanguage();
        let data = await this.administrativeDataService.fetchAdministrativeData(params.countryCode, params.firstLevel, params.lastLevel, (_a = country.language) === null || _a === void 0 ? void 0 : _a.code, exceptionIds, [defaultLanguage.code]);
        data = this.administrativeDataService.removeDuplicates(data);
        if (params.saveDataInDB) {
            const languages = await this.languageService.getLanguages();
            await this.administrativeDataService.saveAdministrativeData((0, langage_code_to_id_mapper_1.languageCodeToIdMapper)(languages), data, country, defaultLanguage.code);
        }
        return data;
    }
    async importXlsxCountryRegions(file, params) {
        if (!file || file.size === 0) {
            throw new common_1.BadRequestException(shared_1.UPLOAD_FILE_FAILED);
        }
        const country = await this.countryService.findByCodeOrFail(params.countryCode);
        const administrativeDataExists = await this.administrativeDataService.checkIfAdministrativeDataExists(country.id);
        if (administrativeDataExists && params.saveDataInDB) {
            throw new common_1.BadRequestException('Data is already saved');
        }
        const { data, dataLanguages } = await this.administrativeXlsxDataService.getXlsxData(file);
        if (params.saveDataInDB) {
            const languages = await this.languageService.getLanguages();
            await this.administrativeXlsxDataService.saveAdministrativeXlsxData(dataLanguages, (0, langage_code_to_id_mapper_1.languageCodeToIdMapper)(languages), data[0].subregions, country.id);
        }
        return data;
    }
};
exports.AdministrativeDataController = AdministrativeDataController;
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(['anonymous'])),
    (0, common_1.Get)(),
    (0, swagger_1.ApiHeader)({
        name: 'content-language',
        enum: languages_constants_1.LANGUAGES_CONSTANTS,
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of administrative data' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: administrative_data_ro_1.AdministrativeDataRO, isArray: true }),
    __param(0, (0, language_id_decorator_1.LanguageId)()),
    __param(1, (0, common_1.Query)(new shared_1.ValidationPipe(get_administrative_data_schema_1.getAdministrativeDataSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, get_administrative_data_dto_1.GetAdministrativeDataDTO]),
    __metadata("design:returntype", Promise)
], AdministrativeDataController.prototype, "getAdministrativeData", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(['anonymous'])),
    (0, swagger_1.ApiHeader)({
        name: 'content-language',
        enum: languages_constants_1.LANGUAGES_CONSTANTS,
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Get administrative data path' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: administrative_data_path_ro_1.AdministrativeDataPathRO }),
    (0, common_1.Get)(':id/path'),
    __param(0, (0, common_1.Param)('id', new number_id_validation_pipe_1.NumberIdValidationPipe())),
    __param(1, (0, common_1.Headers)()),
    __param(2, (0, language_id_decorator_1.LanguageId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Number]),
    __metadata("design:returntype", Promise)
], AdministrativeDataController.prototype, "getAdministrativeDataPath", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(['anonymous'])),
    (0, common_1.Get)('search'),
    (0, swagger_1.ApiHeader)({
        name: 'content-language',
        enum: languages_constants_1.LANGUAGES_CONSTANTS,
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Find administrative data by phrase' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: search_result_ro_1.SearchResultRO }),
    __param(0, (0, language_id_decorator_1.LanguageId)()),
    __param(1, (0, common_1.Query)(new shared_1.ValidationPipe(find_region_schema_1.findRegionSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, find_regions_dto_1.FindRegionsDTO]),
    __metadata("design:returntype", Promise)
], AdministrativeDataController.prototype, "findAdministrativeData", null);
__decorate([
    (0, common_1.UseGuards)(shared_1.BaseAuthGuard),
    (0, common_1.Post)('/parse'),
    (0, swagger_1.ApiOperation)({ summary: 'Parse places to administrative data' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: String }),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(parse_region_schema_1.parseRegionSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [parse_region_dto_1.ParseRegionDTO]),
    __metadata("design:returntype", Promise)
], AdministrativeDataController.prototype, "parseCountryRegions", null);
__decorate([
    (0, common_1.UseGuards)(shared_1.BaseAuthGuard),
    (0, common_1.Post)('/import-from-api'),
    (0, swagger_1.ApiOperation)({
        summary: 'Import administrative boundaries of country from api',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: String, isArray: true }),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(import_region_schema_1.importRegionSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [import_region_dto_1.ImportRegionDTO]),
    __metadata("design:returntype", Promise)
], AdministrativeDataController.prototype, "importCountryRegions", null);
__decorate([
    (0, common_1.UseGuards)(shared_1.BaseAuthGuard),
    (0, common_1.Post)('import-from-excel'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, swagger_1.ApiOperation)({
        summary: 'Import administrative boundaries of country from xlsx',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: String, isArray: true }),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Query)(new shared_1.ValidationPipe(import_region_schema_1.importXlsxRegionSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, import_region_dto_1.ImportXlsxRegionDTO]),
    __metadata("design:returntype", Promise)
], AdministrativeDataController.prototype, "importXlsxCountryRegions", null);
exports.AdministrativeDataController = AdministrativeDataController = __decorate([
    (0, swagger_1.ApiTags)('Administrative data'),
    (0, common_1.Controller)('administrative-data'),
    __metadata("design:paramtypes", [story_service_1.StoryService,
        country_service_1.CountryService,
        language_service_1.LanguageService,
        administrative_data_service_1.AdministrativeDataService,
        administrative_xlsx_data_service_1.AdministrativeXlsxDataService])
], AdministrativeDataController);
//# sourceMappingURL=administrative-data.controller.js.map