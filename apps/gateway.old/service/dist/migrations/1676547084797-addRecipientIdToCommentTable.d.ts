import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddRecipientIdToCommentTable1676547084797 implements MigrationInterface {
    tableName: string;
    indexRecipientId: string;
    fkRecipientId: string;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
