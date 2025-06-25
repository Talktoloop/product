import { Injectable, Inject, Logger } from '@nestjs/common';
import { chunkArray } from '../../common/helpers';
import axios from 'axios';
import { AirTableOrganisationInterface } from '../interface/airtable-organisation.interface';
import { OrganisationRepository } from '../../organisation/organisation.repository';
import { DI_CONSTANTS } from '../../common/constant/di.constant';
import { ConfigService } from '@nestjs/config';
import { AirTableOrganisationRO } from '../response/airtable-organisation.ro';
import { OrganisationEntity } from '../../organisation/entity/organisation.entity';
import rateLimit from 'axios-rate-limit';

@Injectable()
export class AirTableOrganisationService {
  private readonly logger = new Logger(AirTableOrganisationService.name);
  private readonly apiKey: string = this.config.get('airTable.apiKey');
  private readonly organisationsUrl: string = this.config.get(
    'airTable.url.organisations',
  );
  private readonly countriesUrl: string = this.config.get(
    'airTable.url.countries',
  );
  private axiosInstance: any;

  constructor(
    @Inject(DI_CONSTANTS.CONFIG)
    private readonly config: ConfigService,
    private readonly organisationRepository: OrganisationRepository,
  ) {
    this.axiosInstance = rateLimit(axios.create(), {
      maxRequests: 5,
      perMilliseconds: 1000,
    });
  }

  async importOrganisationsToAirtable(): Promise<
    AirTableOrganisationInterface[]
  > {
    const organisations =
      await this.organisationRepository.findOrganisationsToAirtable();
    const organisationsChunks = chunkArray(organisations, 10);
    const allAirTableOrganisations = [];

    for (const chunk of organisationsChunks) {
      const mappedChunk = await this.mapOrganisationToAirTable(chunk);
      const airTableOrganisations = await this.postOrganisationsToAirTable(
        mappedChunk,
      );
      allAirTableOrganisations.push(airTableOrganisations);
    }
    return allAirTableOrganisations;
  }

  async mapOrganisationToAirTable(
    organisations: AirTableOrganisationInterface[],
  ): Promise<{ fields: AirTableOrganisationInterface }[]> {
    const mappedOrganisations = await Promise.all(
      organisations.map(async (item) => {
        item.Verified = !!item.Verified;
        item.Country = await this.mapCountryNameToAirTableId(
          item.Country as string,
        );
        item.Created = true;
        return { fields: JSON.parse(JSON.stringify(item)) };
      }),
    );

    return mappedOrganisations;
  }

  async mapCountryNameToAirTableId(countryName: string): Promise<string[]> {
    try {
      const result = await this.axiosInstance.get(
        `${this.countriesUrl}?filterByFormula=FIND('${countryName}', {Name})`,
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
          },
        },
      );
      const id = result?.data?.records?.[0]?.id;
      return id ? [id] : [];
    } catch (error) {
      this.logger.error(error.message);
    }
  }

  async postOrganisationsToAirTable(
    organisations: Record<string, any>,
  ): Promise<AirTableOrganisationRO[]> {
    try {
      const airTableOrganisationData = await this.axiosInstance.post(
        this.organisationsUrl,
        { records: organisations },
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
          },
        },
      );
      return airTableOrganisationData.data['records']
        ?.filter((field) => !!field)
        .map((record) => ({
          airTableOrganisationCellId: record['id'] as string,
          dBOrganisationId: record.fields['ID'] as string,
        }));
    } catch (error) {
      this.logger.error(error.message);
    }
  }

  async getAirTableOrgnisationCellId(organisationId: string): Promise<string> {
    try {
      const airTableOrganisationData = await this.axiosInstance.get(
        `${this.organisationsUrl}?filterByFormula=FIND('${organisationId}', {ID})`,
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
          },
        },
      );
      const airTableOrganisationId =
        airTableOrganisationData.data?.['records']?.[0]?.id;

      return airTableOrganisationId;
    } catch (error) {
      this.logger.error(error.message);
    }
  }

  async updateNumberOfStories(
    organisationId: string,
    numberOfStories: number,
  ): Promise<void> {
    try {
      const airTableId = await this.getAirTableOrgnisationCellId(
        organisationId,
      );
      if (airTableId) {
        await this.axiosInstance.patch(
          `${this.organisationsUrl}/${airTableId}`,
          { fields: { 'Number of stories': numberOfStories } },
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

  async syncNumberOfStoriesToAirtable(
    organisations: OrganisationEntity[],
  ): Promise<void> {
    try {
      await Promise.all(
        organisations.map(async (organisation: OrganisationEntity) => {
          const numberOfStories = (
            await this.organisationRepository.findOrganisationsToAirtable(
              organisation.id,
            )
          )?.[0]?.['Number of stories'];
          await this.updateNumberOfStories(organisation.id, numberOfStories);
        }),
      );
    } catch (error) {
      this.logger.error(error.message);
    }
  }
}
