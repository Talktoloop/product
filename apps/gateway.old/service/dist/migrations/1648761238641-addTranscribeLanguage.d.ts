import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddTranscribeLanguage1648761238641 implements MigrationInterface {
    private tableName;
    private columnName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
