import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddInitialUrgencyToCaseSync1666687833849 implements MigrationInterface {
    private tableName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
