import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddClanConflictThematicTag1735316073027 implements MigrationInterface {
    private tableName;
    private readonly protectionThematic;
    private readonly newProtectionThematics;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
