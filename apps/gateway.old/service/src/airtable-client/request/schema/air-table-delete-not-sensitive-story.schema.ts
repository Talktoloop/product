import Joi from "joi";

export const airTableDeleteNotSensitiveSchema: Joi.ObjectSchema = Joi.object({
    recordId: Joi.string().trim().max(100),
    loopId: Joi.string().trim().max(100),
    notSensitive: Joi.boolean(),
});