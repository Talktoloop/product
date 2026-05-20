import * as Joi from 'joi';

const validation = Joi.alternatives().try(
  Joi.string().trim().min(3).optional(),
  Joi.string().min(2).max(3),
);

export const languageSchema = {
  language: validation,
};
