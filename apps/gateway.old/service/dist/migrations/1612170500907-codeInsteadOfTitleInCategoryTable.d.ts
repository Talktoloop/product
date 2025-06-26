import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CodeInsteadOfTitleInCategoryTable1612170500907 implements MigrationInterface {
    private categories;
    private tableName;
    private newColumn;
    private oldColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
