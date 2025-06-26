export interface OrganisationWithUnsansweredStoryInterface {
    id: string;
    content: string;
    originalLanguageId: number;
}
export interface OrganisationWithUnsansweredStoriesInterface {
    name: string;
    stories: {
        numberOfAnswered: number;
        unanswered: Array<OrganisationWithUnsansweredStoryInterface>;
    };
}
