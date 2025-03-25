import * as Joi from 'joi';

const validation = Joi.alternatives().try(
  Joi.string().max(100),
  Joi.number().max(1000),
);

export const filterConditions = {
  country: Joi.string().max(255),
  from: Joi.date().iso(),
  to: Joi.date(),
  age: validation,
  gender: validation,
  thematic: Joi.string().max(2000),
  organisationType: Joi.string().max(255),
  investigationOutcome: Joi.string().max(255),
  referredForAssistance: Joi.string().max(255),
  caseType: Joi.string().max(255),
  disability: Joi.string().max(255),
};

export const filterCasesSchema: Joi.ObjectSchema = Joi.object(
  filterConditions,
).options({
  presence: 'optional',
});
