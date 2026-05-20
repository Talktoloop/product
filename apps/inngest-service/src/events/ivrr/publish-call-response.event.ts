import { inngest } from "../../inngest";
import { IvrrCommentDTO, TWIML_BLOCK_TYPE } from "@ourloop/shared";
import { SchedulerInterface } from "../../types/interfaces/scheduler.interface";
import { CreateModeratorCallInterface } from "../../types/interfaces/create-moderator-call.interface";
import { getRecordingFiles } from "../../config/default";
import { initializeCall } from "../../twilio/call.service";

export const publishCommentCall = inngest.createFunction(
    { id: "publish-comment-call" },
    { event: "ivr/comment.published.call" },
    async ({ event, step }) => {
        const { comment, schedulerData }: {
            comment: IvrrCommentDTO;
            schedulerData?: SchedulerInterface;
        } = event.data;

        await step.run("check-data", async () => {
            if (!comment || !comment.story) {
                throw new Error("Published comment - no comment");
            }
        });

        const language = comment.languageCode;

        const recordings = await step.run("get-recordings", async () => {
            return getRecordingFiles(language);
        });

        if (!recordings?.publication?.reply?.[language]) {
            throw new Error("Published comment - no recording in the given language");
        }

        const callBlocks = [
            {
                type: TWIML_BLOCK_TYPE.PLAY,
                audioUrl: recordings.publication.reply[language],
            },
        ];

        const job: CreateModeratorCallInterface = {
            commentId: comment.id,
            storyId: comment.story.id,
            resourceStatus: comment.status,
            toPhoneNumber: comment.phone,
            loopPhoneNumber: comment.story.conversation.shortCodeNumber,
            schedulerData,
            language,
            callBlocks,
        };

        await step.run("create-or-schedule-call", async () => {
            const result = await initializeCall(job);
            return result;
        });

        return { success: true };
    }
);