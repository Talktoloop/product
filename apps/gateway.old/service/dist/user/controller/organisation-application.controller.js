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
exports.OrganisationApplicationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
const auth_decorator_1 = require("../../auth/auth.decorator");
const user_entity_1 = require("../entity/user.entity");
const organisation_application_service_1 = require("../service/organisation-application.service");
const success_ro_1 = require("../../common/response/success.ro");
const class_transformer_1 = require("class-transformer");
const shared_1 = require("@ourloop/shared");
const add_organisation_application_dto_1 = require("../request/dto/add-organisation-application.dto");
const add_organisation_application_schema_1 = require("../request/schema/add-organisation-application.schema");
const user_service_1 = require("../service/user.service");
let OrganisationApplicationController = class OrganisationApplicationController {
    constructor(userService, organisationApplicationService) {
        this.userService = userService;
        this.organisationApplicationService = organisationApplicationService;
    }
    async addOrganisationApplication(user, data) {
        user = await this.userService.findById(user.id, [
            'organisationApplication',
        ]);
        if (user.organisationApplication) {
            await this.organisationApplicationService.removeApplicationById(user.organisationApplication.id);
        }
        const application = await this.organisationApplicationService.saveApplication(user.id, data.organisationId);
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success: !!(application === null || application === void 0 ? void 0 : application.id) });
    }
};
exports.OrganisationApplicationController = OrganisationApplicationController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('cognito')),
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Apply to the organization' }),
    (0, common_1.Post)(),
    __param(0, (0, auth_decorator_1.Auth)(false)),
    __param(1, (0, common_1.Body)(new shared_1.ValidationPipe(add_organisation_application_schema_1.addOrganisationApplication))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        add_organisation_application_dto_1.AddOrganisationApplicationDto]),
    __metadata("design:returntype", Promise)
], OrganisationApplicationController.prototype, "addOrganisationApplication", null);
exports.OrganisationApplicationController = OrganisationApplicationController = __decorate([
    (0, swagger_1.ApiTags)('User Applications'),
    (0, common_1.Controller)('user/application'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        organisation_application_service_1.OrganisationApplicationService])
], OrganisationApplicationController);
//# sourceMappingURL=organisation-application.controller.js.map