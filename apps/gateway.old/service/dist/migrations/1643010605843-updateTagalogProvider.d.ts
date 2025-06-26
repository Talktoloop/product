import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class UpdateTagalogProvider1643010605843 implements MigrationInterface {
    private tableName;
    private columnName;
    private newProvider;
    private oldProvider;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
