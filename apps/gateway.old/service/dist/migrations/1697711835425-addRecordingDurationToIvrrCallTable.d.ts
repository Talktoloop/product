import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class addRecordingDurationToIvrrCallTable1697711835425 implements MigrationInterface {
    tableName: string;
    column: TableColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
