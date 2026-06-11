import { Logger } from '@nestjs/common';
import { randomUUID } from 'crypto';
import axios from 'axios';
import {
    TranscribeClient,
    StartTranscriptionJobCommand,
    GetTranscriptionJobCommand,
} from '@aws-sdk/client-transcribe';
import { doSpeechToTextByAzure } from '@ourloop/shared';
import { inngest } from '../client';
import { saveTranscription } from '../helpers/translations.helper';

const AWS_REGION = process.env.AWS_REGION || 'eu-central-1';
const transcribeClient = new TranscribeClient({ region: AWS_REGION });

const POLL_INTERVAL = '15s';
const MAX_POLLS = 40;

const AZURE_LANGUAGES: string[] = JSON.parse(
    process.env.AZURE_TRANSCRIBE_LANGUAGES || '["so-SO"]',
);

type JobResult = {
    status: string;
    transcriptUri?: string;
    failureReason?: string;
};

export const transcribeCall = inngest.createFunction(
    {
        id: 'ivrr-transcription',
        concurrency: { limit: 10 },
        retries: 3,
        triggers: [{ event: 'transcription/requested.v1' }],
    },
    async ({ event, step }) => {
        const logger = new Logger('[INNGEST]');
        const { callId, language, sourceType, storyId } = event.data;
        const audioUrl: string | undefined = event.data.audioUrl;
        const s3Key: string | undefined = event.data.s3Key;

        if (!audioUrl) {
            logger.warn('[ivrr-transcription] No audioUrl provided; skipping STT.', { callId });
            return { skipped: 'no-audio-url' };
        }

        let transcript: string | null = null;

        if (AZURE_LANGUAGES.includes(language)) {
            transcript = await step.run('stt-azure-transcribe', async () => {
                const token = process.env.AZURE_SUBSCRIPTION_TOKEN;
                if (!token) {
                    throw new Error('[ivrr-transcription] AZURE_SUBSCRIPTION_TOKEN missing; cannot run Azure STT.');
                }
                logger.log('[ivrr-transcription] transcribing with Azure (primary)', { callId, language });
                const content = await doSpeechToTextByAzure(token, audioUrl, 0, language);
                return content ?? null;
            });
        } else {
            transcript = await runAwsTranscribe({ step, logger, callId, language, s3Key, audioUrl });
        }

        if (!transcript) {
            logger.warn('[ivrr-transcription] No transcript produced (timed out or empty result)', { callId, language });
            return { transcript: null };
        }

        await step.run('save-transcription', async () => {
            await saveTranscription(transcript as string, storyId, language);
            logger.log('[ivrr-transcription] saved transcription', { callId, storyId, language });
        });

        await step.sendEvent('emit-translation-request', {
            name: 'translation/requested.v1',
            data: {
                sourceId: storyId,
                sourceType,
                content: transcript,
                originalTextLangCode: String(language).split('-')[0],
            },
        });

        return { transcriptLength: transcript.length };
    },
);

async function runAwsTranscribe(args: {
    step: any;
    logger: Logger;
    callId: unknown;
    language: string;
    s3Key?: string;
    audioUrl: string;
}): Promise<string | null> {
    const { step, logger, callId, language, s3Key, audioUrl } = args;

    const jobName = await step.run('stt-aws-start-job', async () => {
        const name = await startTranscriptionJob(s3Key, audioUrl, language, String(callId));
        logger.log('[ivrr-transcription] AWS Transcribe job started', { callId, language, jobName: name });
        return name;
    });

    for (let attempt = 0; attempt < MAX_POLLS; attempt++) {
        const job = await step.run(`stt-aws-poll-${attempt}`, async () =>
            getTranscriptionJob(jobName),
        );

        if (job.status === 'COMPLETED') {
            return step.run(`stt-aws-fetch-${attempt}`, async () =>
                job.transcriptUri ? fetchTranscript(job.transcriptUri) : null,
            );
        }

        if (job.status === 'FAILED') {
            throw new Error(
                `[ivrr-transcription] AWS Transcribe job ${jobName} failed: ${job.failureReason ?? 'unknown reason'}`,
            );
        }

        await step.sleep(`stt-aws-wait-${attempt}`, POLL_INTERVAL);
    }

    return null;
}

async function startTranscriptionJob(
    s3Key: string | undefined,
    audioUrl: string,
    language: string,
    callId: string,
): Promise<string> {
    const jobName = `${randomUUID()}_${callId}`;

    const bucket = process.env.AWS_S3_BUCKET;
    const mediaUri = s3Key && bucket ? `s3://${bucket}/${s3Key}` : audioUrl;

    await transcribeClient.send(
        new StartTranscriptionJobCommand({
            TranscriptionJobName: jobName,
            LanguageCode: language as any,
            MediaFormat: 'wav',
            Media: { MediaFileUri: mediaUri },
        }),
    );

    return jobName;
}

async function getTranscriptionJob(jobName: string): Promise<JobResult> {
    const { TranscriptionJob } = await transcribeClient.send(
        new GetTranscriptionJobCommand({ TranscriptionJobName: jobName }),
    );

    return {
        status: TranscriptionJob?.TranscriptionJobStatus ?? 'UNKNOWN',
        transcriptUri: TranscriptionJob?.Transcript?.TranscriptFileUri,
        failureReason: TranscriptionJob?.FailureReason,
    };
}

async function fetchTranscript(transcriptUri: string): Promise<string | null> {
    const resp = await axios.get(transcriptUri, { responseType: 'json' });
    const data = typeof resp.data === 'string' ? JSON.parse(resp.data) : resp.data;
    const transcript: string | undefined = data?.results?.transcripts?.[0]?.transcript;
    return transcript && transcript.trim() ? transcript : null;
}
