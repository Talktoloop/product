import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class addTongaToSupportedLanguage1633632984183 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
