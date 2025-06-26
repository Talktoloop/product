"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenStoryForCategoryRepository = void 0;
const common_1 = require("@nestjs/common");
const category_repository_1 = require("../../category/category.repository");
const typeorm_1 = require("typeorm");
const database_decorator_1 = require("../../database/database.decorator");
const category_entity_1 = require("../../category/entity/category.entity");
const comment_entity_1 = require("../../comment/entity/comment.entity");
const shared_1 = require("@ourloop/shared");
const helpers_1 = require("../../common/helpers");
const date_fns_1 = require("date-fns");
let OpenStoryForCategoryRepository = class OpenStoryForCategoryRepository extends category_repository_1.CategoryRepository {
    async getNoSensitiveStoriesWithCategoryByPeriod(filters) {
        let query = this.createQueryBuilder('category')
            .select('MAX(category.code)', 'code')
            .leftJoin('story_category', 'sc', 'sc.category_id = category.id')
            .leftJoin('story', 'story', 'story.id = sc.story_id and story.status = :storyStatus', {
            storyStatus: shared_1.STORY_STATUS.PUBLISHED,
        })
            .addSelect('DATE_FORMAT(story.published_at, "%Y-%m")', 'month')
            .addSelect('COUNT(DISTINCT story.id)', 'count')
            .where('story.published_at between :start and :end', {
            start: (0, date_fns_1.formatISO)((0, date_fns_1.startOfMonth)(new Date(filters.from))),
            end: (0, date_fns_1.formatISO)((0, date_fns_1.endOfMonth)(new Date(filters.to))),
        })
            .orderBy('month, category.id')
            .groupBy('month, category.id');
        if (!(0, helpers_1.isEmpty)(filters)) {
            query = (0, helpers_1.addFilterCondition)((0, shared_1._omit)(filters, ['from', 'to']), (0, helpers_1.addFilterJoins)(query, ['story_category']));
        }
        return query.execute();
    }
    async getStoriesAndRepliesGroupedByCategory(filters) {
        const query = this.createQueryBuilder('category')
            .select('category.id as id')
            .addSelect('category.code as code')
            .addSelect((qb) => {
            let subQuery = qb
                .select("COUNT(DISTINCT CONCAT(c.id, '.', story.id))", 'count')
                .from(category_entity_1.CategoryEntity, 'c')
                .innerJoin('story_category', 'sc', 'sc.category_id = c.id')
                .innerJoin('story', 'story', 'story.id = sc.story_id AND story.status = :storyStatus', { storyStatus: shared_1.STORY_STATUS.PUBLISHED })
                .where('c.id = category.id');
            if (!(0, helpers_1.isEmpty)(filters)) {
                subQuery = (0, helpers_1.addFilterCondition)(filters, (0, helpers_1.addFilterJoins)(subQuery, ['story_category']));
            }
            return subQuery;
        }, 'numberOfStories')
            .addSelect((qb) => {
            let subQuery = qb
                .select('COUNT(DISTINCT comment.id)', 'count')
                .from(comment_entity_1.CommentEntity, 'comment')
                .innerJoin('story_category', 'sc', 'sc.category_id = category.id and sc.story_id = comment.story_id')
                .innerJoin('story', 'story', 'story.id = sc.story_id AND story.status = :storyStatus', { storyStatus: shared_1.STORY_STATUS.PUBLISHED })
                .innerJoin('user', 'u', 'u.id = comment.user_id and u.organisation_id is not null')
                .leftJoin('story_organisation', 'so', 'story.id = so.story_id')
                .leftJoin('organisation', 'organisations', 'so.organisation_id = organisations.id')
                .where('comment.status = :commentStatus', {
                commentStatus: shared_1.COMMENT_STATUS.PUBLISHED,
            });
            if (!(0, helpers_1.isEmpty)(filters)) {
                subQuery = (0, helpers_1.addFilterCondition)(filters, (0, helpers_1.addFilterJoins)(subQuery, ['story_category', 'story.organisations']));
            }
            return subQuery;
        }, 'numberOfCommentsFromOrganizations')
            .addSelect((qb) => {
            let subQuery = qb
                .select('COUNT(DISTINCT comment.id)', 'count')
                .from(comment_entity_1.CommentEntity, 'comment')
                .innerJoin('story_category', 'sc', 'sc.category_id = category.id and sc.story_id = comment.story_id')
                .innerJoin('story', 'story', 'story.id = sc.story_id AND story.status = :storyStatus', { storyStatus: shared_1.STORY_STATUS.PUBLISHED })
                .leftJoin('user', 'u', 'u.id = comment.user_id')
                .leftJoin('story_organisation', 'so', 'story.id = so.story_id')
                .leftJoin('organisation', 'organisations', 'so.organisation_id = organisations.id')
                .where(new typeorm_1.Brackets((qb) => {
                qb.where('comment.user_id is null');
                qb.orWhere('u.organisation_id is null');
            }))
                .andWhere('comment.status = :commentStatus', {
                commentStatus: shared_1.COMMENT_STATUS.PUBLISHED,
            });
            if (!(0, helpers_1.isEmpty)(filters)) {
                subQuery = (0, helpers_1.addFilterCondition)(filters, (0, helpers_1.addFilterJoins)(subQuery, [
                    'story_category',
                    'story.organisations',
                ]));
            }
            return subQuery;
        }, 'numberOfCommentsFromCommunity')
            .orderBy('category.order', 'ASC');
        if (filters.type) {
            query.where('category.id IN(:types)', {
                types: filters.type.toString().split(','),
            });
        }
        return query.execute();
    }
};
exports.OpenStoryForCategoryRepository = OpenStoryForCategoryRepository;
exports.OpenStoryForCategoryRepository = OpenStoryForCategoryRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, database_decorator_1.EntityRepository)(category_entity_1.CategoryEntity)
], OpenStoryForCategoryRepository);
//# sourceMappingURL=open-story-for-category.repository.js.map