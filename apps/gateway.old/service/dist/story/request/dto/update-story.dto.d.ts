export declare class TranslationDto {
    code: string;
    content: string;
}
export declare class UpdateStoryDto {
    gender?: number;
    age?: number;
    organisations?: string[] | null;
    categories?: number[] | null;
    difficulties?: number[] | null;
    maternityStatus?: number[] | null;
    thematics?: number[] | null;
    language?: string;
    authorNickname?: string;
    content?: string;
    difficulty?: string;
    place?: string;
    isSensitive?: boolean;
    translations?: TranslationDto[];
    pinnedMessageIds?: number[] | null;
    regionId?: number;
    countryId?: number;
    isUrgent?: boolean;
    isMinority?: boolean;
}
