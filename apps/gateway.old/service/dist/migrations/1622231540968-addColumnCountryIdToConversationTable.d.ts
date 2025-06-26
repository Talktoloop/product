import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddColumnCountryIdToConversationTable1622231540968 implements MigrationInterface {
    private tableName;
    private foreignKeyCountryId;
    private indexCountryId;
    private codes;
    private oldColumn;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
