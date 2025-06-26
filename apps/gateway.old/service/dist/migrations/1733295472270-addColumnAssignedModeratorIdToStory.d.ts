import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddColumnAssignedModeratorIdToStory1733295472270 implements MigrationInterface {
    private tableName;
    private columnName;
    private newColumn;
    private indexAssignedModerator;
    private fkAssignedModerator;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
