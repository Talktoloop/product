import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class SetDefautLanguagesForCountryInCountryTable1684335263705 implements MigrationInterface {
    tableName: string;
    languages: {
        pl: string;
        ca: string;
        de: string;
        lt: string;
        nl: string;
        za: string;
        gb: string;
        zw: string;
        zm: string;
        so: string;
        ph: string;
        ls: string;
        ke: string;
        kh: string;
        id: string;
        et: string;
    };
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
