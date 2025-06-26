import { UNDataExportDto } from '../request/dto/un-data-export.dto';
import { Response } from 'express';
import { StoryService } from './story.service';
import { StoryFilterAndOrderDto } from '../request/dto/story-filter-and-order.dto';
import { ExportService } from './export.service';
export declare class UNDataExportService {
    private storyService;
    private exportService;
    private readonly logger;
    constructor(storyService: StoryService, exportService: ExportService);
    processCsvExport(filters: StoryFilterAndOrderDto, storyIds: string[], response: Response, filename: string): Promise<Response<any, Record<string, any>>>;
    packageStories(stories: Record<string, any>[]): Promise<Record<string, any>[]>;
    prepareContent(stories: any[], repliedTo: string): Promise<UNDataExportDto[]>;
    private getMappedThematicTypes;
    private getSectors;
    private mapGender;
    private hasSpecificDisability;
    private getResponsibilityCategory;
    private getOriginalContent;
    private generateUniqueId;
    private getRegionAndDistrict;
}
