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
exports.LanguageController = void 0;
const common_1 = require("@nestjs/common");
const shared_1 = require("@ourloop/shared");
const swagger_1 = require("@nestjs/swagger");
const language_service_1 = require("./language.service");
const check_translation_schema_1 = require("./request/schema/check-translation.schema");
const check_translation_dto_1 = require("./request/dto/check-translation.dto");
const check_translation_ro_1 = require("./response/check-translation.ro");
const class_transformer_1 = require("class-transformer");
const language_ro_1 = require("./response/language.ro");
const passport_1 = require("@nestjs/passport");
let LanguageController = class LanguageController {
    constructor(languageService) {
        this.languageService = languageService;
    }
    async checkTranslation(data) {
        const { content } = data;
        const result = await this.languageService
            .checkTranslationByAWS(content)
            .catch((error) => {
            throw new shared_1.CustomError(shared_1.CHECK_TRANSLATION_ERROR, error);
        });
        return (0, class_transformer_1.plainToClass)(check_translation_ro_1.CheckTranslationRO, result);
    }
    async getListOfTranslations() {
        const languages = await this.languageService.getVisibleLanguages();
        return (0, class_transformer_1.plainToClass)(language_ro_1.LanguageRO, languages);
    }
    async getListOfAllLanguages() {
        const allLanguages = await this.languageService.getLanguages();
        return (0, class_transformer_1.plainToInstance)(language_ro_1.LanguageRO, allLanguages);
    }
};
exports.LanguageController = LanguageController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Check translation content' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: check_translation_ro_1.CheckTranslationRO }),
    (0, common_1.Post)('/check'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(new shared_1.ValidationPipe(check_translation_schema_1.checkTranslationSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [check_translation_dto_1.checkTranslationDto]),
    __metadata("design:returntype", Promise)
], LanguageController.prototype, "checkTranslation", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get list of supported languages' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: language_ro_1.LanguageRO, isArray: true }),
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LanguageController.prototype, "getListOfTranslations", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get list of all languages' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: language_ro_1.LanguageRO, isArray: true }),
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LanguageController.prototype, "getListOfAllLanguages", null);
exports.LanguageController = LanguageController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(['anonymous'])),
    (0, swagger_1.ApiTags)('Language'),
    (0, common_1.Controller)('language'),
    __metadata("design:paramtypes", [language_service_1.LanguageService])
], LanguageController);
//# sourceMappingURL=language.controller.js.map