import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class ChangeTwilioFlowXMLLengthInIvrrCallTable1650659489318 implements MigrationInterface {
    private tableName;
    private columnName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(): Promise<void>;
}
