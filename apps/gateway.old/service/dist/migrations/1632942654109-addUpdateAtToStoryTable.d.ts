import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddUpdateAtToStoryTable1632942654109 implements MigrationInterface {
    private tableName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
