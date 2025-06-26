import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddCommentIdToIvrrCallTable1651051444490 implements MigrationInterface {
    private tableName;
    private newColumn;
    private foreignKeyCommentId;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
