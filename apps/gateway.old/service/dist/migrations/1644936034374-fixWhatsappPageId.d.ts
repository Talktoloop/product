import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class fixWhatsappPageId1644936034374 implements MigrationInterface {
    name: string;
    tableName: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
