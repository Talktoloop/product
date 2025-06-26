export interface SMSSplitterInterface {
    parts: {
        content: string;
        length: number;
        bytes: number;
    }[];
    characterSet: string;
}
