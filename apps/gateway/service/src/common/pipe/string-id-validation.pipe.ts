import { Injectable, PipeTransform } from '@nestjs/common';
import * as Joi from 'joi';
import { CustomError, VALIDATION_FAILED } from '@ourloop/shared';

@Injectable()
export class StringIdValidationPipe implements PipeTransform {
  private schema: Joi.Schema;

  constructor() {
    this.schema = Joi.string().required();
  }

  public transform(data: string): number {
    const { error, value } = (this.schema as any).validate(data);
    if (error) {
      throw new CustomError(VALIDATION_FAILED, error);
    }
    return value;
  }
}
