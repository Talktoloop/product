const {
  TranscribeClient,
  StartTranscriptionJobCommand,
  GetTranscriptionJobCommand,
} = require('@aws-sdk/client-transcribe');
const {
  LambdaClient,
  InvokeAsyncCommand,
} = require('@aws-sdk/client-lambda');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');
const { parseBuffer } = require('music-metadata');

const { DbService } = require('./db');
const { generateSignedUrl, getFileByName } = require('./s3');
const { resolveSecret } = require('./secrets');
const { logInfo, logError } = require('../helpers/logger');
const {
  SourceType,
  TranscriptionStatus,
  STORY_STATUS,
} = require('../constants');

/**
 * Audio transcription service. Routes calls between AWS Transcribe and Azure
 * Speech-to-Text based on language, then writes results to the DB and triggers
 * translation Lambdas for downstream language fan-out.
 *
 * Behaviour ported verbatim from `src/transcribe/service/transcribe.ts`.
 */

const region = process.env.AWS_REGION || 'eu-central-1';
const transcribeClient = new TranscribeClient({ region });
const lambdaClient = new LambdaClient({ region });

let _azureTokenPromise = null;
async function getAzureSubscriptionToken() {
  if (!_azureTokenPromise) {
    _azureTokenPromise = resolveSecret('SECRETS_AZURE_SUBSCRIPTION_TOKEN');
  }
  return _azureTokenPromise;
}

class TranscribeService {
  constructor() {
    this.db = new DbService();
  }

  async closeConnection() {
    await this.db.closeConnection();
  }

  // ---- Status helpers ---------------------------------------------------

  generateJobId(callId) {
    return `${uuidv4()}_${callId}`;
  }

  getCallId(jobName) {
    return jobName.split('_').pop();
  }

  async getCallById(callId) {
    const [call] = await this.db.getCallRowById(callId);
    return call;
  }

  async getStoryByCallId(callId) {
    const [story] = await this.db.getStoryByIvrrCallId(callId);
    return story;
  }

  async getCommentById(commentId) {
    const [comment] = await this.db.getCommentById(commentId);
    return comment;
  }

  async updateStoryStatus(storyId, status) {
    return this.db.updateStoryTranscriptionStatus(storyId, status);
  }

  // ---- Trigger entrypoints ---------------------------------------------

  /**
   * Path 1: invoked directly with { callId, language } when a new audio file
   * has been uploaded. Routes to Azure for languages in `AZURE_TRANSCRIBE_LANGUAGES`,
   * otherwise to AWS Transcribe.
   */
  async startTranscription(event) {
    const { callId, language } = event;
    const bucketName = process.env.BUCKET_NAME;

    try {
      const call = await this.getCallById(callId);
      if (!call) return null;

      const azureLanguages = parseAzureLanguages();
      if (azureLanguages.includes(language)) {
        return this.transcribeByAzure(call, language);
      }

      const jobName = this.generateJobId(call.id);
      const data = await transcribeClient.send(
        new StartTranscriptionJobCommand({
          TranscriptionJobName: jobName,
          LanguageCode: language,
          MediaFormat: 'wav',
          OutputBucketName: bucketName,
          Media: {
            MediaFileUri: `https://${bucketName}.s3.${region}.amazonaws.com/${call.s3_file_id}`,
          },
        }),
      );

      if (data) {
        await this.db.updateFileTranscriptionStatus(TranscriptionStatus.TRANSCRIBING, call.id, '');
      }
      if (call.is_story) {
        const story = await this.getStoryByCallId(call.id);
        if (story) {
          await this.updateStoryStatus(story.id, STORY_STATUS.TRANSCRIPTION_IN_PROGRESS);
        }
      }
      return data;
    } catch (error) {
      logError('startTranscription error', error);
      try {
        await this.db.updateFileTranscriptionStatus(TranscriptionStatus.ERROR, callId, '');
        const story = await this.getStoryByCallId(callId);
        if (story) {
          await this.updateStoryStatus(story.id, STORY_STATUS.PENDING_TRANSCRIPTION);
        }
      } catch (recoverErr) {
        logError('startTranscription recovery failed', recoverErr);
      }
      return null;
    }
  }

  /**
   * Azure Speech-to-Text path. Pulls the file from S3 (via signed URL), checks
   * minimum duration, then issues a token + recognise request.
   */
  async transcribeByAzure(call, language) {
    const url = await generateSignedUrl(process.env.BUCKET_NAME, call.s3_file_id);

    const fileResp = await axios.get(url, {
      responseType: 'arraybuffer',
      headers: { 'Content-Type': 'audio/wav' },
    });
    const metadata = await parseBuffer(Buffer.from(fileResp.data));
    const duration = metadata && metadata.format && metadata.format.duration;
    const minDuration = parseInt(process.env.RECORDING_MINIMUM_LENGTH || '0', 10);
    if (!duration || duration < minDuration) {
      logInfo(`Audio duration ${duration}s below minimum ${minDuration}s, skipping`);
      return null;
    }

    const subscriptionToken = await getAzureSubscriptionToken();
    let token;
    try {
      const tokenResp = await axios.post(
        'https://westeurope.api.cognitive.microsoft.com/sts/v1.0/issuetoken',
        {},
        {
          headers: {
            'Ocp-Apim-Subscription-Key': subscriptionToken,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': '0',
          },
        },
      );
      token = tokenResp.data;
    } catch (error) {
      logError('Azure token fetch failed', error);
      return null;
    }

    let recogniseResp;
    try {
      recogniseResp = await axios.post(
        `https://westeurope.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=${language}`,
        fileResp.data,
        {
          headers: {
            'Transfer-Encoding': 'chunked',
            'Content-type': 'audio/mpeg;codec="audio/pcm";',
            Authorization: `Bearer ${token}`,
          },
        },
      );
    } catch (error) {
      logError('Azure recognise failed', error);
      return null;
    }

    const content = recogniseResp.data && recogniseResp.data.DisplayText;
    if (recogniseResp.data && recogniseResp.data.RecognitionStatus === 'Success' && content) {
      await this.db.updateFileTranscriptionStatus(TranscriptionStatus.TRANSCRIBED, call.id, content);
      return this.checkTypeAndSaveAndRunTranslation(call, content);
    }
    return this.saveStatusAfterFailedTranscription(call.id);
  }

