import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddTableUser1594208138736 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
