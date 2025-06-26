declare class TextItMessageData {
    type: string;
    channel_uuid: string;
    msg_uuid: string;
    text: string;
    urn: string;
    received_on: string;
}
export declare class TextItMessageRO {
    message: string;
    data: TextItMessageData[];
}
export {};
