import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddColumnNicknameAndAgeToStory1594755050530 implements MigrationInterface {
    private tableName;
    private newColumnNickname;
    private newColumnAge;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
