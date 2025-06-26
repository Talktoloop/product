import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class MoveUserDataFromMessengerMessageTableToStoryRecipient1676544614055 implements MigrationInterface {
    table: string;
    columns: TableColumn[];
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
