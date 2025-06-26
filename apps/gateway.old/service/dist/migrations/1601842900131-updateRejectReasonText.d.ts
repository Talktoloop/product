import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class UpdateRejectReasonText1601842900131 implements MigrationInterface {
    private tableName;
    private listOfRejectReasonsOld;
    private listOfRejectReasonsNew;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
