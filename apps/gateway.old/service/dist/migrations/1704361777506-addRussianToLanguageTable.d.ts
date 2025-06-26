import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddRussianToLanguageTable1704361777506 implements MigrationInterface {
    private tableName;
    private languageCode;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
