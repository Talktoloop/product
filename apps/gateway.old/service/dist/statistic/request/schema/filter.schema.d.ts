import * as Joi from 'joi';
export declare const filterConditions: {
    country: Joi.StringSchema<string>;
    from: Joi.DateSchema<Date>;
    to: Joi.DateSchema<Date>;
    age: Joi.AlternativesSchema<any>;
    gender: Joi.AlternativesSchema<any>;
    thematic: Joi.StringSchema<string>;
    organisationType: Joi.StringSchema<string>;
    investigationOutcome: Joi.StringSchema<string>;
    referredForAssistance: Joi.StringSchema<string>;
    caseType: Joi.StringSchema<string>;
    disability: Joi.StringSchema<string>;
};
export declare const filterCasesSchema: Joi.ObjectSchema;
