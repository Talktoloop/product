import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddTypeToStoryTranslationTable1616737677312 implements MigrationInterface {
    private tableName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
