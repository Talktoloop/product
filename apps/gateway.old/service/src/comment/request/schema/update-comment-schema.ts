import * as Joi from 'joi';
import { languageSchema } from '../../../common/request/schema/language.schema';

export const updateCommentSchema: Joi.ObjectSchema = Joi.object({
  language: languageSchema.language.required(),
  thematics: [
    Joi.array().optional().items(Joi.number().optional().max(1000)),
    null,
  ],
  solution_proposed: Joi.boolean(),
});
