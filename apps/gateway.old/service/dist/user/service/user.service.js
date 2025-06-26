"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var UserService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../entity/user.entity");
const user_repository_1 = require("../repository/user.repository");
const di_constant_1 = require("../../common/constant/di.constant");
const google_places_web_1 = require("google-places-web");
const shared_1 = require("@ourloop/shared");
const GeoIp = __importStar(require("geoip-lite"));
const Geocoding = __importStar(require("reverse-geocoding"));
const config_1 = require("@nestjs/config");
const country_service_1 = require("../../country/service/country.service");
const typeorm_1 = __importDefault(require("../../config/typeorm"));
const helpers_1 = require("../../common/helpers");
const story_entity_1 = require("../../story/entity/story.entity");
const comment_entity_1 = require("../../comment/entity/comment.entity");
const ivrr_call_entity_1 = require("../../ivrr/entity/ivrr-call.entity");
const message_entity_1 = require("../../sms/entity/message.entity");
const messenger_message_entity_1 = require("../../messenger/entity/messenger-message.entity");
const comment_vote_entity_1 = require("../../comment/entity/comment-vote.entity");
const story_historical_translation_entity_1 = require("../../story/entity/story-historical-translation.entity");
const story_vote_entity_1 = require("../../story/entity/story-vote.entity");
const organisation_application_entity_1 = require("../entity/organisation-application.entity");
const role_constant_1 = require("../constant/role.constant");
const user_consent_repository_1 = require("../repository/user-consent.repository");
const airtable_user_service_1 = require("../../airtable-client/service/airtable-user.service");
const registration_status_constant_1 = require("../../user/constant/registration-status.constant");
const notification_service_1 = require("../../notification/service/notification.service");
const brevo_service_1 = require("./brevo.service");
let UserService = UserService_1 = class UserService {
    constructor(userRepository, googlePlaces, geoIp, geocoding, countryService, config, userConsentRepository, airTableUserService, notificationService, brevoService) {
        this.userRepository = userRepository;
        this.googlePlaces = googlePlaces;
        this.geoIp = geoIp;
        this.geocoding = geocoding;
        this.countryService = countryService;
        this.config = config;
        this.userConsentRepository = userConsentRepository;
        this.airTableUserService = airTableUserService;
        this.notificationService = notificationService;
        this.brevoService = brevoService;
        this.logger = new common_1.Logger(UserService_1.name);
    }
    async saveUser(data, moderator) {
        const accountStatus = (0, helpers_1.checkRegistrationStatus)(data);
        const userToSave = Object.assign(Object.assign({}, data), { accountStatus: accountStatus });
        if (accountStatus === registration_status_constant_1.REGISTRATION_STATUS.INVITED && moderator) {
            userToSave.invitationDate = new Date();
            userToSave.invitedBy = moderator;
        }
        const user = await this.userRepository.saveUser(userToSave);
        if (user) {
            try {
                const userData = await this.userRepository.findUsersToAirtable(user.id);
                if (user.organisation_id) {
                    this.airTableUserService.syncNumberOfUsersToAirtable(user.organisation_id);
                }
                const userToAirTable = await this.airTableUserService.mapUserToAirTable(userData, moderator === null || moderator === void 0 ? void 0 : moderator.nickname);
                const airTableUserData = await this.airTableUserService.postUsersToAirTable(userToAirTable);
                if ((airTableUserData === null || airTableUserData === void 0 ? void 0 : airTableUserData.length) > 0) {
                    this.airTableUserService.findAndUpdateAirTableOrganisation(airTableUserData);
                }
            }
            catch (error) {
                this.logger.error(error.message);
            }
        }
        return user;
    }
    async checkConsents(data, consents) {
        var _a;
        for (const key of Object.keys(consents)) {
            let consent = await this.userConsentRepository.findOne({
                where: { document: (_a = consents[key]) !== null && _a !== void 0 ? _a : '' },
            });
            if (!consent) {
                consent = await this.userConsentRepository.save({
                    document: consents[key],
                });
            }
            data[`${key}Id`] = consent.id;
        }
        return data;
    }
    async updateUserData(data, userId, optin_marketing, consents, organisationApplicationId, email) {
        const userBeforeUpdate = await this.userRepository.findOne({
            where: { id: userId },
        });
        if ((typeof optin_marketing === 'boolean') && (userBeforeUpdate === null || userBeforeUpdate === void 0 ? void 0 : userBeforeUpdate.optin_marketing) !== optin_marketing) {
            if (optin_marketing === true) {
                this.brevoService.createContact(email);
            }
            else {
                this.brevoService.deleteContactFromList(email);
            }
        }
        const userStatusBeforeUpdate = (0, helpers_1.checkRegistrationStatus)(userBeforeUpdate);
        if (consents) {
            data = await this.checkConsents(data, consents);
            data.consentsDate = new Date();
        }
        const nickname = (0, helpers_1.prepareUsername)(data, data.hideLastName);
        const updatedUser = await this.userRepository
            .update(userId, Object.assign(Object.assign({}, data), { nickname: nickname, optin_marketing: optin_marketing || false }))
            .catch((error) => {
            this.logger.error(error.response);
            throw new common_1.BadRequestException(shared_1.UPDATE_USER_ERROR);
        });
        if (updatedUser === null || updatedUser === void 0 ? void 0 : updatedUser.affected) {
            const status = await this.updateUserAccountStatus(userId);
            if (status === registration_status_constant_1.REGISTRATION_STATUS.COMPLETE &&
                [
                    registration_status_constant_1.REGISTRATION_STATUS.INVITED,
                    registration_status_constant_1.REGISTRATION_STATUS.REQUIRE_PROFILE_UPDATE,
                ].includes(userStatusBeforeUpdate)) {
                await this.userRepository
                    .update(userId, {
                    registrationDate: new Date(),
                })
                    .catch((error) => {
                    this.logger.error(error.response);
                    throw new common_1.BadRequestException(shared_1.UPDATE_USER_ERROR);
                });
                this.notificationService.sendSlackNotification(userId, organisationApplicationId);
            }
            this.airTableUserService
                .updateAirTableUser({
                ID: userId,
                Nickname: nickname,
                'Account status': status,
            })
                .then(() => {
                this.airTableUserService.findAndUpdateAirTableOrganisation([
                    { dBUserId: userId },
                ]);
            });
        }
        return updatedUser;
    }
    async updateUserNotification(data, userId) {
        return this.userRepository.update(userId, {
            notifications: data.notifications,
            reminders: data.reminders,
        });
    }
    async migrateUser(oldUser, newUserId) {
        const connection = await (0, helpers_1.getConnection)(typeorm_1.default);
        const queryRunner = connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.query('set foreign_key_checks=0');
            await Promise.all([
                queryRunner.manager.update(user_entity_1.UserEntity, { id: oldUser.id }, {
                    id: newUserId,
                    notifications: oldUser.role === role_constant_1.ROLE.USER ? true : oldUser.notifications,
                }),
                queryRunner.manager.update(story_entity_1.StoryEntity, { userId: oldUser.id }, { userId: newUserId }),
                queryRunner.manager.update(story_entity_1.StoryEntity, { statusChangedByUserId: oldUser.id }, { statusChangedByUserId: newUserId }),
                queryRunner.manager.update(story_entity_1.StoryEntity, { markedAsSensitiveByUserId: oldUser.id }, { markedAsSensitiveByUserId: newUserId }),
                queryRunner.manager.update(comment_entity_1.CommentEntity, { userId: oldUser.id }, { userId: newUserId }),
                queryRunner.manager.update(ivrr_call_entity_1.IvrrCallEntity, { userId: oldUser.id }, { userId: newUserId }),
                queryRunner.manager.update(message_entity_1.MessageEntity, { userId: oldUser.id }, { userId: newUserId }),
                queryRunner.manager.update(messenger_message_entity_1.MessengerMessageEntity, { userId: oldUser.id }, { userId: newUserId }),
                queryRunner.manager.update(comment_vote_entity_1.CommentVoteEntity, { userId: oldUser.id }, { userId: newUserId }),
                queryRunner.manager.update(story_historical_translation_entity_1.StoryHistoricalTranslationEntity, { userId: oldUser.id }, { userId: newUserId }),
                queryRunner.manager.update(story_vote_entity_1.StoryVoteEntity, { userId: oldUser.id }, { userId: newUserId }),
                queryRunner.manager.update(organisation_application_entity_1.OrganisationApplicationEntity, { userId: oldUser.id }, { userId: newUserId }),
            ]);
            await queryRunner.query('set foreign_key_checks=1');
            await queryRunner.commitTransaction();
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            this.logger.error(error);
            if (error.code === 'ER_ROW_IS_REFERENCED_2') {
                await (0, shared_1.setDelay)(1000);
                await this.migrateUser(oldUser, newUserId);
            }
            else {
                throw new common_1.BadRequestException(shared_1.USER_MIGRATION_FAILED);
            }
        }
        finally {
            await queryRunner.release();
        }
    }
    findById(id, relations) {
        if (!id) {
            return;
        }
        return this.userRepository.findById(id, relations);
    }
    findByEmail(email, relations) {
        if (!email)
            return;
        return this.userRepository.findOne({ where: { email }, relations });
    }
    findUsersFormOrganisationsWithNotificationOn(organisations) {
        return this.userRepository.findUsersWithNotificationOn(organisations);
    }
    findUsersFormOrganisationsWithRemindersOn(organisations) {
        return this.userRepository.findUsersWithRemindersOn(organisations);
    }
    checkCountry(ipAddress) {
        return this.geoIp.lookup(ipAddress);
    }
    findLocationsByCoordinates(language, params) {
        return new Promise((resolve, reject) => {
            this.geocoding(Object.assign(Object.assign({}, params), { key: this.config.get('location.googleApiKey'), language }), (error, data) => {
                if (error)
                    return reject(new common_1.BadRequestException(shared_1.GET_LOCALIZATION_FAILED));
                resolve(data);
            });
        });
    }
    async findLocationsByPhrase(language, data) {
        var _a;
        const country = await this.countryService.findByCodeOrFail(data.country);
        return this.googlePlaces
            .autocomplete({
            input: `${(_a = country === null || country === void 0 ? void 0 : country.name) !== null && _a !== void 0 ? _a : ''}, ${data.phrase}`,
            radius: 1,
            language,
            types: ['(regions)'],
        })
            .catch((error) => {
            if ((error === null || error === void 0 ? void 0 : error.message) === 'ZERO_RESULTS') {
                return [];
            }
            throw new common_1.BadRequestException(shared_1.GET_LOCALIZATION_FAILED);
        });
    }
    async getUserOrganisationIdByEmail(email) {
        var _a, _b;
        if (!email)
            return;
        const user = await this.userRepository.findOne({
            where: { email },
            relations: ['organisation'],
        });
        return {
            organisationId: (_a = user === null || user === void 0 ? void 0 : user.organisation_id) !== null && _a !== void 0 ? _a : null,
            name: (_b = user === null || user === void 0 ? void 0 : user.organisation) === null || _b === void 0 ? void 0 : _b.name,
        };
    }
    async updateStatuses() {
        const allUsers = await this.userRepository.find();
        const result = await Promise.all(allUsers.map(async (user) => {
            user.accountStatus = (0, helpers_1.checkRegistrationStatus)(user);
            await this.userRepository.update(user.id, {
                accountStatus: user.accountStatus,
            });
            return { id: user.id, accountStatus: user.accountStatus };
        }));
        return result;
    }
    async updateLastActivity(userId) {
        const now = new Date();
        await this.userRepository.update(userId, { lastActivity: now });
        this.airTableUserService.updateLastActivity(now, userId);
    }
    async updateUserAccountStatus(userId) {
        const user = await this.userRepository.findOneOrFail({
            where: { id: userId },
            relations: ['organisationApplication'],
        });
        const status = (0, helpers_1.checkRegistrationStatus)(user);
        await this.userRepository
            .update(user.id, {
            accountStatus: status,
        })
            .catch((error) => {
            this.logger.error(error.response);
            throw new common_1.BadRequestException(shared_1.UPDATE_USER_ERROR);
        });
        return status;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = UserService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.GOOGLE_PLACES)),
    __param(2, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.GEO_IP)),
    __param(3, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.GEOCODING)),
    __param(5, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.CONFIG)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        google_places_web_1.GooglePlaces, typeof (_a = typeof GeoIp !== "undefined" && GeoIp) === "function" ? _a : Object, typeof (_b = typeof Geocoding !== "undefined" && Geocoding) === "function" ? _b : Object, country_service_1.CountryService,
        config_1.ConfigService,
        user_consent_repository_1.UserConsentRepository,
        airtable_user_service_1.AirTableUserService,
        notification_service_1.NotificationService,
        brevo_service_1.BrevoService])
], UserService);
//# sourceMappingURL=user.service.js.map