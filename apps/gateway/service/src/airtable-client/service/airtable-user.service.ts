import { Injectable, Inject, Logger } from '@nestjs/common';
import { chunkArray } from '../../common/helpers';
import axios from 'axios';
import { AirTableUserInterface } from '../interface/airtable-user.interface';
import { UserRepository } from '../../user/repository/user.repository';
import { DI_CONSTANTS } from '../../common/constant/di.constant';
import { ConfigService } from '@nestjs/config';
import { OrganisationApplicationRepository } from '../../user/repository/organisation-application.repository';
import { AirTableOrganisationService } from './airtable-organisation.service';
import { AirTableUserRO } from '../response/airtable-user.ro';
import { OrganisationRepository } from '../../organisation/organisation.repository';
import { REGISTRATION_STATUS } from '../../user/constant/registration-status.constant';
import { getCurrentDateInCustomFormat } from '../../common/helpers';
import rateLimit from 'axios-rate-limit';

@Injectable()
export class AirTableUserService {
  private readonly logger = new Logger(AirTableUserService.name);
  private readonly apiKey: string = this.config.get('airTable.apiKey');
  private readonly disableSync: boolean = this.config.get('airTable.disableSync');
  private readonly usersUrl: string = this.config.get('airTable.url.users');
  private readonly organisationsUrl: string = this.config.get(
    'airTable.url.organisations',
  );
  private axiosInstance: any;
  constructor(
    private readonly userRepository: UserRepository,
    @Inject(DI_CONSTANTS.CONFIG)
    private readonly config: ConfigService,
    private readonly organisationApplicationRepository: OrganisationApplicationRepository,
    private readonly airTableOrganisationService: AirTableOrganisationService,
    private readonly organisationRepository: OrganisationRepository,
  ) {
    this.axiosInstance = rateLimit(axios.create(), {
      maxRequests: 5,
      perMilliseconds: 1000,
    });
  }

  async importUsersToAirtable(): Promise<AirTableUserInterface[]> {
    if (this.disableSync) return [];
    const users = await this.userRepository.findUsersToAirtable();
    const usersChunks = chunkArray(users, 10);
    const allAirTableUsers = [];

    for (const chunk of usersChunks) {
      const mappedChunk = this.mapUserToAirTable(chunk);

      const airTableUsers = await this.postUsersToAirTable(mappedChunk);
      allAirTableUsers.push(...airTableUsers);
    }

    await this.findAndUpdateAirTableOrganisation(allAirTableUsers);

    return allAirTableUsers;
  }

  mapUserToAirTable(
    users: AirTableUserInterface[],
    moderatorNickname?: string,
  ) {
    const mappedUsers = users.map((item) => {
      if (item['Account status'] === REGISTRATION_STATUS.INVITED) {
        item['Invited by'] = moderatorNickname;
        item['Date of invitation'] = getCurrentDateInCustomFormat();
      }
      return { fields: JSON.parse(JSON.stringify(item)) };
    });
    return mappedUsers;
  }

