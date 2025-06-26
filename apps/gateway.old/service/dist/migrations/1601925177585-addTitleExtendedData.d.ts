import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddTitleExtendedData1601925177585 implements MigrationInterface {
    private tableName;
    private newColumn;
    private titleExtendData;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
