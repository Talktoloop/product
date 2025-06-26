import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddRecipientIdToStoryTable1676282670248 implements MigrationInterface {
    tableName: string;
    indexRecipientId: string;
    fkRecipientId: string;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
