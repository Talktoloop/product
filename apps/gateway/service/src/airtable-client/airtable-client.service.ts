import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { AirTableClientRepository } from './repository/airtable-client.repository';
import { CaseSyncEntity } from './entity/case-sync.entity';
import { CaseSyncAuthorPerspectiveEntity } from './entity/case-sync-author-perspective.entity';
import {
  AirTableSyncDTO,
  AirTableSyncInvestigationDTO,
  AirTableSyncAllegationReferralDTO,
  AirTableSyncAllegationReferralOrganisationDTO,
} from './request/dto/air-table-sync.dto';
import { UpdateResult, Repository } from 'typeorm';
import { CaseAuthorPerspectiveRepository } from './repository/case-author-perspective.repository';
import { CaseThematicAreaRepository } from './repository/case-thematic-area.repository';
import { CaseThematicAreaSubsectionRepository } from './repository/case-thematic-area-subsection.repository';
import { CaseSyncThematicAreaEntity } from './entity/case-sync-thematic-area.entity';
import { CaseSyncThematicAreaSubsectionEntity } from './entity/case-sync-thematic-area-subsection.entity';
import { CaseSyncInvestigationEntity } from './entity/case-sync-investigation.entity';
import * as AirTable from 'airtable-node';
import { CaseSyncSurvivorDisabilityEntity } from './entity/case-sync-survivor-disability.entity';
import { CaseSurvivorDisabilityAreaRepository } from './repository/case-survivor-disability.repository';
import { CaseSyncInvestigationRepository } from './repository/case-investigation.repository';
import { CaseSyncAllegationReferralRepository } from './repository/case-allegation-referral.repository';
import { CaseSyncAllegationReferralEntity } from './entity/case-sync-allegation_referral.entity';
import { CaseSyncAllegationReferralOrganisationRepository } from './repository/case-allegation-referral-organisation.repository';
import { CaseSyncAllegationReferralOrganisationEntity } from './entity/case-sync-allegation_referral_organisation.entity';
import { RELATION } from './enum/relation.enum';
import { CaseRelations } from './type/relation.enum';
import { DI_CONSTANTS } from '../common/constant/di.constant';
import { STORY_STATUS } from '@ourloop/shared';
import { StoryModeratorService } from '../story/service/story-moderator.service';
import { StoryService } from '../story/service/story.service';
import { RejectReasonService } from '../lexicon/service/reject-reason.service';
import { AirTableDeleteStoryDTO } from './request/dto/air-table-delete-story.dto';
import { SuccessRO } from '../common/response/success.ro';

@Injectable()
export class AirTableClientService {
  constructor(
    @Inject(forwardRef(() => StoryModeratorService))
    private readonly storyModeratorService: StoryModeratorService,
    @Inject(forwardRef(() => StoryService)) private readonly storyService: StoryService,
    private readonly airTableClientRepository: AirTableClientRepository,
    private readonly caseAuthorPerspectiveRepository: CaseAuthorPerspectiveRepository,
    private readonly caseThematicAreaRepository: CaseThematicAreaRepository,
    private readonly caseSurvivorDisabilityAreaRepository: CaseSurvivorDisabilityAreaRepository,
    private readonly caseThematicAreaSubsectionRepository: CaseThematicAreaSubsectionRepository,
    private readonly caseSyncInvestigationRepository: CaseSyncInvestigationRepository,
    private readonly rejectionReasonService: RejectReasonService,
    private readonly caseSyncAllegationReferralRepository: CaseSyncAllegationReferralRepository,
    private readonly caseSyncAllegationReferralOrganisationRepository: CaseSyncAllegationReferralOrganisationRepository,
    @Inject(DI_CONSTANTS.AIRTABLE)
    private readonly airTable: AirTable,
  ) { }

  async removeRow(caseUUID: string): Promise<UpdateResult> {
    return this.airTableClientRepository.softDelete(caseUUID);
  }

  async removeRows(ids: string[]): Promise<UpdateResult[]> {
    const cases = await this.airTableClientRepository.findNotAnonymized();
    const caseIds = cases.map((item) => item.caseUUID);
    let item: Record<string, any>;
    const operations = [];

    for (const caseId of caseIds.filter((value) => !ids.includes(value))) {
      item = await this.airTable.table('Cases').retrieve(caseId);

      if (
        item.error === 'NOT_FOUND' ||
        item.error?.type === 'MODEL_ID_NOT_FOUND'
      ) {
        operations.push(
          this.airTableClientRepository.update(
            {
              caseUUID: caseId,
            },
            {
              deletedAt: new Date(),
            },
          ),
        );
      }
    }

    if (operations.length > 0) {
      return Promise.all(operations);
    }
  }

