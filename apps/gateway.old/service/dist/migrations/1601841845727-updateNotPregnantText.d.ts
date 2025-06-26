import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class UpdateNotPregnantText1601841845727 implements MigrationInterface {
    private idToChange;
    private newTitle;
    private oldTitle;
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
