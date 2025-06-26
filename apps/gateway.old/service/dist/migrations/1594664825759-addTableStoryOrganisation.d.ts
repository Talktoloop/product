import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddTableStoryOrganisation1594664825759 implements MigrationInterface {
    private tableName;
    private indexOrganisationName;
    private fkOrganisationName;
    private indexStoryName;
    private fkStoryName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
