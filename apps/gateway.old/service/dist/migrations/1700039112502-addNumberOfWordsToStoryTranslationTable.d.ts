import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class AddNumberOfWordsToStoryTranslationTable1700039112502 implements MigrationInterface {
    tableName: string;
    column: TableColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
