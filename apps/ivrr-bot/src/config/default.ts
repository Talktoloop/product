import 'dotenv/config';
import {
  sendMessageToSupportTeam,
  getParameterValues,
  checkParameterValue,
  findKeysWithPrefix,
} from '@ourloop/shared';
import { AvailableLangs } from '../const/config';

export interface TwilioNumberConfig {
  twilioPhoneNumber: string;
  utcTimeDiff: number;
  inboundFlowId: string;
  trunkSid?: string;
  country?: string;
}

export interface ApplicationConfig {
  call_timeout: number;
  port: number;
  globalPrefix: string;
  environment: string;
  flowTTL: number;
  cacheTTL: number;
  timeoutForTests?: number;
  frontendUrl?: string;
  communicationTimeout: number;
  twilioAccSid: string;
  twilioAuthToken: string;
  processCallDelay: number;
  checkAnswerCallDelay: number;
  twilioPhoneNumbers: TwilioNumberConfig[];
  awsAccessKey: string;
  awsSecretKey: string;
  awsRegion: string;
  awsS3Bucket: string;
  ivrrServiceUrl: string;
  archiveDataMonths: number;
  startNightHour: number;
  endNightHour: number;
  maxLengthOfRecordBlockInSeconds: number;
  schedulerDiffInHours: number;
  minimumPercentageHeardLevel: number;
}

export interface RedisConfig {
  connectionName: string;
  host: string;
  schema: string;
  user: string;
  port: number;
  password: string;
  db: number;
}

export interface DefaultConfig {
  application: ApplicationConfig;
  redis: RedisConfig;
}

const env = process.env;
let twilioPhoneNumbers = [] as TwilioNumberConfig[];

export const getTwilioNumberConfig = (phoneNumber: string) => {
  return twilioPhoneNumbers.find(
    (number) => number.twilioPhoneNumber === phoneNumber,
  );
};

