import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddTableForCasesSynchronisation1626121964176 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
