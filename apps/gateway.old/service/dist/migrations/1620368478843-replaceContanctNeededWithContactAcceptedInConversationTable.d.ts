import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class replaceContanctNeededWithContactAcceptedInConversationTable1620368478843 implements MigrationInterface {
    private tableName;
    private oldColumnName;
    private newColumnName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
