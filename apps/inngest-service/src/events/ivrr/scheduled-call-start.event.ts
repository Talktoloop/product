import { inngest } from "../../inngest";
import { createTwilioCall } from "../../twilio/twilio.service";

export const scheduledCallStart = inngest.createFunction(
    { id: "scheduled-call-start" },
    { event: "ivr/scheduled.call.start" },
    async ({ event, step }) => {
        const data = event.data;
        if (!data.options?.deliverAt) return false;
        await step.sleepUntil('awaiting-daytime', data.options?.deliverAt as Date);
        await step.run("create-call", async () => {
            await createTwilioCall(data);
        });

        return { success: true };
    }
);