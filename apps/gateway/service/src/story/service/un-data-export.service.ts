import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { UNDataExportDto } from '../request/dto/un-data-export.dto';
import { Response } from 'express';
import {
  ageMapping,
  criticalityCategoryMapping,
  feedbackCategoryMapping,
  genderMapping,
  populationTypeMapping,
  responsibilityCategoryMapping,
  sectorMapping,
  sensitivityCategoryMapping,
  statusMapping,
} from '../type/export-united.type';
import { LANGUAGE_NAMES } from '../../common/constant/languages.constants';
import { StoryService } from './story.service';
import { StoryFilterAndOrderDto } from '../request/dto/story-filter-and-order.dto';
import { ExportService } from './export.service';
import { narrowDownIds } from '../../common/helpers';

@Injectable()
export class UNDataExportService {
  private readonly logger = new Logger(UNDataExportService.name);

  constructor(
    private storyService: StoryService,
    private exportService: ExportService
  ) {}

  async processCsvExport(
    filters: StoryFilterAndOrderDto,
    storyIds: string[],
    response: Response,
    filename: string
  ) {
    const rawDataCollection: Record<string, any>[] = [];
    const isFirstBatch = true;
    let csvContent = '';

    try {
      const totalPages = Math.ceil(storyIds.length / filters.limit);

      for (let page = filters.page; page <= totalPages; page++) {
        await new Promise((resolve) => setImmediate(resolve)); // prevents the server from "freezing"
        const batchIds = narrowDownIds(storyIds, page, filters.limit);

        if (batchIds.length === 0) continue;
        const batchRawData = await this.storyService.findStoriesForUNExport(batchIds);
        rawDataCollection.push(...batchRawData);
      }

      const mappedData = await this.packageStories(rawDataCollection);
      const preparedContent = await this.prepareContent(mappedData, filters.communityResponsiveness);

      csvContent = this.exportService.prepareCSVContent(preparedContent, isFirstBatch);
      this.exportService.saveCacheFile(this.exportService.generateFileName(filename, 'csv'), csvContent);

      return response
        .set({
          'Content-Type': 'text/csv',
          'Content-Disposition': `attachment; filename="${filename}.csv"`,
        })
        .send(csvContent);
    } catch (error) {
      this.logger.error('Error during CSV export for the UN', error);
      throw new BadRequestException('Error while exporting CSV for the UN');
    }
  }

  async packageStories(stories: Record<string, any>[]): Promise<Record<string, any>[]> {
    const mergedData = new Map<string, Record<string, any>>();

    stories.forEach(story => {
      const storyId = story.story_id;

      if (!mergedData.has(storyId)) {
        mergedData.set(storyId, {
          ...story,
          translations_content: story.translations_content ? [story.translations_content] : [],
          administrativeDataNames_name: story.administrativeDataNames_name ? [story.administrativeDataNames_name] : [],
          administrative_level: story.administrative_level ? [story.administrative_level] : [],
          organisations_name: story.organisations_name ? [story.organisations_name] : [],
          vulnerability_factors: story.vulnerability_factors || null,
        });
      } else {
        const existing = mergedData.get(storyId);

        if (story.translations_content && !existing.translations_content.includes(story.translations_content)) {
          existing.translations_content.push(story.translations_content);
        }

        if (!existing.administrativeDataNames_name.includes(story.administrativeDataNames_name)) {
          existing.administrativeDataNames_name.push(story.administrativeDataNames_name);
        }

        if (!existing.administrative_level.includes(story.administrative_level)) {
          existing.administrative_level.push(story.administrative_level);
        }

        if (story.organisations_name && !existing.organisations_name.includes(story.organisations_name)) {
          existing.organisations_name.push(story.organisations_name);
        }

        mergedData.set(storyId, existing);
      }
    });

    return Array.from(mergedData.values());
  }

