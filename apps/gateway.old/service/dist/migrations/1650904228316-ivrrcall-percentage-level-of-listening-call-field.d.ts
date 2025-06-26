import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class ivrrcallPercentageLevelOfListeningCallField1650904228316 implements MigrationInterface {
    tableName: string;
    newColumn: TableColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
