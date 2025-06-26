import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddParentThematicToThematicTable1601458455675 implements MigrationInterface {
    private tableName;
    private newColumn;
    private indexThematicName;
    private fkThematicName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
