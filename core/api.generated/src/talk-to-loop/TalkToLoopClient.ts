/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';

import { AdministrativeDataService } from './services/AdministrativeDataService';
import { AgeService } from './services/AgeService';
import { AirTableSyncService } from './services/AirTableSyncService';
import { AuthService } from './services/AuthService';
import { CaseManagerService } from './services/CaseManagerService';
import { CategoryService } from './services/CategoryService';
import { CommentService } from './services/CommentService';
import { CommentModeratorService } from './services/CommentModeratorService';
import { CommentTranslationModeratorService } from './services/CommentTranslationModeratorService';
import { CountryService } from './services/CountryService';
import { DashboardService } from './services/DashboardService';
import { DifficultyService } from './services/DifficultyService';
import { GenderService } from './services/GenderService';
import { IvrrService } from './services/IvrrService';
import { IvrrStoryModeratorService } from './services/IvrrStoryModeratorService';
import { LanguageService } from './services/LanguageService';
import { MaternityStatusService } from './services/MaternityStatusService';
import { MessengerService } from './services/MessengerService';
import { OrganisationService } from './services/OrganisationService';
import { RejectReasonService } from './services/RejectReasonService';
import { SmsService } from './services/SmsService';
import { SortingService } from './services/SortingService';
import { StatisticCasesService } from './services/StatisticCasesService';
import { StatisticFiltersForCasesService } from './services/StatisticFiltersForCasesService';
import { StatisticOpenService } from './services/StatisticOpenService';
import { StoryService } from './services/StoryService';
import { StoryExportService } from './services/StoryExportService';
import { StoryModeratorService } from './services/StoryModeratorService';
import { StoryTranslationModeratorService } from './services/StoryTranslationModeratorService';
import { SubscriptionService } from './services/SubscriptionService';
import { TelegramService } from './services/TelegramService';
import { ThematicService } from './services/ThematicService';
import { UserService } from './services/UserService';
import { UserApplicationsService } from './services/UserApplicationsService';
import { WhatsAppService } from './services/WhatsAppService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class TalkToLoopClient {

    public readonly administrativeData: AdministrativeDataService;
    public readonly age: AgeService;
    public readonly airTableSync: AirTableSyncService;
    public readonly auth: AuthService;
    public readonly caseManager: CaseManagerService;
    public readonly category: CategoryService;
    public readonly comment: CommentService;
    public readonly commentModerator: CommentModeratorService;
    public readonly commentTranslationModerator: CommentTranslationModeratorService;
    public readonly country: CountryService;
    public readonly dashboard: DashboardService;
    public readonly difficulty: DifficultyService;
    public readonly gender: GenderService;
    public readonly ivrr: IvrrService;
    public readonly ivrrStoryModerator: IvrrStoryModeratorService;
    public readonly language: LanguageService;
    public readonly maternityStatus: MaternityStatusService;
    public readonly messenger: MessengerService;
    public readonly organisation: OrganisationService;
    public readonly rejectReason: RejectReasonService;
    public readonly sms: SmsService;
    public readonly sorting: SortingService;
    public readonly statisticCases: StatisticCasesService;
    public readonly statisticFiltersForCases: StatisticFiltersForCasesService;
    public readonly statisticOpen: StatisticOpenService;
    public readonly story: StoryService;
    public readonly storyExport: StoryExportService;
    public readonly storyModerator: StoryModeratorService;
    public readonly storyTranslationModerator: StoryTranslationModeratorService;
    public readonly subscription: SubscriptionService;
    public readonly telegram: TelegramService;
    public readonly thematic: ThematicService;
    public readonly user: UserService;
    public readonly userApplications: UserApplicationsService;
    public readonly whatsApp: WhatsAppService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'http://localhost:5000',
            VERSION: config?.VERSION ?? '0.1',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.administrativeData = new AdministrativeDataService(this.request);
        this.age = new AgeService(this.request);
        this.airTableSync = new AirTableSyncService(this.request);
        this.auth = new AuthService(this.request);
        this.caseManager = new CaseManagerService(this.request);
        this.category = new CategoryService(this.request);
        this.comment = new CommentService(this.request);
        this.commentModerator = new CommentModeratorService(this.request);
        this.commentTranslationModerator = new CommentTranslationModeratorService(this.request);
        this.country = new CountryService(this.request);
        this.dashboard = new DashboardService(this.request);
        this.difficulty = new DifficultyService(this.request);
        this.gender = new GenderService(this.request);
        this.ivrr = new IvrrService(this.request);
        this.ivrrStoryModerator = new IvrrStoryModeratorService(this.request);
        this.language = new LanguageService(this.request);
        this.maternityStatus = new MaternityStatusService(this.request);
        this.messenger = new MessengerService(this.request);
        this.organisation = new OrganisationService(this.request);
        this.rejectReason = new RejectReasonService(this.request);
        this.sms = new SmsService(this.request);
        this.sorting = new SortingService(this.request);
        this.statisticCases = new StatisticCasesService(this.request);
        this.statisticFiltersForCases = new StatisticFiltersForCasesService(this.request);
        this.statisticOpen = new StatisticOpenService(this.request);
        this.story = new StoryService(this.request);
        this.storyExport = new StoryExportService(this.request);
        this.storyModerator = new StoryModeratorService(this.request);
        this.storyTranslationModerator = new StoryTranslationModeratorService(this.request);
        this.subscription = new SubscriptionService(this.request);
        this.telegram = new TelegramService(this.request);
        this.thematic = new ThematicService(this.request);
        this.user = new UserService(this.request);
        this.userApplications = new UserApplicationsService(this.request);
        this.whatsApp = new WhatsAppService(this.request);
    }
}

