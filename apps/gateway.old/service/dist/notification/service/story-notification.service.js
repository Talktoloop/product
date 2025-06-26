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
var StoryNotificationService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryNotificationService = void 0;
const common_1 = require("@nestjs/common");
const email_templates_constants_1 = require("../../common/constant/email-templates.constants");
const helpers_1 = require("../../common/helpers");
const user_service_1 = require("../../user/service/user.service");
const notification_service_1 = require("./notification.service");
const languages_constants_1 = require("../../common/constant/languages.constants");
const di_constant_1 = require("../../common/constant/di.constant");
const config_1 = require("@nestjs/config");
const case_manager_service_1 = require("../../case-manager/service/case-manager.service");
let StoryNotificationService = StoryNotificationService_1 = class StoryNotificationService {
    constructor(notificationService, userService, config, caseManagerService) {
        this.notificationService = notificationService;
        this.userService = userService;
        this.config = config;
        this.caseManagerService = caseManagerService;
        this.logger = new common_1.Logger(StoryNotificationService_1.name);
    }
    async sendNotificationsAfterStoryPublication(story) {
        var _a, _b, _c, _d;
        if (story.edited &&
            this.config.get('application.disableNotificationsAfterEdit'))
            return;
        const { name, email, phone } = (0, helpers_1.prepareNotificationData)(story);
        const origin = story.translations.filter((translation) => translation.languageId === story.language.id)[0];
        if (email) {
            await this.notificationService.sendEmail((0, email_templates_constants_1.getMailTemplateId)((_a = story.language) === null || _a === void 0 ? void 0 : _a.code, email_templates_constants_1.USER_TEMPLATES.PUBLISH_STORY), {
                name,
                var_preview: origin === null || origin === void 0 ? void 0 : origin.content,
                confirmation_link: (0, helpers_1.prepareURL)(this.config.get('frontend.url'), 'story/details', story.id),
            }, {}, [{ Email: email }]);
        }
        else if (phone && ((_b = story.conversation) === null || _b === void 0 ? void 0 : _b.smsMessages) && story.conversation.provider) {
            await this.notificationService.sendSMS((_c = story.language) === null || _c === void 0 ? void 0 : _c.code, phone, story.conversation.serviceNumber, email_templates_constants_1.USER_TEMPLATES.PUBLISH_STORY, story.conversation.provider, (_d = story.country) === null || _d === void 0 ? void 0 : _d.code);
        }
        let users = [];
        if (story.organisations.length > 0) {
            users =
                await this.userService.findUsersFormOrganisationsWithNotificationOn(story.organisations);
        }
        if (users) {
            let languageCode;
            let selectedTranslation;
            const confirmationLink = await (0, helpers_1.prepareURL)(this.config.get('frontend.url'), 'story/details', story.id);
            Promise.all(users.map((user) => {
                var _a, _b, _c;
                languageCode = (_b = (_a = user.language) === null || _a === void 0 ? void 0 : _a.code) !== null && _b !== void 0 ? _b : languages_constants_1.LANGUAGES_CONSTANTS.ENGLISH;
                selectedTranslation = story.translations.filter((translation) => translation.language.code === languageCode)[0];
                return this.notificationService.sendEmail((0, email_templates_constants_1.getMailTemplateId)(languageCode, email_templates_constants_1.USER_TEMPLATES.YOUR_ORGANISATION_HAS_BEEN_TAGGED), {
                    name: (_c = user.nickname) !== null && _c !== void 0 ? _c : '',
                    organisation_name: user.organisation.name,
                    story_preview: selectedTranslation
                        ? selectedTranslation.content
                        : origin.content,
                    confirmation_link: confirmationLink,
                }, {}, [{ Email: user.email }], [], undefined, {
                    Email: 'orgs@talktoloop.org',
                    Name: "Talk to Loop Support",
                });
            }));
        }
    }
    async sendNotificationAfterUrgentStory(storyId) {
        const confirmationLink = await (0, helpers_1.prepareURL)(this.config.get('frontend.url'), 'story/details', storyId);
        const caseManagers = await this.caseManagerService.findWithEmail();
        for (let i = 0; i < caseManagers.length; i++) {
            const { email } = caseManagers[i];
            if (email) {
                await this.notificationService.sendEmail(email_templates_constants_1.MANAGER_TEMPLATES.URGENT_CASE, { confirmation_link: confirmationLink, }, {}, [{ Email: email }]);
            }
        }
    }
    async sendNotificationsAfterRejectingStory(story, rejectContent) {
        var _a, _b, _c;
        const { name, email, phone } = (0, helpers_1.prepareNotificationData)(story);
        if (((_a = rejectContent.reasonIds) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            if (email) {
                await this.notificationService.sendEmail((0, email_templates_constants_1.getMailTemplateId)(rejectContent.notificationLanguage, email_templates_constants_1.USER_TEMPLATES.REJECT_STORY), {
                    name,
                    reject_reason: rejectContent.reasonTexts.join(', '),
                    reject_rationale: rejectContent.rationale,
                    app_url: (0, helpers_1.prepareURL)(this.config.get('frontend.url'), null, null),
                }, {}, [{ Email: email }]);
            }
            else if (phone && ((_b = story.conversation) === null || _b === void 0 ? void 0 : _b.smsMessages)) {
                if (!story.conversation.provider)
                    return;
                await this.notificationService.sendSMS(rejectContent.notificationLanguage, phone, story.conversation.serviceNumber, email_templates_constants_1.USER_TEMPLATES.REJECT_STORY, story.conversation.provider, (_c = story.country) === null || _c === void 0 ? void 0 : _c.code, {
                    reasonText: rejectContent.reasonTexts.join(', '),
                    rationale: rejectContent.rationale,
                });
            }
        }
    }
};
exports.StoryNotificationService = StoryNotificationService;
exports.StoryNotificationService = StoryNotificationService = StoryNotificationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => user_service_1.UserService))),
    __param(2, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.CONFIG)),
    __metadata("design:paramtypes", [notification_service_1.NotificationService,
        user_service_1.UserService,
        config_1.ConfigService,
        case_manager_service_1.CaseManagerService])
], StoryNotificationService);
//# sourceMappingURL=story-notification.service.js.map