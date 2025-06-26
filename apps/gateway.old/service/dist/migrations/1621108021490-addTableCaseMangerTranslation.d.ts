import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddTableCaseMangerTranslation1621108021490 implements MigrationInterface {
    private tableName;
    private indexCaseManagerText;
    private fkCaseManagerText;
    private indexCaseManagerLanguage;
    private fkCaseManagerLanguage;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
