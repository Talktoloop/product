import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddMarkedAsSensitiveByColumnToStory1621452467717 implements MigrationInterface {
    private tableName;
    private newColumnName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
