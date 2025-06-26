import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class changeMaximumLengrhOfContentInMessageTable1620155117122 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
