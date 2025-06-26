import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddIVRRTypeToChannelInCommentTable1650980075798 implements MigrationInterface {
    private tableName;
    private oldChannelColumn;
    private newChannelColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
