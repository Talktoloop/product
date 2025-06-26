"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OrganisationRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganisationRepository = void 0;
const typeorm_1 = require("typeorm");
const database_decorator_1 = require("../database/database.decorator");
const organisation_entity_1 = require("./entity/organisation.entity");
const shared_1 = require("@ourloop/shared");
const common_1 = require("@nestjs/common");
const comment_entity_1 = require("../comment/entity/comment.entity");
const user_entity_1 = require("../user/entity/user.entity");
const microservices_1 = require("@nestjs/microservices");
const role_constant_1 = require("../user/constant/role.constant");
const country_entity_1 = require("../country/entity/country.entity");
const story_entity_1 = require("../story/entity/story.entity");
let OrganisationRepository = OrganisationRepository_1 = class OrganisationRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger(OrganisationRepository_1.name);
    }
    findAll() {
        return this.find();
    }
    findOrganisationsByPhrase(phrase) {
        return this.find({
            where: {
                name: (0, typeorm_1.Like)(`%${phrase}%`),
            },
        });
    }
    findOrganisationsByIdsAndStatus(ids) {
        return this.find({
            where: {
                id: (0, typeorm_1.In)(ids),
            },
            relations: ['country'],
        });
    }
    async findByIdOrFail(id) {
        if (!id) {
            throw new shared_1.CustomError(shared_1.ORGANIZATION_NOT_FOUND, {
                error: 'Organisation ID does not exist',
            });
        }
        return this.findOne({ where: { id } }).then((data) => {
            if (!data) {
                throw new shared_1.CustomError(shared_1.ORGANIZATION_NOT_FOUND, {
                    error: 'Organisation ID does not exist',
                });
            }
            return data;
        });
    }
    async getOrganisationsByRole(role) {
        const query = this.createQueryBuilder('organisation')
            .select('organisation.id', 'id')
            .addSelect('organisation.name', 'name')
            .addSelect('organisation.acronym', 'acronym')
            .addSelect('organisation.country_id', 'countryId')
            .addSelect('c.code', 'countryCode')
            .leftJoin('country', 'c', 'organisation.country_id = c.id')
            .addSelect((subQuery) => {
            return subQuery
                .select('COUNT(*)', 'storiesCount')
                .from(organisation_entity_1.OrganisationEntity, 'o')
                .innerJoin('story_organisation', 'so', 'so.organisation_id = o.id')
                .innerJoin('story', 's', 's.id = so.story_id and s.status = :status', {
                status: shared_1.STORY_STATUS.PUBLISHED,
            })
                .where('o.id = organisation.id');
        }, 'storiesCount');
        if (role >= role_constant_1.ROLE.MODERATOR) {
            query.addSelect((subQuery) => {
                return subQuery
                    .select('COUNT(*)', 'usersCount')
                    .from(user_entity_1.UserEntity, 'u')
                    .where('u.organisation_id = organisation.id');
            }, 'usersCount');
        }
        return query.execute().catch((error) => {
            this.logger.error(error);
            throw new common_1.BadRequestException(shared_1.GET_ORGANIZATIONS_FAILED);
        });
    }
    async findOrganisationsWithNumberOfComments(languageId, publicationDuration) {
        return this.createQueryBuilder('organisation')
            .select('organisation_id', 'organisationId')
            .addSelect('organisation.name', 'organisationName')
            .addSelect('s.id', 'storyId')
            .addSelect('st.content', 'content')
            .addSelect('s.language_id', 'originalLanguageId')
            .addSelect((subQuery) => {
            return subQuery
                .select('COUNT(*)', 'numberOfComments')
                .from(comment_entity_1.CommentEntity, 'c')
                .innerJoin('user', 'u', 'u.id = c.user_id')
                .where('c.story_id = s.id')
                .andWhere('u.organisation_id = organisation.id');
        }, 'numberOfComments')
            .innerJoin('story_organisation', 'so', 'so.organisation_id = organisation.id')
            .innerJoin('story', 's', 's.id = so.story_id')
            .leftJoin('story_translation', 'st', `st.story_id = s.id and st.language_id = ${languageId}`)
            .where(`s.status = "${shared_1.STORY_STATUS.PUBLISHED}"`)
            .andWhere(`s.published_at >= NOW() - INTERVAL ${publicationDuration} DAY`)
            .orderBy('organisation_id', 'ASC')
            .execute()
            .catch((error) => {
            this.logger.error(error);
            throw new microservices_1.RpcException(shared_1.GET_ORGANIZATIONS_FAILED);
        });
    }
    findOriganisationsByPhrases(phrases) {
        return this.find({
            where: phrases.map((prahse) => ({ name: (0, typeorm_1.Like)(`%${prahse}%`) })),
        });
    }
    async findOrganisationsToAirtable(organisationId) {
        let queryBuilder = this.createQueryBuilder('organisation')
            .select('organisation.id', 'ID')
            .addSelect('organisation.name', 'Name')
            .addSelect('organisation.acronym', 'Acronym')
            .addSelect('organisation.verified', 'Verified')
            .addSelect((subQuery) => {
            return subQuery
                .select('name')
                .from(country_entity_1.CountryEntity, 'country')
                .where('organisation.country_id = country.id');
        }, 'Country')
            .addSelect((subQuery) => {
            return subQuery
                .select('COUNT(*)')
                .from(user_entity_1.UserEntity, 'user')
                .where('organisation.id = user.organisation_id');
        }, 'Number of users')
            .addSelect((subQuery) => {
            return subQuery
                .select('COUNT(*)')
                .from(story_entity_1.StoryEntity, 'story')
                .innerJoin('story.organisations', 'org')
                .where('org.id = organisation.id');
        }, 'Number of stories');
        if (organisationId) {
            queryBuilder = queryBuilder.where('organisation.id = :organisationId', {
                organisationId,
            });
        }
        return queryBuilder.execute().catch((error) => {
            this.logger.error(error);
            throw new common_1.BadRequestException(shared_1.GET_ORGANIZATIONS_FAILED);
        });
    }
};
exports.OrganisationRepository = OrganisationRepository;
exports.OrganisationRepository = OrganisationRepository = OrganisationRepository_1 = __decorate([
    (0, database_decorator_1.EntityRepository)(organisation_entity_1.OrganisationEntity)
], OrganisationRepository);
//# sourceMappingURL=organisation.repository.js.map