import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class addRegistrationDateColumnToUser1695105194245 implements MigrationInterface {
    tableName: string;
    column: TableColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
