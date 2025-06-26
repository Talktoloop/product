import { DynamicModule } from '@nestjs/common';
export declare class DatabaseModule {
    static forFeature<T extends new (...args: any[]) => any>(repositories: T[]): DynamicModule;
}
