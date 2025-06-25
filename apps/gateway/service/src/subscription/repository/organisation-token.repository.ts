import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { OrganisationTokenEntity } from '../entity/organisation-token.entity';

@EntityRepository(OrganisationTokenEntity)
export class OrganisationTokenRepository extends Repository<OrganisationTokenEntity> {
  async findByToken(token: string): Promise<OrganisationTokenEntity> {
    if (!token) return;

    return this.findOne({
      where: { token },
    });
  }

  async findByOrganisationId(
    organisationId: string,
  ): Promise<OrganisationTokenEntity> {
    if (!organisationId) return;

    return this.findOne({
      where: { organisationId },
    });
  }
}
