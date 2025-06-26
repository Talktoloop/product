import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class AddEmailToCaseManagerTable1646288519105 implements MigrationInterface {
    tableName: string;
    newColumn: TableColumn;
    emails: [
        {
            email: 'lian@talktoloop.org';
            nickname: 'Lian';
            visible: true;
        },
        {
            email: 'alex@talktoloop.org';
            nickname: 'Alex';
            visible: false;
        }
    ];
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
