import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddThematicAreas1730293871309 implements MigrationInterface {
    private tableName;
    private readonly crossCuttingThematic;
    private readonly governanceThematic;
    private readonly healthThematic;
    private readonly protectionThematic;
    private readonly washThematic;
    private readonly educationThematic;
    private readonly newEducationThematics;
    private readonly newHealthThematics;
    private readonly newWashThematics;
    private readonly newProtectionThematics;
    private readonly newGovernanceThematics;
    private readonly newCrossCuttingThematics;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
