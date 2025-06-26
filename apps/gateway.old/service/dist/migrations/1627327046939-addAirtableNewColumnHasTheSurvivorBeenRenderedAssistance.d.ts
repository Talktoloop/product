import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddAirtableNewColumnHasTheSurvivorBeenRenderedAssistance1627327046939 implements MigrationInterface {
    private tableName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