  async saveRelation(
    parentId: string | number,
    parentKey: string,
    isUpdate: boolean,
    values: CaseRelations[],
    key: string,
    repository: Repository<
      | CaseSyncAuthorPerspectiveEntity
      | CaseSyncThematicAreaEntity
      | CaseSyncThematicAreaSubsectionEntity
      | CaseSyncSurvivorDisabilityEntity
      | CaseSyncInvestigationEntity
      | CaseSyncAllegationReferralEntity
      | CaseSyncAllegationReferralOrganisationEntity
    >,
    entity: CaseSyncEntity | CaseSyncAllegationReferralEntity,
  ): Promise<CaseSyncEntity | CaseSyncAllegationReferralEntity> {
    if (isUpdate) {
      const toRemove = await repository.find({
        [parentKey]: parentId,
      });

      await repository.remove(toRemove);

      entity[key] = await repository.save(values);
    } else {
      entity[key] = values;
    }

    return entity;
  }

  prepareAuthorPerspectiveEntities(
    caseId: string,
    data: Array<string>,
  ): CaseSyncAuthorPerspectiveEntity[] {
    return data.map(
      (value) =>
        new CaseSyncAuthorPerspectiveEntity({
          caseId,
          authorPerspective: value,
        }),
    );
  }

  prepareSurvivorDisabilityEntities(
    caseId: string,
    data: Array<string>,
  ): CaseSyncSurvivorDisabilityEntity[] {
    return data.map(
      (value) =>
        new CaseSyncSurvivorDisabilityEntity({
          caseId,
          survivorDisability: value,
        }),
    );
  }

  prepareThematicAreaEntities(
    caseId: string,
    data: Array<string>,
  ): CaseSyncThematicAreaEntity[] {
    return data.map(
      (value) =>
        new CaseSyncThematicAreaEntity({
          caseId,
          thematicArea: value,
        }),
    );
  }

  prepareThematicAreaSubsectionEntities(
    caseId: string,
    data: Array<string>,
  ): CaseSyncThematicAreaSubsectionEntity[] {
    return data.map(
      (value) =>
        new CaseSyncThematicAreaSubsectionEntity({
          caseId,
          thematicAreaSubsection: value,
        }),
    );
  }

  prepareInvestigationsEntities(
    caseId: string,
    data: Array<AirTableSyncInvestigationDTO>,
  ): CaseSyncInvestigationEntity[] {
    return data
      .filter((item) => item.investigationOpened)
      .map(
        (item) =>
          new CaseSyncInvestigationEntity({
            caseId,
            investigationOpened: item.investigationOpened,
            investigationClosed: item.investigationClosed,
            whichOrganisationDoingInvestigation: item.whichOrganisationDoingInvestigation,
            investigationOutcome: item.investigationOutcome,
            referralToClearCheckMade: item.referralToClearCheckMade,
          }),
      );
  }

  prepareAllegationReferralsEntities(
    caseId: string,
    data: Array<AirTableSyncAllegationReferralDTO>,
  ): CaseSyncAllegationReferralEntity[] {
    return data
      .filter((item) => item.allegationReferralDate)
      .map(
        (item) =>
          new CaseSyncAllegationReferralEntity({
            caseId,
            allegationReferralDate: item.allegationReferralDate,
            responseToAllegationReferralDate:
              item.responseToAllegationReferralDate,
          }),
      );
  }

  prepareAllegationReferralOrgansationsEntities(
    allegationReferralId: number,
    data: Array<AirTableSyncAllegationReferralOrganisationDTO>,
  ): CaseSyncAllegationReferralOrganisationEntity[] {
    return data
      .filter((item) => item.name || item.type)
      .map(
        (item) =>
          new CaseSyncAllegationReferralOrganisationEntity({
            allegationReferralId,
            name: item.name,
            type: item.type,
          }),
      );
  }

  async prepareDataAndSaveRelation(
    data: AirTableSyncDTO,
    isUpdate: boolean,
    key: string,
    transformedData: CaseSyncEntity,
  ): Promise<CaseSyncEntity> {
    let values, repository;

    switch (key) {
      case RELATION.AUTHOR_PERSPECTIVE:
        values = this.prepareAuthorPerspectiveEntities(
          data.caseUUID,
          data[key],
        );
        repository = this.caseAuthorPerspectiveRepository;
        break;
      case RELATION.SURVIVOR_DISABILITY:
        values = this.prepareSurvivorDisabilityEntities(
          data.caseUUID,
          data[key],
        );
        repository = this.caseSurvivorDisabilityAreaRepository;
        break;
      case RELATION.THEMATIC_AREA:
        values = this.prepareThematicAreaEntities(data.caseUUID, data[key]);
        repository = this.caseThematicAreaRepository;
        break;
      case RELATION.THEMATIC_AREA_SUBSECTION:
        values = this.prepareThematicAreaSubsectionEntities(
          data.caseUUID,
          data[key],
        );
        repository = this.caseThematicAreaSubsectionRepository;
        break;
      case RELATION.INVESTIGATION:
        values = this.prepareInvestigationsEntities(data.caseUUID, data[key]);
        repository = this.caseSyncInvestigationRepository;
        break;
      case RELATION.ALLEGATION_REFERRAL:
        values = this.prepareAllegationReferralsEntities(
          data.caseUUID,
          data[key],
        );
        repository = this.caseSyncAllegationReferralRepository;
        break;
    }

    return this.saveRelation(
      data.caseUUID,
      'caseId',
      isUpdate,
      values,
      key,
      repository,
      transformedData,
    ) as Promise<CaseSyncEntity>;
  }

