import twilio from 'twilio';

export interface TwilioValidateRequest {
  validateRequest: (
    whatsappAuthToken: string,
    twilioSignature: string,
    url: string,
    params: any,
  ) => boolean;
}

export interface WhatsappProvider {
  client: twilio.Twilio;
  twilio: TwilioValidateRequest;
}
