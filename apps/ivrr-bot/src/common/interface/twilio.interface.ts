import twilio from 'twilio';

export interface TwilioProvider {
  twilioClient: twilio.Twilio;
  twimlClient: twilio.twiml.VoiceResponse;
}
