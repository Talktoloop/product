export declare class TwilioAudioDto {
    twilioCallSid: string;
    s3FileId: string;
    isModeratorCall: boolean;
    isStory: boolean;
    callDate: Date;
    twilioFlowXml: string;
    percentageLevelOfListeningCall: number;
    recordingDuration?: number;
}
