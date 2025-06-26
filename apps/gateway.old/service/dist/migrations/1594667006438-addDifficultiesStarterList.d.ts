import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddDifficultiesStarterList1594667006438 implements MigrationInterface {
    private tableName;
    private listOfdifficulties;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
