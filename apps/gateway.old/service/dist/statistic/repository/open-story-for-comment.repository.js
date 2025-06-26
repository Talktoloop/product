"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenStoryForCommentRepository = void 0;
const common_1 = require("@nestjs/common");
const helpers_1 = require("../../common/helpers");
const typeorm_1 = require("typeorm");
const database_decorator_1 = require("../../database/database.decorator");
const comment_entity_1 = require("../../comment/entity/comment.entity");
const comment_repository_1 = require("../../comment/repository/comment.repository");
const shared_1 = require("@ourloop/shared");
const date_fns_1 = require("date-fns");
let OpenStoryForCommentRepository = class OpenStoryForCommentRepository extends comment_repository_1.CommentRepository {
    async getCommentsByPeriod(filters) {
        let query = this.createQueryBuilder('comment')
            .select('DATE_FORMAT(comment.published_at, "%Y-%m")', 'month')
            .addSelect('COUNT(DISTINCT comment.id)', 'count')
            .innerJoin('comment.story', 'story')
            .where('comment.published_at between :start and :end', {
            start: (0, date_fns_1.formatISO)((0, date_fns_1.startOfMonth)(new Date(filters.from))),
            end: (0, date_fns_1.formatISO)((0, date_fns_1.endOfMonth)(new Date(filters.to))),
        })
            .andWhere('comment.status = :status', {
            status: shared_1.COMMENT_STATUS.PUBLISHED,
        })
            .orderBy('month')
            .groupBy('month');
        if (!(0, helpers_1.isEmpty)(filters)) {
            query = (0, helpers_1.addFilterCondition)((0, shared_1._omit)(filters, ['from', 'to']), (0, helpers_1.addFilterJoins)(query));
        }
        return query.execute();
    }
    getUniqueAuthorsIdsForComment(filters) {
        let query = this.createQueryBuilder('comment')
            .select('comment.userId', 'userId')
            .addSelect('comment.nickname', 'nickname')
            .innerJoin('story', 'story', 'comment.story_id = story.id')
            .where({ status: shared_1.COMMENT_STATUS.PUBLISHED })
            .andWhere('comment.userId IS NOT NULL')
            .groupBy('comment.userId, comment.nickname');
        if (!(0, helpers_1.isEmpty)(filters)) {
            query = (0, helpers_1.addFilterCondition)(filters, (0, helpers_1.addFilterJoins)(query));
        }
        return query.execute();
    }
    async getNumberOfOrganizationRepliesForSenstiveStories(filters) {
        let query = this.createQueryBuilder('comment')
            .innerJoin('story', 'story', 'comment.story_id = story.id')
            .innerJoin('user', 'u', 'u.id = comment.user_id and u.organisation_id is not null');
        query = (0, helpers_1.addSensitiveStoryFilter)(query).andWhere('comment.status = :status', {
            status: shared_1.COMMENT_STATUS.PUBLISHED,
        });
        if (!(0, helpers_1.isEmpty)(filters)) {
            query = (0, helpers_1.addFilterCondition)(filters, (0, helpers_1.addFilterJoins)(query));
        }
        return query.getCount();
    }
    async getNumberOfCommunityRepliesForSenstiveStories(filters) {
        let query = this.createQueryBuilder('comment')
            .innerJoin('story', 'story', 'comment.story_id = story.id')
            .leftJoin('user', 'u', 'u.id = comment.user_id');
        query = (0, helpers_1.addSensitiveStoryFilter)(query)
            .andWhere(new typeorm_1.Brackets((qb) => {
            qb.where('comment.user_id is null').orWhere('u.organisation_id is null');
        }))
            .andWhere('comment.status = :status', {
            status: shared_1.COMMENT_STATUS.PUBLISHED,
        });
        if (!(0, helpers_1.isEmpty)(filters)) {
            query = (0, helpers_1.addFilterCondition)(filters, (0, helpers_1.addFilterJoins)(query));
        }
        return query.getCount();
    }
    async getTotalResponsesCount(filters) {
        let query = this.createQueryBuilder('comment')
            .select('comment.id')
            .innerJoin('story', 'story', 'comment.story_id = story.id')
            .where('comment.status = :commentStatus', {
            commentStatus: shared_1.COMMENT_STATUS.PUBLISHED,
        })
            .andWhere('story.status = :storyStatus', {
            storyStatus: shared_1.STORY_STATUS.PUBLISHED,
        });
        if (!(0, helpers_1.isEmpty)(filters)) {
            query = (0, helpers_1.addFilterCondition)(filters, (0, helpers_1.addFilterJoins)(query));
        }
        return query.getCount();
    }
};
exports.OpenStoryForCommentRepository = OpenStoryForCommentRepository;
exports.OpenStoryForCommentRepository = OpenStoryForCommentRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, database_decorator_1.EntityRepository)(comment_entity_1.CommentEntity)
], OpenStoryForCommentRepository);
//# sourceMappingURL=open-story-for-comment.repository.js.map