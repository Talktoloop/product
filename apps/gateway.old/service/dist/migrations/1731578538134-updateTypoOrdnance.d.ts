import { MigrationInterface, QueryRunner } from "typeorm";
export declare class UpdateTypoOrdnance1731578538134 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
