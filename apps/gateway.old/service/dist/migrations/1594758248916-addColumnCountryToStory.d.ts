import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddColumnCountryToStory1594758248916 implements MigrationInterface {
    private tableName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
