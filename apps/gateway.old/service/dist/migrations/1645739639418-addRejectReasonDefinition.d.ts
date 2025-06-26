import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddRejectReasonDefinition1645739639418 implements MigrationInterface {
    tableName: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
