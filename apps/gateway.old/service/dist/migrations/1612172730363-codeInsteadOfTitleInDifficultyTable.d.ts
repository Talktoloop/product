import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CodeInsteadOfTitleInDifficultyTable1612172730363 implements MigrationInterface {
    private difficulties;
    private tableName;
    private newColumn;
    private oldColumns;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
