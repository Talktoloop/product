import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddSomaliToSupportedLangauges1618428850803 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
