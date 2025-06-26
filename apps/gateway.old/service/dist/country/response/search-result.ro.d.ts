export declare class SearchResultItemRO {
    id: number;
    parentId: number;
    parentName: number;
    name: string;
    numberOfStories: number;
    hasChild: number;
}
export declare class SearchResultRO {
    countryCode: string;
    items: SearchResultItemRO[];
}
