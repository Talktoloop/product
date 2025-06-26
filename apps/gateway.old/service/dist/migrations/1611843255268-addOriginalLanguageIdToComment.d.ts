import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddOriginalLanguageIdToComment1611843255268 implements MigrationInterface {
    private tableName;
    private foreignKeyName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
