import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddTableTitleExtendedForDifficulty1601924100424 implements MigrationInterface {
    private tableName;
    private updateTitle;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