  /**
   * Path 2: invoked by AWS EventBridge when a Transcribe job finishes. Fetch
   * the result file from S3, write the content into the DB, and fan out to
   * translation Lambdas.
   */
  async getTranscriptionContent(event) {
    const jobId = event.detail.TranscriptionJobName;
    const result = await transcribeClient.send(
      new GetTranscriptionJobCommand({ TranscriptionJobName: jobId }),
    );
    const transcriptUri = result && result.TranscriptionJob && result.TranscriptionJob.Transcript && result.TranscriptionJob.Transcript.TranscriptFileUri;
    if (!transcriptUri) return null;

    const parts = transcriptUri.split('/');
    const bucketName = parts[parts.length - 2];
    const file = parts[parts.length - 1];
    const fileContent = await getFileByName(file, bucketName);
    return fileContent.results.transcripts[0].transcript;
  }

  async saveTranscriptionSuccessData(jobId, content) {
    const callId = this.getCallId(jobId);
    return this.db.updateFileTranscriptionStatus(TranscriptionStatus.TRANSCRIBED, callId, content);
  }

  async saveTranscriptionErrorData(jobId) {
    const callId = this.getCallId(jobId);
    return this.db.updateFileTranscriptionStatus(TranscriptionStatus.ERROR, callId);
  }

  async saveStatusAfterFailedTranscription(callId) {
    logInfo('Transcription FAILED for call', callId);
    await this.db.updateFileTranscriptionStatus(TranscriptionStatus.ERROR, callId);
    const call = await this.getCallById(callId);
    if (call && call.is_story) {
      const story = await this.getStoryByCallId(callId);
      if (story) {
        await this.updateStoryStatus(story.id, STORY_STATUS.PENDING_TRANSCRIPTION);
      }
    }
  }

  async checkTypeAndSaveAndRunTranslation(call, content) {
    if (call.is_story) {
      await this.saveStoryTranscriptionAndRunTranslation(call, content);
    }
    if (call.comment_id) {
      await this.saveCommentTranscriptionAndRunTranslation(call, content);
    }
  }

  async saveStoryTranscriptionAndRunTranslation(call, content) {
    const story = await this.getStoryByCallId(call.id);
    if (!story) return;
    await this.updateStoryStatus(story.id, STORY_STATUS.PENDING_TRANSLATION);
    return this.saveTranscriptionAndRunTranslation(SourceType.STORY, content, story.id, story.languageId);
  }

  async saveCommentTranscriptionAndRunTranslation(call, content) {
    const comment = await this.getCommentById(call.comment_id);
    if (!comment) return;
    return this.saveTranscriptionAndRunTranslation(SourceType.COMMENT, content, call.comment_id, comment.languageId);
  }

  async saveTranscriptionAndRunTranslation(sourceType, content, sourceId, languageId) {
    try {
      await this.db.saveTranslationToDB(sourceType, content, sourceId, languageId);
      const language = await this.db.getLanguageById(languageId);
      const languages = await this.db.getListOfLanguages();
      const lambdaName = process.env.TRANSLATE_FUNCTION_NAME;

      await Promise.all(
        languages
          .filter((lang) => lang.id !== languageId)
          .map((lang) =>
            invokeTranslateLambda(lambdaName, {
              sourceId,
              sourceType,
              target: lang.code,
              originalText: content,
              originalTextLang: language.code,
              languageId: lang.id,
              hopsConfig: [],
              provider: lang.provider,
              alternativeProvider: lang.alternativeProvider,
            }),
          ),
      );
    } catch (error) {
      logError('saveTranscriptionAndRunTranslation error', error);
    }
  }
}

function parseAzureLanguages() {
  try {
    return JSON.parse(process.env.AZURE_TRANSCRIBE_LANGUAGES || '[]');
  } catch (error) {
    logError('AZURE_TRANSCRIBE_LANGUAGES not parseable as JSON', error);
    return [];
  }
}

async function invokeTranslateLambda(functionName, payload) {
  try {
    await lambdaClient.send(
      new InvokeAsyncCommand({
        FunctionName: functionName,
        InvokeArgs: JSON.stringify(payload),
      }),
    );
  } catch (error) {
    logError('Invoke translate Lambda failed', error);
  }
}

module.exports = { TranscribeService };
