import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddCountryAdministrativeAreaTable1682585049484 implements MigrationInterface {
    tableName: string;
    foreignKeyCountryId: string;
    indexCountryId: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
