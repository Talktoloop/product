import Joi from "joi";



export const updateTranscriptionSchema: Joi.ObjectSchema = Joi.object({
    content: Joi.string().allow(null).optional(),
    editedContent: Joi.string().allow(null).optional(),
}); 