import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddContentForCaseManagers1621111071404 implements MigrationInterface {
    private tableName;
    private tableNameExtend;
    private content;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
