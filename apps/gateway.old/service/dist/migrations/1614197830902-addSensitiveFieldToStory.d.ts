import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddSensitiveFieldToStory1614197830902 implements MigrationInterface {
    private tableName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
