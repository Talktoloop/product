import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddOtherRejectReason1617310778926 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
