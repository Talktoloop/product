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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
const user_profile_ro_1 = require("../response/user-profile.ro");
const auth_decorator_1 = require("../../auth/auth.decorator");
const user_entity_1 = require("../entity/user.entity");
const user_mapper_1 = require("../mapper/user.mapper");
const user_service_1 = require("../service/user.service");
const success_ro_1 = require("../../common/response/success.ro");
const class_transformer_1 = require("class-transformer");
const edit_user_notifications_dto_1 = require("../request/dto/edit-user-notifications.dto");
const edit_user_notifications_schema_1 = require("../request/schema/edit-user-notifications.schema");
const shared_1 = require("@ourloop/shared");
const find_locations_by_phrase_schema_1 = require("../request/schema/find-locations-by-phrase.schema");
const find_locations_by_phrase_dto_1 = require("../request/dto/find-locations-by-phrase.dto");
const languages_constants_1 = require("../../common/constant/languages.constants");
const locations_ro_1 = require("../response/locations.ro");
const locations_mapper_1 = require("../mapper/locations.mapper");
const county_by_ip_ro_1 = require("../response/county-by-ip.ro");
const ip_decorator_1 = require("../../user/ip.decorator");
const find_locations_by_coordinates_schema_1 = require("../request/schema/find-locations-by-coordinates.schema");
const find_locations_by_coordinates_dto_1 = require("../request/dto/find-locations-by-coordinates.dto");
const helpers_1 = require("../../common/helpers");
const edit_user_data_dto_1 = require("../request/dto/edit-user-data.dto");
const edit_user_data_schema_1 = require("../request/schema/edit-user-data.schema");
const user_organisation_ro_1 = require("../response/user-organisation.ro");
const email_validation_pipe_1 = require("../../common/pipe/email-validation.pipe");
const subscription_service_1 = require("../../subscription/service/subscription.service");
const airtable_user_service_1 = require("../../airtable-client/service/airtable-user.service");
const microservices_1 = require("@nestjs/microservices");
const send_invitation_to_user_schema_1 = require("../request/schema/send-invitation-to-user.schema");
const send_invitation_to_user_dto_1 = require("../request/dto/send-invitation-to-user.dto");
const organisation_service_1 = require("../../organisation/organisation.service");
const permission_decorator_1 = require("../../auth/cerbos/permission.decorator");
const permission_enum_1 = require("../../auth/cerbos/permission.enum");
const permission_guard_1 = require("../../auth/cerbos/permission.guard");
let UserController = class UserController {
    constructor(userService, subscriptionService, airTableUserService, organisationService) {
        this.userService = userService;
        this.subscriptionService = subscriptionService;
        this.airTableUserService = airTableUserService;
        this.organisationService = organisationService;
        this.logger = new common_1.Logger('UserController');
    }
    async profile(user) {
        const userData = await this.userService.findById(user.id, [
            'organisation',
            'organisationApplication',
        ]);
        const tokenData = await this.subscriptionService.getUserSubscriptionToken(userData);
        return (0, user_mapper_1.userToUserProfileRO)(userData, tokenData === null || tokenData === void 0 ? void 0 : tokenData.decodedToken);
    }
    async updateUserData(user, data) {
        const { consents, organisationApplicationId, optin_marketing } = data, userData = __rest(data, ["consents", "organisationApplicationId", "optin_marketing"]);
        const result = await this.userService.updateUserData(userData, user.id, optin_marketing, consents, organisationApplicationId, user.email);
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success: !!result.affected });
    }
    async updateUserNotification(user, data) {
        const res = await this.userService.updateUserNotification(data, user.id);
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success: !!res.affected });
    }
    async findLocationsByCoordinates(language, params) {
        const data = await this.userService.findLocationsByCoordinates(language, params);
        const types = [];
        let index = 1;
        while (index < 4) {
            types.push(`administrative_area_level_${index}`);
            index++;
        }
        return (0, locations_mapper_1.locationsMapper)(data.results.filter((item) => Array.isArray(item.types) &&
            (0, helpers_1.arrayIncludeAnotherArrayItem)(item.types, types)));
    }
    async findLocationsByPhrase(language, params) {
        const data = await this.userService.findLocationsByPhrase(language, params);
        return (0, locations_mapper_1.locationsMapper)(data.predictions);
    }
    async checkCountry(ipAddress) {
        const result = this.userService.checkCountry(ipAddress);
        return (0, class_transformer_1.plainToClass)(county_by_ip_ro_1.CountryByIpRO, result !== null && result !== void 0 ? result : {});
    }
    async getUserOrganisation(email) {
        return (0, class_transformer_1.plainToClass)(user_organisation_ro_1.UserOrganisationRO, this.userService.getUserOrganisationIdByEmail(email));
    }
    async importToAirtable() {
        const result = await this.airTableUserService.importUsersToAirtable();
        return { success: (result === null || result === void 0 ? void 0 : result.length) > 0 };
    }
    async sendInvitationToUser(data) {
        var _a;
        console.log('sendInvitationToUser');
        const user = await this.userService.findById(data.userId, [
            'organisation',
            'language',
        ]);
        if (!(user === null || user === void 0 ? void 0 : user.organisation_id)) {
            return { success: false };
        }
        const result = await this.organisationService
            .sendUserInvitedNotification([user.organisation], [
            {
                email: user.email,
                languageCode: (_a = user.language) === null || _a === void 0 ? void 0 : _a.code,
                organisationId: user.organisation_id,
            },
        ])
            .then((result) => result[0]);
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, {
            success: (result === null || result === void 0 ? void 0 : result.body['Messages'][0].Status) === 'success',
        });
    }
    async updateUsersAccountStatus() {
        const result = await this.userService.updateStatuses();
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, {
            success: result.length > 0 ? result.every((user) => user.accountStatus) : false,
        });
    }
};
exports.UserController = UserController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('cognito')),
    (0, swagger_1.ApiResponse)({ status: 200, type: user_profile_ro_1.UserProfileRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Get my profile' }),
    (0, common_1.Get)('/me'),
    __param(0, (0, auth_decorator_1.Auth)(false)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "profile", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('cognito')),
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Update user data' }),
    (0, common_1.Put)(),
    __param(0, (0, auth_decorator_1.Auth)(false)),
    __param(1, (0, common_1.Body)(new shared_1.ValidationPipe(edit_user_data_schema_1.editUserData))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        edit_user_data_dto_1.EditUserDataDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUserData", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('cognito')),
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Update user notifications' }),
    (0, common_1.Put)('/notifications'),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Body)(new shared_1.ValidationPipe(edit_user_notifications_schema_1.editUserNotification))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        edit_user_notifications_dto_1.EditUserNotificationDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUserNotification", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(['anonymous'])),
    (0, swagger_1.ApiHeader)({
        name: 'content-language',
        enum: languages_constants_1.LANGUAGES_CONSTANTS,
        required: false,
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: locations_ro_1.LocationRO, isArray: true }),
    (0, swagger_1.ApiOperation)({ summary: 'Find location by coordinates' }),
    (0, common_1.Get)('/location/coordinates'),
    __param(0, (0, common_1.Headers)('content-language')),
    __param(1, (0, common_1.Query)(new shared_1.ValidationPipe(find_locations_by_coordinates_schema_1.findLocationsByCoordinatesSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, find_locations_by_coordinates_dto_1.FindLocationsByCoordinatesDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findLocationsByCoordinates", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(['anonymous'])),
    (0, swagger_1.ApiHeader)({
        name: 'content-language',
        enum: languages_constants_1.LANGUAGES_CONSTANTS,
        required: false,
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: locations_ro_1.LocationRO, isArray: true }),
    (0, swagger_1.ApiOperation)({ summary: 'Find locations by phrase and country' }),
    (0, common_1.Get)('/location/phrase'),
    __param(0, (0, common_1.Headers)('content-language')),
    __param(1, (0, common_1.Query)(new shared_1.ValidationPipe(find_locations_by_phrase_schema_1.findLocationsByPhraseSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, find_locations_by_phrase_dto_1.FindLocationsByPhraseDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findLocationsByPhrase", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(['anonymous'])),
    (0, swagger_1.ApiResponse)({ status: 200, type: county_by_ip_ro_1.CountryByIpRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Check country' }),
    (0, common_1.Get)('/country'),
    __param(0, (0, ip_decorator_1.Ip)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "checkCountry", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('cognito'), permission_guard_1.PermissionGuard),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.READ, permission_enum_1.CERBOS_RESOURCES.USER),
    (0, swagger_1.ApiResponse)({ status: 200, type: user_organisation_ro_1.UserOrganisationRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Get user organisation' }),
    (0, common_1.Get)('/:email/organisation'),
    __param(0, (0, common_1.Param)('email', new email_validation_pipe_1.EmailValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserOrganisation", null);
__decorate([
    (0, common_1.UseGuards)(shared_1.BaseAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Import users to airtable' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, common_1.Get)('import-to-airtable'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "importToAirtable", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'sendInvitationToUser' }),
    __param(0, (0, common_1.Body)(new shared_1.ValidationPipe(send_invitation_to_user_schema_1.sendInvitationToUserSchema, { isRpcException: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [send_invitation_to_user_dto_1.sendInvitationToUserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "sendInvitationToUser", null);
__decorate([
    (0, common_1.UseGuards)(shared_1.BaseAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Update users account status' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, common_1.Get)('update-account-status'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUsersAccountStatus", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)('User'),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        subscription_service_1.SubscriptionService,
        airtable_user_service_1.AirTableUserService,
        organisation_service_1.OrganisationService])
], UserController);
//# sourceMappingURL=user.controller.js.map