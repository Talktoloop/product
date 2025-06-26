import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class addAlterTableWithFullTextName1685098575440 implements MigrationInterface {
    tableName: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
