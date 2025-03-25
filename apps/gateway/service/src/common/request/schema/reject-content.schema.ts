import * as Joi from 'joi';
import { stripHtmlTags } from '../../../common/request/custom.joi';

export const rejectContentSchema: Joi.ObjectSchema = Joi.object({
  reasonIds: Joi.array().items(Joi.number().optional().max(10000)),
  reasonTexts: Joi.array()
    .items(Joi.string().optional().max(65535))
    .min(
      Joi.ref('reasonIds', {
        adjust: (value) => {
          return value ? value.length : 0;
        },
      }),
    )
    .max(
      Joi.ref('reasonIds', {
        adjust: (value) => {
          return value ? value.length + 1 : 0;
        },
      }),
    ),
  notificationLanguage: Joi.string().min(2).max(3),
  rationale: Joi.string()
    .trim()
    .max(65535)
    .allow('')
    .optional()
    .custom(stripHtmlTags),
});

export const rejectStoriesSchema: Joi.ObjectSchema = Joi.object({
  storiesToReject: Joi.array()
    .items(
      Joi.object()
        .keys({
          storyId: Joi.string().trim().custom(stripHtmlTags).uuid(),
        })
        .concat(rejectContentSchema),
    )
    .min(1)
    .required(),
});
