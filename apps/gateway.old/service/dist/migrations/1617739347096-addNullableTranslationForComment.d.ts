import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class addNullableTranslationForComment1617739347096 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
