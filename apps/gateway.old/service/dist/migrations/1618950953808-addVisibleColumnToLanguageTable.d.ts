import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddVisibleColumnToLanguageTable1618950953808 implements MigrationInterface {
    private tableName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
