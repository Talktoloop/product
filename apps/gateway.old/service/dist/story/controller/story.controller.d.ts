import { StoryService } from '../service/story.service';
import { StoryRO } from '../response/story.ro';
import { SuccessRO } from '../../common/response/success.ro';
import { StoryListPaginationRO } from '../response/story-list-pagination.ro';
import { AddStoryDto } from '../request/dto/add-story.dto';
import { StoryFilterAndOrderDto } from '../request/dto/story-filter-and-order.dto';
import { UserEntity } from '../../user/entity/user.entity';
import { AdministrativeDataService } from '../../country/service/administrative-data.service';
import { LanguageService } from '../../language/language.service';
import { ConfigService } from '@nestjs/config';
export declare class StoryController {
    private readonly storyService;
    private readonly administrativeDataService;
    private readonly languageService;
    private readonly config;
    constructor(storyService: StoryService, administrativeDataService: AdministrativeDataService, languageService: LanguageService, config: ConfigService);
    testStuff(): Promise<any[]>;
    getListOfStories(params: StoryFilterAndOrderDto, userLanguageId: number): Promise<StoryListPaginationRO>;
    voteToStory(user: UserEntity, storyId: string, ipAddress: string, reqHeaders: Headers): Promise<SuccessRO>;
    unVoteStory(user: UserEntity, storyId: string, ipAddress: string, reqHeaders: Headers): Promise<SuccessRO>;
    getStoryDetails(storyId: string, ipAddress: string, reqHeaders: Headers, userLanguageId: number): Promise<StoryRO>;
    addStory(user: UserEntity, data: AddStoryDto, ipAddress: string, reqHeaders: Headers, languageId: number): Promise<SuccessRO>;
}
