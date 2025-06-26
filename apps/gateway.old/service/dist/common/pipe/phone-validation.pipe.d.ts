import { PipeTransform } from '@nestjs/common';
export declare class PhoneValidationPipe implements PipeTransform {
    private schema;
    constructor();
    transform(data: string): string;
}
