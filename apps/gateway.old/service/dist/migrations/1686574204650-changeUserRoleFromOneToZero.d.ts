import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class changeUserRoleFromOneToZero1686574204650 implements MigrationInterface {
    tableName: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
