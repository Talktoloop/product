// gateway/service/src/inngest/functions/transcribe.ts

import { saveTranscription } from '../helpers/translations.helper';
import { Logger } from '@nestjs/common';
import { inngest } from '../client';
import axios from 'axios';
import {
    TranscribeClient,
    StartTranscriptionJobCommand,
} from '@aws-sdk/client-transcribe';
import { randomUUID } from 'crypto';


export const transcribeCall = inngest.createFunction(
    { id: 'ivrr-transcription' },
    { event: 'transcription/requested.v1', retry: { limit: 3, } },
    async ({ event, step }) => {
        const logger = new Logger('[INNGEST]')
        const { callId, language, sourceType } = event.data;

        // For now, just log so we can verify the wiring works
        await step.run('log-transcription-request', async () => {
            logger.log('[ivrr-transcription] received event', {
                callId,
                language,
                sourceType,
            });
        });
        const azureLanguages = JSON.parse(process.env.AZURE_TRANSCRIBE_LANGUAGES || '["so-SO"]');

        if (!event.data.audioUrl) {
            await step.run('no-audio-url', async () => {
                logger.warn('[ivrr-transcription] No audioUrl provided in event data; skipping STT.');
            });
            return;
        }

        const audioUrl = event.data.audioUrl;

        // If language is supported by Azure, we transcribe immediately with Azure (legacy behavior).
        if (azureLanguages.includes(language)) {
            const content = await step.run('stt-azure-transcribe', async () => {
                logger.log('[ivrr-transcription] transcribing with azure stt', { callId, language });
                return await transcribeWithAzure(audioUrl, language);
            });

            if (!content) {
                await step.run('no-content', async () => {
                    logger.warn('[ivrr-transcription] No content returned from Azure STT', { callId, language });
                });
                return;
            }

            await step.run('save-transcription', async () => {
                await saveTranscription(content, event.data.storyId, event.data.language);
                logger.log('[ivrr-transcription] saved transcription (azure)', { callId, language });
            });

            await step.run('emit-translation-request', async () => {
                await inngest.send({
                    name: 'translation/requested.v1',
                    data: {
                        sourceId: event.data.storyId,
                        sourceType,
                        content,
                        originalTextLangCode: event.data.language.split('-')[0],
                    },
                });

                logger.log('[ivrr-transcription] emitted translation/requested.v1 (azure)', {
                    callId,
                    sourceType,
                });
            });

            return;
        }

        // Default path: start AWS Transcribe job (no polling). A separate handler should persist results.
        await step.run('stt-aws-start-job', async () => {
            logger.log('[ivrr-transcription] starting aws transcribe job', { callId, language });
            const jobName = await startAwsTranscriptionJob(audioUrl, language, String(callId));
            logger.log('[ivrr-transcription] aws transcribe job started', { callId, language, jobName });
        });

        return;
    },



);

async function transcribeWithAzure(
    audioUrl: string,
    language: string,
): Promise<string | null> {
    const subscriptionKey = process.env.AZURE_SPEECH_KEY;
    if (!subscriptionKey) {
        console.error(
            '[ivrr-transcription] AZURE_SPEECH_KEY env var is missing; cannot run STT.',
        );
        return null;
    }

    try {
        const audioResponse = await axios.get<ArrayBuffer>(audioUrl, {
            responseType: 'arraybuffer',
        });

        // Call Azure Speech-to-Text REST API directly with subscription key
        const sttEndpoint = `https://westeurope.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=${encodeURIComponent(
            language,
        )}`;

        const sttResponse = await axios.post(sttEndpoint, audioResponse.data, {
            headers: {
                'Ocp-Apim-Subscription-Key': subscriptionKey,
                'Content-Type': 'audio/wav',
            },
        });

        const status = sttResponse.data['RecognitionStatus'];
        const text = sttResponse.data['DisplayText'] as string | undefined;

        if (status === 'Success' && text) {
            return text;
        }

        console.warn('[ivrr-transcription] Azure STT did not return text', {
            status,
            data: sttResponse.data,
        });

        return null;
    } catch (error: any) {
        console.error(
            '[ivrr-transcription] Error during Azure STT request',
            error?.message || error,
        );
        return null;
    }
}

async function startAwsTranscriptionJob(
    audioUrlOrKey: string,
    language: string,
    callId: string,
): Promise<string> {
    const region = process.env.AWS_REGION || 'eu-central-1';
    const bucketName = process.env.BUCKET_NAME;

    if (!bucketName) {
        throw new Error('BUCKET_NAME env var is missing; cannot start AWS Transcribe job.');
    }

    const client = new TranscribeClient({ region });

    // Match legacy: `${uuid}_${callId}`
    const jobName = `${randomUUID()}_${callId}`;

    // If caller passes a full URL (e.g. s3 https), use it; otherwise treat as S3 key.
    const mediaUri =
        audioUrlOrKey.startsWith('http://') || audioUrlOrKey.startsWith('https://')
            ? audioUrlOrKey
            : `https://${bucketName}.s3.${region}.amazonaws.com/${audioUrlOrKey}`;

    await client.send(
        new StartTranscriptionJobCommand({
            TranscriptionJobName: jobName,
            LanguageCode: language as any,
            MediaFormat: 'wav',
            OutputBucketName: bucketName,
            Media: {
                MediaFileUri: mediaUri,
            },
        }),
    );

    return jobName;
}
