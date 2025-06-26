import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class MoveUserDataFromCommentTableToStoryCommentRecipientTable1676547408613 implements MigrationInterface {
    table: string;
    columns: TableColumn[];
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
