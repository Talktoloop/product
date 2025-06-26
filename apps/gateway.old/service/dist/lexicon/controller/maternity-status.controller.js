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
exports.MaternityStatusController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const maternity_status_service_1 = require("../service/maternity-status.service");
const swagger_1 = require("@nestjs/swagger");
const lexicon_ro_1 = require("../response/lexicon.ro");
let MaternityStatusController = class MaternityStatusController {
    constructor(maternintyStatusService) {
        this.maternintyStatusService = maternintyStatusService;
    }
    async getListOfmaternintyStatus() {
        return await this.maternintyStatusService.findAll();
    }
};
exports.MaternityStatusController = MaternityStatusController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get list of maternity status' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: lexicon_ro_1.LexiconRO, isArray: true }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MaternityStatusController.prototype, "getListOfmaternintyStatus", null);
exports.MaternityStatusController = MaternityStatusController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(['anonymous'])),
    (0, swagger_1.ApiTags)('Maternity status'),
    (0, common_1.Controller)('maternity_status'),
    __metadata("design:paramtypes", [maternity_status_service_1.MaternityStatusService])
], MaternityStatusController);
//# sourceMappingURL=maternity-status.controller.js.map