  async postUsersToAirTable(
    users: { fields: AirTableUserInterface }[],
  ): Promise<AirTableUserRO[]> {
    if (this.disableSync) return [];
    try {
      const airTableUserData = await this.axiosInstance.post(
        this.usersUrl,
        { records: users },
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
          },
        },
      );
      return airTableUserData.data['records']
        ?.filter((field) => !!field)
        .map((record) => ({
          airTableUserCellId: record['id'] as string,
          dBUserId: record.fields['ID'] as string,
        }));
    } catch (error) {
      this.logger.error(error.message);
    }
  }

  async findAndUpdateAirTableOrganisation(
    airTableUsers: AirTableUserRO[],
  ): Promise<void> {
    if (this.disableSync) return;
    try {
      for (const airTableUser of airTableUsers) {
        const { dBUserId } = airTableUser;
        let { airTableUserCellId } = airTableUser;

        if (!airTableUserCellId) {
          airTableUserCellId = (await this.getAirTableUserData(dBUserId))
            ?.airTableId;
        }

        if (!dBUserId) return;

        const user = await this.userRepository.findOne({
          where: { id: dBUserId },
        });

        if (user?.organisation_id) {
          const airTableOrganisationCellId =
            await this.airTableOrganisationService.getAirTableOrgnisationCellId(
              user.organisation_id,
            );
          if (airTableOrganisationCellId && airTableUserCellId) {
            await this.updateAirTableUsersOrganisationOrApplication(
              airTableUserCellId,
              airTableOrganisationCellId,
              true,
            );
          }
        }
        if (user) {
          await this.updateAirTableApplication(dBUserId, airTableUserCellId);
        }
      }
    } catch (error) {
      this.logger.error(error.message);
    }
  }

  async updateAirTableApplication(
    userId: string,
    airTableUserCellId: string,
  ): Promise<void> {
    if (this.disableSync) return;
    try {
      if (!userId) return;

      const application = await this.organisationApplicationRepository.findOne({
        where: { userId },
      });
      if (application) {
        const airTableOrganisationCellId =
          await this.airTableOrganisationService.getAirTableOrgnisationCellId(
            application?.organisationId,
          );

        if (airTableOrganisationCellId) {
          await this.updateAirTableUsersOrganisationOrApplication(
            airTableUserCellId,
            airTableOrganisationCellId,
            false,
          );
        }
      }
    } catch (error) {
      this.logger.error(error.message);
    }
  }

  async getAirTableUserData(userId: string): Promise<any> {
    if (this.disableSync) return;
    try {
      const airTableUser = await this.axiosInstance.get(
        `${this.usersUrl}?filterByFormula=FIND('${userId}', {ID})`,
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
          },
        },
      );

      const user = airTableUser?.data['records']?.map((record: any) => ({
        id: record.fields['ID'] ?? null,
        email: record.fields['Email'] ?? null,
        nickname: record.fields['Nickname'] ?? null,
        organisation: record.fields['Organisation']?.[0] ?? [],
        applications: record.fields['Applies to']?.[0] ?? [],
        airTableId: record.id,
        lastActivity: record.fields['Last activity'] ?? null,
      }));

      return user[0];
    } catch (error) {
      this.logger.error(error.message);
    }
  }

  async updateAirTableUser(userData: AirTableUserInterface): Promise<void> {
    if (this.disableSync) return;
    const airTableUserId = (await this.getAirTableUserData(userData?.ID))
      ?.airTableId;
    if (airTableUserId) {
      try {
        await this.axiosInstance.patch(
          `${this.usersUrl}/${airTableUserId}`,
          {
            fields: userData,
          },
          {
            headers: {
              Authorization: `Bearer ${this.apiKey}`,
            },
          },
        );
      } catch (error) {
        this.logger.error(error.message);
      }
    }
  }

  async updateAirTableUsersOrganisationOrApplication(
    airTableUserId: string,
    airTableOrganisationId: string,
    updateOrganisation: boolean,
  ): Promise<void> {
    if (this.disableSync) return;
    try {
      if (airTableOrganisationId) {
        let fieldsToUpdate: Record<string, string[]> = {};
        updateOrganisation
          ? (fieldsToUpdate = {
              Organisation: [airTableOrganisationId],
            })
          : (fieldsToUpdate = {
              'Applies to': [airTableOrganisationId],
            });
        this.axiosInstance.patch(
          `${this.usersUrl}/${airTableUserId}`,
          {
            fields: fieldsToUpdate,
          },
          {
            headers: {
              Authorization: `Bearer ${this.apiKey}`,
            },
          },
        );
      }
    } catch (error) {
      this.logger.error(error.message);
    }
  }

  async findByEmailAndUpdateId(userEmail: string, newId: string) {
    if (this.disableSync) return;
    try {
      const airTableUserData = await this.axiosInstance.get(
        `${this.usersUrl}?filterByFormula=FIND('${userEmail}', {Email})`,
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
          },
        },
      );
      const airTableUserId = airTableUserData.data['records']?.[0]?.id;
      if (airTableUserId) {
        await this.axiosInstance.patch(
          `${this.usersUrl}/${airTableUserId}`,
          {
            fields: { ID: newId },
          },
          {
            headers: {
              Authorization: `Bearer ${this.apiKey}`,
            },
          },
        );
      }
    } catch (error) {
      this.logger.error(error.message);
    }
  }

  async updateNumberOfUsers(
    organisationId: string,
    numberOfUsers: number,
  ): Promise<void> {
    if (this.disableSync) return;
    try {
      const airTableId =
        await this.airTableOrganisationService.getAirTableOrgnisationCellId(
          organisationId,
        );
      await this.axiosInstance.patch(
        `${this.organisationsUrl}/${airTableId}`,
        { fields: { 'Number of users': numberOfUsers } },
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
          },
        },
      );
    } catch (error) {
      this.logger.error(error.message);
    }
  }

  async syncNumberOfUsersToAirtable(organisationId: string): Promise<void> {
    if (this.disableSync) return;
    try {
      const numberOfUsers = (
        await this.organisationRepository.findOrganisationsToAirtable(
          organisationId,
        )
      )?.[0]?.['Number of users'];
      await this.updateNumberOfUsers(organisationId, numberOfUsers);
    } catch (error) {
      this.logger.error(error.message);
    }
  }

  async updateLastActivity(time: Date, userId: string): Promise<void> {
    if (this.disableSync) return;
    const airTableUserData = await this.getAirTableUserData(userId);
    const airTableLastActivity = airTableUserData?.lastActivity?.replace(
      /(\d{4})-(\d{2})-(\d{2})/,
      '$2/$3/$1',
    );
    const lastActivity = getCurrentDateInCustomFormat(time);

    if (lastActivity && lastActivity !== airTableLastActivity) {
      try {
        await this.axiosInstance.patch(
          `${this.usersUrl}/${airTableUserData?.airTableId}`,
          {
            fields: { 'Last activity': lastActivity },
          },
          {
            headers: {
              Authorization: `Bearer ${this.apiKey}`,
            },
          },
        );
      } catch (error) {
        this.logger.error(error.message);
      }
    }
  }
}
