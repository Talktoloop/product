import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class AddCreatedAtToUserTable1706864521159 implements MigrationInterface {
    tableName: string;
    column: TableColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
