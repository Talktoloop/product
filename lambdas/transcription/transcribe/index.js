const { eventLogger, logInfo, logError } = require('./shared/helpers/logger');
const { TranscribeService } = require('./shared/services/transcribe');

/**
 * Transcribe Lambda. Two trigger paths:
 *
 * 1. Direct invoke with `{ callId, language }` when a new audio file has been
 *    uploaded → start an AWS Transcribe (or Azure Speech) job.
 *
 * 2. AWS EventBridge event when a Transcribe job completes → fetch the result
 *    file from S3, save to DB, fan out translation Lambdas for other languages.
 *
 * Behaviour ported verbatim from `src/transcribe/app.ts`.
 */
exports.handler = async (event) => {
  eventLogger(event);

  const transcribeService = new TranscribeService();

  try {
    if ('callId' in event) {
      await transcribeService.startTranscription(event);
    }

    if ('account' in event) {
      const { TranscriptionJobStatus, TranscriptionJobName } = event.detail;
      const callId = transcribeService.getCallId(TranscriptionJobName);
      const ivrrCall = await transcribeService.getCallById(callId);

      if (TranscriptionJobStatus === 'COMPLETED') {
        logInfo('Transcription job COMPLETED');
        const content = await transcribeService.getTranscriptionContent(event);
        logInfo('Transcription content', content);

        if (!content) {
          await transcribeService.saveTranscriptionErrorData(TranscriptionJobName);
        } else {
          await transcribeService.saveTranscriptionSuccessData(TranscriptionJobName, content);
          if (ivrrCall) {
            await transcribeService.checkTypeAndSaveAndRunTranslation(ivrrCall, content);
          }
        }
      } else if (TranscriptionJobStatus === 'FAILED') {
        await transcribeService.saveStatusAfterFailedTranscription(callId);
      }
    }

    return { body: { status: true } };
  } catch (error) {
    logError('transcribe handler error', error);
    return { statusCode: 500, body: JSON.stringify({ status: false, error: error.message }) };
  } finally {
    await transcribeService.closeConnection();
  }
};
