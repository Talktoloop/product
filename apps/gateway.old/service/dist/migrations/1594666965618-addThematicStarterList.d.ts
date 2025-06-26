import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddThematicStarterList1594666965618 implements MigrationInterface {
    private tableName;
    private listOfThematic;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
