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
var IvrrService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IvrrService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const shared_1 = require("@ourloop/shared");
const di_constant_1 = require("../../common/constant/di.constant");
const config_1 = require("@nestjs/config");
const operators_1 = require("rxjs/operators");
const language_repository_1 = require("../../language/language.repository");
const story_conversation_service_1 = require("../../story/service/story-conversation.service");
const story_service_1 = require("../../story/service/story.service");
const channel_constant_1 = require("../../common/constant/channel.constant");
const ivrr_call_repository_1 = require("../repository/ivrr-call.repository");
const ivrr_call_entity_1 = require("../entity/ivrr-call.entity");
const story_repository_1 = require("../../story/repository/story.repository");
const microservices_2 = require("@nestjs/microservices");
const client_lambda_1 = require("@aws-sdk/client-lambda");
const rxjs_1 = require("rxjs");
const comment_service_1 = require("../../comment/service/comment.service");
const source_type_constants_1 = require("../../common/constant/source-type.constants");
const ivrr_story_mapper_1 = require("../mapper/ivrr-story.mapper");
const ivrr_comment_mapper_1 = require("../mapper/ivrr-comment.mapper");
const axios_1 = require("@nestjs/axios");
const rxjs_2 = require("rxjs");
const music_metadata_1 = require("music-metadata");
const date_fns_1 = require("date-fns");
const typeorm_1 = require("typeorm");
const default_1 = require("../../config/default");
const translation_status_constants_1 = require("../../common/constant/translation-status.constants");
const story_translation_moderator_service_1 = require("../../story/service/story-translation-moderator.service");
const story_translation_entity_1 = require("../../story/entity/story-translation.entity");
const translation_type_constant_1 = require("../../common/constant/translation-type.constant");
const language_service_1 = require("../../language/language.service");
let IvrrService = IvrrService_1 = class IvrrService {
    constructor(clientProxy, config, languageEntityRepository, storyConversationService, storyRepository, ivrrCallRepository, commentService, storyService, lambdaProvider, s3Service, httpService, storyTranslationModeratorService, languageService) {
        this.clientProxy = clientProxy;
        this.config = config;
        this.languageEntityRepository = languageEntityRepository;
        this.storyConversationService = storyConversationService;
        this.storyRepository = storyRepository;
        this.ivrrCallRepository = ivrrCallRepository;
        this.commentService = commentService;
        this.storyService = storyService;
        this.lambdaProvider = lambdaProvider;
        this.s3Service = s3Service;
        this.httpService = httpService;
        this.storyTranslationModeratorService = storyTranslationModeratorService;
        this.languageService = languageService;
        this.logger = new common_1.Logger(IvrrService_1.name);
    }
    async findStoryWithIvrrConversationByIdOrCommentId(storyId, commentId) {
        if (commentId) {
            const comment = await this.commentService.findComment(commentId, [
                'story',
                'story.conversation',
                'story.conversation.language',
            ]);
            return comment.story;
        }
        return this.storyRepository
            .findOneOrFail({
            where: {
                id: storyId,
            },
            relations: ['conversation', 'conversation.language'],
        })
            .catch((error) => {
            throw new shared_1.CustomError(shared_1.NO_STORY, {
                error: error === null || error === void 0 ? void 0 : error.message,
            });
        });
    }
    async removeStoryLogs(story) {
        if (!(story === null || story === void 0 ? void 0 : story.conversationId)) {
            return;
        }
        const call = await this.ivrrCallRepository.findOne({
            where: { isStory: true, conversationId: story.conversationId },
        });
        if (!call) {
            return;
        }
        return this.removeLogs(call.twilioCallSid, true);
    }
    async removeLogsByCommentId(commentId) {
        if (!commentId) {
            return;
        }
        const call = await this.ivrrCallRepository.findOne({
            where: { commentId },
        });
        if (!call) {
            return;
        }
        return this.removeLogs(call.twilioCallSid, false);
    }
    async removeLogs(callLogSid, onlyCallLog) {
        return (0, rxjs_1.lastValueFrom)(this.clientProxy
            .send({ cmd: 'removeCallLogs' }, {
            callLogSid,
            onlyCallLog,
        })
            .pipe((0, operators_1.timeout)(this.config.get('application.communicationTimeout'))))
            .then((result) => result.success)
            .catch((error) => {
            throw new shared_1.CustomError(error.message, error.error);
        });
    }
    async updateTwilioCall(dto) {
        const call = await this.ivrrCallRepository
            .findOneOrFail({
            where: {
                twilioCallSid: dto.twilioCallSid,
            },
        })
            .catch((error) => {
            throw new shared_1.CustomError(shared_1.NO_CALL, {
                error: error === null || error === void 0 ? void 0 : error.message,
            });
        });
        return await this.ivrrCallRepository.save(Object.assign(Object.assign({}, call), dto));
    }
    async saveCall(data, story) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        let comment;
        if (data.isCommentReply) {
            const parent = await this.commentService.findComment(data.commentId);
            comment = await this.commentService.addComment(story.languageId, story, {
                content: '',
                parentCommentId: (_a = parent.parentCommentId) !== null && _a !== void 0 ? _a : parent.id,
                phone: data.phoneNumber,
                s3FileId: (_b = data.call) === null || _b === void 0 ? void 0 : _b.s3FileId,
            }, story.user, channel_constant_1.CHANNEL_CONSTANTS.IVRR);
        }
        const ivrrCall = await this.ivrrCallRepository
            .save({
            ivrrConversation: story.conversation,
            isModeratorCall: data.call.isModeratorCall,
            isStory: data.call.isStory,
            s3FileId: data.call.s3FileId,
            callDate: data.call.callDate,
            twilioCallSid: data.call.twilioCallSid,
            twilioFlowXml: data.call.twilioFlowXml,
            commentId: comment === null || comment === void 0 ? void 0 : comment.id,
            recordingDuration: (_c = data.call) === null || _c === void 0 ? void 0 : _c.recordingDuration,
        })
            .catch((error) => {
            throw new shared_1.CustomError(shared_1.NO_STORY, {
                error: error === null || error === void 0 ? void 0 : error.message,
            });
        });
        const recordingWithMinDuration = ((_e = (_d = data.call) === null || _d === void 0 ? void 0 : _d.recordingDuration) !== null && _e !== void 0 ? _e : 0) >=
            default_1.staticConfig.minimumRecordingDuration;
        const shouldRunTranscription = ((_g = (_f = story.conversation) === null || _f === void 0 ? void 0 : _f.language) === null || _g === void 0 ? void 0 : _g.transcribeLang) && data.isCommentReply;
        if (shouldRunTranscription && recordingWithMinDuration) {
            await this.runTranscriptionLambdaAsync(source_type_constants_1.SOURCE_TYPE.COMMENT, ivrrCall.id, (_j = (_h = story.conversation) === null || _h === void 0 ? void 0 : _h.language) === null || _j === void 0 ? void 0 : _j.transcribeLang);
        }
        return ivrrCall;
    }
    async saveConversation(dto) {
        var _a, _b;
        const languageEntity = await this.fetchFlowLanguage(dto.language);
        if (!languageEntity) {
            throw new microservices_2.RpcException(shared_1.LANGUAGE_NOT_FOUND);
        }
        let ivrrConversationEntity = await this.storyConversationService.findByUUID(dto.storyUuid, ['language']);
        if (ivrrConversationEntity) {
            throw new microservices_2.RpcException(shared_1.STORY_ALREADY_EXITS);
        }
        const recordingWithMinDuration = dto.calls.find((call) => call.recordingDuration >= default_1.staticConfig.minimumRecordingDuration);
        const story = await this.storyService.addStory(languageEntity.id, {
            content: '',
            userWantContact: !dto.hideUserPhoneNumber,
            phone: dto.phoneNumber,
            country: dto.country,
            channel: channel_constant_1.CHANNEL_CONSTANTS.IVRR,
            isSensitive: dto.isSensitiveStory,
            status: recordingWithMinDuration || dto.isSensitiveStory
                ? shared_1.STORY_STATUS.PENDING_TRANSCRIPTION
                : shared_1.STORY_STATUS.CONDITIONALLY_REJECTED,
        });
        ivrrConversationEntity =
            await this.storyConversationService.saveConversation({
                uuid: dto.storyUuid,
                serviceNumber: dto.shortCodeNumber,
                startedAt: dto.flowStartedAt,
                languageId: languageEntity.id,
                storyId: story.id,
            });
        await this.storyRepository.update({
            id: story.id,
        }, { conversationId: ivrrConversationEntity.id });
        for (const call of dto.calls) {
            const ivrrCall = await this.ivrrCallRepository.save(ivrr_call_entity_1.IvrrCallEntity.createFrom({
                conversation: ivrrConversationEntity,
                isModeratorCall: call.isModeratorCall,
                isStory: call.isStory,
                s3FileId: call.s3FileId,
                callDate: call.callDate,
                twilioCallSid: call.twilioCallSid,
                recordingDuration: call === null || call === void 0 ? void 0 : call.recordingDuration,
            }));
            const transcribeLang = (_b = (_a = ivrrConversationEntity.language) === null || _a === void 0 ? void 0 : _a.transcribeLang) !== null && _b !== void 0 ? _b : languageEntity.transcribeLang;
            if (ivrrCall.isStory &&
                transcribeLang &&
                (recordingWithMinDuration || dto.isSensitiveStory)) {
                await this.runTranscriptionLambdaAsync(source_type_constants_1.SOURCE_TYPE.STORY, ivrrCall.id, transcribeLang);
            }
        }
        return ivrrConversationEntity;
    }
    async getRecordingFiles(language) {
        return (0, rxjs_1.lastValueFrom)(this.clientProxy
            .send({ cmd: 'getRecordingFiles' }, { language })
            .pipe((0, operators_1.timeout)(this.config.get('application.communicationTimeout')))).catch((error) => {
            throw new shared_1.CustomError(error.message, error.error);
        });
    }
    async preparePublishedStoryCall(story) {
        var _a;
        if (!((_a = story.recipient) === null || _a === void 0 ? void 0 : _a.userWantContact))
            return false;
        if (this.config.get('application.disableNotifications') ||
            this.config.get('application.disableIvrPublicationNotifications') ||
            (story.edited &&
                this.config.get('application.disableNotificationsAfterEdit')))
            return false;
        return (0, rxjs_1.lastValueFrom)(this.clientProxy
            .send({ cmd: 'preparePublishedStoryCall' }, Object.assign({}, (0, ivrr_story_mapper_1.ivrrStoryMapper)(story)))
            .pipe((0, operators_1.timeout)(this.config.get('application.communicationTimeout'))))
            .then((data) => !!data.success)
            .catch((error) => {
            throw new shared_1.CustomError(error.message, error.error);
        });
    }
    async preparePublishedCommentCall(comment) {
        var _a, _b;
        if (!((_b = (_a = comment.story) === null || _a === void 0 ? void 0 : _a.recipient) === null || _b === void 0 ? void 0 : _b.userWantContact))
            return false;
        if (this.config.get('application.disableNotifications') ||
            this.config.get('application.disableIvrPublicationNotifications'))
            return false;
        return (0, rxjs_1.lastValueFrom)(this.clientProxy
            .send({ cmd: 'preparePublishedCommentCall' }, Object.assign({}, (0, ivrr_comment_mapper_1.ivrrCommentMapper)(comment)))
            .pipe((0, operators_1.timeout)(this.config.get('application.communicationTimeout'))))
            .then((data) => !!data.success)
            .catch((error) => {
            throw new shared_1.CustomError(error.message, error.error);
        });
    }
    async prepareRejectedCommentCall(comment, reasons) {
        var _a, _b;
        if (!((_b = (_a = comment.story) === null || _a === void 0 ? void 0 : _a.recipient) === null || _b === void 0 ? void 0 : _b.userWantContact) === false)
            return false;
        if (this.config.get('application.disableNotifications') ||
            this.config.get('application.disableIvrRejectNotifications'))
            return false;
        return (0, rxjs_1.lastValueFrom)(this.clientProxy
            .send({ cmd: 'prepareRejectedCommentCall' }, Object.assign({}, (0, ivrr_comment_mapper_1.ivrrCommentMapper)(comment, reasons)))
            .pipe((0, operators_1.timeout)(this.config.get('application.communicationTimeout'))))
            .then((data) => !!data.success)
            .catch((error) => {
            throw new shared_1.CustomError(error.message, error.error);
        });
    }
    async prepareRejectedStoryCall(story, reasons) {
        var _a;
        if (!((_a = story.recipient) === null || _a === void 0 ? void 0 : _a.userWantContact))
            return false;
        if (this.config.get('application.disableNotifications') ||
            this.config.get('application.disableIvrRejectNotifications'))
            return false;
        await this.removeStoryLogs(story);
        return (0, rxjs_1.lastValueFrom)(this.clientProxy
            .send({ cmd: 'prepareRejectedStoryCall' }, Object.assign({}, (0, ivrr_story_mapper_1.ivrrStoryMapper)(story, reasons)))
            .pipe((0, operators_1.timeout)(this.config.get('application.communicationTimeout'))))
            .then((data) => !!data.success)
            .catch((error) => {
            throw new shared_1.CustomError(error.message, error.error);
        });
    }
    async test() {
        console.log('send message testToIvrr');
        return (0, rxjs_1.lastValueFrom)(this.clientProxy
            .send({ cmd: 'testToIvrr' }, {})
            .pipe((0, operators_1.timeout)(this.config.get('application.communicationTimeout'))))
            .then((data) => !!data.success)
            .catch((error) => {
            throw new shared_1.CustomError(error.message, error.error);
        });
    }
    async testInternal() {
        console.log('send message testInternal');
        return (0, rxjs_1.lastValueFrom)(this.clientProxy
            .send({ cmd: 'testInternal' }, {})
            .pipe((0, operators_1.timeout)(this.config.get('application.communicationTimeout'))))
            .then((data) => !!data.success)
            .catch((error) => {
            throw new shared_1.CustomError(error.message, error.error);
        });
    }
    async prepareNewCommentCall(comment) {
        var _a, _b;
        if (!((_b = (_a = comment.story) === null || _a === void 0 ? void 0 : _a.recipient) === null || _b === void 0 ? void 0 : _b.userWantContact))
            return false;
        return (0, rxjs_1.lastValueFrom)(this.clientProxy
            .send({ cmd: 'prepareNewCommentCall' }, Object.assign({}, (0, ivrr_comment_mapper_1.ivrrCommentMapper)(comment)))
            .pipe((0, operators_1.timeout)(this.config.get('application.communicationTimeout'))))
            .then((data) => !!data.success)
            .catch((error) => {
            throw new shared_1.CustomError(error.message, error.error);
        });
    }
    async fetchFlowLanguage(lang) {
        if (!lang) {
            return;
        }
        return await this.languageEntityRepository.findOne({
            where: {
                code: lang,
            },
        });
    }
    async deleteRecordingFile(comment) {
        if (comment.s3FileId) {
            return this.s3Service.deleteFile(comment.s3FileId);
        }
    }
    async runTranscriptionLambdaAsync(sourceType, callId, language) {
        const payload = {
            callId,
            language,
            sourceType,
        };
        const params = {
            FunctionName: this.config.get('transcribe.aws.lambdaARN'),
            Payload: JSON.stringify(payload),
        };
        console.log('💀'.repeat(10));
        console.log(`runTranscriptionLambdaAsync`, params);
        this.logger.log(`run transcribe for ${callId} and  ${language}`);
        return new Promise((resolve, reject) => {
            const command = new client_lambda_1.InvokeCommand(params);
            this.lambdaProvider.send(command, (error, data) => {
                if (error) {
                    this.logger.error(`runTranscriptionLambdaSync invoke error ${JSON.stringify(error)}`);
                    reject(error);
                }
                this.logger.log(`runTranscriptionLambdaSync invoke resolve ${JSON.stringify(data)}`);
                resolve(data);
            });
        });
    }
    async getS3FileAudioDuration(s3FileId) {
        try {
            const audioUrl = await this.s3Service.getFilePublicUrl(s3FileId);
            const audioResponse = await (0, rxjs_2.firstValueFrom)(this.httpService.get(audioUrl, {
                responseType: 'arraybuffer',
                headers: {
                    'Content-Type': 'audio/wav',
                },
            }));
            const audioData = audioResponse.data;
            const metadata = await (0, music_metadata_1.parseBuffer)(audioData);
            return metadata.format.duration;
        }
        catch (error) {
            this.logger.error(`S3 audio file duration error: ${JSON.stringify(error)}`);
        }
    }
    async updateRecordingsDuration() {
        const twoMonthsAgo = (0, date_fns_1.subMonths)(new Date(), 2);
        const now = new Date();
        const allCalls = await this.ivrrCallRepository.find({
            where: {
                s3FileId: (0, typeorm_1.Not)((0, typeorm_1.IsNull)()),
                recordingDuration: (0, typeorm_1.IsNull)(),
                callDate: (0, typeorm_1.Between)(twoMonthsAgo, now),
            },
        });
        for (const call of allCalls) {
            const recordingDuration = await this.getS3FileAudioDuration(call.s3FileId);
            console.log('ID-', call.s3FileId, 'REC-', recordingDuration);
            if (recordingDuration) {
                await this.ivrrCallRepository.update(call.id, {
                    recordingDuration: Math.ceil(recordingDuration),
                });
            }
            await (0, shared_1.setDelay)(1000);
        }
    }
    async findRecordingsAndTranscribeContentByDurationAndLanguage(params) {
        const calls = await this.ivrrCallRepository.findStoryCallsByLanguageCodeAndDuration(params);
        let counter = 0;
        const languages = await this.languageEntityRepository.find();
        const language = languages.find((entity) => entity.code === params.language);
        let translation;
        let story;
        for (const call of calls) {
            this.logger.log(`call: ${JSON.stringify(call)}`);
            counter++;
            const audioUrl = await this.s3Service.getFilePublicUrl(call.s3FileId);
            const content = await (0, shared_1.doSpeechToTextByAzure)(this.config.get('azure.subscriptionToken'), audioUrl, parseInt(default_1.staticConfig.minimumRecordingDuration), language.transcribeLang);
            if (content) {
                await this.ivrrCallRepository.update({ id: call.id }, {
                    content,
                    transcriptionStatus: translation_status_constants_1.TRANSLATION_STATUS_CONSTANTS.TRANSLATED,
                });
                story = await this.storyTranslationModeratorService.getTranslations(call.storyId);
                translation = story.translations.find((entity) => entity.languageId === story.languageId);
                if (translation) {
                    translation.content = content;
                }
                else {
                    translation = new story_translation_entity_1.StoryTranslationEntity({
                        storyId: story.id,
                        languageId: story.languageId,
                        status: translation_status_constants_1.TRANSLATION_STATUS_CONSTANTS.TRANSLATED,
                        type: language.provider
                            ? translation_type_constant_1.TRANSLATION_TYPE_CONSTANTS.MACHINE
                            : translation_type_constant_1.TRANSLATION_TYPE_CONSTANTS.MANUAL,
                        content,
                    });
                }
                await this.storyTranslationModeratorService.saveTranslationToRepository(translation);
                this.languageService.invokeTranslation(story.id, content, language.id);
            }
            else {
                await this.ivrrCallRepository.update({ id: call.id }, {
                    transcriptionStatus: translation_status_constants_1.TRANSLATION_STATUS_CONSTANTS.ERROR,
                });
            }
            await (0, shared_1.setDelay)(3000);
            this.logger.log(`number of calls to transcribe: ${calls.length - counter}`);
        }
    }
};
exports.IvrrService = IvrrService;
exports.IvrrService = IvrrService = IvrrService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(shared_1.DI_CONSTANTS.CLIENT_PROXY)),
    __param(1, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.CONFIG)),
    __param(7, (0, common_1.Inject)((0, common_1.forwardRef)(() => story_service_1.StoryService))),
    __param(8, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.LAMBDA)),
    __metadata("design:paramtypes", [microservices_1.ClientProxy,
        config_1.ConfigService,
        language_repository_1.LanguageRepository,
        story_conversation_service_1.StoryConversationService,
        story_repository_1.StoryRepository,
        ivrr_call_repository_1.IvrrCallRepository,
        comment_service_1.CommentService,
        story_service_1.StoryService,
        client_lambda_1.LambdaClient,
        shared_1.S3Service,
        axios_1.HttpService,
        story_translation_moderator_service_1.StoryTranslationModeratorService,
        language_service_1.LanguageService])
], IvrrService);
//# sourceMappingURL=ivrr.service.js.map