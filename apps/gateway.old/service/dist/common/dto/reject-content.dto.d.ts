export declare class RejectContentDto {
    reasonIds?: number[];
    reasonTexts?: string[];
    rationale?: string;
    notificationLanguage?: string;
}
export declare class RejectContentWithStoryDto extends RejectContentDto {
    storyId: string;
}
export declare class RejectStoriesDto {
    storiesToReject: RejectContentWithStoryDto[];
}
