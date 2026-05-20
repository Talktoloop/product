import { CreateModeratorCallInterface } from "../types/interfaces/create-moderator-call.interface";
import { checkIfNightNow, getMorningTimeInLocalTimezone, getTwilioNumberConfig } from "../config/default";
import { inngest } from "../inngest";
import { SchedulerStatus } from "../types/enum/status.enum";
import { SourceType } from "../types/enum/source-type.enum";
import { createTwilioCall } from "./twilio.service";

export async function initializeCall(
    data: CreateModeratorCallInterface,
): Promise<{ callCreated: boolean }> {
    try {
        const phoneNumberDetails = getTwilioNumberConfig(data.loopPhoneNumber);

        if (!phoneNumberDetails) {
            throw new Error(`No config for Twilio number ${data.loopPhoneNumber}`);
        }

        const isNightNow = checkIfNightNow(phoneNumberDetails.utcTimeDiff);

        if (isNightNow) {
            console.log("Night time detected. Scheduling call.");

            if (!data.schedulerData) {
                data.schedulerData = {
                    sourceId: data.storyId ?? data.commentId,
                    type: data.commentId ? SourceType.COMMENT : SourceType.STORY,
                    lang: data.language,
                    providerNumber: data.loopPhoneNumber,
                    destinationNumber: data.toPhoneNumber,
                    timezone: phoneNumberDetails.utcTimeDiff,
                    sequenceNumber: 1,
                    status: SchedulerStatus.PENDING,
                };
            }

            // Schedule the call later (e.g. at 9am local time)
            await inngest.send({
                name: "ivr/scheduled.call.start",
                data: data,
                options: {
                    deliverAt: getMorningTimeInLocalTimezone(phoneNumberDetails.utcTimeDiff),
                },
            });

            return { callCreated: false };
        }

        // Not night, create call immediately
        await createTwilioCall(data);

        return { callCreated: true };
    } catch (error) {
        console.error(error);
        return { callCreated: false };
    }
}