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
exports.OrganisationService = void 0;
const common_1 = require("@nestjs/common");
const organisation_repository_1 = require("./organisation.repository");
const user_service_1 = require("../user/service/user.service");
const story_translation_moderator_service_1 = require("../story/service/story-translation-moderator.service");
const di_constant_1 = require("../common/constant/di.constant");
const config_1 = require("@nestjs/config");
const helpers_1 = require("../common/helpers");
const notification_service_1 = require("../notification/service/notification.service");
const email_templates_constants_1 = require("../common/constant/email-templates.constants");
const default_1 = require("../config/default");
const shared_1 = require("@ourloop/shared");
const uuid_1 = require("uuid");
const organisation_application_service_1 = require("../user/service/organisation-application.service");
const typeorm_1 = require("typeorm");
const airtable_organisation_service_1 = require("../airtable-client/service/airtable-organisation.service");
let OrganisationService = class OrganisationService {
    constructor(config, organisationRepository, userService, storyTranslationModeratorService, notificationService, organisationApplicationService, airTableOrganisationService) {
        this.config = config;
        this.organisationRepository = organisationRepository;
        this.userService = userService;
        this.storyTranslationModeratorService = storyTranslationModeratorService;
        this.notificationService = notificationService;
        this.organisationApplicationService = organisationApplicationService;
        this.airTableOrganisationService = airTableOrganisationService;
    }
    findAll() {
        return this.organisationRepository.findAll();
    }
    getOrganisationsByRole(role) {
        return this.organisationRepository.getOrganisationsByRole(role);
    }
    findByIdOrFail(id) {
        return this.organisationRepository.findByIdOrFail(id);
    }
    findOrganisationIdsByPhrase(phrase) {
        return this.organisationRepository
            .findOrganisationsByPhrase(phrase)
            .then((result) => result.map((item) => item.id));
    }
    findOrganisationsByIdsAndStatus(ids) {
        return this.organisationRepository.findOrganisationsByIdsAndStatus(ids);
    }
    async linkUsers(organisations, data, moderator) {
        const emails = [...new Set(data.map((item) => item.email.toLowerCase()))];
        const organisationIds = [
            ...new Set(data.map((item) => item.organisationId)),
        ];
        if (emails.length !== data.length ||
            organisations.length !== organisationIds.length) {
            throw new common_1.BadRequestException(shared_1.VALIDATION_FAILED);
        }
        let user;
        const linkedUsers = [];
        for (const link of data) {
            user = await this.userService.findByEmail(link.email);
            if (!user) {
                user = await this.userService.saveUser({
                    id: (0, uuid_1.v4)(),
                    email: link.email,
                    organisation_id: link.organisationId,
                    notifications: false,
                    hideLastName: false,
                }, moderator);
                linkedUsers.push({
                    email: link.email,
                    languageCode: link.languageCode,
                    organisationId: link.organisationId,
                });
            }
            else if (!user.organisation_id) {
                user.organisation_id = link.organisationId;
                await this.userService.updateUserData(user, user.id);
                await this.organisationApplicationService.removeApplicationByUserId(user.id);
                linkedUsers.push({
                    email: user.email,
                    languageCode: link.languageCode,
                    organisationId: link.organisationId,
                });
            }
        }
        return linkedUsers;
    }
    async sendUserLinkedNotification(storyId, sender, organisations, linkedUsers) {
        const mailJetEmail = this.config.get('mailJet.email');
        return Promise.all(linkedUsers.map((item) => {
            const organisation = organisations.find((entity) => entity.id === item.organisationId);
            return this.notificationService.sendEmail((0, email_templates_constants_1.getMailTemplateId)(item.languageCode, email_templates_constants_1.USER_TEMPLATES.USER_LINKED_TO_ORGANISATION), {
                organisationName: organisation === null || organisation === void 0 ? void 0 : organisation.name,
                organisationDetails: this.getOrganisationDetails(organisation),
            }, {
                storyLink: `${this.config.get('frontend.url')}/story/details/${storyId}?redirect=login`,
            }, [{ Email: item.email }], [], (0, helpers_1.getDomainFromEmail)(sender.email) === (0, helpers_1.getDomainFromEmail)(mailJetEmail)
                ? { Email: sender.email, Name: sender.nickname }
                : undefined);
        }));
    }
    async sendUserInvitedNotification(organisations, linkedUsers, sender) {
        const mailJetEmail = this.config.get('mailJet.email');
        return Promise.all(linkedUsers.map((item) => {
            const organisation = organisations.find((entity) => entity.id === item.organisationId);
            return this.notificationService.sendEmail((0, email_templates_constants_1.getMailTemplateId)(item.languageCode, email_templates_constants_1.USER_TEMPLATES.USER_INVITED_TO_ORGANISATION), {
                organisationName: organisation === null || organisation === void 0 ? void 0 : organisation.name,
            }, {
                url: `${this.config.get('frontend.url')}/auth/magic-link-login`,
            }, [{ Email: item.email }], [], (0, helpers_1.getDomainFromEmail)(sender === null || sender === void 0 ? void 0 : sender.email) === (0, helpers_1.getDomainFromEmail)(mailJetEmail)
                ? { Email: sender.email, Name: sender.nickname }
                : undefined);
        }));
    }
    async sendNotificationsToLinkedUsers(storyId, sender, organisations, linkedUsers) {
        const linkNotifications = await this.sendUserLinkedNotification(storyId, sender, organisations, linkedUsers);
        const inviteNotifications = await this.sendUserInvitedNotification(organisations, linkedUsers, sender);
        return linkNotifications.concat(inviteNotifications);
    }
    getOrganisationDetails(organisation) {
        let organisationDetails = organisation === null || organisation === void 0 ? void 0 : organisation.name;
        if (organisation === null || organisation === void 0 ? void 0 : organisation.acronym) {
            organisationDetails += ` (${organisation.acronym})`;
        }
        if (organisation === null || organisation === void 0 ? void 0 : organisation.country) {
            organisationDetails += `, ${organisation.country.name}`;
        }
        return organisationDetails;
    }
    async findByNameOrCreate(name, verified, countryId, acronym) {
        const data = Object.assign(Object.assign({ name: (0, typeorm_1.Like)(name) }, (countryId ? { countryId } : {})), (acronym ? { acronym: (0, typeorm_1.Like)(acronym) } : {}));
        const organisation = await this.organisationRepository.findOne({
            where: data,
        });
        if (!organisation) {
            const UUID = (0, uuid_1.v4)();
            const newOrganisation = await this.organisationRepository.save({
                name,
                id: UUID,
                verified,
                countryId,
                acronym,
            }, { reload: false });
            if (newOrganisation) {
                const organisationToAirTable = await this.airTableOrganisationService.mapOrganisationToAirTable(await this.organisationRepository.findOrganisationsToAirtable(newOrganisation.id));
                await this.airTableOrganisationService.postOrganisationsToAirTable(organisationToAirTable);
            }
            return this.organisationRepository.findOne({ where: { id: UUID } });
        }
        return organisation;
    }
    async findOrganisationsWithUnasweredStories(languageId) {
        const publicationDuration = default_1.staticConfig.unanswaredStories.publicationDuration;
        const result = await this.organisationRepository.findOrganisationsWithNumberOfComments(languageId, publicationDuration);
        const organisationsWithUnasweredStories = [];
        result.forEach((item) => {
            if (!organisationsWithUnasweredStories[item.organisationId]) {
                organisationsWithUnasweredStories[item.organisationId] = {
                    name: item.organisationName,
                    stories: {
                        numberOfAnswered: 0,
                        unanswered: [],
                    },
                };
            }
            if (item.numberOfComments === 0) {
                organisationsWithUnasweredStories[item.organisationId].stories.unanswered.push({
                    id: item.storyId,
                    content: item.content,
                    originalLanguageId: item.originalLanguageId,
                });
            }
            else {
                organisationsWithUnasweredStories[item.organisationId].stories
                    .numberOfAnswered++;
            }
        });
        return organisationsWithUnasweredStories;
    }
    async getBeginningOfStory(story, numberOfSigns) {
        var _a;
        if (!story.content) {
            const details = await this.storyTranslationModeratorService.getTranslations(story.id);
            story.content = (_a = details.translations.find((item) => item.languageId === story.originalLanguageId)) === null || _a === void 0 ? void 0 : _a.content;
        }
        let shortcut = story.content.substr(0, numberOfSigns).trim();
        if (shortcut.substr(-1, 1) === '.') {
            shortcut = shortcut.substr(0, shortcut.length - 1);
        }
        return (0, helpers_1.upperCaseFirst)(`${shortcut}${story.content.substr(numberOfSigns - 1, 1).trim() &&
            story.content.substr(numberOfSigns, 1).trim()
            ? '...'
            : ''}`);
    }
    async sendNotificationAboutUnansweredStories(data) {
        var _a;
        let users = [];
        let organisation;
        let shortcut;
        let numberOfUnanswered;
        const notifications = [];
        const { publicationDuration, shortcutLength } = default_1.staticConfig.unanswaredStories;
        for (const organisationId in data) {
            organisation = data[organisationId];
            numberOfUnanswered = organisation.stories.unanswered.length;
            if (numberOfUnanswered > 0) {
                users =
                    await this.userService.findUsersFormOrganisationsWithRemindersOn([
                        { id: organisationId },
                    ]);
                if (users.length > 0) {
                    const stories = [];
                    for (const story of data[organisationId].stories.unanswered) {
                        shortcut = await this.getBeginningOfStory(story, shortcutLength);
                        stories.push({
                            shortcut,
                            url: `${this.config.get('frontend.url')}/story/details/${story.id}`,
                        });
                    }
                    for (const user of users) {
                        notifications.push(this.notificationService.sendEmail(email_templates_constants_1.MANAGER_TEMPLATES.UNANSWERED_STORIES, {
                            publicationDuration,
                            organisation: organisation.name,
                            name: (_a = user.nickname) !== null && _a !== void 0 ? _a : user.email,
                            numberOfFeedbacksWithoutReply: numberOfUnanswered,
                            numberOfFeedback: organisation.stories.numberOfAnswered + numberOfUnanswered,
                        }, {
                            stories,
                        }, [{ Email: user.email }]));
                    }
                }
            }
        }
        if (notifications.length > 0) {
            return Promise.all(notifications);
        }
    }
    findByPhrases(phrases) {
        if (!phrases) {
            return null;
        }
        return this.organisationRepository.findOriganisationsByPhrases(phrases);
    }
};
exports.OrganisationService = OrganisationService;
exports.OrganisationService = OrganisationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.CONFIG)),
    __metadata("design:paramtypes", [config_1.ConfigService,
        organisation_repository_1.OrganisationRepository,
        user_service_1.UserService,
        story_translation_moderator_service_1.StoryTranslationModeratorService,
        notification_service_1.NotificationService,
        organisation_application_service_1.OrganisationApplicationService,
        airtable_organisation_service_1.AirTableOrganisationService])
], OrganisationService);
//# sourceMappingURL=organisation.service.js.map