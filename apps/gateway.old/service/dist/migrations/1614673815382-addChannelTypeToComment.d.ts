import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddChannelTypeToComment1614673815382 implements MigrationInterface {
    private tableName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
