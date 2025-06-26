import { PipeTransform } from '@nestjs/common';
export declare class NumberIdValidationPipe implements PipeTransform {
    private schema;
    constructor();
    transform(data: string): number;
}
