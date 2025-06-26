import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class RemoveAuthorPerspectiveFromCaseTable1626813727165 implements MigrationInterface {
    private tableName;
    private column;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
