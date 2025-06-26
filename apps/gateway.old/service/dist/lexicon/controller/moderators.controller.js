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
exports.ModeratorsController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const moderators_service_1 = require("../service/moderators.service");
const moderator_entity_1 = require("../entity/moderator.entity");
const permission_guard_1 = require("../../auth/cerbos/permission.guard");
const permission_decorator_1 = require("../../auth/cerbos/permission.decorator");
const permission_enum_1 = require("../../auth/cerbos/permission.enum");
let ModeratorsController = class ModeratorsController {
    constructor(moderatorService) {
        this.moderatorService = moderatorService;
    }
    async getListOfModerators() {
        return await this.moderatorService.findAllModerators();
    }
};
exports.ModeratorsController = ModeratorsController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('cognito'), permission_guard_1.PermissionGuard),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.READ, permission_enum_1.CERBOS_RESOURCES.MODERATOR),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of moderators' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: moderator_entity_1.ModeratorEntity, isArray: true }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ModeratorsController.prototype, "getListOfModerators", null);
exports.ModeratorsController = ModeratorsController = __decorate([
    (0, swagger_1.ApiTags)('Moderators List'),
    (0, common_1.Controller)('moderators'),
    __metadata("design:paramtypes", [moderators_service_1.ModeratorService])
], ModeratorsController);
//# sourceMappingURL=moderators.controller.js.map