"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var StoryRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryRepository = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = __importDefault(require("../../config/typeorm"));
const database_decorator_1 = require("../../database/database.decorator");
const story_entity_1 = require("../entity/story.entity");
const types_1 = require("../../common/types");
const shared_1 = require("@ourloop/shared");
const comment_entity_1 = require("../../comment/entity/comment.entity");
const helpers_1 = require("../../common/helpers");
const story_vote_entity_1 = require("../entity/story-vote.entity");
const story_view_entity_1 = require("../entity/story-view.entity");
const common_1 = require("@nestjs/common");
const comment_translation_entity_1 = require("../../comment/entity/comment-translation.entity");
let StoryRepository = StoryRepository_1 = class StoryRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger(StoryRepository_1.name);
        this.subQueryComments = (sub) => {
            return sub
                .select([
                'comments.story_id AS comments_story_id',
                'COUNT(*) AS story_comments',
                `GROUP_CONCAT(DISTINCT commentTranslations.content ORDER BY commentTranslations.id SEPARATOR " | ") AS commentsContents`,
            ])
                .from(comment_entity_1.CommentEntity, 'comments')
                .leftJoin(comment_translation_entity_1.CommentTranslationEntity, 'commentTranslations', 'commentTranslations.comment_id = comments.id')
                .where('comments.status IN(:commentStatus)', {
                commentStatus: [
                    shared_1.COMMENT_STATUS.PUBLISHED,
                    shared_1.COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL,
                ],
            })
                .andWhere('commentTranslations.language_id = 1')
                .groupBy('comments.story_id');
        };
        this.subQueryIsReplied = (sub) => {
            return sub
                .addSelect('story_id', 'replied_id')
                .addSelect('user.organisation_id', 'user_organisation_id')
                .from(comment_entity_1.CommentEntity, 'comment')
                .leftJoin('comment.user', 'user', 'comment.user_id = user.id')
                .where('comment.status IN(:commentStatus)', {
                commentStatus: [
                    shared_1.COMMENT_STATUS.PUBLISHED,
                    shared_1.COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL,
                ],
            })
                .groupBy('comment.story_id')
                .addGroupBy('user.id');
        };
        this.getQueryForFilteredStories = (params) => {
            const query = this.createQueryBuilder('story')
                .select('story.id', 'id')
                .leftJoin('story.language', 'language')
                .leftJoin('story.country', 'country')
                .leftJoin('story.conversation', 'conversation')
                .leftJoin('story.translations', 'translations')
                .leftJoin('conversation.ivrrMessages', 'ivrrMessages')
                .groupBy('story.id')
                .where({
                status: (0, typeorm_1.Not)((0, typeorm_1.In)([
                    shared_1.STORY_STATUS.PUBLISHED,
                    shared_1.STORY_STATUS.REJECTED,
                    shared_1.STORY_STATUS.SENT_TO_CASE_MANAGER,
                    shared_1.STORY_STATUS.CONDITIONALLY_REJECTED,
                ])),
            });
            if (params.language) {
                query.andWhere('language.code IN (:languageCode)', {
                    languageCode: params.language
                        .split(',')
                        .filter((item) => !!item)
                        .map((value) => value.trim()),
                });
            }
            if (params.country) {
                query.andWhere('country.code IN (:countryCode)', {
                    countryCode: params.country
                        .split(',')
                        .filter((item) => !!item)
                        .map((value) => value.trim()),
                });
            }
            if (params.channel) {
                query.andWhere('story.channel IN (:channel)', {
                    channel: params.channel
                        .split(',')
                        .filter((item) => !!item)
                        .map((value) => value.trim()),
                });
            }
            if (params.from) {
                query.andWhere('story.createdAt >= :from', {
                    from: params.from,
                });
            }
            if (params.to) {
                query.andWhere('story.createdAt <= :to', {
                    to: params.to,
                });
            }
            if (params.status) {
                query.andWhere('story.status IN (:statuses)', {
                    statuses: params.status
                        .split(',')
                        .filter((item) => !!item)
                        .map((value) => value.trim()),
                });
            }
            if (params.durationMin !== undefined) {
                query.andWhere('ivrrMessages.recordingDuration >= :durationMin', {
                    durationMin: params.durationMin,
                });
            }
            if (params.durationMax !== undefined) {
                query.andWhere('ivrrMessages.recordingDuration <= :durationMax', {
                    durationMax: params.durationMax,
                });
            }
            if (params.isSensitive !== undefined) {
                query.andWhere('story.isSensitive = :isSensitive', {
                    isSensitive: params.isSensitive,
                });
            }
            if (params.order) {
                this.applyStoryModeratorOrder(query, params.order);
            }
            if (params.searchTerm) {
                query
                    .andWhere('MATCH(translations.content) AGAINST(:searchTerm IN NATURAL LANGUAGE MODE)', { searchTerm: params.searchTerm })
                    .getRawMany();
            }
            return query;
        };
    }
    async getStoryCount(languageId, filter, thematicGroupObject) {
        let query = await this.createQueryBuilder('story')
            .leftJoin('story.organisations', 'organisations')
            .leftJoin('story.translations', 'translations', 'translations.language_id = :languageId', {
            languageId,
        })
            .select('DISTINCT(story.id)')
            .where('story.status = :status', { status: shared_1.STORY_STATUS.PUBLISHED });
        if (!(0, helpers_1.isEmpty)(filter)) {
            query = (0, helpers_1.addFilterCondition)(filter, (0, helpers_1.addFilterJoins)(query));
        }
        if (thematicGroupObject) {
            query = (0, helpers_1.thematicConditionAdd)(thematicGroupObject, query);
        }
        return query.getCount();
    }
    async findStoryIdsByOrganisationIds(ids) {
        const connection = await (0, helpers_1.getConnection)(typeorm_2.default);
        return connection.query(`select story_id from story_organisation where organisation_id IN (?)`, [ids]);
    }
    async findStoryIdsByDifficultyIds(ids) {
        const connection = await (0, helpers_1.getConnection)(typeorm_2.default);
        return connection.query(`select story_id from story_difficulty where difficulty_id IN (?)`, [ids]);
    }
    async findStoryIdsByThematicAreaIds(ids) {
        const connection = await (0, helpers_1.getConnection)(typeorm_2.default);
        return connection.query(`select story_id from story_thematic where thematic_id IN (?)`, [ids]);
    }
    async findSensitiveStories() {
        return this.find({ where: { isSensitive: true } });
    }
    async findStoryIdsByParams(params, statuses) {
        var _a;
        let query = this.createQueryBuilder('story')
            .select('story.id', 'id')
            .leftJoin('story.organisations', 'orgs')
            .leftJoin(story_vote_entity_1.StoryVoteEntity, 'vote', 'vote.story_id = story.id')
            .addSelect('COUNT(vote.id)', 'vote_count')
            .groupBy('story.id')
            .where('story.status IN (:statuses)', { statuses });
        if (params.repliedTo) {
            const repliedToValues = params.repliedTo.split(',').map(Number);
            const repliedToByOrganisation = repliedToValues.includes(1);
            const repliedToByCommunity = repliedToValues.includes(2);
            const notRepliedTo = repliedToValues.includes(3);
            const conditions = [];
            if (repliedToByOrganisation) {
                conditions.push(`EXISTS (
              SELECT 1 FROM story_comment sc
              JOIN user u ON u.id = sc.user_id
              WHERE sc.story_id = story.id AND u.organisation_id IS NOT NULL
            )`);
            }
            if (repliedToByCommunity) {
                conditions.push(`EXISTS (
              SELECT 1 FROM story_comment sc
              LEFT JOIN user u ON u.id = sc.user_id
              WHERE sc.story_id = story.id
              AND (sc.user_id IS NULL OR u.organisation_id IS NULL)
            )`);
            }
            if (notRepliedTo) {
                conditions.push(`NOT EXISTS (
              SELECT 1 FROM story_comment sc WHERE sc.story_id = story.id
            )`);
            }
            if (conditions.length > 0) {
                query.andWhere(`(${conditions.join(' OR ')})`);
            }
        }
        if (params.storyIds) {
            query.andWhere('story.id IN (:...storyIds)', {
                storyIds: params.storyIds,
            });
        }
        if (params.countryIds) {
            query.andWhere('story.country_id IN (:...countryIds)', {
                countryIds: params.countryIds,
            });
        }
        const filter = (0, shared_1._omit)(params, [
            'page',
            'limit',
            'order',
        ]);
        if (!(0, helpers_1.isEmpty)(filter)) {
            query = (0, helpers_1.addFilterCondition)(filter, (0, helpers_1.addFilterJoins)(query), statuses.includes(shared_1.STORY_STATUS.SENT_TO_CASE_MANAGER));
        }
        switch ((_a = params.order) === null || _a === void 0 ? void 0 : _a.toLowerCase()) {
            case types_1.StoryOrderEnum.NEWEST_FIRST:
                query.orderBy('story.createdAt', 'DESC');
                break;
            case types_1.StoryOrderEnum.OLDEST_FIRST:
                query.orderBy('story.createdAt', 'ASC');
                break;
            case types_1.StoryOrderEnum.UPVOTED:
                query.orderBy('vote_count', 'DESC');
                break;
            default:
                query.orderBy('story.createdAt', 'DESC');
                break;
        }
        return query.execute().catch((error) => {
            this.logger.error(error);
            throw new common_1.BadRequestException(shared_1.GET_STORY_FAILED);
        });
    }
    async findTranslationsToExport() {
        return this.createQueryBuilder('story')
            .select('story.language_id', 'storyLanguageId')
            .addSelect('translations.language_id', 'languageId')
            .addSelect('translations.story_id', 'storyId')
            .addSelect('translations.content', 'content')
            .leftJoin('story.translations', 'translations')
            .where('story.status = :status', { status: shared_1.STORY_STATUS.PUBLISHED })
            .execute()
            .catch((error) => {
            this.logger.error(error);
            throw new common_1.BadRequestException(shared_1.GET_STORY_FAILED);
        });
    }
    async findStoriesToExport() {
        const query = this.createQueryBuilder('story')
            .select('story.id', 'id')
            .addSelect('story.status', 'status')
            .addSelect('story.channel', 'channel')
            .addSelect('story.language_id', 'languageId')
            .addSelect('story.isSensitive', 'isSensitive')
            .addSelect('story.place', 'place')
            .addSelect('story.published_at', 'publishedAt')
            .addSelect('story.country_id', 'countryId')
            .where('story.status = :status', { status: shared_1.STORY_STATUS.PUBLISHED })
            .orderBy('story.publishedAt', 'DESC');
        return query.execute().catch((error) => {
            this.logger.error(error);
            throw new common_1.BadRequestException(shared_1.GET_STORY_FAILED);
        });
    }
    async findStoriesByIds(ids, order) {
        const query = this.createQueryBuilder('story')
            .addSelect('replied.user_organisation_id', 'organisations_replied')
            .addSelect((subQuery) => {
            return subQuery
                .select('COUNT(*)', 'vote_count')
                .from(story_vote_entity_1.StoryVoteEntity, 'vote')
                .where('vote.story_id = story.id');
        }, 'vote_count')
            .addSelect((subQuery) => {
            return subQuery
                .select('COUNT(*)', 'view_count')
                .from(story_view_entity_1.StoryViewEntity, 'view')
                .where('view.story_id = story.id');
        }, 'view_count')
            .leftJoinAndSelect('story.storyAdministrativeData', 'storyAdministrativeData')
            .leftJoinAndSelect('storyAdministrativeData.administrativeData', 'administrativeData')
            .leftJoinAndSelect('story.categories', 'categories')
            .leftJoin('story.thematics', 'thematic')
            .addSelect('thematic.id', 'thematic_id')
            .leftJoinAndSelect('administrativeData.names', 'administrativeDataNames')
            .leftJoinAndSelect('story.recipient', 'recipient')
            .leftJoinAndSelect('story.country', 'country')
            .leftJoinAndSelect('story.organisations', 'organisations')
            .addSelect('organisations.verified', 'organisations_verified')
            .leftJoinAndSelect('story.translations', 'translations')
            .leftJoinAndSelect('translations.language', 'language')
            .leftJoinAndSelect('story.user', 'user')
            .leftJoinAndSelect('user.organisation', 'organisation')
            .loadRelationCountAndMap('story.votes', 'story.votes')
            .loadRelationCountAndMap('story.views', 'story.views')
            .leftJoinAndSelect((subQuery) => this.subQueryComments(subQuery), 'comments', '`comments`.`comments_story_id` = `story`.`id`')
            .leftJoin((subQuery) => this.subQueryIsReplied(subQuery), 'replied', '(`replied`.`replied_id` = `story`.`id`) AND (`replied`.`user_organisation_id` IN (`organisations`.`id`))')
            .groupBy('story.id')
            .addGroupBy('categories.id')
            .addGroupBy('thematic.id')
            .addGroupBy('organisations.id')
            .addGroupBy('organisations.verified')
            .addGroupBy('translations.id')
            .addGroupBy('storyAdministrativeData.id')
            .addGroupBy('administrativeDataNames.id')
            .where(`story.id IN (:ids)`, { ids });
        switch (order) {
            case types_1.StoryOrderEnum.NEWEST_FIRST: {
                query.orderBy('story.createdAt', 'DESC');
                break;
            }
            case types_1.StoryOrderEnum.OLDEST_FIRST: {
                query.orderBy('story.createdAt', 'ASC');
                break;
            }
            case types_1.StoryOrderEnum.UPVOTED: {
                query.orderBy('vote_count', 'DESC');
                break;
            }
            default: {
                query.orderBy('story.createdAt', 'DESC');
                break;
            }
        }
        return query.execute().catch((error) => {
            this.logger.error(error);
            throw new common_1.BadRequestException(shared_1.GET_STORY_FAILED);
        });
    }
    async findStoriesForUNExport(ids, order) {
        const query = this.createQueryBuilder('story')
            .leftJoin('story.country', 'country')
            .addSelect('country.name', 'country_name')
            .leftJoin('story.recipient', 'recipient')
            .addSelect([
            'recipient.nickname',
            'recipient.email',
            'recipient.age_by_moderator',
            'recipient.gender_by_moderator',
            'recipient.is_minority_by_moderator',
        ])
            .leftJoin('story.categories', 'categories')
            .addSelect('categories.id', 'categories_id')
            .leftJoin('story.thematics', 'thematic')
            .addSelect('thematic.id', 'thematic_id')
            .leftJoin('story.difficulties', 'difficulties')
            .addSelect('difficulties.id', 'difficultyIds')
            .leftJoin('story.organisations', 'organisations')
            .addSelect('organisations.name', 'organisations_name')
            .leftJoin('story.translations', 'translations', 'translations.language_id = 1')
            .addSelect(['translations.content'])
            .leftJoin('story.storyAdministrativeData', 'storyAdministrativeData')
            .leftJoin('storyAdministrativeData.administrativeData', 'administrativeData')
            .leftJoin('administrativeData.names', 'administrativeDataNames')
            .addSelect([
            'administrativeDataNames.name',
            'MAX(administrativeData.level) AS administrative_level'
        ])
            .leftJoin('story.commentsRel', 'comments')
            .leftJoin('comments.translations', 'commentTranslations', 'commentTranslations.language_id = 1')
            .addSelect([
            'COUNT(comments.id) AS story_comments',
            `GROUP_CONCAT(DISTINCT commentTranslations.content ORDER BY commentTranslations.id SEPARATOR " | ") AS commentsContents`,
        ])
            .where('story.id IN (:...ids)', { ids })
            .groupBy('story.id')
            .addGroupBy('country.name')
            .addGroupBy('recipient.id')
            .addGroupBy('categories.id')
            .addGroupBy('thematic.id')
            .addGroupBy('difficulties.id')
            .addGroupBy('organisations.id')
            .addGroupBy('translations.id')
            .addGroupBy('administrativeDataNames.id');
        switch (order) {
            case types_1.StoryOrderEnum.NEWEST_FIRST:
                query.orderBy('story.createdAt', 'DESC');
                break;
            case types_1.StoryOrderEnum.OLDEST_FIRST:
                query.orderBy('story.createdAt', 'ASC');
                break;
            default:
                query.orderBy('story.createdAt', 'DESC');
                break;
        }
        try {
            return await query.execute();
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.BadRequestException(shared_1.GET_STORY_FAILED);
        }
    }
    async findStoryByIdAndParams(storyId, params) {
        const query = this.createQueryBuilder('story')
            .where('story.id = :storyId', { storyId })
            .addSelect('story.isUrgent');
        const thematicQuery = query.clone();
        const difficultiesQuery = query.clone();
        if (params.withDetails) {
            query
                .addSelect('replied.user_organisation_id', 'organisations_replied')
                .leftJoinAndSelect('story.markedAsSensitiveBy', 'markedAsSensitiveBy')
                .leftJoinAndSelect('story.recipient', 'recipient')
                .leftJoinAndSelect('story.country', 'country')
                .leftJoinAndSelect('story.storyAdministrativeData', 'storyAdministrativeData')
                .leftJoinAndSelect('storyAdministrativeData.administrativeData', 'administrativeData')
                .leftJoinAndSelect('administrativeData.names', 'administrativeDataNames')
                .leftJoinAndSelect('story.categories', 'categories')
                .leftJoinAndSelect('story.translations', 'translations')
                .leftJoinAndSelect('story.language', 'story_language')
                .leftJoinAndSelect('translations.language', 'language')
                .leftJoinAndSelect('story.maternityStatus', 'maternityStatus')
                .leftJoinAndSelect('story.organisations', 'organisations')
                .leftJoinAndSelect('story.rejectReasons', 'rejectReasons')
                .leftJoinAndSelect('story.conversation', 'conversation')
                .leftJoinAndSelect('story.user', 'user')
                .leftJoinAndSelect('organisations.users', 'users')
                .leftJoinAndSelect('organisations.country', 'organisation.country')
                .leftJoinAndSelect('user.organisation', 'organisation')
                .loadRelationCountAndMap('story.votes', 'story.votes')
                .loadRelationCountAndMap('story.views', 'story.views')
                .leftJoinAndSelect((subQuery) => this.subQueryComments(subQuery), 'comments', '`comments`.`comments_story_id` = `story`.`id`')
                .leftJoin((subQuery) => this.subQueryIsReplied(subQuery), 'replied', '(`replied`.`replied_id` = `story`.`id`) AND (`replied`.`user_organisation_id` IN (`organisations`.`id`))')
                .groupBy('categories.id')
                .addGroupBy('maternityStatus.id')
                .addGroupBy('organisations.id')
                .addGroupBy('translations.id')
                .addGroupBy('storyAdministrativeData.id')
                .addGroupBy('administrativeDataNames.id')
                .addGroupBy('rejectReasons.id')
                .addGroupBy('users.id');
            thematicQuery
                .leftJoinAndSelect('story.thematics', 'thematic', 'story_thematic.story_id = story.id')
                .leftJoinAndSelect('thematic.parent', 'thematicParent')
                .groupBy('thematic.id');
            difficultiesQuery
                .leftJoinAndSelect('story.difficulties', 'difficulties')
                .groupBy('difficulties.id');
        }
        if (params.channel) {
            query.andWhere('story.channel = :channel', { channel: params.channel });
        }
        if (params.status) {
            query.andWhere('story.status = :status', { status: params.status });
        }
        const [mainResult, thematicResult, difficultiesResult] = await Promise.all([
            query.getOne(),
            thematicQuery.getOne(),
            difficultiesQuery.getOne(),
        ]);
        return mainResult
            ? Object.assign(Object.assign(Object.assign({}, mainResult), thematicResult), difficultiesResult) : null;
    }
    async getAdministrativeDataIdsByCountryId(countryId) {
        return this.createQueryBuilder('story')
            .select('storyAdministrativeData.administrativeAreaId')
            .where('story.country_id = :countryId', {
            countryId,
        })
            .andWhere('story.status = :status', {
            status: shared_1.STORY_STATUS.PUBLISHED,
        })
            .innerJoin('story.storyAdministrativeData', 'storyAdministrativeData')
            .execute();
    }
    async getPendingStoriesByIds(ids, order, languageId, defaultLanguageId) {
        const query = this.createQueryBuilder('story')
            .select('story.id', 'id')
            .addSelect('story.createdAt', 'createdAt')
            .addSelect('story.channel', 'channel')
            .addSelect('story.status', 'status')
            .addSelect('story.conversationId', 'conversationId')
            .leftJoinAndSelect('story.assignedModerator', 'assignedModerator')
            .addSelect('country.code', 'countryCode')
            .addSelect('language.code', 'languageCode')
            .addSelect('categories.code', 'categoryCode')
            .addSelect('ivrrMessages.s3FileId', 's3FileId')
            .addSelect('ivrrMessages.recordingDuration', 'recordingDuration')
            .addSelect('translations.content', 'userContent')
            .addSelect('translations_default.content', 'defaultContent')
            .addSelect('translations_original.content', 'originalContent')
            .addSelect('story.isSensitive', 'isSensitive')
            .addSelect('translations.numberOfWords', 'numberOfWordsOfUserContent')
            .addSelect('translations_default.numberOfWords', 'numberOfWordsOfDefaultContent')
            .addSelect('translations_original.numberOfWords', 'numberOfWordsOfOriginalContent')
            .leftJoin('story.country', 'country')
            .leftJoin('story.categories', 'categories')
            .leftJoin('story.language', 'language')
            .leftJoin('story.conversation', 'conversation')
            .leftJoin('conversation.ivrrMessages', 'ivrrMessages')
            .leftJoinAndSelect('story.translations', 'translations', 'translations.languageId = :languageId', { languageId })
            .leftJoin('story.translations', 'translations_default', 'translations_default.languageId = :defaultLanguageId', { defaultLanguageId })
            .leftJoin('story.translations', 'translations_original', 'translations_original.languageId = story.languageId')
            .groupBy('story.id, story.createdAt, story.channel, story.status, story.conversationId, country.code, language.code, categories.code, ivrrMessages.s3FileId, ivrrMessages.recordingDuration')
            .addGroupBy('assignedModerator.id')
            .where(`story.id IN (:ids)`, { ids });
        this.applyStoryModeratorOrder(query, order);
        return query.execute();
    }
    async applyStoryModeratorOrder(query, order) {
        switch (order) {
            case types_1.StoryModeratorOrderEnum.NEWEST_FIRST:
                query.orderBy('story.createdAt', 'DESC');
                break;
            case types_1.StoryModeratorOrderEnum.OLDEST_FIRST:
                query.orderBy('story.createdAt', 'ASC');
                break;
            case types_1.StoryModeratorOrderEnum.NOT_STARTED: {
                query
                    .addSelect(`CASE WHEN story.status = :notStartedValue then :startsFromValue else :othersValue end`, 'sort_rank')
                    .setParameter('notStartedValue', shared_1.STORY_STATUS.NOT_STARTED)
                    .setParameter('startsFromValue', types_1.OrderHierarchy.STARTS_FROM)
                    .setParameter('othersValue', types_1.OrderHierarchy.OTHERS)
                    .orderBy('sort_rank');
                break;
            }
            case types_1.StoryModeratorOrderEnum.PENDING_PUBLICATION: {
                query
                    .addSelect(`CASE WHEN story.status = :pendingPublicationValue then :startsFromValue else :othersValue end`, 'sort_rank')
                    .setParameter('pendingPublicationValue', shared_1.STORY_STATUS.PENDING_PUBLICATION)
                    .setParameter('startsFromValue', types_1.OrderHierarchy.STARTS_FROM)
                    .setParameter('othersValue', types_1.OrderHierarchy.OTHERS)
                    .orderBy('sort_rank');
                break;
            }
            default: {
                query.orderBy('story.createdAt', 'ASC');
                break;
            }
        }
    }
    async getNumberOfPendingStories(params) {
        return this.getQueryForFilteredStories(params).getCount();
    }
    async findPendingStoriesIds(params) {
        const query = this.getQueryForFilteredStories(params);
        const result = await query.getRawMany();
        return result.map((row) => row.id);
    }
    async findStoriesWithoutDefinedAdministrativeArea(countryId) {
        return this.find({
            where: {
                place: (0, typeorm_1.Not)((0, typeorm_1.IsNull)()),
                countryId,
                status: (0, typeorm_1.Not)((0, typeorm_1.In)([shared_1.STORY_STATUS.REJECTED, shared_1.STORY_STATUS.SENT_TO_CASE_MANAGER])),
            },
            relations: ['storyAdministrativeData', 'country'],
        });
    }
};
exports.StoryRepository = StoryRepository;
exports.StoryRepository = StoryRepository = StoryRepository_1 = __decorate([
    (0, database_decorator_1.EntityRepository)(story_entity_1.StoryEntity)
], StoryRepository);
//# sourceMappingURL=story.repository.js.map