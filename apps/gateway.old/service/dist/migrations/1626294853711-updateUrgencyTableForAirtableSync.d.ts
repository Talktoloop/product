import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class UpdateUrgencyTableForAirtableSync1626294853711 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
