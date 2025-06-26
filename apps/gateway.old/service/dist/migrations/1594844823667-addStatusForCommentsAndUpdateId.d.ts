import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddStatusForCommentsAndUpdateId1594844823667 implements MigrationInterface {
    private tableName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
