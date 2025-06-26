export declare class CountCodeId {
    id?: number;
    code: string;
    count?: number;
}
export declare class CountCodeIdWithChildren extends CountCodeId {
    children: CountCodeId[];
}
