import * as Joi from 'joi';

export const deleteCasesSchema: Joi.ObjectSchema = Joi.object({
  ids: Joi.array().items(Joi.string().trim().max(100)),
});
