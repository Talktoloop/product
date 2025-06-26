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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var NotificationService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const node_mailjet_1 = require("node-mailjet");
const config_1 = require("@nestjs/config");
const di_constant_1 = require("../../common/constant/di.constant");
const shared_1 = require("@ourloop/shared");
const microservices_1 = require("@nestjs/microservices");
const operators_1 = require("rxjs/operators");
const rxjs_1 = require("rxjs");
const common_2 = require("@nestjs/common");
const user_repository_1 = require("../../user/repository/user.repository");
const organisation_repository_1 = require("../../organisation/organisation.repository");
const axios_1 = __importDefault(require("axios"));
let NotificationService = NotificationService_1 = class NotificationService extends shared_1.MailJetService {
    constructor(config, mailJet, clientProxy, userRepository, organisationRepository) {
        super(mailJet);
        this.config = config;
        this.clientProxy = clientProxy;
        this.userRepository = userRepository;
        this.organisationRepository = organisationRepository;
        this.customLogger = new common_2.Logger(NotificationService_1.name);
        this.setEmailSender(config.get('mailJet'));
    }
    async sendEmail(templateId, variablesToEscapeAndSend, variablesToSend, to, attachments, from, replyTo) {
        const allowedEmailTemplates = [
            shared_1.EMAIL_TEMPLATES.SUPPORT_TEAM_NOTIFICATION,
            shared_1.EMAIL_TEMPLATES.EXPORT_TO_CSV,
        ];
        if (!this.config.get('application.disableNotifications') ||
            allowedEmailTemplates.includes(templateId)) {
            return super.sendEmail(templateId, variablesToEscapeAndSend, variablesToSend, to, attachments, from);
        }
    }
    async sendMessageToSupportTeam(message) {
        return this.sendEmail(shared_1.EMAIL_TEMPLATES.SUPPORT_TEAM_NOTIFICATION, {
            error_details: message,
        }, {}, this.config
            .get('supportEmail')
            .split(',')
            .map((email) => ({
            Email: email,
        })));
    }
    async sendSMS(language, clientPhone, providerPhone, type, provider, country, variables) {
        if (this.config.get('application.disableNotifications')) {
            return;
        }
        await (0, rxjs_1.lastValueFrom)(this.clientProxy
            .send({ cmd: `${provider}_sendNotification` }, {
            clientPhone,
            providerPhone,
            type,
            language,
            provider,
            variables,
        })
            .pipe((0, operators_1.timeout)(this.config.get('application.communicationTimeout')))).catch((error) => {
            this.customLogger.error(`sendSMS: ${error.message}, error: ${JSON.stringify(error.error)}`);
        });
    }
    async sendSlackNotification(userId, organisationApplicationId) {
        var _a;
        try {
            const slackChannel = this.config.get('slack.channel');
            const user = await this.userRepository.findOneOrFail({
                where: { id: userId },
            });
            let organisationName;
            if (organisationApplicationId) {
                organisationName = (_a = (await this.organisationRepository.findOneOrFail({
                    where: { id: organisationApplicationId },
                }))) === null || _a === void 0 ? void 0 : _a.name;
            }
            const fromOrganisation = organisationName
                ? ` from ${organisationName}`
                : '';
            const payload = {
                text: `${user.firstName} ${user.lastName}${fromOrganisation} has signed into TalkToLoop.org for the first time`,
            };
            await axios_1.default.post(slackChannel, payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }
        catch (error) {
            this.customLogger.error(`slackMessageError: ${error.message}`);
        }
    }
};
exports.NotificationService = NotificationService;
exports.NotificationService = NotificationService = NotificationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.CONFIG)),
    __param(1, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.MAIL_JET)),
    __param(2, (0, common_1.Inject)(shared_1.DI_CONSTANTS.CLIENT_PROXY)),
    __metadata("design:paramtypes", [config_1.ConfigService,
        node_mailjet_1.Client,
        microservices_1.ClientProxy,
        user_repository_1.UserRepository,
        organisation_repository_1.OrganisationRepository])
], NotificationService);
//# sourceMappingURL=notification.service.js.map