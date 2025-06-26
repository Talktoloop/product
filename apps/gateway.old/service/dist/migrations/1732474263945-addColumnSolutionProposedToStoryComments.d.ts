import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddColumnSolutionProposedToStoryComments1732474263945 implements MigrationInterface {
    private tableName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
