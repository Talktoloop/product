"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configSchema = void 0;
const Joi = __importStar(require("joi"));
exports.configSchema = Joi.object({
    NODE_ENV: Joi.string()
        .valid('development', 'production', 'stage', 'test', 'local')
        .default('development'),
    DB_USERNAME: Joi.string(),
    DB_PASSWORD: Joi.string(),
    DB_HOST: Joi.string(),
    DB_PORT: Joi.string().default(3306),
    LANDING_PAGE_URL: Joi.string(),
    FRONTEND_URL: Joi.string(),
    BACKEND_URL: Joi.string(),
    GLOBAL_PREFIX: Joi.string(),
    COGNITO_USER_POOL_ID: Joi.string(),
    COGNITO_CLIENT_ID: Joi.string(),
    ANONYMIZE_CHARTS: Joi.string(),
    DISABLE_NOTIFICATIONS: Joi.string(),
    DISABLE_IVR_PUBLICATION_NOTIFICATIONS: Joi.string(),
    DISABLE_IVR_REJECT_NOTIFICATIONS: Joi.string(),
    MAILJET_API_KEY: Joi.string(),
    MAILJET_API_SECRET: Joi.string(),
    MAILJET_EMAIL: Joi.string(),
    MAILJET_USERNAME: Joi.string(),
    TRANSLATION_MINIMUM_PROBABILITY: Joi.string(),
    GOOGLE_TRANSLATION_PROJECT_ID: Joi.string(),
    GOOGLE_TRANSLATION_LOCATION: Joi.string(),
    REDIS_HOST: Joi.string(),
    REDIS_USER: Joi.string(),
    REDIS_PORT: Joi.string(),
    REDIS_PASSWORD: Joi.string(),
    REDIS_SCHEMA: Joi.string(),
    AIRTABLE_APIKEY: Joi.string(),
    AIRTABLE_SENSITIVE_CASES_BASE: Joi.string(),
    AIRTABLE_DASHBOARD_BASE: Joi.string(),
    BASIC_TOKEN: Joi.string(),
    AWS_ACCESS_KEY: Joi.string().optional(),
    AWS_SECRET_KEY: Joi.string().optional(),
    AWS_S3_BUCKET: Joi.string(),
    AWS_REGION: Joi.string(),
    AZURE_SUBSCRIPTION_TOKEN: Joi.string(),
    ONLY_GET_REQUEST: Joi.string(),
}).options({ allowUnknown: true, presence: 'required' });
//# sourceMappingURL=config.validation.js.map