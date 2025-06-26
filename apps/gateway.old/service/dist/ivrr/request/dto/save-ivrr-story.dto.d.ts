import { TwilioAudioDto } from './twilio-audio.dto';
export declare class SaveIvrrStoryDto {
    country: string;
    storyUuid: string;
    flowStartedAt: Date;
    phoneNumber: string;
    language: string;
    shortCodeNumber: string;
    hideUserPhoneNumber: boolean;
    isSensitiveStory: boolean;
    calls: Array<TwilioAudioDto>;
}
