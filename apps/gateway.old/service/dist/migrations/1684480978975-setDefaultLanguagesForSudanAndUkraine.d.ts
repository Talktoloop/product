import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class setDefaultLanguagesForSudanAndUkraine1684480978975 implements MigrationInterface {
    tableName: string;
    languages: {
        sd: string;
        ua: string;
    };
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
