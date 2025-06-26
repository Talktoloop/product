import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddThematicAreaData1601458481662 implements MigrationInterface {
    private tableName;
    private thematics;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
