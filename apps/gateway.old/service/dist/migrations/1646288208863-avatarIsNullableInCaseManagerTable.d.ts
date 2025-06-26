import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AvatarIsNullableInCaseManagerTable1646288208863 implements MigrationInterface {
    tableName: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(): Promise<void>;
}
