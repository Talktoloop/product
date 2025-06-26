import * as Joi from 'joi';
export declare const listWithPaginationSchemaObject: {
    order: Joi.StringSchema<string>;
    limit: Joi.NumberSchema<number>;
    page: Joi.NumberSchema<number>;
};
export declare const listWithStoryPaginationSchemaObject: {
    order: Joi.StringSchema<string>;
    limit: Joi.NumberSchema<number>;
    page: Joi.NumberSchema<number>;
};
export declare const listWithStoryModeratorPaginationSchemaObject: {
    order: Joi.StringSchema<string>;
    limit: Joi.NumberSchema<number>;
    page: Joi.NumberSchema<number>;
};
