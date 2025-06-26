import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddGoogleProviderForNy1621365829303 implements MigrationInterface {
    private tableName;
    private columnName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
