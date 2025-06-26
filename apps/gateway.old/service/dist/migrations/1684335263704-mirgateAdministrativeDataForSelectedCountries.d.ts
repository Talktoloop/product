import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class MigrateAdministrativeDataForSelectedCountries1684335263704 implements MigrationInterface {
    tableName: string;
    countries: string[];
    up(queryRunner: QueryRunner): Promise<void>;
    down(): Promise<void>;
}
