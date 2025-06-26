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
exports.CaseManagerController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("@ourloop/shared");
const languages_constants_1 = require("../../common/constant/languages.constants");
const language_id_decorator_1 = require("../../language/language-id.decorator");
const case_manager_mapper_1 = require("../mapper/case-manager.mapper");
const case_manager_ro_1 = require("../response/case-manager.ro");
const case_manager_service_1 = require("../service/case-manager.service");
const shared_2 = require("@ourloop/shared");
let CaseManagerController = class CaseManagerController {
    constructor(caseManagerService) {
        this.caseManagerService = caseManagerService;
    }
    async getRandomCaseManager(languageId) {
        const caseManager = await this.caseManagerService.getRandomManager();
        if (!caseManager) {
            throw new shared_1.CustomError(shared_2.CASE_MANAGER_NOT_FOUND, {
                error: 'Any case manager does not exist',
            });
        }
        return (0, case_manager_mapper_1.caseManagerMapper)(caseManager, languageId);
    }
};
exports.CaseManagerController = CaseManagerController;
__decorate([
    (0, swagger_1.ApiHeader)({
        name: 'content-language',
        enum: languages_constants_1.LANGUAGES_CONSTANTS,
    }),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get random case manager' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: case_manager_ro_1.CaseManagerRO }),
    __param(0, (0, language_id_decorator_1.LanguageId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CaseManagerController.prototype, "getRandomCaseManager", null);
exports.CaseManagerController = CaseManagerController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(['anonymous'])),
    (0, swagger_1.ApiTags)('Case Manager'),
    (0, common_1.Controller)('case-manager'),
    __metadata("design:paramtypes", [case_manager_service_1.CaseManagerService])
], CaseManagerController);
//# sourceMappingURL=case-manager.controller.js.map