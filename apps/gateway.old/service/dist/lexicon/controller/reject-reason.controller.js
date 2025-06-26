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
exports.RejectReasonController = void 0;
const common_1 = require("@nestjs/common");
const reject_reason_service_1 = require("../service/reject-reason.service");
const swagger_1 = require("@nestjs/swagger");
const lexicon_ro_1 = require("../response/lexicon.ro");
const passport_1 = require("@nestjs/passport");
const permission_guard_1 = require("../../auth/cerbos/permission.guard");
const permission_decorator_1 = require("../../auth/cerbos/permission.decorator");
const permission_enum_1 = require("../../auth/cerbos/permission.enum");
let RejectReasonController = class RejectReasonController {
    constructor(rejectReasonService) {
        this.rejectReasonService = rejectReasonService;
    }
    async getListOfOrganisations() {
        return await this.rejectReasonService.findAll();
    }
};
exports.RejectReasonController = RejectReasonController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('cognito'), permission_guard_1.PermissionGuard),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.READ, permission_enum_1.CERBOS_RESOURCES.REJECT_REASON),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of reject reasons' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: lexicon_ro_1.LexiconRO, isArray: true }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RejectReasonController.prototype, "getListOfOrganisations", null);
exports.RejectReasonController = RejectReasonController = __decorate([
    (0, swagger_1.ApiTags)('Reject reason'),
    (0, common_1.Controller)('reject_reason'),
    __metadata("design:paramtypes", [reject_reason_service_1.RejectReasonService])
], RejectReasonController);
//# sourceMappingURL=reject-reason.controller.js.map