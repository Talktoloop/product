import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class addSubscriptionApplicationTable1692358740543 implements MigrationInterface {
    tableName: string;
    foreignKeyUserId: string;
    indexUserId: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
