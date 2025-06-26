"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamicConfiguration = exports.staticConfig = void 0;
require("dotenv/config");
const shared_1 = require("@ourloop/shared");
const env = process.env;
exports.staticConfig = {
    administrativeData: {
        apiUrl: 'https://overpass-api.de/api/interpreter',
        timeout: 10,
        searchResultLimit: 5,
        maximumLengthOfName: 150,
    },
    contentLength: {
        min: 5,
        max: 30000,
    },
    pagination: {
        maxLimit: 50,
    },
    smsMessageLength: 160,
    unanswaredStories: {
        shortcutLength: 100,
        publicationDuration: 14,
    },
    minimumRecordingDuration: 6,
    dataExport: {
        readableNames: {
            publishedAt: 'Date',
            categories: 'Feedback type',
            district: 'District',
            place: 'Region',
            difficulties: 'Disability',
            thematicParents: 'Thematic area',
            thematicChildren: 'Thematic sub area',
            organisations: 'organisation',
            content: 'Feedback content (:language)',
            originalContent: 'Feedback content (original language)',
            foodItems: 'food items',
            'non-foodItems': 'non-food items',
            medicalCentres: 'medical centers',
            'gender-basedViolence': 'gender based violence',
            mentalHealth: 'mental health',
            sexualAndReproductiveRights: 'sexual and reproductive rights',
            'epidemics/Pandemics': 'epidemics / pandemics',
            covid: 'COVID',
            foodSecurity: 'food security',
            idp: 'IDP',
            waterPoints: 'water points',
            lightingAndElectricity: 'lighting and electricity',
            'university/Colleges/Trades': 'university / colleges / trades',
            campCoordinationManagement: 'camp coordination management',
            capacityBuilding: 'capacity building',
            communitySensitisation: 'community sensitisation',
            aidWorkers: 'aid workers',
            civicSpace: 'civic Space',
            'feeding/Malnutrition': 'feeding / malnutrition',
            safetyAndSecurity: 'safety and security',
            'medications/MedicinesFacilitiesAndServices': 'medications / medicines, facilities and services',
            'hiv/Aids': 'HIV / AIDS',
            handwashingStations: 'handwashing stations',
            waterTrucking: 'water trucking',
            'solidWaste/GarbageManagement': 'solid waste / garbage management',
            waterFacilitiesAndSupplies: 'water facilities and supplies',
            temporaryShelters: 'temporary shelters',
            technicalSupport: 'technical support',
            earlyChildhood: 'early childhood',
            youngPeople: 'young people',
            personWithDisabilities: 'person with disabilities',
            'lgtbq+': 'LGBTQ+',
            chronicallyIllPeople: 'chronically ill people',
            'legalStatus(refugees)': 'legal status (refugees)',
            indigenousCommunity: 'indigenous community',
            lowIncomeFamilies: 'low income families',
            'clan-conflict': 'clan conflict',
            climateChange: 'climate change',
            drrAndPreparedness: 'DRR and preparedness',
            walkingOrClimbingSteps: 'walking or climbing steps',
            selfCareForExampleWashing: 'self care for example washing',
            minorityGroup: 'Minority Group',
            loopOnboarding: 'LOOP onboarding',
            url: 'URL',
            numberOfComments: 'Did anyone comment?',
            channel: 'Communication channel',
            originalContentLanguage: 'Original content language',
            isMinority: 'Is Minority'
        },
        cacheTtlInMinutes: 10,
    },
    cacheTtl: 900,
};
const dynamicConfiguration = async () => {
    const parameterKeys = (0, shared_1.findKeysWithPrefix)([
        env.APP_PORT,
        env.GLOBAL_PREFIX,
        env.NODE_ENV,
        env.COMMUNICATION_TIMEOUT,
        env.AWS_S3_BUCKET,
        env.ONLY_GET_REQUEST,
        env.DISABLE_NOTIFICATIONS,
        env.DISABLE_IVR_PUBLICATION_NOTIFICATIONS,
        env.DISABLE_IVR_REJECT_NOTIFICATIONS,
        env.DISABLE_NOTIFICATIONS_AFTER_EDIT,
        env.ANONYMIZE_CHARTS,
        env.SUPPORT_EMAIL,
        env.DB_DATABASE,
        env.DB_HOST,
        env.DB_PASSWORD,
        env.DB_PORT,
        env.DB_USERNAME,
        env.AIRTABLE_APIKEY,
        env.AIRTABLE_SENSITIVE_CASES_BASE,
        env.AIRTABLE_DASHBOARD_BASE,
        env.LANDING_PAGE_URL,
        env.FRONTEND_URL,
        env.BACKEND_URL,
        env.BASIC_TOKEN,
        env.COGNITO_CLIENT_ID,
        env.COGNITO_USER_POOL_ID,
        env.GOOGLE_LOCATIONS_API_KEY,
        env.TRANSCRIBE_FUNCTION_ARN,
        env.TRANSLATE_FUNCTION_ARN,
        env.GOOGLE_TRANSLATION_PROJECT_ID,
        env.GOOGLE_TRANSLATION_LOCATION,
        env.TRANSLATION_MINIMUM_PROBABILITY,
        env.MAILJET_API_KEY,
        env.MAILJET_API_SECRET,
        env.MAILJET_EMAIL,
        env.MAILJET_USERNAME,
        env.REDIS_HOST,
        env.REDIS_SCHEMA,
        env.REDIS_USER,
        env.REDIS_PORT,
        env.REDIS_PASSWORD,
        env.GOOGLE_CREDENTIALS,
        env.LOOP_PREMIUM_REQUEST_EMAILS_RECEIVERS,
        env.LOOP_ADVOCATE_EMAIL_SENDERS,
        env.JWT_SECRET,
        env.TWILIO_ACCOUNT_SID,
        env.TWILIO_AUTH_TOKEN,
        env.BREVO_API_KEY,
        env.AZURE_SUBSCRIPTION_TOKEN,
    ], '/ecs');
    const parameters = await (0, shared_1.getParameterValues)({
        awsAccessKey: env.AWS_ACCESS_KEY,
        awsSecretKey: env.AWS_SECRET_KEY,
        awsRegion: env.AWS_REGION,
    }, parameterKeys);
    const userPoolId = (0, shared_1.checkParameterValue)(parameters, env.COGNITO_USER_POOL_ID);
    let googleCredentials = {};
    try {
        googleCredentials = JSON.parse((0, shared_1.checkParameterValue)(parameters, env.GOOGLE_CREDENTIALS).replace(/\\"/g, '"'));
    }
    catch (_a) { }
    let textItClientBase = {};
    try {
        textItClientBase = JSON.parse((0, shared_1.checkParameterValue)(parameters, env.TEXTIT_CLIENT_BASE).replace(/\\"/g, '"'));
    }
    catch (_b) { }
    let redis = {
        connectionName: 'REDIS',
        host: (0, shared_1.checkParameterValue)(parameters, env.REDIS_HOST) || '',
        schema: (0, shared_1.checkParameterValue)(parameters, env.REDIS_SCHEMA) || 'redis',
        user: (0, shared_1.checkParameterValue)(parameters, env.REDIS_USER) || 'redis',
        port: (0, shared_1.checkParameterValue)(parameters, env.REDIS_PORT) || '',
        password: (0, shared_1.checkParameterValue)(parameters, env.REDIS_PASSWORD) || '',
        db: 0,
        retryAttempts: 5,
        retryDelay: 3000,
        tls: undefined,
    };
    const environment = (0, shared_1.checkParameterValue)(parameters, env.NODE_ENV);
    if (environment !== 'local') {
        redis = Object.assign(Object.assign({}, redis), { tls: {
                servername: env.REDIS_HOST || '',
                rejectUnauthorized: false,
            } });
    }
    return {
        application: {
            call_timeout: 30,
            port: Number.parseInt((0, shared_1.checkParameterValue)(parameters, env.APP_PORT)) || 5000,
            global_prefix: (0, shared_1.checkParameterValue)(parameters, env.GLOBAL_PREFIX) || 'v1',
            environment,
            communicationTimeout: Number.parseInt((0, shared_1.checkParameterValue)(parameters, env.COMMUNICATION_TIMEOUT)),
            awsEndpoint: environment === 'local' ? 'host.docker.internal:3001' : undefined,
            awsAccessKey: env.AWS_ACCESS_KEY,
            awsSecretKey: env.AWS_SECRET_KEY,
            awsRegion: env.AWS_REGION,
            awsS3Bucket: (0, shared_1.checkParameterValue)(parameters, env.AWS_S3_BUCKET),
            onlyGetRequest: (0, shared_1.isTrue)((0, shared_1.checkParameterValue)(parameters, env.ONLY_GET_REQUEST)),
            disableNotifications: (0, shared_1.isTrue)((0, shared_1.checkParameterValue)(parameters, env.DISABLE_NOTIFICATIONS)),
            disableIvrPublicationNotifications: (0, shared_1.isTrue)((0, shared_1.checkParameterValue)(parameters, env.DISABLE_IVR_PUBLICATION_NOTIFICATIONS)),
            disableIvrRejectNotifications: (0, shared_1.isTrue)((0, shared_1.checkParameterValue)(parameters, env.DISABLE_IVR_REJECT_NOTIFICATIONS)),
            disableNotificationsAfterEdit: (0, shared_1.isTrue)((0, shared_1.checkParameterValue)(parameters, env.DISABLE_NOTIFICATIONS_AFTER_EDIT)),
            anonymizeCharts: (0, shared_1.isTrue)((0, shared_1.checkParameterValue)(parameters, env.ANONYMIZE_CHARTS)),
        },
        azure: {
            subscriptionToken: (0, shared_1.checkParameterValue)(parameters, env.AZURE_SUBSCRIPTION_TOKEN),
        },
        supportEmail: (0, shared_1.checkParameterValue)(parameters, env.SUPPORT_EMAIL),
        database: {
            charset: 'utf8mb4_unicode_ci',
            database: (0, shared_1.checkParameterValue)(parameters, env.DB_DATABASE),
            host: (0, shared_1.checkParameterValue)(parameters, env.DB_HOST),
            logging: false,
            password: (0, shared_1.checkParameterValue)(parameters, env.DB_PASSWORD),
            port: Number.parseInt((0, shared_1.checkParameterValue)(parameters, env.DB_PORT)) || 3306,
            synchronize: false,
            type: 'mysql',
            bigNumberStrings: false,
            username: (0, shared_1.checkParameterValue)(parameters, env.DB_USERNAME),
        },
        airTable: {
            apiKey: (0, shared_1.checkParameterValue)(parameters, env.AIRTABLE_APIKEY),
            base: {
                sensitiveCases: (0, shared_1.checkParameterValue)(parameters, env.AIRTABLE_SENSITIVE_CASES_BASE),
                dashboard: (0, shared_1.checkParameterValue)(parameters, env.AIRTABLE_DASHBOARD_BASE),
                usersOrganisationsManagement: (0, shared_1.checkParameterValue)(parameters, env.AIRTABLE_USERS_ORGANISATIONS_MANAGEMENT_BASE),
            },
            url: {
                organisations: (0, shared_1.checkParameterValue)(parameters, env.AIRTABLE_ORGANISATIONS_URL),
                users: (0, shared_1.checkParameterValue)(parameters, env.AIRTABLE_USERS_URL),
                countries: (0, shared_1.checkParameterValue)(parameters, env.AIRTABLE_COUNTRIES_URL),
            },
        },
        textIt: {
            clientBase: textItClientBase,
            apiBase: (0, shared_1.checkParameterValue)(parameters, env.TEXTIT_API_BASE),
            token: (0, shared_1.checkParameterValue)(parameters, env.TEXTIT_TOKEN),
        },
        slack: {
            channel: (0, shared_1.checkParameterValue)(parameters, env.SLACK_CHANNEL),
        },
        landingPage: {
            url: (0, shared_1.checkParameterValue)(parameters, env.LANDING_PAGE_URL),
        },
        frontend: {
            url: (0, shared_1.checkParameterValue)(parameters, env.FRONTEND_URL),
        },
        backend: {
            url: (0, shared_1.checkParameterValue)(parameters, env.BACKEND_URL) || '',
            basicToken: (0, shared_1.checkParameterValue)(parameters, env.BASIC_TOKEN) || '',
        },
        authorization: {
            clientId: (0, shared_1.checkParameterValue)(parameters, env.COGNITO_CLIENT_ID),
            userPoolId,
            jwks: `https://cognito-idp.${env.AWS_REGION}.amazonaws.com/${userPoolId}/.well-known/jwks.json`,
        },
        location: {
            googleApiKey: (0, shared_1.checkParameterValue)(parameters, env.GOOGLE_LOCATIONS_API_KEY) || '',
        },
        recordings: 'recordings.json',
        transcribe: {
            aws: {
                lambdaARN: (0, shared_1.checkParameterValue)(parameters, env.TRANSCRIBE_FUNCTION_ARN),
            },
        },
        translation: {
            aws: {
                lambdaARN: (0, shared_1.checkParameterValue)(parameters, env.TRANSLATE_FUNCTION_ARN),
            },
            google: {
                projectId: (0, shared_1.checkParameterValue)(parameters, env.GOOGLE_TRANSLATION_PROJECT_ID),
                location: (0, shared_1.checkParameterValue)(parameters, env.GOOGLE_TRANSLATION_LOCATION),
                credentials: googleCredentials,
            },
            minimumProbability: (0, shared_1.checkParameterValue)(parameters, env.TRANSLATION_MINIMUM_PROBABILITY),
            lengthOfVerifiedContent: 5000,
        },
        mailJet: {
            apiKey: (0, shared_1.checkParameterValue)(parameters, env.MAILJET_API_KEY),
            apiSecret: (0, shared_1.checkParameterValue)(parameters, env.MAILJET_API_SECRET),
            email: (0, shared_1.checkParameterValue)(parameters, env.MAILJET_EMAIL),
            username: (0, shared_1.checkParameterValue)(parameters, env.MAILJET_USERNAME),
        },
        redis,
        statistics: {
            valuesForAnonymousChart: [6, 6, 4, 14],
        },
        subscription: {
            premiumRequestEmailsReceiver: (0, shared_1.checkParameterValue)(parameters, env.LOOP_PREMIUM_REQUEST_EMAILS_RECEIVERS),
            loopAdvocateEmailSenders: (0, shared_1.checkParameterValue)(parameters, env.LOOP_ADVOCATE_EMAIL_SENDERS),
            jwtSecret: (0, shared_1.checkParameterValue)(parameters, env.JWT_SECRET),
        },
        twilio: {
            accountSid: env.TWILIO_ACCOUNT_SID,
            authToken: env.TWILIO_AUTH_TOKEN,
        },
        brevo: {
            apiKey: env.BREVO_API_KEY
        },
        metabase_secret_key: env.METABASE_SECRET_KEY
    };
};
exports.dynamicConfiguration = dynamicConfiguration;
//# sourceMappingURL=default.js.map