import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class RequestInsteadOfSuggestionInCategoryTable1652946063816 implements MigrationInterface {
    tableName: string;
    oldCode: string;
    newCode: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
