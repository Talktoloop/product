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
var AirTableCountryService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirTableCountryService = void 0;
const common_1 = require("@nestjs/common");
const helpers_1 = require("../../common/helpers");
const axios_1 = __importDefault(require("axios"));
const country_repository_1 = require("../../country/repository/country.repository");
const di_constant_1 = require("../../common/constant/di.constant");
const config_1 = require("@nestjs/config");
const axios_rate_limit_1 = __importDefault(require("axios-rate-limit"));
let AirTableCountryService = AirTableCountryService_1 = class AirTableCountryService {
    constructor(config, countryRepository) {
        this.config = config;
        this.countryRepository = countryRepository;
        this.logger = new common_1.Logger(AirTableCountryService_1.name);
        this.apiKey = this.config.get('airTable.apiKey');
        this.countriesUrl = this.config.get('airTable.url.countries');
        this.axiosInstance = (0, axios_rate_limit_1.default)(axios_1.default.create(), {
            maxRequests: 5,
            perMilliseconds: 1000,
        });
    }
    async importCountriesToAirTable() {
        const countries = await this.countryRepository.findCountriesToAirtable();
        const countriesChunks = (0, helpers_1.chunkArray)(countries, 10);
        const allAirTableCountries = [];
        for (const chunk of countriesChunks) {
            const mappedCountries = chunk.map((item) => {
                return { fields: JSON.parse(JSON.stringify(item)) };
            });
            const airTableCountries = await this.postCountriesToAirTable(mappedCountries);
            allAirTableCountries.push(airTableCountries);
        }
        return allAirTableCountries;
    }
    async postCountriesToAirTable(countries) {
        return await this.axiosInstance
            .post(this.countriesUrl, { records: countries }, {
            headers: {
                Authorization: `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json',
            },
        })
            .then((result) => {
            var _a;
            return (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a['records'].filter((field) => !!field).map((country) => ({
                Name: country['Name'],
            }));
        })
            .catch((error) => {
            this.logger.error(error.message);
        });
    }
};
exports.AirTableCountryService = AirTableCountryService;
exports.AirTableCountryService = AirTableCountryService = AirTableCountryService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.CONFIG)),
    __metadata("design:paramtypes", [config_1.ConfigService,
        country_repository_1.CountryRepository])
], AirTableCountryService);
//# sourceMappingURL=airtable-country.service.js.map