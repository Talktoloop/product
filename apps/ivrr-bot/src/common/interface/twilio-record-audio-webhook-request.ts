export default interface TwilioRecordAudioWebhookRequest {
  RecordingSource: string;
  RecordingSid: string;
  RecordingUrl: string;
  RecordingStatus: string;
  RecordingChannels: string;
  ErrorCode: string;
  CallSid: string;
  RecordingStartTime: string;
  AccountSid: string;
  RecordingDuration: string;
}
