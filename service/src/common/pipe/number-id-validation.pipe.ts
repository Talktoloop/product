import { Injectable, PipeTransform } from '@nestjs/common';
import * as Joi from 'joi';
import { CustomError, VALIDATION_FAILED } from '@ourloop/shared';

@Injectable()
export class NumberIdValidationPipe implements PipeTransform {
  private schema: Joi.Schema;

  constructor() {
    this.schema = Joi.number().required();
  }

  public transform(data: string): number {
    const { error, value } = (this.schema as any).validate(data);
    if (error) {
      throw new CustomError(VALIDATION_FAILED, error);
    }
    return value;
  }
}
