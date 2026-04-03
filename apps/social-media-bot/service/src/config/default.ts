import 'dotenv/config';
import {
  sendMessageToSupportTeam,
  // isTrue,
  getParameterValues,
  checkParameterValue,
  findKeysWithPrefix,
} from '@ourloop/shared';
import { flow } from '../config/flow';
import { Provider } from '../common/enum/provider.enum';
import { FacebookPageConfigInterface } from '../common/interface/facebook-page-config';
import { WhatsappNumberConfig } from '../common/interface/whatsapp-number-config';
import { TelegramNumberConfig } from '../common/interface/telegram-number-config';

export interface ApplicationConfig {
  call_timeout: number;
  port: number;
  environment: string;
  ttl: {
    userFlow: number;
    moderatorFlow: number;
  };
  timeoutForTests?: number;
  frontendUrl?: string;
  communicationTimeout: number;
  providerName: string;
  facebook: {
    verifyToken: string;
    apiUrl: string;
    pages: FacebookPageConfigInterface[];
  };
  whatsapp: {
    accountSid: string;
    authToken: string;
    callbackUrl: string;
    numbers: WhatsappNumberConfig[];
  };
}

export interface RedisConfig {
  connectionName: string;
  host: string;
  schema: string;
  user: string;
  port: number;
  password: string;
  db: number;
  tls?: Record<string, unknown>;
}

const env = process.env;

let facebookApiUrl: string;
let facebookPages = [] as FacebookPageConfigInterface[];
let facebookVerifyToken: string;
let whatsappAccountSid: string;
let whatsappAuthToken: string;
let whatsappCallbackUrl: string;
let whatsappNumbers = [] as WhatsappNumberConfig[];
let telegramWebhookUrl: string;
let telegramChannels = [] as TelegramNumberConfig[];

