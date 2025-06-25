import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { OrganisationApplicationRepository } from '../repository/organisation-application.repository';
import { OrganisationApplicationEntity } from '../entity/organisation-application.entity';
import { DeleteResult } from 'typeorm';
import { SAVE_ORGANISATION_APPLICATION_ERROR } from '@ourloop/shared';
import { AirTableUserService } from '../../airtable-client/service/airtable-user.service';
import { UserService } from '../../user/service/user.service';

@Injectable()
export class OrganisationApplicationService {
  private readonly logger = new Logger(OrganisationApplicationService.name);

  constructor(
    private readonly organisationApplicationRepository: OrganisationApplicationRepository,
    private readonly airTableUserService: AirTableUserService,
    private readonly userService: UserService,
  ) {}

  async removeApplicationById(id: number): Promise<DeleteResult> {
    return this.organisationApplicationRepository.delete(id);
  }

  async removeApplicationByUserId(userId: string): Promise<DeleteResult> {
    return this.organisationApplicationRepository.delete({ userId });
  }

  async saveApplication(
    userId: string,
    organisationId: string,
  ): Promise<OrganisationApplicationEntity> {
    const organisationApplication = await this.organisationApplicationRepository
      .save({
        userId,
        organisationId,
      })
      .catch((error) => {
        console.log(error);
        this.logger.error(error.response);
        throw new BadRequestException(SAVE_ORGANISATION_APPLICATION_ERROR);
      });

    if (organisationApplication) {
      const status = await this.userService.updateUserAccountStatus(userId);
      await this.airTableUserService.updateAirTableUser({
        ID: userId,
        'Account status': status,
      });

      const userAirTableId = (
        await this.airTableUserService.getAirTableUserData(userId)
      )?.airTableId;
      await this.airTableUserService.updateAirTableApplication(
        userId,
        userAirTableId,
      );
    }

    return organisationApplication;
  }
}
