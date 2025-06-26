import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class renameNicknameColumn1643889322537 implements MigrationInterface {
    name: string;
    tableName: string;
    oldColumnName: string;
    newColumnName: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
