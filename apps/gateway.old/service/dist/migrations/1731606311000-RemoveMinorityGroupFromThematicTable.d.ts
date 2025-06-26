import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class RemoveMinorityGroupFromThematicTable1731606311000 implements MigrationInterface {
    private tableName;
    private thematicId;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
