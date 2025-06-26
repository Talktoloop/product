import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class AddEditedColumnToStoryTable1704888404026 implements MigrationInterface {
    tableName: string;
    column: TableColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
