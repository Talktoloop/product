import { TimeUnit } from '@shared/utils/hours-converter';

export interface IGetStatisticsFiltersAPI {
  country?: string;
  organisation?: string;
  type?: number[];
  gender?: number[];
  difficulty?: number[];
  age?: number[];
  thematic?: number[];
  from?: string;
  to?: string;
}

export interface IGetStatisticsCasesFiltersAPI {
  country?: string;
  age?: number[];
  gender?: number[];
  organisationType?: number[];
  investigationOutcome?: string;
  referredForAssistance?: string;
  caseType?: string;
  disability?: number[];
  thematic?: number[];
  from?: string;
  to?: string;
  searchTerm?: string;
}

export interface IStackedTimeline {
  isAnonymousData?: boolean;
  type?: string;
  code?: string;
  values: Array<number>;
}

export interface IChartSettings {
  xAxis?: {
    showAxis: boolean;
    showLabels: boolean;
    showPointer: boolean;
    showPointerLabel: boolean;
  };
  yAxis?: {
    showAxis: boolean;
    showLabels: boolean;
    showPointer: boolean;
    showPointerLabel: boolean;
  };
}
export interface IStackedChartSettings extends IChartSettings {
  decals?: Array<any>;
  title: string;
  categoryTranslationPrefix: string;
  stackTranslationPrefix: string;
  stacks: Array<string>;
  colorPalette?: Array<string>;
  titleLineLength?: IStackedChartLetterLineLength;
  silentLegendOptions?: Array<string>; // Doesn't count when calculating stack label sum display
}

export enum IStackedChartLetterLineLength {
  Left = 45,
  Right = 35,
  FullWidth = 100,
}

export interface IPostTimeline {
  code: string;
  values: Array<Array<string | number>>;
}

export interface IStackData {
  type: string;
  values: Array<number>;
}

export interface IRepliesStatistics {
  percentOfStoriesWithResponded: number;
  percentOfStoriesWithOrganisationResponded: number;
  countOfTaggedOrganisation: number;
  uniqueAuthors: number;
  countOfFeedbacks: number;
  avgResponseTime: number;
  countOfResponses: number;
}

export interface IStoriesRepliesGroupped {
  code: string;
  stories: Array<number>;
  replies: Array<number>;
}

export interface IAvgResponseTime {
  code: string;
  average: number;
  translation?: string;
}

export interface IThematicStacked {
  code: string;
  values: Array<number>;
}

export interface IDifficultyBreakdown {
  code: string;
  count: number;
  percent: number;
}

export interface IAgeGenderBreakdown {
  age: {
    code: string;
    values: Array<number>;
    name?: string;
  }[];
  gender: {
    code: string;
    values: Array<number>;
    name?: string;
  }[];
}

export interface ICasesReceived {
  total: number;
  open: number;
  closed: number;
  urgent: number;
  assistanceProvided: number;
}

export interface ITimeToCompleteStep {
  processAndRefer: ITimeToCompleteStepData;
  respondToReferral: ITimeToCompleteStepData;
  assessWhetherToInvestigate: ITimeToCompleteStepData;
  completeInvestigation: ITimeToCompleteStepData;
  informTheAuthorOfOutcome: ITimeToCompleteStepData;
  closeCase: ITimeToCompleteStepData;
}

export interface ITimeToCompleteStepData {
  days: number;
  tooltip: ITimeToCompleteTooltip;
}

export interface ITimeToCompleteTooltip {
  averageTime: number;
  timeUnit: TimeUnit;
  numberOfCases: number;
}

export interface IAverageTimeByCase {
  type: string;
  average: number;
  count: number;
}

export interface IHowResponsiveWeAre {
  closedCases: number;
  steps: Array<{
    type: string;
    values: Array<number>;
  }>;
}

export interface IOutcomesOfInvestigation {
  [key: string]: number;
}
