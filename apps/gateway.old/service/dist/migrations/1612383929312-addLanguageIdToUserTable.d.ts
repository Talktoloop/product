import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddLanguageIdToUserTable1612383929312 implements MigrationInterface {
    private tableName;
    private foreignKeyName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
