export declare const REJECT_REASON_CODE: {
    POOR_AUDIO_QUALITY: string;
    OTHER: string;
};
export declare const TIME_UNIT: {
    DAY: string;
    MONTH: string;
    YEAR: string;
};
export declare const AGE_VALUE: {
    '1-14': number;
    '14-17': number;
    '18-29': number;
    '30-59': number;
    '60+': number;
    'No answer': number;
};
export declare const DIFFICULTY_VALUE: {
    NO: number;
    YES: number;
    NO_ANSWER: number;
};
export declare const GENDER_VALUE: {
    FEMALE: number;
    MALE: number;
    NON_BINARY: number;
    NO_ANSWER: number;
};
export declare const CATEGORY_VALUE: {
    THANKS: string;
    QuESTION: string;
    OPINION: string;
    CONCERN: string;
    REQUEST: string;
};
export declare enum TypeEnum {
    published = "published",
    rejected = "rejected",
    new = "new"
}
export declare enum OrderEnum {
    asc = "ASC",
    desc = "DESC"
}
export declare enum StoryModeratorOrderEnum {
    NEWEST_FIRST = "desc",
    OLDEST_FIRST = "asc",
    NOT_STARTED = "not_started",
    PENDING_PUBLICATION = "pending_publication"
}
export declare enum StoryOrderEnum {
    NEWEST_FIRST = "desc",
    OLDEST_FIRST = "asc",
    UPVOTED = "upvoted"
}
export declare enum OrderHierarchy {
    STARTS_FROM = 1,
    OTHERS = 2
}
