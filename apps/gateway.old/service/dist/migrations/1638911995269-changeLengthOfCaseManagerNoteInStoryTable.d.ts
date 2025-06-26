import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class ChangeLengthOfCaseManagerNoteInStoryTable1638911995269 implements MigrationInterface {
    private tableName;
    private columnName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
