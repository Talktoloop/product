import { TwilioAudioDto } from './twilio-audio.dto';
export declare class SaveIvrrCallDto {
    storyId: string;
    commentId: string;
    phoneNumber: string;
    isCommentReply: boolean;
    call: TwilioAudioDto;
}
