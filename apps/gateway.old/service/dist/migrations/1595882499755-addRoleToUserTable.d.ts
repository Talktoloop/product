import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddRoleToUserTable1595882499755 implements MigrationInterface {
    private tableName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
