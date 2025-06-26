import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class UpdateIndonesianCode1630600596542 implements MigrationInterface {
    private newCode;
    private oldCode;
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
