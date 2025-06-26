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
var SubscriptionService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionService = void 0;
const common_1 = require("@nestjs/common");
const shared_1 = require("@ourloop/shared");
const notification_service_1 = require("../../notification/service/notification.service");
const access_type_constant_1 = require("../constant/access-type.constant");
const organisation_service_1 = require("../../organisation/organisation.service");
const organisation_repository_1 = require("../../organisation/organisation.repository");
const config_1 = require("@nestjs/config");
const di_constant_1 = require("../../common/constant/di.constant");
const jwt = __importStar(require("jsonwebtoken"));
const user_repository_1 = require("../../user/repository/user.repository");
const user_token_repository_1 = require("../repository/user-token.repository");
const organisation_token_repository_1 = require("../repository/organisation-token.repository");
const date_fns_1 = require("date-fns");
const email_templates_constants_1 = require("../../common/constant/email-templates.constants");
const subscription_application_repository_1 = require("../repository/subscription-application.repository");
const registration_status_constant_1 = require("../../user/constant/registration-status.constant");
const airtable_user_service_1 = require("../../airtable-client/service/airtable-user.service");
let SubscriptionService = SubscriptionService_1 = class SubscriptionService {
    constructor(notificationService, organisationService, organisationRepository, userRepository, config, userTokenRepository, organisationTokenRepository, subscriptionApplicationRepository, airTableUserService) {
        this.notificationService = notificationService;
        this.organisationService = organisationService;
        this.organisationRepository = organisationRepository;
        this.userRepository = userRepository;
        this.config = config;
        this.userTokenRepository = userTokenRepository;
        this.organisationTokenRepository = organisationTokenRepository;
        this.subscriptionApplicationRepository = subscriptionApplicationRepository;
        this.airTableUserService = airTableUserService;
        this.logger = new common_1.Logger(SubscriptionService_1.name);
    }
    decodeToken(token) {
        if (!token)
            return;
        try {
            return jwt.verify(token, this.config.get('subscription.jwtSecret'));
        }
        catch (error) {
            return;
        }
    }
    checkIfTokenExpired(expirationTime) {
        if (!expirationTime) {
            return true;
        }
        return expirationTime < parseInt((0, date_fns_1.format)(new Date(), 't'));
    }
    async sendEmailWithSubscriptionRequest(user, access) {
        var _a;
        const emailTemplate = access === access_type_constant_1.ACCESS_TYPE.FREE
            ? shared_1.EMAIL_TEMPLATES.LOOP_PREMIUM_FREE_ACCESS_REQUEST
            : shared_1.EMAIL_TEMPLATES.LOOP_PREMIUM_PAID_ACCESS_REQUEST;
        const organisation = await this.organisationRepository.findOne({
            where: { id: user.organisation_id },
        });
        const organisationDetails = this.organisationService.getOrganisationDetails(organisation);
        const receivers = ((_a = this.config.get('subscription.premiumRequestEmailsReceiver')) !== null && _a !== void 0 ? _a : '').split(',');
        await this.notificationService
            .sendEmail(emailTemplate, {
            nickname: user.nickname,
            email: user.email,
            organisationDetails: organisationDetails !== null && organisationDetails !== void 0 ? organisationDetails : '--',
        }, {}, receivers.map((receiver) => ({ Email: receiver })))
            .catch((error) => {
            throw new common_1.BadRequestException(shared_1.SEND_MAIL_FAILED);
        });
        return { success: true };
    }
    async sendNotificationWithToken(user, token) {
        var _a;
        return this.notificationService
            .sendEmail((0, email_templates_constants_1.getMailTemplateId)((_a = user.language) === null || _a === void 0 ? void 0 : _a.code, email_templates_constants_1.USER_TEMPLATES.USER_SUBSCRIPTON_TOKEN), {}, { token }, [{ Email: user.email }])
            .catch((error) => {
            this.logger.error(error);
            throw new common_1.BadRequestException(shared_1.SEND_MAIL_FAILED);
        });
    }
    async sendPremiumActivationEmail(ownerId, isOrganisation, token) {
        var _a;
        const receivers = [];
        if (isOrganisation) {
            const users = await this.userRepository.find({
                where: {
                    organisation_id: ownerId,
                    accountStatus: registration_status_constant_1.REGISTRATION_STATUS.COMPLETE,
                },
            });
            users.map((user) => receivers.push([user.email, user.firstName]));
        }
        else {
            const user = await this.userRepository.findOne({
                where: { id: ownerId },
            });
            receivers.push([user === null || user === void 0 ? void 0 : user.email, user === null || user === void 0 ? void 0 : user.firstName]);
        }
        const senders = ((_a = this.config.get('subscription.loopAdvocateEmailSenders')) !== null && _a !== void 0 ? _a : '').split(',');
        for (const [email, name] of receivers) {
            await this.notificationService
                .sendEmail(shared_1.EMAIL_TEMPLATES.LOOP_PREMIUM_ACCOUNT_APPROVED, { name }, {}, [{ Email: email }], null, { Email: senders[0] })
                .catch((error) => {
                this.logger.error(error);
                throw new common_1.BadRequestException(shared_1.SEND_MAIL_FAILED);
            });
            await this.notificationService
                .sendEmail(shared_1.EMAIL_TEMPLATES.LOOP_PREMIUM_ACCESS_TOKEN, { token }, {}, [{ Email: email }], null, { Email: senders[1] })
                .catch((error) => {
                this.logger.error(error);
                throw new common_1.BadRequestException(shared_1.SEND_MAIL_FAILED);
            });
        }
        return { success: true };
    }
    async saveSubscriptionData(data, token) {
        const { organisationId, userId } = data;
        const createdAt = new Date();
        if (organisationId) {
            if (!organisationId)
                return;
            const organisationToken = await this.organisationTokenRepository.findOne({
                where: { organisationId },
            });
            if (organisationToken) {
                organisationToken.token = token;
                organisationToken.createdAt = createdAt;
                await this.organisationTokenRepository.save(organisationToken);
            }
            else {
                await this.organisationTokenRepository.save({
                    token,
                    organisationId,
                    createdAt,
                });
            }
            await this.sendPremiumActivationEmail(organisationId, true, token);
        }
        else {
            if (!userId)
                return;
            const userToken = await this.userTokenRepository.findOne({
                where: { userId },
            });
            if (userToken) {
                userToken.token = token;
                userToken.createdAt = createdAt;
                await this.userTokenRepository.save(userToken);
            }
            else {
                await this.userTokenRepository.save({ token, userId, createdAt });
            }
            await this.sendPremiumActivationEmail(userId, false, token);
        }
    }
    async generateSubscriptionToken(data) {
        let { organisationId, userId } = data;
        try {
            if (organisationId) {
                await this.organisationRepository.findOneOrFail({
                    where: { id: organisationId },
                });
            }
            else {
                const user = await this.userRepository.findOneOrFail({ where: { id: userId } });
                if (user === null || user === void 0 ? void 0 : user.organisation_id) {
                    organisationId = user.organisation_id;
                    data.organisationId = organisationId;
                }
            }
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.BadRequestException(shared_1.GENERATE_TOKEN_ERROR);
        }
        const payload = {
            sub: organisationId !== null && organisationId !== void 0 ? organisationId : userId,
            groupType: organisationId ? 'organisation' : 'individual',
            plan: data.subscriptionType,
        };
        const token = jwt.sign(payload, this.config.get('subscription.jwtSecret'), {
            expiresIn: `${data.tokenValidityInDays} days`,
        });
        if (!token.match(/^[\w-]+\.[\w-]+\.[\w-]+$/)) {
            throw new common_1.BadRequestException(shared_1.GENERATE_TOKEN_ERROR);
        }
        await this.saveSubscriptionData(data, token);
        return { subscriptionToken: token };
    }
    async checkIfTokenExists(token, groupType) {
        if (groupType === 'individual') {
            return !!(await this.userTokenRepository.findByToken(token));
        }
        return !!(await this.organisationTokenRepository.findByToken(token));
    }
    async getUserSubscriptionToken(userData) {
        let decodedToken;
        let token = null;
        let isExpired = true;
        if (userData === null || userData === void 0 ? void 0 : userData.organisation_id) {
            const organisationTokenData = await this.organisationTokenRepository.findOne({
                where: { organisationId: userData === null || userData === void 0 ? void 0 : userData.organisation_id },
            });
            decodedToken = this.decodeToken(organisationTokenData === null || organisationTokenData === void 0 ? void 0 : organisationTokenData.token);
            isExpired = this.checkIfTokenExpired(decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.exp);
            if (!isExpired)
                token = organisationTokenData === null || organisationTokenData === void 0 ? void 0 : organisationTokenData.token;
        }
        if (isExpired) {
            const userTokenData = await this.userTokenRepository.findOne({
                where: { userId: userData === null || userData === void 0 ? void 0 : userData.id },
            });
            decodedToken = this.decodeToken(userTokenData === null || userTokenData === void 0 ? void 0 : userTokenData.token);
            isExpired = this.checkIfTokenExpired(decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.exp);
            if (!isExpired)
                token = userTokenData === null || userTokenData === void 0 ? void 0 : userTokenData.token;
        }
        return !isExpired ? { decodedToken, token } : null;
    }
    async saveSubscriptionApplication(userId, access, type) {
        const res = await this.airTableUserService.updateAirTableUser({
            ID: userId,
            'Loop Advocate Request Status': 'pending',
        });
        return await this.subscriptionApplicationRepository.save({
            userId,
            access,
            type,
        });
    }
};
exports.SubscriptionService = SubscriptionService;
exports.SubscriptionService = SubscriptionService = SubscriptionService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => organisation_service_1.OrganisationService))),
    __param(4, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.CONFIG)),
    __metadata("design:paramtypes", [notification_service_1.NotificationService,
        organisation_service_1.OrganisationService,
        organisation_repository_1.OrganisationRepository,
        user_repository_1.UserRepository,
        config_1.ConfigService,
        user_token_repository_1.UserTokenRepository,
        organisation_token_repository_1.OrganisationTokenRepository,
        subscription_application_repository_1.SubscriptionApplicationRepository,
        airtable_user_service_1.AirTableUserService])
], SubscriptionService);
//# sourceMappingURL=subscription.service.js.map