import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddContentAndTranscriptionStatus1647898487084 implements MigrationInterface {
    private tableName;
    private newColumns;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
