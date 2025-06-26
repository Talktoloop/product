import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class UpdateRumourToOpinion1602528048556 implements MigrationInterface {
    private previousTitle;
    private newTitle;
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
