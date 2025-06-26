import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddTableCaseSyncAuthorPerspective1626811054192 implements MigrationInterface {
    private tableName;
    private foreignKeyUserId;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
