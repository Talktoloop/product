"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CommentRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentRepository = void 0;
const typeorm_1 = require("typeorm");
const database_decorator_1 = require("../../database/database.decorator");
const comment_entity_1 = require("../entity/comment.entity");
const shared_1 = require("@ourloop/shared");
const helpers_1 = require("../../common/helpers");
const common_1 = require("@nestjs/common");
let CommentRepository = CommentRepository_1 = class CommentRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger(CommentRepository_1.name);
        this.getQueryForFilteredComments = (params, statuses) => {
            const query = this.createQueryBuilder('comment')
                .leftJoinAndSelect('comment.language', 'language')
                .leftJoinAndSelect('comment.recipient', 'recipient')
                .leftJoinAndSelect('comment.story', 'story', 'story.id = comment.story_id')
                .leftJoinAndSelect('story.country', 'country', 'country.id = story.country_id')
                .leftJoinAndSelect('comment.translations', 'translations')
                .where('story.status = :story_status', {
                story_status: shared_1.STORY_STATUS.PUBLISHED,
            })
                .andWhere('comment.status IN (:statuses)', {
                statuses,
            });
            if (params.language) {
                query.andWhere('language.code IN (:languageCode)', {
                    languageCode: params.language.split(',').filter((item) => !!item),
                });
            }
            if (params.country) {
                query.andWhere('country.code IN (:countryCode)', {
                    countryCode: params.country.split(',').filter((item) => !!item),
                });
            }
            if (params.channel) {
                query.andWhere('comment.channel IN (:channel)', {
                    channel: params.channel.split(',').filter((item) => !!item),
                });
            }
            if (params.from) {
                query.andWhere('comment.createdAt >= :from', {
                    from: params.from,
                });
            }
            if (params.to) {
                query.andWhere('comment.createdAt <= :to', {
                    to: params.to,
                });
            }
            if (params.searchTerm) {
                query.andWhere('MATCH(translations.content) AGAINST(:searchTerm IN NATURAL LANGUAGE MODE)', { searchTerm: params.searchTerm });
            }
            return query;
        };
    }
    async findCommentIdsByStatus(status) {
        return this.createQueryBuilder('comment')
            .select('comment.id', 'id')
            .addSelect('comment.story_id', 'storyId')
            .where('comment.status = :status', {
            status,
        })
            .execute()
            .catch((error) => {
            this.logger.error(error);
            throw new common_1.BadRequestException(shared_1.GET_COMMENTS_FAILED);
        });
    }
    async getNumberOfComments(params, statuses) {
        return this.getQueryForFilteredComments(params, statuses).getCount();
    }
    async findCommentIdsByCountryAndStatus(countryId, status) {
        const query = this.createQueryBuilder('comment')
            .select('comment.id', 'id')
            .innerJoin('comment.story', 'story', 'story.id = comment.story_id AND comment.status = :status', { status });
        if (countryId) {
            query.andWhere('story.country_id = :countryId', { countryId });
        }
        return query.execute().catch((error) => {
            this.logger.error(error);
            throw new common_1.BadRequestException(shared_1.GET_COMMENTS_FAILED);
        });
    }
    async findPendingComments(params) {
        const query = this.getQueryForFilteredComments(params, [
            shared_1.COMMENT_STATUS.PENDING_REVIEW,
            shared_1.COMMENT_STATUS.PENDING_EDIT,
        ]);
        if (params.order) {
            query.orderBy('comment.createdAt', params.order);
        }
        else {
            query.orderBy('comment.createdAt', 'ASC');
        }
        return (0, helpers_1.paginateQueryResult)(query, params.limit, params.page);
    }
    async findCommentsByStatus(params, status, withDetails = false) {
        var _a;
        const query = this.getQueryForFilteredComments(params, [status]);
        if (withDetails) {
            query
                .leftJoinAndSelect('comment.user', 'user')
                .leftJoinAndSelect('story.statusChangedBy', 'statusChangedBy')
                .leftJoinAndSelect('story.categories', 'categories')
                .leftJoinAndSelect('story.language', 'storyLanguage');
        }
        query.orderBy('comment.createdAt', (_a = params.order) !== null && _a !== void 0 ? _a : 'ASC');
        return (0, helpers_1.paginateQueryResult)(query, params.limit, params.page);
    }
    async findAll(storyId) {
        const query = this.createQueryBuilder('comment')
            .leftJoinAndSelect('comment.children', 'children', `children.status IN(:childrenStatus)`, {
            childrenStatus: [
                shared_1.COMMENT_STATUS.PUBLISHED,
                shared_1.COMMENT_STATUS.PENDING_REVIEW,
                shared_1.COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL,
            ],
        })
            .leftJoinAndSelect('children.thematics', 'childrenThematic')
            .leftJoinAndSelect('children.recipient', 'childrenRecipient')
            .leftJoinAndSelect('children.translations', 'childrenTranslations')
            .leftJoinAndSelect('childrenTranslations.language', 'childrenLanguage')
            .leftJoinAndSelect('comment.translations', 'translations')
            .leftJoinAndSelect('translations.language', 'language')
            .loadRelationCountAndMap('comment.votes', 'comment.votes')
            .leftJoinAndSelect('comment.recipient', 'recipient')
            .leftJoinAndSelect('comment.user', 'user')
            .leftJoinAndSelect('user.organisation', 'organisation')
            .leftJoinAndSelect('children.user', 'children_user')
            .leftJoinAndSelect('children_user.organisation', 'children_user_organisation')
            .leftJoinAndSelect('comment.thematics', 'thematic')
            .loadRelationCountAndMap('children.votes', 'children.votes')
            .orderBy('comment.created_at', 'DESC')
            .addOrderBy('children.created_at', 'DESC')
            .where('comment.storyId = :storyId', { storyId })
            .andWhere('comment.status IN(:commentStatus)', {
            commentStatus: [
                shared_1.COMMENT_STATUS.PUBLISHED,
                shared_1.COMMENT_STATUS.PENDING_REVIEW,
                shared_1.COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL,
            ],
        })
            .andWhere('comment.parentCommentId IS NULL');
        return query.getMany();
    }
    findByIdOrFail(id, relations = []) {
        if (!id) {
            throw new shared_1.CustomError(shared_1.COMMENT_NOT_FOUND, {
                error: 'Comment ID does not exist',
            });
        }
        return this.findOne({ where: { id }, relations }).then((data) => {
            if (!data) {
                throw new shared_1.CustomError(shared_1.COMMENT_NOT_FOUND, {
                    error: 'Comment ID does not exist',
                });
            }
            return data;
        });
    }
    findCommentDetailsById(id) {
        return this.createQueryBuilder('comment')
            .loadRelationCountAndMap('comment.votes', 'comment.votes')
            .leftJoinAndSelect('comment.recipient', 'recipient')
            .leftJoinAndSelect('comment.language', 'comment_language')
            .leftJoinAndSelect('comment.translations', 'translations')
            .leftJoinAndSelect('translations.language', 'language')
            .leftJoinAndSelect('comment.user', 'user')
            .leftJoinAndSelect('user.organisation', 'organisation')
            .leftJoinAndSelect('comment.rejectReasons', 'rejectReasons')
            .leftJoinAndSelect('rejectReasons.rejectReason', 'rejectReason')
            .leftJoinAndSelect('comment.story', 'story')
            .leftJoinAndSelect('story.language', 'story_language')
            .leftJoinAndSelect('story.recipient', 'story_recipient')
            .leftJoinAndSelect('story.conversation', 'conversation')
            .leftJoinAndSelect('comment.thematics', 'thematic')
            .where('comment.id = :id', { id })
            .getOne();
    }
};
exports.CommentRepository = CommentRepository;
exports.CommentRepository = CommentRepository = CommentRepository_1 = __decorate([
    (0, database_decorator_1.EntityRepository)(comment_entity_1.CommentEntity)
], CommentRepository);
//# sourceMappingURL=comment.repository.js.map