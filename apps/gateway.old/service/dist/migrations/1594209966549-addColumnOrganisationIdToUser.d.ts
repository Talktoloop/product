import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddColumnOrganisationIdToUser1594209966549 implements MigrationInterface {
    private tableName;
    private indexOrganisationName;
    private fkOrganisationName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
