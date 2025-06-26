import { MigrationInterface, QueryRunner } from "typeorm";
export declare class ThematicAreaTags1729502313950 implements MigrationInterface {
    private tableName;
    private readonly crossCutting;
    private readonly newThematic;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
