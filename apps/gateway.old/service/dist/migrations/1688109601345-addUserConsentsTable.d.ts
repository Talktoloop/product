import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddUserConsentsTable1688109601345 implements MigrationInterface {
    tableName: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
