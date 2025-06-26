import { MigrationInterface, QueryRunner } from "typeorm";
export declare class RemovePendingRejectionStatus1734701024655 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
