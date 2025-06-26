import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddPregnancyStatusStarterList1594667524482 implements MigrationInterface {
    private tableName;
    private listOfPregnant;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
