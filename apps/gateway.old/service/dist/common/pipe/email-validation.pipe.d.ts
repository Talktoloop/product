import { PipeTransform } from '@nestjs/common';
export declare class EmailValidationPipe implements PipeTransform {
    private schema;
    constructor();
    transform(data: string): string;
}