  async transformAllegationReferralOrganisations(
    data: AirTableSyncDTO,
    isUpdate: boolean,
    transformedData: CaseSyncAllegationReferralEntity[],
  ): Promise<CaseSyncAllegationReferralEntity[]> {
    const operations = [];

    for (const index in transformedData) {
      const allegationReferral = transformedData[index];

      operations.push(
        this.saveRelation(
          allegationReferral.id,
          'allegationReferralId',
          isUpdate,
          this.prepareAllegationReferralOrgansationsEntities(
            allegationReferral.id,
            data.allegationReferrals[index].organisations,
          ),
          'organisations',
          this.caseSyncAllegationReferralOrganisationRepository,
          allegationReferral,
        ),
      );
    }

    if (operations.length > 0) {
      transformedData = await Promise.all(operations);
    }

    return transformedData;
  }

  async transformRow(
    data: AirTableSyncDTO,
    isUpdate: boolean,
  ): Promise<CaseSyncEntity> {
    const objectKeys = Object.keys(data);
    const relationKeys = Object.values(RELATION) as string[];
    let transformedData = {} as CaseSyncEntity;

    for (const key of objectKeys.filter(
      (item) => !relationKeys.includes(item),
    )) {
      if (Array.isArray(data[key])) {
        transformedData[key] = data[key].join('|');
      } else {
        transformedData[key] = data[key];
      }
    }

    if (!isUpdate) {
      transformedData.initialUrgency = data.urgency;
    }

    for (const key of objectKeys.filter((item) =>
      relationKeys.includes(item),
    )) {
      transformedData = await this.prepareDataAndSaveRelation(
        data,
        isUpdate,
        key,
        transformedData,
      );

      if (key === RELATION.ALLEGATION_REFERRAL) {
        transformedData[key] =
          await this.transformAllegationReferralOrganisations(
            data,
            isUpdate,
            transformedData.allegationReferrals,
          );
      }
    }

    return transformedData;
  }

  async deleteNotSensitiveData(data: AirTableDeleteStoryDTO): Promise<CaseSyncEntity> {
    const story = await this.storyService.findById(data.loopId);
    if (story && story.language?.code && story.status !== STORY_STATUS.REJECTED) {
      const rejectionReason = await this.rejectionReasonService.findOneByParamsOrFail({ code: 'notSensitive' })
      await this.storyModeratorService.checkStoryAndReject(story.id, { reasonIds: [rejectionReason.id], rationale: '', reasonTexts: ['Not sensitive'], notificationLanguage: story.language.code });
      return await this.airTable.delete(data.recordId);
    }
  }

  async saveOrUpdateRow(row: AirTableSyncDTO): Promise<CaseSyncEntity> {
    let updateRow = await this.airTableClientRepository.findByUUID(
      row.caseUUID,
    );
    let isUpdate = true;
    if (!updateRow) {
      isUpdate = false;
      updateRow = new CaseSyncEntity();
    }

    const data = await this.transformRow(row, isUpdate);
    if (row.notSensitive && row.loopId) {
      try {
        const story = await this.storyService.findById(row.loopId);
        if (story && story.language?.code && story.status !== STORY_STATUS.REJECTED) {
          const rejectionReason = await this.rejectionReasonService.findOneByParamsOrFail({ code: 'notSensitive' })
          await this.storyModeratorService.checkStoryAndReject(story.id, { reasonIds: [rejectionReason.id], rationale: '', reasonTexts: ['Not sensitive'], notificationLanguage: story.language.code });
          await this.airTable.delete(row.caseUUID);
        }
      } catch (error) {
        console.error('Error while rejecting story', error);
      }
    }
    return this.airTableClientRepository.save(data);
  }

  async deleteOldNonSensitiveStories(): Promise<SuccessRO> {
    const rejectionReason = await this.rejectionReasonService.findOneByParamsOrFail({ code: 'notSensitive' });
    const stories = await this.storyModeratorService.getOlderStories();
    for (const story of stories) {
      const sensitiveCase = await this.airTable.table('Sensitive Stories').list({
        filterByFormula: `{Loop ID} = "${story.id}"`,
      });
      if (sensitiveCase && sensitiveCase.records.length > 0 && !sensitiveCase.records[0]?.fields['Case the story is submitted to']) {
        try {
          await this.airTable.delete(sensitiveCase.records[0].id);
        } catch (error) {
          console.error('Error while deleting sensitive case', error);
        }
        try {
          await this.storyModeratorService.checkStoryAndReject(story.id, { reasonIds: [rejectionReason.id], rationale: '', reasonTexts: ['Not sensitive'] }, undefined, false);
        } catch (error) {
          console.error('Error while rejecting story', error);
        }
      }
    }
    return { success: true };
  }

}
