export interface TwilioAudio {
  twilioCallSid: string;
  s3FileId?: string;
  isStory?: boolean;
  isModeratorCall?: boolean;
  callDate?: Date;
  twilioFlowXml?: string;
  percentageLevelOfListeningCall?: number;
  recordingDuration?: number;
}
