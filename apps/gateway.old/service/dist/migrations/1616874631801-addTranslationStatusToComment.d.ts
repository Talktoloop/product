import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddTranslationStatusToComment1616874631801 implements MigrationInterface {
    private tableName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
