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
var CommentNotificationService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentNotificationService = void 0;
const common_1 = require("@nestjs/common");
const email_templates_constants_1 = require("../../common/constant/email-templates.constants");
const helpers_1 = require("../../common/helpers");
const notification_service_1 = require("./notification.service");
const microservices_1 = require("@nestjs/microservices");
const channel_constant_1 = require("../../common/constant/channel.constant");
const shared_1 = require("@ourloop/shared");
const operators_1 = require("rxjs/operators");
const di_constant_1 = require("../../common/constant/di.constant");
const config_1 = require("@nestjs/config");
const rxjs_1 = require("rxjs");
const message_service_1 = require("../../sms/service/message.service");
let CommentNotificationService = CommentNotificationService_1 = class CommentNotificationService {
    constructor(notificationService, clientProxy, config, messageService) {
        this.notificationService = notificationService;
        this.clientProxy = clientProxy;
        this.config = config;
        this.messageService = messageService;
        this.logger = new common_1.Logger(CommentNotificationService_1.name);
    }
    async sendNotificationsToStoryOwnerAfterCommentPublication(comment) {
        var _a;
        const translation = comment.translations.filter((translation) => { var _a; return translation.languageId === ((_a = comment.language) === null || _a === void 0 ? void 0 : _a.id); })[0];
        const { name, email } = (0, helpers_1.prepareNotificationData)(comment.story);
        if (email) {
            return this.notificationService.sendEmail((0, email_templates_constants_1.getMailTemplateId)((_a = comment.story.language) === null || _a === void 0 ? void 0 : _a.code, email_templates_constants_1.USER_TEMPLATES.COMMENT_WAS_PUBLISH_ON_OBSERVED_STORY), {
                name,
                reply_preview: translation === null || translation === void 0 ? void 0 : translation.content,
                confirmation_link: (0, helpers_1.prepareURL)(this.config.get('frontend.url'), 'story/details', comment.storyId),
            }, {}, [{ Email: email }]);
        }
    }
    async sendNotificationsAfterCommentPublication(comment) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const { name, email } = (0, helpers_1.prepareNotificationData)(comment);
        const translation = comment.translations.filter((translation) => { var _a; return translation.languageId === ((_a = comment.language) === null || _a === void 0 ? void 0 : _a.id); })[0];
        if (email) {
            await this.notificationService.sendEmail((0, email_templates_constants_1.getMailTemplateId)((_a = comment.language) === null || _a === void 0 ? void 0 : _a.code, email_templates_constants_1.USER_TEMPLATES.PUBLISH_REPLY), {
                name,
                reply_preview: translation === null || translation === void 0 ? void 0 : translation.content,
                confirmation_link: (0, helpers_1.prepareURL)(this.config.get('frontend.url'), 'story/details', comment.storyId),
            }, {}, [{ Email: email }]);
        }
        if (((_b = comment.story) === null || _b === void 0 ? void 0 : _b.channel) === channel_constant_1.CHANNEL_CONSTANTS.SMS &&
            ((_d = (_c = comment.story) === null || _c === void 0 ? void 0 : _c.organisations) === null || _d === void 0 ? void 0 : _d.length) > 0 &&
            ((_e = comment.user) === null || _e === void 0 ? void 0 : _e.organisation)) {
            const organisation = comment.story.organisations.find((organisation) => { var _a; return organisation.id === ((_a = comment.user) === null || _a === void 0 ? void 0 : _a.organisation.id); });
            if (organisation) {
                const content = (_f = comment.translations.find(({ languageId }) => languageId === comment.story.languageId)) === null || _f === void 0 ? void 0 : _f.content;
                if (!content) {
                    return;
                }
                const provider = (_g = comment.story.conversation) === null || _g === void 0 ? void 0 : _g.provider;
                const phoneAvailability = await this.messageService.checkPhoneAvailability(provider, comment.story);
                this.logger.log(`sendNotificationsAfterCommentPublication, phoneAvailability: ${JSON.stringify(phoneAvailability)}`);
                if (phoneAvailability.type) {
                    return;
                }
                const smsMessage = {
                    organisation: organisation.name,
                    language: (_h = comment.language) === null || _h === void 0 ? void 0 : _h.code,
                    clientPhone: (_k = (_j = comment.story) === null || _j === void 0 ? void 0 : _j.recipient) === null || _k === void 0 ? void 0 : _k.phone,
                    providerPhone: (_l = comment.story.conversation) === null || _l === void 0 ? void 0 : _l.serviceNumber,
                    provider,
                    storyId: comment.storyId,
                    commentId: comment.id,
                    country: (_o = (_m = comment.story) === null || _m === void 0 ? void 0 : _m.country) === null || _o === void 0 ? void 0 : _o.code,
                    content,
                };
                await (0, rxjs_1.lastValueFrom)(this.clientProxy
                    .send({ cmd: `${provider}_organisationReply` }, smsMessage)
                    .pipe((0, operators_1.timeout)(this.config.get('application.communicationTimeout')))).catch((error) => {
                    this.logger.error(`sendNotificationsAfterCommentPublication - ${provider}_organisationReply: ${JSON.stringify(error)}`);
                });
            }
        }
    }
    async sendNotificationsAfterRejectingComment(comment, rejectContent) {
        var _a;
        const { name, email } = (0, helpers_1.prepareNotificationData)(comment);
        if (((_a = rejectContent.reasonIds) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            if (email) {
                await this.notificationService.sendEmail((0, email_templates_constants_1.getMailTemplateId)(rejectContent.notificationLanguage, email_templates_constants_1.USER_TEMPLATES.REJECT_REPLY), {
                    name,
                    reject_reason: rejectContent.reasonTexts.join(', '),
                    reject_rationale: rejectContent.rationale,
                    confirmation_link: (0, helpers_1.prepareURL)(this.config.get('frontend.url'), 'story/details', comment.storyId),
                }, {}, [{ Email: email }]);
            }
        }
    }
};
exports.CommentNotificationService = CommentNotificationService;
exports.CommentNotificationService = CommentNotificationService = CommentNotificationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(shared_1.DI_CONSTANTS.CLIENT_PROXY)),
    __param(2, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.CONFIG)),
    __metadata("design:paramtypes", [notification_service_1.NotificationService,
        microservices_1.ClientProxy,
        config_1.ConfigService,
        message_service_1.MessageService])
], CommentNotificationService);
//# sourceMappingURL=comment-notification.service.js.map