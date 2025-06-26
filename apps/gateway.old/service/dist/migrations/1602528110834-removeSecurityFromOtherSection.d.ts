import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class RemoveSecurityFromOtherSection1602528110834 implements MigrationInterface {
    private titleToRemove;
    private categoryToRemove;
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
