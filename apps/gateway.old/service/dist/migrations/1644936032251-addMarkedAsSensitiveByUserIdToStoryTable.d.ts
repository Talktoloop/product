import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddMarkedAsSensitiveByUserIdToStoryTable1644936032251 implements MigrationInterface {
    private tableName;
    private foreignKey;
    private userColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
