import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class ivrrcallXmlField1650454415242 implements MigrationInterface {
    tableName: string;
    newColumn: TableColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
