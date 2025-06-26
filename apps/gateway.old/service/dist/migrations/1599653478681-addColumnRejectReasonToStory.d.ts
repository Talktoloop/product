import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddColumnRejectReasonToStory1599653478681 implements MigrationInterface {
    private tableName;
    private newColumn;
    private indexName;
    private fkName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
