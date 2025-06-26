import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class AddS3FileIdColumnToCommentTable1650395494080 implements MigrationInterface {
    tableName: string;
    newColumn: TableColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
