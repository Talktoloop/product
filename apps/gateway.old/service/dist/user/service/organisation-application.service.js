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
var OrganisationApplicationService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganisationApplicationService = void 0;
const common_1 = require("@nestjs/common");
const organisation_application_repository_1 = require("../repository/organisation-application.repository");
const shared_1 = require("@ourloop/shared");
const airtable_user_service_1 = require("../../airtable-client/service/airtable-user.service");
const user_service_1 = require("../../user/service/user.service");
let OrganisationApplicationService = OrganisationApplicationService_1 = class OrganisationApplicationService {
    constructor(organisationApplicationRepository, airTableUserService, userService) {
        this.organisationApplicationRepository = organisationApplicationRepository;
        this.airTableUserService = airTableUserService;
        this.userService = userService;
        this.logger = new common_1.Logger(OrganisationApplicationService_1.name);
    }
    async removeApplicationById(id) {
        return this.organisationApplicationRepository.delete(id);
    }
    async removeApplicationByUserId(userId) {
        return this.organisationApplicationRepository.delete({ userId });
    }
    async saveApplication(userId, organisationId) {
        var _a;
        const organisationApplication = await this.organisationApplicationRepository
            .save({
            userId,
            organisationId,
        })
            .catch((error) => {
            console.log(error);
            this.logger.error(error.response);
            throw new common_1.BadRequestException(shared_1.SAVE_ORGANISATION_APPLICATION_ERROR);
        });
        if (organisationApplication) {
            const status = await this.userService.updateUserAccountStatus(userId);
            await this.airTableUserService.updateAirTableUser({
                ID: userId,
                'Account status': status,
            });
            const userAirTableId = (_a = (await this.airTableUserService.getAirTableUserData(userId))) === null || _a === void 0 ? void 0 : _a.airTableId;
            await this.airTableUserService.updateAirTableApplication(userId, userAirTableId);
        }
        return organisationApplication;
    }
};
exports.OrganisationApplicationService = OrganisationApplicationService;
exports.OrganisationApplicationService = OrganisationApplicationService = OrganisationApplicationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [organisation_application_repository_1.OrganisationApplicationRepository,
        airtable_user_service_1.AirTableUserService,
        user_service_1.UserService])
], OrganisationApplicationService);
//# sourceMappingURL=organisation-application.service.js.map