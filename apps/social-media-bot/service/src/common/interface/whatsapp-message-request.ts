export default interface WhatsappMessageRequestInterface {
  SmsMessageSid: string;
  NumMedia: string;
  ProfileName: string;
  SmsSid: string;
  SmsStatus: string;
  Body: string;
  To: string;
  NumSegments: string;
  MessageSid: string;
  AccountSid: string;
  From: string;
  ApiVersion: string;
  MessageStatus?: string;
  MediaUrl0?: string;
  ErrorCode?: string;
}
