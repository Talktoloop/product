import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddColumnsToStory1594207610396 implements MigrationInterface {
    private tableName;
    private newColumns;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