  async prepareContent(stories: any[], repliedTo: string): Promise<UNDataExportDto[]> {
    return Promise.all(stories.map(async (story) => {
      const uniqueId = this.generateUniqueId(story);
      const administrativeData = this.getRegionAndDistrict(
        story.administrativeDataNames_name, story.administrative_level);
      const disability = this.hasSpecificDisability(story.difficultyIds);

      const [
        mappedGender,
        mappedPopulationType,
        originalContent,
        mappedSector,
        responsibilityCategory,
        dateOfReceipt,
        dateOfReferral
      ] = await Promise.all([
        this.mapGender(story),
        this.getMappedThematicTypes(story.thematic_id, populationTypeMapping),
        this.getOriginalContent(story),
        this.getSectors(story.thematic_id, sectorMapping),
        this.getResponsibilityCategory(story),
        this.formatDateToYMD(story.story_created_at),
        this.formatDateToYMD(story.story_published_at),
      ]);

      const referredTo = Array.isArray(story.organisations_name)
        ? story.organisations_name.join(' | ')
        : story.organisations_name ?? 'N/A';

      return new UNDataExportDto({
        uniqueId,
        scopeCardNumber: 'N/A',
        dateOfReceipt: dateOfReceipt,
        nameOfDataCollector: 'N/A',
        country: story.country_name ?? 'N/A',
        region: administrativeData.region,
        district: administrativeData.district,
        settlementOrSiteName: story.story_place ?? 'N/A',
        feedbackChannel: story.story_channel?.toUpperCase() || 'N/A',
        languageOfInteraction: LANGUAGE_NAMES[story.story_language_id] ?? 'N/A',
        providedIndependentlyOrWithAssistance: 'N/A',
        reasonForNotSharingFeedbackIndependently: 'N/A',
        consentToRecordFeedback: 'Yes',
        nameOfFeedbackProvider: story.recipient_nickname ?? 'N/A',
        contactNumberOfFeedbackProvider: story.recipient_email ?? 'N/A',
        ageRange: ageMapping[story.age_by_moderator] || ageMapping.default,
        sex: mappedGender,
        populationType: mappedPopulationType,
        communitiesWithMinorityAffiliations: story.is_minority_by_moderator ? 'Yes' : 'No',
        vulnerabilityFactor: story.vulnerability_factors || 'N/A',
        washingtonGroupQ1: disability['1'],
        washingtonGroupQ2: disability['2'],
        washingtonGroupQ3: disability['3'],
        washingtonGroupQ4: disability['4'],
        washingtonGroupQ5: disability['5'],
        washingtonGroupQ6: disability['6'],
        complaintOrFeedbackDetails: originalContent,
        operationalRelevanceOrServiceMappingSector: mappedSector,
        responsibilityCategoryLevel1: responsibilityCategory,
        sensitivityCategoryLevel2: sensitivityCategoryMapping[story.story_isSensitive ? 1 : 0],
        specificSensitivityCategoryLevel2: Array.isArray(story.categories_id)
          ? feedbackCategoryMapping[story.categories_id[0]] ?? 'N/A'
          : feedbackCategoryMapping[story.categories_id] ?? 'N/A',
        criticalityCategoryLevel3: criticalityCategoryMapping.regular,
        statusOfFeedback: repliedTo && repliedTo.split(',').map(Number).includes(1)
          ? statusMapping[1]
          : statusMapping[2],
        actionTaken: 'Relevant org tagged',
        dateOfReferral: dateOfReferral,
        referredTo: referredTo,
        nameOfFocalPoint: story.story_place ?? 'N/A',
        contactDetailsOfFocalPoint: 'N/A',
        dateOfCaseResolution: 'N/A',
        reasonForActionNotPossible: 'N/A',
        dateOfClosingTheLoop: dateOfReferral,
        comments: 'N/A',
        keyQuote: 'N/A',
        rumour: 'N/A',
      });
    }));
  }

  private formatDateToYMD(dateInput: string | Date): string {
    const date = new Date(dateInput);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  private getMappedThematicTypes(data: number | number[], mapping: Record<string, number[]>): string {
    const thematics = Array.isArray(data) ? data : [data]
    if (thematics.length === 0) return 'N/A';

    const matchedTypes = Object.entries(mapping)
      .filter(([_, codes]) =>
        thematics.some(thematicId => codes.includes(thematicId)),
      )
      .map(([type]) => type);
    return matchedTypes.length > 0 ? matchedTypes.join(' | ') : 'N/A';
  }

  private getSectors(thematicId: number | number[], mapping: Record<string, number[]>): string {
    const thematicIds = Array.isArray(thematicId) ? thematicId : [thematicId];

    const matchedSectors = Object.keys(mapping)
      .filter(key => mapping[key].some(id => thematicIds.includes(id)));

    return matchedSectors.length > 0 ? matchedSectors.join(' | ') : 'N/A';
  }


  private mapGender(story) {
    return genderMapping[story.gender_by_moderator] || 'N/A';
  }

  private hasSpecificDisability(difficultyIds) {
    const result = { 1: 'No', 2: 'No', 3: 'No', 4: 'No', 5: 'No', 6: 'No' };
    difficultyIds = Array.isArray(difficultyIds) ? difficultyIds : [difficultyIds];
    difficultyIds.forEach(num => {
      if (result.hasOwnProperty(num)) {
        result[+num] = 'Yes';
      }
    });
    return result;
  }

  private getResponsibilityCategory(story) {
    return story.organisations_name === 'Loop'
      ? responsibilityCategoryMapping.internal
      : responsibilityCategoryMapping.external;
  }

  private getOriginalContent(story): string {
    const contents = Array.isArray(story.translations_content)
      ? story.translations_content.filter(content => content !== '')
      : [];

    return contents[0] ?? 'N/A';
  }

  private generateUniqueId(story) {
    const district = story.country_name ?? 'UNK';
    const date = story.story_created_at;
    const serial = parseInt(story.story_id, 10) ?? 0;
    const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    return `${district.substring(0, 3).toUpperCase()}${date.getDate().toString().padStart(2, '0')}${monthNames[date.getMonth()]}${serial.toString().padStart(5, '0')}`;
  }

  private getRegionAndDistrict(names: string[], levels: number[]): { region: string; district: string } {
    if (!Array.isArray(names) || !Array.isArray(levels) || names.length !== levels.length) {
      return { region: 'N/A', district: 'N/A' };
    }

    const sortedData = levels
      .map((level, index) => ({
        level,
        name: names[index] ?? 'N/A'
      }))
      .sort((a, b) => a.level - b.level);

    const region = sortedData.find(item => item.level === 2)?.name ?? 'N/A';
    const district = sortedData.find(item => item.level === 1)?.name ?? 'N/A';

    return { region, district };
  }
}
