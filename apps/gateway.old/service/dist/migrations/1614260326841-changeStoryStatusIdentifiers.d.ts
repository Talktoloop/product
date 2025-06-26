import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class ChangeStoryStatusIdentifiers1614260326841 implements MigrationInterface {
    private tableName;
    private changeStatus;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
