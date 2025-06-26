import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class AddPlannedDeletionDateToUser1707122055671 implements MigrationInterface {
    tableName: string;
    column: TableColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
