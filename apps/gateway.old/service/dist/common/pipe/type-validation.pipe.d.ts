import { PipeTransform } from '@nestjs/common';
export declare class TypeValidationPipe implements PipeTransform {
    private schema;
    private key;
    constructor(key: string);
    transform(data: string): string;
}
