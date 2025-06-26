import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class ChangeRoleIdendtifier1614162825777 implements MigrationInterface {
    private tableName;
    private changeRole;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