export default async (): Promise<Record<string, any>> => {
  const parameterKeys = findKeysWithPrefix(
    [
      env.BASIC_TOKEN,
      env.APP_PORT,
      env.NODE_ENV,
      env.GLOBAL_PREFIX,
      env.ROLLBAR_ACCESS_TOKEN,
      env.TWILIO_ACCSID,
      env.COMMUNICATION_TIMEOUT,
      env.TWILIO_PHONE_NUMBERS,
      env.FLOW_TTL,
      env.PROCESS_CALL_DELAY,
      env.REDIS_USER,
      env.REDIS_PORT,
      env.REDIS_PASSWORD,
      env.REDIS_DB_PORT,
      env.REDIS_SCHEMA,
      env.REDIS_HOST,
      env.CHECK_ANSWER_CALL_DELAY,
      env.TWILIO_AUTH_TOKEN,
      env.AWS_S3_BUCKET,
      env.IVRR_SERVICE_URL,
      env.ARCHIVE_DATA_MONTHS,
      env.START_NIGHT_HOUR,
      env.END_NIGHT_HOUR,
      env.MAX_LENGTH_OF_RECORD_BLOCK_IN_SECONDS,
      env.SCHEDULER_DIFF_IN_HOURS,
      env.MINIMUM_PERCENTAGE_HEARD_LEVEL,
      env.DB_DATABASE,
      env.DB_HOST,
      env.DB_PASSWORD,
      env.DB_PORT,
      env.DB_USERNAME,
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

  const communicationTimeout =
    Number.parseInt(
      checkParameterValue(parameters, env.COMMUNICATION_TIMEOUT),
    ) || 5000;

  if (
    environment !== 'local' &&
    Object.keys(parameters).length === 0 &&
    parameterKeys.length > 0
  ) {
    sendMessageToSupportTeam(
      redis,
      'IVR SERVICE: failed to provide values for environments variables',
      communicationTimeout,
    );
  }

  if (environment !== 'local') {
    redis = {
      ...redis,
      tls: {
        servername: env.REDIS_HOST || '',
        rejectUnauthorized: false,
      },
    };
  }

  try {
    if (environment !== 'local') {
      twilioPhoneNumbers = JSON.parse(
        checkParameterValue(parameters, env.TWILIO_PHONE_NUMBERS).replace(
          /\\"/g,
          '"',
        ),
      );
    } else {
      twilioPhoneNumbers = JSON.parse(env.TWILIO_PHONE_NUMBERS)
    }

  } catch (error) {
    if (environment !== 'local') {
      sendMessageToSupportTeam(
        redis,
        `IVR SERVICE: ${JSON.stringify(error.message)} twilioPhoneNumbers: ${twilioPhoneNumbers} env.TWILIO_PHONE_NUMBERS: ${env.TWILIO_PHONE_NUMBERS}`,
        communicationTimeout,
      );
    }
  }

  return {
    availableLanguages: Object.values(AvailableLangs),
    backend: {
      basicToken: checkParameterValue(parameters, env.BASIC_TOKEN) || '',
    },

    application: {
      call_timeout: 30,
      callDurationLimitInGHours: 2,
      port:
        Number.parseInt(checkParameterValue(parameters, env.APP_PORT)) || 7002,
      globalPrefix: checkParameterValue(parameters, env.GLOBAL_PREFIX) || 'v1',
      environment,
      flowTTL:
        Number.parseInt(checkParameterValue(parameters, env.FLOW_TTL)) || 3600,
      cacheTTL: 7200,
      processCallDelay:
        Number.parseInt(
          checkParameterValue(parameters, env.PROCESS_CALL_DELAY),
        ) || 120,
      checkAnswerCallDelay:
        Number.parseInt(
          checkParameterValue(parameters, env.CHECK_ANSWER_CALL_DELAY),
        ) || 240,
      communicationTimeout,
      twilioAccSid: checkParameterValue(parameters, env.TWILIO_ACCSID),
      twilioAuthToken: checkParameterValue(parameters, env.TWILIO_AUTH_TOKEN),
      twilioPhoneNumbers,
      awsAccessKey: env.AWS_ACCESS_KEY,
      awsSecretKey: env.AWS_SECRET_KEY,
      awsRegion: env.AWS_REGION,
      awsS3Bucket: checkParameterValue(parameters, env.AWS_S3_BUCKET),
      ivrrServiceUrl: checkParameterValue(parameters, env.IVRR_SERVICE_URL),
      archiveDataMonths:
        Number.parseInt(
          checkParameterValue(parameters, env.ARCHIVE_DATA_MONTHS),
        ) || 2,
      startNightHour:
        Number.parseInt(
          checkParameterValue(parameters, env.START_NIGHT_HOUR),
        ) || 22, 
      endNightHour:
        Number.parseInt(checkParameterValue(parameters, env.END_NIGHT_HOUR)) ||
        6, 
      limitOfPhoneCalls: 10,
      maxLengthOfRecordBlockInSeconds:
        Number.parseInt(
          checkParameterValue(
            parameters,
            env.MAX_LENGTH_OF_RECORD_BLOCK_IN_SECONDS,
          ),
        ) || 300,
      schedulerDiffInHours:
        Number.parseFloat(
          checkParameterValue(parameters, env.SCHEDULER_DIFF_IN_HOURS),
        ) || 0,
      sequenceNumberLimit: 3,
      minimumPercentageHeardLevel:
        Number.parseInt(
          checkParameterValue(parameters, env.MINIMUM_PERCENTAGE_HEARD_LEVEL),
        ) || 70,
    },
    database: {
      charset: 'utf8mb4_unicode_ci',
      database: checkParameterValue(parameters, env.DB_DATABASE),
      host: checkParameterValue(parameters, env.DB_HOST),
      logging: false,
      password: checkParameterValue(parameters, env.DB_PASSWORD),
      port:
        Number.parseInt(checkParameterValue(parameters, env.DB_PORT)) || 3306,
      synchronize: false,
      type: 'mysql',
      bigNumberStrings: false,
      username: checkParameterValue(parameters, env.DB_USERNAME),
    },
    recordings: {
      reply: {
        intro: {
          en: {
            text: 'Hello\nThis is an automated voice service.\nYou recently shared your experience of an organisation working in your area with Loop, and somebody has replied.\nIn a moment, you’ll hear the voice of a member of the Loop team reading the reply to you. Afterwards, you’ll hear some options about how to reply. First, here is the Loop moderator:',
            audio:
              'https://social-media-files.talktoloop.org/English/IVR-Format/R/R1.1.wav',
          },
          ny: {
            text: 'Muli bwanji.\nIyi ni automated voice service.\nMunakambapo vamene munacitako experience na bungwe yamene igwila nchito mu area yanu na Loop. Winangu wayankha.\nMuzamvela mau ya memba wa team akubelengelani yankho. Pambuyo pake, mudzamvela vinangu vosankha va mwamene mungayankhile.\nChoyambilila, uyu Loop moderator:',
            audio:
              'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/R/R1.1.wav',
          },
          tog: {
            text: 'Mwatambulwa,\neci ncibelesyo cisumpukide cibelesya jwi kwiinda mukubelesya maiiwe muluwo.\nCalino lino mwakabaana na kwaambila bamwi kujatikizya malimvwe na mbomulimvwa kujatikizya mbunga yalo ibeleka antoomwe a Loop mubusena nkomuzulilwa, alimwi kuli bamwi bapa bwiinguzi.\nKwaciindi biyo cisyoonto mulamvwa jwii lyabamwi bantu bazulilwa ku Loop balamubalila bwiinguzi.\nKwayinda ciindi cisyoonto, mulamvwa kusala kupedwe kweendelana akuti na muyanda kupa bwiinguzi, cakusanguna, mbaaba beendelezi ba Loop.',
            audio:
              'https://social-media-files.talktoloop.org/Tonga/IVR-Format/R/R1.1.wav',
          },
          so: {
            text: 'Kani waa adeeg cod ah oo horay loo duubay.\nWaxaad dhawaan nala wadaagtay sheeko ku saabsan hay’ad ka shaqaysaa deegaankaaga. Ruux ka socda hay’adda ayaa ka soo jawaabay sheekadaada.\nWaxaad mardhow dhagaysan doontaa jawaabtooda ka dibna waxaad dooran doortaa inaad u jawaabto iyo in kale.',
            audio:
              'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/R/R1.1.mp3',
          },
          maa: {
            text: 'Kang waliba adeeg cod eh oo mar hora la duubi.\nKang waliba adeeg cod eh oo mar hora la duubi.\nWaliba mar dhow dhegeysadaase jowaabtiyo kubacadana waliba doorada doonte ini ada ku jowaabta I ini kale.',
            audio:
              'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/R/R1.1.mp3',
          },
          bnd: {
            text: 'Kang waliba adeeg cod eh oo mar hora la duubi.\nKang waliba adeeg cod eh oo mar hora la duubi.\nWaliba mar dhow dhegeysadaase jowaabtiyo kubacadana waliba doorada doonte ini ada ku jowaabta I ini kale.',
            audio:
              'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/R/R1.1.mp3',
          },
          bju: {
            text: 'Kang waliba adeeg cod eh oo mar hora la duubi.\nKang waliba adeeg cod eh oo mar hora la duubi.\nWaliba mar dhow dhegeysadaase jowaabtiyo kubacadana waliba doorada doonte ini ada ku jowaabta I ini kale.',
            audio:
              'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/R/R1.1.mp3',
          },
          bara: {
            text: 'Kang waliba adeeg cod eh oo mar hora la duubi.\nKang waliba adeeg cod eh oo mar hora la duubi.\nWaliba mar dhow dhegeysadaase jowaabtiyo kubacadana waliba doorada doonte ini ada ku jowaabta I ini kale.',
            audio:
              'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/R/R1.1.mp3',
          },
        },
        outro: {
          en: {
            text: 'To repeat the message that was just played, please press 1.\nIf you wish to respond to the message now, please press 2\nIf you wish to respond to the message later, please press 3\nIf you don’t wish to respond, please press 4',
            audio:
              'https://social-media-files.talktoloop.org/English/IVR-Format/R/R2.1.wav',
          },
          ny: {
            text: 'Kuti mubwezepo message yamene yenze yalila, tinikani 1.\nNgati mufuna kuyankha ma message lomba pano, tinikani 2.\nNgati mufuna kuyankha pambuyo pake, tinikani 3.\nNgati simufuna kuyankha, tinikani 4.',
            audio:
              'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/R/R2.1.wav',
          },
          tog: {
            text: 'Kuti na muyanda kwiindulula na kuloolola kumvwa makani alo azwa akubikkwa akaka amutyanke a 1.\nKuti na muyanda kupa bwiinguzi kumakani na bulembo lino, akaka amutyanke a 2.\nKuti na mulayanda kupa bwiinguzi aciindi cimwi ciimbi kutali lino, akaka amutyanke a 3.\nNa tamuyandi kupa bwiinguzi, akaka amutyanke a 4.',
            audio:
              'https://social-media-files.talktoloop.org/Tonga/IVR-Format/R/R2.1.wav',
          },
          so: {
            text: 'Si aad mar kale u dhagaysto fariintii aad hadda dhagaysatay, fadlan riix 1.\nHaddii aad rabto inaad hadda ka jawaabto fariinta, fadlan riix 2.\nHaddii aad rabto inaad hadda ka jawaabto fariinta goor dambe, fadlan riix 3.\nHaddii aadan rabin inaad jawaab bixiso, fadlan riix 4.',
            audio:
              'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/R/R2.1.mp3',
          },
          maa: {
            text: 'Sidi ana mar kale ing dhugunsata fariingtung ada hada dhugunsati fadlang rii 1.\nHooba ada fadaasa ini ad ahata ku jowaabta fariingtung fadlan rii 2.\nHooba ada fadaasa ini ad ahata ka jowaabta fariingta mar hora fadlan rii 3.\nHooba ada ing fadaana ini ada jowaabta fadlan rii 4.',
            audio:
              'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/R/R2.1.mp3',
          },
          bnd: {
            text: 'Sidi ana mar kale ing dhugunsata fariingtung ada hada dhugunsati fadlang rii 1.\nHooba ada fadaasa ini ad ahata ku jowaabta fariingtung fadlan rii 2.\nHooba ada fadaasa ini ad ahata ka jowaabta fariingta mar hora fadlan rii 3.\nHooba ada ing fadaana ini ada jowaabta fadlan rii 4.',
            audio:
              'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/R/R2.1.mp3',
          },
          bju: {
            text: 'Sidi ana mar kale ing dhugunsata fariingtung ada hada dhugunsati fadlang rii 1.\nHooba ada fadaasa ini ad ahata ku jowaabta fariingtung fadlan rii 2.\nHooba ada fadaasa ini ad ahata ka jowaabta fariingta mar hora fadlan rii 3.\nHooba ada ing fadaana ini ada jowaabta fadlan rii 4.',
            audio:
              'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/R/R2.1.mp3',
          },
          bara: {
            text: 'Sidi ana mar kale ing dhugunsata fariingtung ada hada dhugunsati fadlang rii 1.\nHooba ada fadaasa ini ad ahata ku jowaabta fariingtung fadlan rii 2.\nHooba ada fadaasa ini ad ahata ka jowaabta fariingta mar hora fadlan rii 3.\nHooba ada ing fadaana ini ada jowaabta fadlan rii 4.',
            audio:
              'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/R/R2.1.mp3',
          },

        },
        options: {
          '0': {
            en: 'https://social-media-files.talktoloop.org/English/IVR-Format/R/R4.1.wav',
            ny: 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/R/R4.1.wav',
            tog: 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/R/R4.1.wav',
            so: 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/R/R4.1.mp3',
            maa: 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/R/R4.1.mp3',
            bnd: 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/R/R4.1.mp3',
            bju: 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/R/R4.1.mp3',
            bara: 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/R/R4.1.mp3',
          },
          '1': {
            en: 'https://social-media-files.talktoloop.org/English/IVR-Format/R/R2.1.wav',
            ny: 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/R/R2.1.wav',
            tog: 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/R/R2.1.wav',
            so: 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/R/R2.1.mp3',
            maa: 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/R/R2.1.mp3',
            bnd: 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/R/R2.1.mp3',
            bju: 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/R/R2.1.mp3',
            bara: 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/R/R2.1.mp3'
          },
          '2': {
            en: 'https://social-media-files.talktoloop.org/English/IVR-Format/R/R3.1.wav',
            ny: 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/R/R3.1.wav',
            tog: 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/R/R3.1.wav',
            so: 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/R/R3.1.mp3',
            maa: 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/R/R3.1.mp3',
            bnd: 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/R/R3.1.mp3',
            bju: 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/R/R3.1.mp3',
            bara: 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/R/R3.1.mp3'
          },
          '3': {
            en: 'https://social-media-files.talktoloop.org/English/IVR-Format/R/R3.2.wav',
            ny: 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/R/R3.2.wav',
            tog: 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/R/R3.2.wav',
            so: 'https://social-media-files.talktoloop.org/English/IVR-Format/R/R3.2.wav',
            maa: 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/R/R3.2.mp3',
            bnd: 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/R/R3.2.mp3',
            bju: 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/R/R3.2.mp3',
            bara: 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/R/R3.2.mp3',
          },
          '4': {
            en: 'https://social-media-files.talktoloop.org/English/IVR-Format/R/R3.3.wav',
            ny: 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/R/R3.3.wav',
            tog: 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/R/R3.3.wav',
            so: 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/R/R3.3.mp3',
            maa: 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/R/R3.3.mp3',
            bnd: 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/R/R3.3.mp3',
            bju: 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/R/R3.3.mp3',
            bara: 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/R/R3.3.mp3',
          },
        },
      },
      publication: {
        story: {
          en: 'https://social-media-files.talktoloop.org/English/IVR-Format/R/R5.1.mp3',
          ny: 'https://social-media-files.talktoloop.org/English/IVR-Format/R/R5.1.mp3',
          tog: 'https://social-media-files.talktoloop.org/English/IVR-Format/R/R5.1.mp3',
          so: 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/P/P1.1.mp3',
          maa: 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/P/P1.1.mp3',
          bnd: 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/P/P1.1.mp3',
          bju: 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/P/P1.1.mp3',
          bara: 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/P/P1.1.mp3'
        },
        reply: {
          en: 'https://social-media-files.talktoloop.org/English/IVR-Format/R/R5.1.mp3',
          ny: 'https://social-media-files.talktoloop.org/English/IVR-Format/R/R5.1.mp3',
          tog: 'https://social-media-files.talktoloop.org/English/IVR-Format/R/R5.1.mp3',
          so: 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/P/P1.2.mp3',
          maa: 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/P/P1.2.mp3',
          bnd: 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/P/P1.2.mp3',
          bju: 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/P/P1.2.mp3',
          bara: 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/P/P1.2.mp3'
        },
      },
      rejection: {
        story: {
          intro: {
            en: 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X1.1.wav',
            ny: 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X1.1.wav',
            tog: 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X1.1.wav',
            so: 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X1.1.mp3',
            maa: 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X1.1.mp3',
            bnd: 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X1.1mp3',
            bju: 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X1.1.mp3',
            bara: 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X1.1.mp3'
          },
          reasons: {
            en: {
              '1': 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X2.1.wav',
              '2': 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X2.2.wav',
              '3': 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X2.3.wav',
              '4': 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X2.4.wav',
              '5': 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X2.5.wav',
              '7': 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X2.6.wav',
              '10': 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X2.10.mp3'
            },
            ny: {
              '1': 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X2.1.wav',
              '2': 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X2.2.wav',
              '3': 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X2.3.wav',
              '4': 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X2.4.wav',
              '5': 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X2.5.wav',
              '7': 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X2.6.wav',
            },
            tog: {
              '1': 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X2.1.wav',
              '2': 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X2.2.wav',
              '3': 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X2.3.wav',
              '4': 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X2.4.wav',
              '5': 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X2.5.wav',
              '7': 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X2.6.wav',
            },
            so: {
              '1': 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X2.1.mp3',
              '2': 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X2.2.mp3',
              '3': 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X2.3.mp3',
              '4': 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X2.4.mp3',
              '5': 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X2.5.mp3',
              '7': 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X2.6.mp3',
              '10': 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X2.10.mp3',
            },
            maa: {
              '1': 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X2.1.mp3',
              '2': 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X2.2.mp3',
              '3': 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X2.3.mp3',
              '4': 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X2.4.mp3',
              '5': 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X2.5.mp3',
              '7': 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X2.6.mp3',
              '10': 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X2.10.mp3',
            },
            bnd: {
              '1': 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X2.1.mp3',
              '2': 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X2.2.mp3',
              '3': 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X2.3.mp3',
              '4': 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X2.4.mp3',
              '5': 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X2.5.mp3',
              '7': 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X2.6.mp3',
              '10': 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X2.10.mp3',
            },
            bju: {
              '1': 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X2.1.mp3',
              '2': 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X2.2.mp3',
              '3': 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X2.3.mp3',
              '4': 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X2.4.mp3',
              '5': 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X2.5.mp3',
              '7': 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X2.6.mp3',
              '10': 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X2.10.mp3',
            },
            bara: {
              '1': 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X2.1.mp3',
              '2': 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X2.2.mp3',
              '3': 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X2.3.mp3',
              '4': 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X2.4.mp3',
              '5': 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X2.5.mp3',
              '7': 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X2.6.mp3',
              '10': 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X2.10.mp3',
            }
          },
          outro: {
            en: 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X3.1.wav',
            ny: 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X3.1.wav',
            tog: 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X3.1.wav',
            so: 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X3.1.mp3',
            maa: 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X3.1.mp3',
            bnd: 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X3.1mp3',
            bju: 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X3.1.mp3',
            bara: 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X3.1.mp3'
          },
        },
        reply: {
          intro: {
            en: 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X1.1.wav',
            ny: 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X1.1.wav',
            tog: 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X1.1.wav',
            so: 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X1.1.mp3',
            maa: 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X1.1.mp3',
            bnd: 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X1.1.mp3',
            bju: 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X1.1.mp3',
            bara: 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X1.1.mp3'
          },
          reasons: {
            en: {
              '1': 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X2.1.wav',
              '2': 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X2.2.wav',
              '3': 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X2.3.wav',
              '4': 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X2.4.wav',
              '5': 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X2.5.wav',
              '7': 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X2.6.wav',
            },
            ny: {
              '1': 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X2.1.wav',
              '2': 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X2.2.wav',
              '3': 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X2.3.wav',
              '4': 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X2.4.wav',
              '5': 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X2.5.wav',
              '7': 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X2.6.wav',
            },
            tog: {
              '1': 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X2.1.wav',
              '2': 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X2.2.wav',
              '3': 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X2.3.wav',
              '4': 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X2.4.wav',
              '5': 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X2.5.wav',
              '7': 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X2.6.wav',
            },
            so: {
              '1': 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X2.1.mp3',
              '2': 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X2.2.mp3',
              '3': 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X2.3.mp3',
              '4': 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X2.4.mp3',
              '5': 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X2.5.mp3',
              '7': 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X2.6.mp3',
            },
            maa: {
              '1': 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X2.1.mp3',
              '2': 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X2.2.mp3',
              '3': 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X2.3.mp3',
              '4': 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X2.4.mp3',
              '5': 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X2.5.mp3',
              '7': 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X2.6.mp3',
            },
            bnd: {
              '1': 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X2.1.mp3',
              '2': 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X2.2.mp3',
              '3': 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X2.3.mp3',
              '4': 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X2.4.mp3',
              '5': 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X2.5.mp3',
              '7': 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X2.6.mp3',
            },
            bju: {
              '1': 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X2.1.mp3',
              '2': 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X2.2.mp3',
              '3': 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X2.3.mp3',
              '4': 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X2.4.mp3',
              '5': 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X2.5.mp3',
              '7': 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X2.6.mp3',
            },
            bara: {
              '1': 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X2.1.mp3',
              '2': 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X2.2.mp3',
              '3': 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X2.3.mp3',
              '4': 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X2.4.mp3',
              '5': 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X2.5.mp3',
              '7': 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X2.6.mp3',
            }
          },
          outro: {
            en: 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X3.1.wav',
            ny: 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X3.1.wav',
            tog: 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X3.1.wav',
            so: 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X3.1.mp3',
            maa: 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X3.1.mp3',
            bnd: 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X3.1mp3',
            bju: 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X3.1.mp3',
            bara: 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X3.1.mp3'
          },
        },
        outro: {
          en: 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X4.1.wav',
          ny: 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X4.1.wav',
          tog: 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X4.1.wav',
          so: 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X4.1.mp3',
          maa: 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X4.1.mp3',
          bnd: 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X4.1mp3',
          bju: 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X4.1.mp3',
          bara: 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X4.1.mp3'
        },
      },
    },
    delayOfNextAttempt: {
      2: 900,
      3: 3600,
    },
    redis,
    tools: {
      rollbar: {
        accessToken: checkParameterValue(parameters, env.ROLLBAR_ACCESS_TOKEN),
      },
    },
  };
};
