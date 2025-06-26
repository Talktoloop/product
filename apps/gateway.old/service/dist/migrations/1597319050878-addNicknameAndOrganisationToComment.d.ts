import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddNicknameAndOrganisationToComment1597319050878 implements MigrationInterface {
    private tableName;
    private newColumns;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
