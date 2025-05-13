import { CreateModeratorCallInterface } from "../types/interfaces/create-moderator-call.interface";
import { getTwilioNumberConfig } from "../config/default";
import twilio from "twilio";
import { TwimlService } from "./twiml.service";

const accountSid = process.env.TWILIO_ACCOUNT_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;
const twilioClient = twilio(accountSid, authToken);
const twimlService = new TwimlService({ ivrrServiceUrl: process.env.APPLICATION_IVRR_SERVICE_URL!, maxLengthOfRecordBlockInSeconds: 60 });

export async function createTwilioCall(data: CreateModeratorCallInterface) {
    const phoneNumberDetails = getTwilioNumberConfig(data.loopPhoneNumber);

    if (!phoneNumberDetails) {
        throw new Error(`No Twilio number config found for ${data.loopPhoneNumber}`);
    }

    const callStatusUrl = `${process.env.APPLICATION_IVRR_SERVICE_URL}/api/v1/webhook/call-status`;

    const twiml = twimlService.buildTwiml(data);

    console.log("📞 Creating Twilio call...");

    const call = await twilioClient.calls.create({
        twiml,
        byoc: phoneNumberDetails.trunkSid ?? undefined,
        to: data.toPhoneNumber,
        from: phoneNumberDetails.twilioPhoneNumber,
        statusCallback: callStatusUrl,
        statusCallbackMethod: 'POST',
        statusCallbackEvent: ['initiated', 'ringing', 'answered', 'completed'],
        machineDetection: 'Enable',
        machineDetectionTimeout: 10,
    });

    console.log("✅ Call created:", call.sid);

    // Optional: queue follow-up tasks here, like checking if user answered
    return call;
}