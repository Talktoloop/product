import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddPhoneToCommentTable1622113708565 implements MigrationInterface {
    private tableName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
