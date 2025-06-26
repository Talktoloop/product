import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddHasChildColumnToCountryAdministrativeAreaTable1682672437475 implements MigrationInterface {
    tableName: string;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
