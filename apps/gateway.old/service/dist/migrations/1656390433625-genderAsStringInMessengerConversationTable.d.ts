import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class GenderAsStringInMessengerConversationTable1656390433625 implements MigrationInterface {
    tableName: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
