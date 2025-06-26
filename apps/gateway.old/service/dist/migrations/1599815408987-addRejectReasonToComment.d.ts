import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddRejectReasonToComment1599815408987 implements MigrationInterface {
    private tableName;
    private newColumns;
    private indexName;
    private fkName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
