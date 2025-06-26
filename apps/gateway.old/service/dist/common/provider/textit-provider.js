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
var TextIt_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextItProvider = exports.TextIt = void 0;
const common_1 = require("@nestjs/common");
const di_constant_1 = require("../constant/di.constant");
const config_1 = require("@nestjs/config");
const axios_1 = __importDefault(require("axios"));
let TextIt = TextIt_1 = class TextIt {
    constructor(config) {
        this.config = config;
        this.clientBase = this.config.get('textIt.clientBase');
        this.apiBase = this.config.get('textIt.apiBase');
        this.token = this.config.get('textIt.token');
        this.logger = new common_1.Logger(TextIt_1.name);
    }
    async sendUserMessage(data) {
        try {
            if (!this.clientBase[data.countryCode]) {
                throw new Error('Client base is not defined');
            }
            const result = await axios_1.default.post(`${this.clientBase[data.countryCode]}receive?from=${data.phone}&text=${data.message}`, {
                headers: {
                    Authorization: `Token ${this.token}`,
                    'Content-Type': 'application/json',
                },
            });
            return result.data;
        }
        catch (error) {
            this.logger.error(error.message);
        }
    }
    async getContactDetails(phone) {
        try {
            const result = await axios_1.default.get(`${this.apiBase}contacts.json?urn=tel%3A%2B${phone}`, {
                headers: {
                    Authorization: `Token ${this.token}`,
                    'Content-Type': 'application/json',
                },
            });
            return result.data.results[0];
        }
        catch (error) {
            this.logger.error(error.message);
        }
    }
    async userHasActiveTextItFlow(phone) {
        const contactDetails = await this.getContactDetails(phone);
        if (!(contactDetails === null || contactDetails === void 0 ? void 0 : contactDetails.flow))
            return false;
        return true;
    }
};
exports.TextIt = TextIt;
exports.TextIt = TextIt = TextIt_1 = __decorate([
    __param(0, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.CONFIG)),
    __metadata("design:paramtypes", [config_1.ConfigService])
], TextIt);
exports.TextItProvider = {
    provide: di_constant_1.DI_CONSTANTS.TEXTIT,
    inject: [config_1.ConfigService],
    useFactory: (config) => new TextIt(config),
};
//# sourceMappingURL=textit-provider.js.map