import { PipeTransform } from '@nestjs/common';
export declare class UuidValidationPipe implements PipeTransform {
    private schema;
    constructor();
    transform(data: string): string;
}
