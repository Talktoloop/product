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
exports.OrganisationController = void 0;
const common_1 = require("@nestjs/common");
const organisation_service_1 = require("./organisation.service");
const swagger_1 = require("@nestjs/swagger");
const organisation_ro_1 = require("./response/organisation.ro");
const organisation_mapper_1 = require("./mapper/organisation.mapper");
const passport_1 = require("@nestjs/passport");
const create_organisation_dto_1 = require("./request/dto/create-organisation.dto");
const create_organisation_schema_1 = require("./request/schema/create-organisation.schema");
const shared_1 = require("@ourloop/shared");
const id_ro_1 = require("./response/id.ro");
const microservices_1 = require("@nestjs/microservices");
const success_ro_1 = require("../common/response/success.ro");
const language_service_1 = require("../language/language.service");
const languages_constants_1 = require("../common/constant/languages.constants");
const auth_decorator_1 = require("../auth/auth.decorator");
const user_entity_1 = require("../user/entity/user.entity");
const role_constant_1 = require("../user/constant/role.constant");
const country_service_1 = require("../country/service/country.service");
const link_users_to_organisations_dto_1 = require("./request/dto/link-users-to-organisations.dto");
const link_users_to_organisations_schema_1 = require("./request/schema/link-users-to-organisations.schema");
const story_service_1 = require("../story/service/story.service");
const shared_2 = require("@ourloop/shared");
const linked_users_to_organisations_mapper_1 = require("./mapper/linked-users-to-organisations.mapper");
const linked_users_to_organisations_ro_1 = require("./response/linked-users-to-organisations.ro");
const airtable_organisation_service_1 = require("../airtable-client/service/airtable-organisation.service");
const permission_decorator_1 = require("../auth/cerbos/permission.decorator");
const permission_enum_1 = require("../auth/cerbos/permission.enum");
const permission_guard_1 = require("../auth/cerbos/permission.guard");
let OrganisationController = class OrganisationController {
    constructor(organisationService, languageService, countryService, storyService, airTableOrganisationService) {
        this.organisationService = organisationService;
        this.languageService = languageService;
        this.countryService = countryService;
        this.storyService = storyService;
        this.airTableOrganisationService = airTableOrganisationService;
    }
    async getListOfOrganisations(user) {
        const organisations = await this.organisationService.getOrganisationsByRole(user === null || user === void 0 ? void 0 : user.role);
        return (0, organisation_mapper_1.organisationsMapper)(organisations);
    }
    async linkUsersToOrganisations(user, data) {
        const story = await this.storyService.findById(data.storyId, shared_2.STORY_STATUS.PUBLISHED);
        if (!story) {
            throw new common_1.BadRequestException(shared_2.STORY_INCORRECT_STATUS);
        }
        const organisations = await this.organisationService.findOrganisationsByIdsAndStatus(data.links.map((item) => item.organisationId));
        const linkedUsers = await this.organisationService.linkUsers(organisations, data.links, user);
        const result = await this.organisationService.sendNotificationsToLinkedUsers(data.storyId, user, organisations, linkedUsers);
        return (0, linked_users_to_organisations_mapper_1.linkedUsersToOrganisationsMapper)(result);
    }
    async createOrganisation(user, body) {
        await this.countryService.findByIdOrFail(body.countryId);
        const { name, countryId, acronym } = body;
        const verified = user.role >= role_constant_1.ROLE.MODERATOR;
        const { id } = await this.organisationService.findByNameOrCreate(name, verified, countryId, acronym);
        return { id };
    }
    async findOrganisationsAndSendNotificationAboutUnansweredStories() {
        const language = await this.languageService.getLanguageByCode(languages_constants_1.LANGUAGES_CONSTANTS.ENGLISH);
        const organizations = await this.organisationService.findOrganisationsWithUnasweredStories(language.id);
        this.organisationService.sendNotificationAboutUnansweredStories(organizations);
        return { success: true };
    }
    async importToAirtable() {
        const result = await this.airTableOrganisationService.importOrganisationsToAirtable();
        return { success: (result === null || result === void 0 ? void 0 : result.length) > 0 };
    }
};
exports.OrganisationController = OrganisationController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(['cognito', 'anonymous'])),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of organisations' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: organisation_ro_1.OrganisationRO, isArray: true }),
    (0, common_1.Get)(),
    __param(0, (0, auth_decorator_1.Auth)(false)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], OrganisationController.prototype, "getListOfOrganisations", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('cognito'), permission_guard_1.PermissionGuard),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.CREATE, permission_enum_1.CERBOS_RESOURCES.ORGANISATION),
    (0, swagger_1.ApiOperation)({ summary: 'Link users to organisations' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: linked_users_to_organisations_ro_1.LinkedUsersToOrganisationsRO }),
    (0, common_1.Post)('link-user'),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Body)(new shared_1.ValidationPipe(link_users_to_organisations_schema_1.linkUsersToOrganisationsSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        link_users_to_organisations_dto_1.LinkUsersToOrganisationsDTO]),
    __metadata("design:returntype", Promise)
], OrganisationController.prototype, "linkUsersToOrganisations", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('cognito')),
    (0, swagger_1.ApiOperation)({ summary: 'Create organisation' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: id_ro_1.IdRo }),
    (0, common_1.Post)(),
    __param(0, (0, auth_decorator_1.Auth)(false)),
    __param(1, (0, common_1.Body)(new shared_1.ValidationPipe(create_organisation_schema_1.createOrganisationSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        create_organisation_dto_1.CreateOrganisationDto]),
    __metadata("design:returntype", Promise)
], OrganisationController.prototype, "createOrganisation", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'sendNotificationAboutUnansweredStories' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrganisationController.prototype, "findOrganisationsAndSendNotificationAboutUnansweredStories", null);
__decorate([
    (0, common_1.UseGuards)(shared_2.BaseAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Import organisations to airtable' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, common_1.Get)('import-to-airtable'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrganisationController.prototype, "importToAirtable", null);
exports.OrganisationController = OrganisationController = __decorate([
    (0, swagger_1.ApiTags)('Organisation'),
    (0, common_1.Controller)('organisation'),
    __metadata("design:paramtypes", [organisation_service_1.OrganisationService,
        language_service_1.LanguageService,
        country_service_1.CountryService,
        story_service_1.StoryService,
        airtable_organisation_service_1.AirTableOrganisationService])
], OrganisationController);
//# sourceMappingURL=organisation.controller.js.map