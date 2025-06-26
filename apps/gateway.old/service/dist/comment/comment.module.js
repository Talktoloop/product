"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModule = void 0;
const common_1 = require("@nestjs/common");
const comment_service_1 = require("./service/comment.service");
const comment_moderator_service_1 = require("./service/comment-moderator.service");
const comment_controller_1 = require("./controller/comment.controller");
const comment_entity_1 = require("./entity/comment.entity");
const comment_repository_1 = require("./repository/comment.repository");
const story_module_1 = require("../story/story.module");
const comment_vote_entity_1 = require("./entity/comment-vote.entity");
const comment_vote_repository_1 = require("./repository/comment-vote.repository");
const lexicon_module_1 = require("../lexicon/lexicon.module");
const notification_module_1 = require("../notification/notification.module");
const comment_moderator_controller_1 = require("./controller/comment-moderator.controller");
const comment_translation_entity_1 = require("./entity/comment-translation.entity");
const comment_translation_repository_1 = require("./repository/comment-translation.repository");
const comment_translation_moderator_controller_1 = require("./controller/comment-translation-moderator.controller");
const comment_translation_moderator_service_1 = require("./service/comment-translation-moderator.service");
const language_entity_1 = require("../language/entity/language.entity");
const language_repository_1 = require("../language/language.repository");
const language_module_1 = require("../language/language.module");
const messenger_module_1 = require("../messenger/messenger.module");
const ivrr_module_1 = require("../ivrr/ivrr.module");
const comment_recipient_entity_1 = require("./entity/comment-recipient.entity");
const comment_recipient_repository_1 = require("./repository/comment-recipient.repository");
const database_module_1 = require("../database/database.module");
const config_1 = require("@nestjs/config");
const default_1 = require("../config/default");
const config_provider_1 = require("../common/provider/config.provider");
const permission_guard_1 = require("../auth/cerbos/permission.guard");
const cerbos_service_1 = require("../common/cerbos/cerbos.service");
let CommentModule = class CommentModule {
};
exports.CommentModule = CommentModule;
exports.CommentModule = CommentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [default_1.dynamicConfiguration],
            }),
            database_module_1.DatabaseModule.forFeature([
                comment_entity_1.CommentEntity,
                comment_repository_1.CommentRepository,
                comment_vote_entity_1.CommentVoteEntity,
                comment_vote_repository_1.CommentVoteRepository,
                language_entity_1.LanguageEntity,
                language_repository_1.LanguageRepository,
                comment_translation_entity_1.CommentTranslationEntity,
                comment_translation_repository_1.CommentTranslationRepository,
                comment_recipient_entity_1.CommentRecipientEntity,
                comment_recipient_repository_1.CommentRecipientRepository,
            ]),
            (0, common_1.forwardRef)(() => story_module_1.StoryModule),
            (0, common_1.forwardRef)(() => notification_module_1.NotificationModule),
            (0, common_1.forwardRef)(() => lexicon_module_1.LexiconModule),
            (0, common_1.forwardRef)(() => language_module_1.LanguageModule),
            messenger_module_1.MessengerModule,
            ivrr_module_1.IvrrModule,
        ],
        providers: [
            comment_service_1.CommentService,
            comment_moderator_service_1.CommentModeratorService,
            comment_translation_moderator_service_1.CommentTranslationModeratorService,
            config_provider_1.ConfigProvider,
            permission_guard_1.PermissionGuard, cerbos_service_1.CerbosService
        ],
        controllers: [
            comment_moderator_controller_1.CommentModeratorController,
            comment_controller_1.CommentController,
            comment_translation_moderator_controller_1.CommentTranslationModeratorController,
        ],
        exports: [
            comment_translation_moderator_service_1.CommentTranslationModeratorService,
            comment_service_1.CommentService,
            comment_moderator_service_1.CommentModeratorService,
        ],
    })
], CommentModule);
//# sourceMappingURL=comment.module.js.map