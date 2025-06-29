import { TwilioAudio } from './twilio-audio';

export interface UserFlowRecord {
  phoneNumber: string;
  storyUuid?: string;
  flowStartedAt?: Date;
  language?: string;
  shortCodeNumber: string;
  hideUserPhoneNumber?: boolean;
  isSensitiveStory?: boolean;
  calls: Array<TwilioAudio>;
  country?: string;
}

export const getUserStoryTwilioCallSid = (user: UserFlowRecord) =>
  user.calls?.find((call) => call.isStory).twilioCallSid;
