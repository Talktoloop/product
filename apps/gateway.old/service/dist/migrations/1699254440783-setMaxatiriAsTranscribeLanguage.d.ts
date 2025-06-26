import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class SetMaxatiriAsTranscribeLanguage1699254440783 implements MigrationInterface {
    tableName: string;
    private columnName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
