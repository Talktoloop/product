import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddColumnUserIdToStory1594208937201 implements MigrationInterface {
    private tableName;
    private indexUserName;
    private fkUserName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
