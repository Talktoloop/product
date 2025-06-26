import { FactoryProvider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TextItMessageRO } from '../../sms/response/textit-message.ro';
import { TextItContactRO } from '../../sms/response/textit-contact.ro';
import { TextItIngoingMessageDTO } from '../../sms/request/dto/textit-ingoing-message.dto';
export declare class TextIt {
    private readonly config;
    private readonly clientBase;
    private readonly apiBase;
    private readonly token;
    private readonly logger;
    constructor(config: ConfigService);
    sendUserMessage(data: TextItIngoingMessageDTO): Promise<TextItMessageRO>;
    getContactDetails(phone: string): Promise<TextItContactRO>;
    userHasActiveTextItFlow(phone: string): Promise<boolean>;
}
export declare const TextItProvider: FactoryProvider<TextIt>;
