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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var AirTableOrganisationService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirTableOrganisationService = void 0;
const common_1 = require("@nestjs/common");
const helpers_1 = require("../../common/helpers");
const axios_1 = __importDefault(require("axios"));
const organisation_repository_1 = require("../../organisation/organisation.repository");
const di_constant_1 = require("../../common/constant/di.constant");
const config_1 = require("@nestjs/config");
const axios_rate_limit_1 = __importDefault(require("axios-rate-limit"));
let AirTableOrganisationService = AirTableOrganisationService_1 = class AirTableOrganisationService {
    constructor(config, organisationRepository) {
        this.config = config;
        this.organisationRepository = organisationRepository;
        this.logger = new common_1.Logger(AirTableOrganisationService_1.name);
        this.apiKey = this.config.get('airTable.apiKey');
        this.organisationsUrl = this.config.get('airTable.url.organisations');
        this.countriesUrl = this.config.get('airTable.url.countries');
        this.axiosInstance = (0, axios_rate_limit_1.default)(axios_1.default.create(), {
            maxRequests: 5,
            perMilliseconds: 1000,
        });
    }
    async importOrganisationsToAirtable() {
        const organisations = await this.organisationRepository.findOrganisationsToAirtable();
        const organisationsChunks = (0, helpers_1.chunkArray)(organisations, 10);
        const allAirTableOrganisations = [];
        for (const chunk of organisationsChunks) {
            const mappedChunk = await this.mapOrganisationToAirTable(chunk);
            const airTableOrganisations = await this.postOrganisationsToAirTable(mappedChunk);
            allAirTableOrganisations.push(airTableOrganisations);
        }
        return allAirTableOrganisations;
    }
    async mapOrganisationToAirTable(organisations) {
        const mappedOrganisations = await Promise.all(organisations.map(async (item) => {
            item.Verified = !!item.Verified;
            item.Country = await this.mapCountryNameToAirTableId(item.Country);
            item.Created = true;
            return { fields: JSON.parse(JSON.stringify(item)) };
        }));
        return mappedOrganisations;
    }
    async mapCountryNameToAirTableId(countryName) {
        var _a, _b, _c;
        try {
            const result = await this.axiosInstance.get(`${this.countriesUrl}?filterByFormula=FIND('${countryName}', {Name})`, {
                headers: {
                    Authorization: `Bearer ${this.apiKey}`,
                },
            });
            const id = (_c = (_b = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.records) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.id;
            return id ? [id] : [];
        }
        catch (error) {
            this.logger.error(error.message);
        }
    }
    async postOrganisationsToAirTable(organisations) {
        var _a;
        try {
            const airTableOrganisationData = await this.axiosInstance.post(this.organisationsUrl, { records: organisations }, {
                headers: {
                    Authorization: `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json',
                },
            });
            return (_a = airTableOrganisationData.data['records']) === null || _a === void 0 ? void 0 : _a.filter((field) => !!field).map((record) => ({
                airTableOrganisationCellId: record['id'],
                dBOrganisationId: record.fields['ID'],
            }));
        }
        catch (error) {
            this.logger.error(error.message);
        }
    }
    async getAirTableOrgnisationCellId(organisationId) {
        var _a, _b, _c;
        try {
            const airTableOrganisationData = await this.axiosInstance.get(`${this.organisationsUrl}?filterByFormula=FIND('${organisationId}', {ID})`, {
                headers: {
                    Authorization: `Bearer ${this.apiKey}`,
                },
            });
            const airTableOrganisationId = (_c = (_b = (_a = airTableOrganisationData.data) === null || _a === void 0 ? void 0 : _a['records']) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.id;
            return airTableOrganisationId;
        }
        catch (error) {
            this.logger.error(error.message);
        }
    }
    async updateNumberOfStories(organisationId, numberOfStories) {
        try {
            const airTableId = await this.getAirTableOrgnisationCellId(organisationId);
            if (airTableId) {
                await this.axiosInstance.patch(`${this.organisationsUrl}/${airTableId}`, { fields: { 'Number of stories': numberOfStories } }, {
                    headers: {
                        Authorization: `Bearer ${this.apiKey}`,
                    },
                });
            }
        }
        catch (error) {
            this.logger.error(error.message);
        }
    }
    async syncNumberOfStoriesToAirtable(organisations) {
        try {
            await Promise.all(organisations.map(async (organisation) => {
                var _a, _b;
                const numberOfStories = (_b = (_a = (await this.organisationRepository.findOrganisationsToAirtable(organisation.id))) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b['Number of stories'];
                await this.updateNumberOfStories(organisation.id, numberOfStories);
            }));
        }
        catch (error) {
            this.logger.error(error.message);
        }
    }
};
exports.AirTableOrganisationService = AirTableOrganisationService;
exports.AirTableOrganisationService = AirTableOrganisationService = AirTableOrganisationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.CONFIG)),
    __metadata("design:paramtypes", [config_1.ConfigService,
        organisation_repository_1.OrganisationRepository])
], AirTableOrganisationService);
//# sourceMappingURL=airtable-organisation.service.js.map