import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CodeInsteadOfTitleInThematicTable1612174929144 implements MigrationInterface {
    private thematics;
    private tableName;
    private newColumn;
    private oldColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
