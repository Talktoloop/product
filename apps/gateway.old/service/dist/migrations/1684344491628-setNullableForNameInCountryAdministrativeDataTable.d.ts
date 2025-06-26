import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class SetNullableForNameInCountryAdministrativeDataTable1684344491628 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
