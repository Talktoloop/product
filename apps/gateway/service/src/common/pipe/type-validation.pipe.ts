import { Injectable, PipeTransform } from '@nestjs/common';
import * as Joi from 'joi';
import { CustomError, VALIDATION_FAILED } from '@ourloop/shared';
import { TypeEnum } from '../types';

@Injectable()
export class TypeValidationPipe implements PipeTransform {
  private schema: Joi.Schema;
  private key;

  constructor(key: string) {
    this.key = key;
    this.schema = Joi.string()
      .invalid('')
      .required()
      .valid(...Object.values(TypeEnum));
  }

  public transform(data: string): string {
    let error = undefined;
    let value;

    if (!data[this.key]) {
      throw new CustomError(VALIDATION_FAILED, { error: 'invalid request' });
    }

    ({ error, value } = (this.schema as any).validate(data[this.key]));

    value = { [this.key]: value };
    if (error) {
      throw new CustomError(VALIDATION_FAILED, error);
    }
    return value;
  }
}
