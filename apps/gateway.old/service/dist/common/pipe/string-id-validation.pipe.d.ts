import { PipeTransform } from '@nestjs/common';
export declare class StringIdValidationPipe implements PipeTransform {
    private schema;
    constructor();
    transform(data: string): number;
}
