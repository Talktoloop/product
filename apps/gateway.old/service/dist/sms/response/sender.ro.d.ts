export declare enum SenderType {
    loop = "loop",
    issuer = "issuer",
    moderator = "moderator"
}
export declare class SenderRO {
    type: SenderType;
    id: string;
    username: string;
}
