import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class removeOrganisationFromCommentTable1620762653842 implements MigrationInterface {
    private tableName;
    private columnName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
