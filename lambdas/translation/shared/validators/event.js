const Joi = require('joi');
const { SourceType } = require('../constants');

const translateEventSchema = Joi.object({
  sourceId: Joi.string().guid({ version: 'uuidv4' }),
  languageId: Joi.number(),
  target: Joi.string().min(2).max(3),
  originalText: Joi.string().min(2),
  originalTextLang: Joi.string().min(2).max(3),
  sourceType: Joi.string().valid(...Object.values(SourceType)),
  hopsConfig: Joi.array().items(
    Joi.object({
      source: Joi.string().min(2).max(3),
      target: Joi.string().min(2).max(3),
      hops: Joi.array().items(Joi.string()),
    }),
  ),
  provider: Joi.string(),
  alternativeProvider: Joi.string().allow(null).optional(),
}).options({ presence: 'required' });

const translateHistoryEventSchema = Joi.object({
  type: Joi.string().valid(...Object.values(SourceType)).required(),
});

async function validateTranslateEvent(event) {
  return translateEventSchema.validateAsync(event);
}

async function validateTranslateHistoryEvent(event) {
  return translateHistoryEventSchema.validateAsync(event);
}

module.exports = { validateTranslateEvent, validateTranslateHistoryEvent };
