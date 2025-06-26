import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class AddAlternativeProviderForTagalogInLanguageTable1676964855939 implements MigrationInterface {
    tableName: string;
    newColumn: TableColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
