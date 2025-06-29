export default interface WhatsappIncommingMessageInterface {
  smsMessageSid: string;
  numMedia: string;
  profileName: string;
  smsSid: string;
  smsStatus: string;
  body: string;
  pageId: string;
  numSegments: string;
  messageSid: string;
  accountSid: string;
  from: string;
  mediaUrl?: string;
  buttonText?: string,
  buttonPayload?: string
}