export default async (): Promise<Record<string, any>> => {
  const parameterKeys = findKeysWithPrefix(
    [
      env.APP_PORT,
      env.NODE_ENV,
      env.SUPPORTED_QUICK_REPLIES,
      env.REDIS_HOST,
      env.REDIS_SCHEMA,
      env.REDIS_USER,
      env.REDIS_PORT,
      env.REDIS_PASSWORD,
      env.REDIS_DB_PORT,
      env.PROVIDER_CONFIG,
      env.COMMUNICATION_TIMEOUT,
      env.PROVIDER_NAME,
      env.COMMUNICATOR_USER_FLOW_TTL,
      env.COMMUNICATOR_MODERATOR_TTL,
      env.ROLLBAR_ACCESS_TOKEN,
    ],
    '/ecs',
  );
  const parameters = await getParameterValues(
    {
      awsAccessKey: env.AWS_ACCESS_KEY,
      awsSecretKey: env.AWS_SECRET_KEY,
      awsRegion: env.AWS_REGION,
    },
    parameterKeys,
  );

  const environment = checkParameterValue(parameters, env.NODE_ENV);
  const providerName = checkParameterValue(parameters, env.PROVIDER_NAME);

  let redis: {
    connectionName: string;
    host: string;
    schema: string;
    user: string;
    port: number;
    password: string;
    db: number;
    tls?: Record<string, unknown>;
  } = {
    connectionName: 'REDIS',
    host: checkParameterValue(parameters, env.REDIS_HOST) || '',
    schema: checkParameterValue(parameters, env.REDIS_SCHEMA) || 'redis',
    user: checkParameterValue(parameters, env.REDIS_USER) || 'redis',
    port:
      Number.parseInt(checkParameterValue(parameters, env.REDIS_PORT)) || 6379,
    password: checkParameterValue(parameters, env.REDIS_PASSWORD) || '',
    db:
      Number.parseInt(checkParameterValue(parameters, env.REDIS_DB_PORT)) || 0,
  };

  if (environment !== 'local') {
    redis = {
      ...redis,
      tls: {
        servername: checkParameterValue(parameters, env.REDIS_HOST) || '',
        rejectUnauthorized: false,
      },
    };
  }

  const communicationTimeout =
    Number.parseInt(
      checkParameterValue(parameters, env.COMMUNICATION_TIMEOUT),
    ) || 5000;

  switch (providerName) {
    case Provider.FACEBOOK:
      let facebookConfig: {
        apiUrl: string;
        verifyToken: string;
        accessToken?: string;
        pages: FacebookPageConfigInterface[];
      };

      try {
        facebookConfig = JSON.parse(
          checkParameterValue(parameters, env.PROVIDER_CONFIG).replace(
            /\\"/g,
            '"',
          ),
        );
        facebookApiUrl = facebookConfig.apiUrl;
        facebookVerifyToken = facebookConfig.verifyToken;
        facebookPages = facebookConfig.pages;
      } catch (error) {
        sendMessageToSupportTeam(
          redis,
          `MESSENGER SERVICE: ${JSON.stringify(error.message)}`,
          communicationTimeout,
        );
      }

      break;

    case Provider.WHATSAPP:
      let whatsappConfig: {
        accountSid: string;
        authToken: string;
        callbackUrl: string;
        numbers: WhatsappNumberConfig[];
      };

      try {
        whatsappConfig = JSON.parse(
          checkParameterValue(parameters, env.PROVIDER_CONFIG).replace(
            /\\"/g,
            '"',
          ),
        );
        whatsappAccountSid = whatsappConfig.accountSid;
        whatsappAuthToken = whatsappConfig.authToken;
        whatsappNumbers = whatsappConfig.numbers;
        whatsappCallbackUrl = whatsappConfig.callbackUrl;
      } catch (error) {
        sendMessageToSupportTeam(
          redis,
          `MESSENGER SERVICE: ${JSON.stringify(error.message)}`,
          communicationTimeout,
        );
      }

      break;

    case Provider.TELEGRAM:
      let telegramConfig: {
        webhookUrl: string;
        channels: TelegramNumberConfig[];
      };

      try {
        telegramConfig = JSON.parse(
          checkParameterValue(parameters, env.PROVIDER_CONFIG).replace(
            /\\"/g,
            '"',
          ),
        );
        telegramWebhookUrl = telegramConfig.webhookUrl;
        telegramChannels = telegramConfig.channels;
      } catch (error) {
        sendMessageToSupportTeam(
          redis,
          `MESSENGER SERVICE: ${JSON.stringify(error.message)}`,
          communicationTimeout,
        );
      }

      break;
  }

  return {
    application: {
      communicationTimeout,
      providerName,
      call_timeout: 30,
      port:
        Number.parseInt(checkParameterValue(parameters, env.APP_PORT)) || 5002,
      environment,
      supportedQuickReplies: false,
      // isTrue(
      //   checkParameterValue(parameters, env.SUPPORTED_QUICK_REPLIES),
      // ),
      facebook: {
        verifyToken: facebookVerifyToken,
        apiUrl: facebookApiUrl,
        pages: facebookPages,
      },
      whatsapp: {
        accountSid: whatsappAccountSid,
        authToken: whatsappAuthToken,
        numbers: whatsappNumbers,
        callbackUrl: whatsappCallbackUrl,
      },
      telegram: {
        channels: telegramChannels,
        webhookUrl: telegramWebhookUrl,
      },
      ttl: {
        userFlow: Number.parseInt(
          checkParameterValue(parameters, env.COMMUNICATOR_USER_FLOW_TTL),
        ),
        moderatorFlow: Number.parseInt(
          checkParameterValue(parameters, env.COMMUNICATOR_MODERATOR_TTL),
        ),
      },
      maxLengthOfStoryIntro: 320,
      flow: flow,
    },
    redis,
    tools: {
      rollbar: {
        accessToken: checkParameterValue(parameters, env.ROLLBAR_ACCESS_TOKEN),
      },
    },
  };
};
