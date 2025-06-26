declare class TextItUuidName {
    uuid: string;
    name: string;
}
declare class TextItFields {
    triggered: string;
    execution_date: string;
}
export declare class TextItContactRO {
    uuid: string;
    name: string;
    status: string;
    language: string;
    urns: string[];
    groups: TextItUuidName[];
    fields: TextItFields;
    flow: TextItUuidName[];
    created_on: string;
    modified_on: string;
    last_seen_on: string;
    blocked: boolean;
    stopped: boolean;
}
export {};
