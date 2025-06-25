import { Injectable, PipeTransform } from '@nestjs/common';
import * as Joi from 'joi';
import { CustomError, VALIDATION_FAILED } from '@ourloop/shared';

@Injectable()
export class EmailValidationPipe implements PipeTransform {
  private schema: Joi.Schema;

  constructor() {
    this.schema = Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: false },
    });
  }

  public transform(data: string): string {
    const { error, value } = (this.schema as any).validate(data);
    if (error) {
      throw new CustomError(VALIDATION_FAILED, error);
    }
    return value;
  }
}
