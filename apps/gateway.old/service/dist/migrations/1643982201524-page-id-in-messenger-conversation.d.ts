import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class pageIdInMessengerConversation1643982201524 implements MigrationInterface {
    name: string;
    tableName: string;
    column: TableColumn;
    notNullColumn: TableColumn;
    prodWaPageId: string;
    prodFbPageId: string;
    devWaPageId: string;
    devFbPageId: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
