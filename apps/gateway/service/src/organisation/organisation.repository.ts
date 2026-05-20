import { Repository, Like, In } from 'typeorm';
import { EntityRepository } from '../database/database.decorator';
import { OrganisationEntity } from './entity/organisation.entity';
import {
  CustomError,
  ORGANIZATION_NOT_FOUND,
  GET_ORGANIZATIONS_FAILED,
  STORY_STATUS,
} from '@ourloop/shared';
import { Logger, BadRequestException } from '@nestjs/common';
import { CommentEntity } from '../comment/entity/comment.entity';
import { UserEntity } from '../user/entity/user.entity';
import { RpcException } from '@nestjs/microservices';
import { ROLE } from '../user/constant/role.constant';
import { OrganisationWithDetails } from './type/organisation-with-details.type';
import { AirTableOrganisationInterface } from '../airtable-client/interface/airtable-organisation.interface';
import { CountryEntity } from '../country/entity/country.entity';
import { StoryEntity } from '../story/entity/story.entity';

@EntityRepository(OrganisationEntity)
export class OrganisationRepository extends Repository<OrganisationEntity> {
  private readonly logger = new Logger(OrganisationRepository.name);

  findAll(): Promise<OrganisationEntity[]> {
    return this.find();
  }

  findOrganisationsByPhrase(phrase: string): Promise<OrganisationEntity[]> {
    return this.find({
      where: {
        name: Like(`%${phrase}%`),
      },
    });
  }

  findOrganisationsByIdsAndStatus(
    ids: string[], // verified?: boolean,
  ): Promise<OrganisationEntity[]> {
    return this.find({
      where: {
        id: In(ids),
        //verified,
      },
      relations: ['country'],
    });
  }

  async findByIdOrFail(id: string): Promise<OrganisationEntity> {
    if (!id) {
      throw new CustomError(ORGANIZATION_NOT_FOUND, {
        error: 'Organisation ID does not exist',
      });
    }

    return this.findOne({ where: { id } }).then((data) => {
      if (!data) {
        throw new CustomError(ORGANIZATION_NOT_FOUND, {
          error: 'Organisation ID does not exist',
        });
      }

      return data;
    });
  }

  async getOrganisationsByRole(role: ROLE): Promise<OrganisationWithDetails[]> {
    const query = this.createQueryBuilder('organisation')
      .select('organisation.id', 'id')
      .addSelect('organisation.name', 'name')
      .addSelect('organisation.acronym', 'acronym')
      .addSelect('organisation.country_id', 'countryId')
      .addSelect('c.code', 'countryCode')
      .addSelect('c.name', 'countryName')
      .leftJoin('country', 'c', 'organisation.country_id = c.id')
      .addSelect((subQuery) => {
        return subQuery
          .select('COUNT(*)', 'storiesCount')
          .from(OrganisationEntity, 'o')
          .innerJoin('story_organisation', 'so', 'so.organisation_id = o.id')
          .innerJoin(
            'story',
            's',
            's.id = so.story_id and s.status = :status',
            {
              status: STORY_STATUS.PUBLISHED,
            },
          )
          .where('o.id = organisation.id');
      }, 'storiesCount');

    if (role >= ROLE.MODERATOR) {
      query.addSelect((subQuery) => {
        return subQuery
          .select('COUNT(*)', 'usersCount')
          .from(UserEntity, 'u')
          .where('u.organisation_id = organisation.id');
      }, 'usersCount');
    }

    return query.execute().catch((error) => {
      this.logger.error(error);
      throw new BadRequestException(GET_ORGANIZATIONS_FAILED);
    });
  }

  async findOrganisationsWithNumberOfComments(
    languageId: number,
    publicationDuration: number,
  ): Promise<
    Array<{
      organisationId: string;
      organisationName: string;
      storyId: string;
      numberOfComments: number;
      content: string;
      originalLanguageId: number;
    }>
  > {
    return this.createQueryBuilder('organisation')
      .select('organisation_id', 'organisationId')
      .addSelect('organisation.name', 'organisationName')
      .addSelect('s.id', 'storyId')
      .addSelect('st.content', 'content')
      .addSelect('s.language_id', 'originalLanguageId')
      .addSelect((subQuery) => {
        return subQuery
          .select('COUNT(*)', 'numberOfComments')
          .from(CommentEntity, 'c')
          .innerJoin('user', 'u', 'u.id = c.user_id')
          .where('c.story_id = s.id')
          .andWhere('u.organisation_id = organisation.id');
      }, 'numberOfComments')
      .innerJoin(
        'story_organisation',
        'so',
        'so.organisation_id = organisation.id',
      )
      .innerJoin('story', 's', 's.id = so.story_id')
      .leftJoin(
        'story_translation',
        'st',
        `st.story_id = s.id and st.language_id = ${languageId}`,
      )
      .where(`s.status = "${STORY_STATUS.PUBLISHED}"`)
      .andWhere(`s.published_at >= NOW() - INTERVAL ${publicationDuration} DAY`)
      .orderBy('organisation_id', 'ASC')
      .execute()
      .catch((error) => {
        this.logger.error(error);
        throw new RpcException(GET_ORGANIZATIONS_FAILED);
      });
  }

  findOriganisationsByPhrases(
    phrases: string[],
  ): Promise<OrganisationEntity[]> {
    return this.find({
      where: phrases.map((prahse) => ({ name: Like(`%${prahse}%`) })),
    });
  }

  async findOrganisationsToAirtable(
    organisationId?: string,
  ): Promise<AirTableOrganisationInterface[]> {
    let queryBuilder = this.createQueryBuilder('organisation')
      .select('organisation.id', 'ID')
      .addSelect('organisation.name', 'Name')
      .addSelect('organisation.acronym', 'Acronym')
      .addSelect('organisation.verified', 'Verified')
      .addSelect((subQuery) => {
        return subQuery
          .select('name')
          .from(CountryEntity, 'country')
          .where('organisation.country_id = country.id');
      }, 'Country')
      .addSelect((subQuery) => {
        return subQuery
          .select('COUNT(*)')
          .from(UserEntity, 'user')
          .where('organisation.id = user.organisation_id');
      }, 'Number of users')
      .addSelect((subQuery) => {
        return subQuery
          .select('COUNT(*)')
          .from(StoryEntity, 'story')
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
      throw new BadRequestException(GET_ORGANIZATIONS_FAILED);
    });
  }
}
