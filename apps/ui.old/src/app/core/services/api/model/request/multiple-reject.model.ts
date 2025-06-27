export interface IReject {
  reasonIds: number[];
  reasonTexts: string[];
  rationale: string;
  notificationLanguage: string;
  storyId: string;
}

export interface IMultipleReject {
  storiesToReject: IReject[];
}
