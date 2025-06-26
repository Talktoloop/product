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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenStoryForStoryRepository = void 0;
const common_1 = require("@nestjs/common");
const story_repository_1 = require("../../story/repository/story.repository");
const typeorm_1 = require("typeorm");
const typeorm_2 = __importDefault(require("../../config/typeorm"));
const database_decorator_1 = require("../../database/database.decorator");
const story_entity_1 = require("../../story/entity/story.entity");
const shared_1 = require("@ourloop/shared");
const helpers_1 = require("../../common/helpers");
const date_fns_1 = require("date-fns");
let OpenStoryForStoryRepository = class OpenStoryForStoryRepository extends story_repository_1.StoryRepository {
    constructor() {
        super(...arguments);
        this.subQueryThematic = (sub, status, filters, id) => {
            let query = sub
                .select('COUNT(DISTINCT story.id)', 'count')
                .addSelect('CASE WHEN thematic.parent_thematic_id IS NOT NULL THEN thematic.parent_thematic_id ELSE thematic.id END', 'thematicId')
                .addFrom('story', 'story')
                .leftJoin('story.categories', 'category')
                .leftJoin('story.thematics', 'thematic')
                .where('thematic_id IS NOT NULL')
                .andWhere('status =:status', { status });
            if (id) {
                query.andWhere('category.id = :id', { id });
            }
            query.groupBy('thematic.id').addGroupBy('thematic.parent_thematic_id');
            if (!(0, helpers_1.isEmpty)(filters)) {
                query = (0, helpers_1.addFilterCondition)(filters, (0, helpers_1.addFilterJoins)(query));
            }
            return query;
        };
        this.partialQueryForGetStoriesDividedByDisabilities = (sub, status, isSub = false, filters) => {
            let subQuery = sub
                .select('difficulty.code', 'code')
                .addSelect('COUNT(difficulty.id)', 'count')
                .where('status = :status', { status })
                .andWhere('difficulty.id IS NOT NULL')
                .groupBy('difficulty.id');
            if (isSub) {
                subQuery.from('story', 'story');
                subQuery = (0, helpers_1.addFilterCondition)(filters, (0, helpers_1.addFilterJoins)(subQuery));
                subQuery.addSelect(`CONCAT(difficulty.id, '',story.id)`, 'alias');
                subQuery.addGroupBy('alias');
            }
            return subQuery;
        };
    }
    findCountOfStoriesByFilter(filters) {
        let query = this.createQueryBuilder('story')
            .select('COUNT(DISTINCT story.id)', 'count')
            .where('story.status = :status', {
            status: shared_1.STORY_STATUS.PUBLISHED,
        });
        if (!(0, helpers_1.isEmpty)(filters)) {
            query = (0, helpers_1.addFilterCondition)(filters, (0, helpers_1.addFilterJoins)(query));
        }
        return query.execute();
    }
    async getSensitiveStoriesByPeriod(filters) {
        let query = this.createQueryBuilder('story')
            .select('DATE_FORMAT(story.created_at, "%Y-%m")', 'month')
            .addSelect('COUNT(DISTINCT story.id)', 'count');
        query = (0, helpers_1.addSensitiveStoryFilter)(query)
            .andWhere('story.created_at between :start and :end', {
            start: (0, date_fns_1.formatISO)((0, date_fns_1.startOfMonth)(new Date(filters.from))),
            end: (0, date_fns_1.formatISO)((0, date_fns_1.endOfMonth)(new Date(filters.to))),
        })
            .orderBy('month')
            .groupBy('month');
        if (!(0, helpers_1.isEmpty)(filters)) {
            query = (0, helpers_1.addFilterCondition)((0, shared_1._omit)(filters, ['from', 'to']), (0, helpers_1.addFilterJoins)(query));
        }
        return query.execute();
    }
    async getStoriesPerThematicArea(filters, status, id) {
        const connection = await (0, helpers_1.getConnection)(typeorm_2.default);
        const query = connection
            .createQueryBuilder()
            .select('i.thematicId')
            .addSelect('MAX(i.count)', 'count')
            .from((subQuery) => this.subQueryThematic(subQuery, status, filters, id), 'i')
            .groupBy('i.thematicId');
        return query.execute();
    }
    async getCountOfSensitiveStoriesDividedByGender(filters) {
        let query = this.createQueryBuilder('story')
            .select('COUNT(DISTINCT story.id)', 'count')
            .addSelect('recipient.genderByModerator', 'gender')
            .leftJoin('story.recipient', 'recipient');
        query = (0, helpers_1.addSensitiveStoryFilter)(query).groupBy('gender');
        if (!(0, helpers_1.isEmpty)(filters)) {
            query = (0, helpers_1.addFilterCondition)(filters, (0, helpers_1.addFilterJoins)(query, ['story.recipient']));
        }
        return query.execute();
    }
    async getCountOfStoriesForStoryTypeDividedByGender(id, filters) {
        let query = this.createQueryBuilder('story')
            .select('COUNT(DISTINCT story.id)', 'count')
            .addSelect('recipient.genderByModerator', 'gender')
            .leftJoin('story.recipient', 'recipient')
            .where({ status: shared_1.STORY_STATUS.PUBLISHED })
            .andWhere('type.id = :id', { id })
            .groupBy('gender');
        if (!(0, helpers_1.isEmpty)(filters)) {
            query = (0, helpers_1.addFilterCondition)(filters, (0, helpers_1.addFilterJoins)(query, ['story.recipient']));
        }
        else {
            query.leftJoin('story.categories', 'type');
        }
        return query.execute();
    }
    async getCountOfSensitiveStoriesDividedByAge(filters) {
        let query = this.createQueryBuilder('story')
            .select('COUNT(DISTINCT story.id)', 'count')
            .addSelect('recipient.ageByModerator', 'age')
            .leftJoin('story.recipient', 'recipient');
        query = (0, helpers_1.addSensitiveStoryFilter)(query).groupBy('age');
        if (!(0, helpers_1.isEmpty)(filters)) {
            query = (0, helpers_1.addFilterCondition)(filters, (0, helpers_1.addFilterJoins)(query, ['story.recipient']));
        }
        return query.execute();
    }
    async getCountOfStoriesForStoryTypeDividedByAge(id, filters) {
        let query = this.createQueryBuilder('story')
            .select('COUNT(DISTINCT story.id)', 'count')
            .addSelect('recipient.ageByModerator', 'age')
            .leftJoin('story.recipient', 'recipient')
            .where({ status: shared_1.STORY_STATUS.PUBLISHED })
            .andWhere('type.id = :id', { id })
            .groupBy('age');
        if (!(0, helpers_1.isEmpty)(filters)) {
            query = (0, helpers_1.addFilterCondition)(filters, (0, helpers_1.addFilterJoins)(query, ['story.recipient']));
        }
        else {
            query.leftJoin('story.categories', 'type');
        }
        return query.execute();
    }
    organisationBase(filters) {
        let query = this.createQueryBuilder('story')
            .select('story.id')
            .leftJoin('story.commentsRel', 'comments')
            .leftJoin('comments.user', 'user')
            .where({ status: shared_1.STORY_STATUS.PUBLISHED })
            .andWhere('comments.status = :commentsStatus', {
            commentsStatus: shared_1.COMMENT_STATUS.PUBLISHED,
        })
            .andWhere('user.organisation IS NOT NULL')
            .groupBy('story.id');
        if (!(0, helpers_1.isEmpty)(filters)) {
            query = (0, helpers_1.addFilterCondition)(filters, (0, helpers_1.addFilterJoins)(query));
        }
        return query;
    }
    async getStoriesTotal(filters) {
        if (!filters)
            return this.count({ where: { status: shared_1.STORY_STATUS.PUBLISHED } });
        let query = this.createQueryBuilder('story')
            .select('story.id')
            .where({ status: shared_1.STORY_STATUS.PUBLISHED });
        if (!(0, helpers_1.isEmpty)(filters)) {
            query = (0, helpers_1.addFilterCondition)(filters, (0, helpers_1.addFilterJoins)(query));
        }
        return query.getCount();
    }
    async getCountOfStoriesWithResponds(filters) {
        let query = this.createQueryBuilder('story')
            .select('story.id')
            .leftJoin('story.commentsRel', 'comments')
            .where({ status: shared_1.STORY_STATUS.PUBLISHED })
            .andWhere('comments.status = :commentsStatus', {
            commentsStatus: shared_1.COMMENT_STATUS.PUBLISHED,
        })
            .groupBy('story.id');
        if (!(0, helpers_1.isEmpty)(filters)) {
            query = (0, helpers_1.addFilterCondition)(filters, (0, helpers_1.addFilterJoins)(query));
        }
        return query.getCount();
    }
    async getCountOfStoriesWithOrganisationResponds(filters) {
        return this.organisationBase(filters).getCount();
    }
    async getUniqueTaggedOrganisationIds(filters) {
        let query = this.createQueryBuilder('story')
            .select('organisation_id', 'id')
            .where({ status: shared_1.STORY_STATUS.PUBLISHED })
            .andWhere('organisation_id IS NOT NULL')
            .groupBy('organisation_id');
        if (!(0, helpers_1.isEmpty)(filters)) {
            query = (0, helpers_1.addFilterCondition)(filters, (0, helpers_1.addFilterJoins)(query));
        }
        else {
            query.leftJoin('story_organisation', 'story_organisation', 'story.id = story_organisation.story_id');
        }
        return query.execute();
    }
    async getUniqueNotAnonymousStoryAuthors(filters) {
        let query = this.createQueryBuilder('story')
            .select('user_id', 'userId')
            .addSelect('user.nickname', 'nickname')
            .leftJoin('story.user', 'user')
            .where({ status: shared_1.STORY_STATUS.PUBLISHED })
            .andWhere(new typeorm_1.Brackets((qb) => {
            qb.where('story.user_id is not null');
            qb.orWhere('user.nickname is not null');
        }))
            .groupBy('userId, user.nickname');
        if (!(0, helpers_1.isEmpty)(filters)) {
            query = (0, helpers_1.addFilterCondition)(filters, (0, helpers_1.addFilterJoins)(query));
        }
        return query.execute();
    }
    async getNumberOfAnonymousStoryAuthors(filters) {
        let query = this.createQueryBuilder('story')
            .select('user_id', 'userId')
            .addSelect('user.nickname', 'nickname')
            .leftJoin('story.user', 'user')
            .where({ status: shared_1.STORY_STATUS.PUBLISHED })
            .andWhere('story.user_id is null')
            .andWhere('user.nickname is null');
        if (!(0, helpers_1.isEmpty)(filters)) {
            query = (0, helpers_1.addFilterCondition)(filters, (0, helpers_1.addFilterJoins)(query));
        }
        return query.getCount();
    }
    async getNumberOStoriesByStatus(filters, status) {
        let query = this.createQueryBuilder('story').where('story.status = :status', {
            status,
        });
        if (!(0, helpers_1.isEmpty)(filters)) {
            query = (0, helpers_1.addFilterCondition)(filters, (0, helpers_1.addFilterJoins)(query));
        }
        return query.getCount();
    }
    async getStoriesDividedByDisabilities(filters) {
        const query = this.createQueryBuilder('story');
        const connection = await (0, helpers_1.getConnection)(typeorm_2.default);
        if (!(0, helpers_1.isEmpty)(filters)) {
            const queryParent = connection
                .createQueryBuilder()
                .select('COUNT(sub.code)', 'count')
                .addSelect('sub.code', 'code')
                .addFrom((subQuery) => this.partialQueryForGetStoriesDividedByDisabilities(subQuery, shared_1.STORY_STATUS.PUBLISHED, true, filters), 'sub')
                .addGroupBy('sub.code');
            return queryParent.execute();
        }
        else {
            return this.partialQueryForGetStoriesDividedByDisabilities(query, shared_1.STORY_STATUS.PUBLISHED)
                .leftJoin('story.difficulties', 'difficulty')
                .execute();
        }
    }
    async getNumberOfSensitiveStories(filters) {
        let query = this.createQueryBuilder('story');
        query = (0, helpers_1.addSensitiveStoryFilter)(query);
        if (!(0, helpers_1.isEmpty)(filters)) {
            query = (0, helpers_1.addFilterCondition)(filters, (0, helpers_1.addFilterJoins)(query));
        }
        return query.getCount();
    }
    async getAvgStoryResponseTimePerStoryType(storyTypeId, filters) {
        let query = this.createQueryBuilder('story')
            .select('TIMESTAMPDIFF(MINUTE, story.published_at, story_comment.published_at)', 'time')
            .innerJoin('story_comment', 'story_comment', 'story_comment.id = (SELECT id FROM story_comment c WHERE c.story_id = story.id AND c.status = :commentStatus ORDER BY published_at ASC LIMIT 1 )')
            .innerJoin('story_category', 'sc', 'sc.story_id = story.id')
            .where('story.status =  :storyStatus')
            .andWhere('sc.category_id = :storyTypeId')
            .groupBy('story_comment.id')
            .addGroupBy('story.published_at')
            .setParameters({
            commentStatus: shared_1.COMMENT_STATUS.PUBLISHED,
            storyStatus: shared_1.STORY_STATUS.PUBLISHED,
            storyTypeId,
        });
        if (!(0, helpers_1.isEmpty)(filters)) {
            query = (0, helpers_1.addFilterCondition)(filters, (0, helpers_1.addFilterJoins)(query));
        }
        return query.execute();
    }
    async getAvgResponseTime(filters) {
        let query = this.createQueryBuilder('story')
            .select('TIMESTAMPDIFF(MINUTE, story.published_at, story_comment.published_at)', 'time')
            .addSelect('story_comment.id')
            .innerJoin('story_comment', 'story_comment', 'story_comment.id = (SELECT id FROM story_comment c WHERE c.story_id = story.id AND c.status = :commentStatus ORDER BY published_at ASC LIMIT 1 )')
            .innerJoin('story_category', 'sc', 'sc.story_id = story.id')
            .where('story.status =  :storyStatus')
            .groupBy('story_comment.id')
            .addGroupBy('story.published_at')
            .setParameters({
            commentStatus: shared_1.COMMENT_STATUS.PUBLISHED,
            storyStatus: shared_1.STORY_STATUS.PUBLISHED,
        });
        if (!(0, helpers_1.isEmpty)(filters)) {
            query = (0, helpers_1.addFilterCondition)(filters, (0, helpers_1.addFilterJoins)(query));
        }
        return query.execute();
    }
};
exports.OpenStoryForStoryRepository = OpenStoryForStoryRepository;
exports.OpenStoryForStoryRepository = OpenStoryForStoryRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, database_decorator_1.EntityRepository)(story_entity_1.StoryEntity)
], OpenStoryForStoryRepository);
//# sourceMappingURL=open-story-for-story.repository.js.map