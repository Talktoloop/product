import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddMachineTranslatedColumnToLanguageTable1614586462381 implements MigrationInterface {
    private tableName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
