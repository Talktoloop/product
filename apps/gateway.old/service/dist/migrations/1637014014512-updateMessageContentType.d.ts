import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class UpdateMessageContentType1637014014512 implements MigrationInterface {
    private tableName;
    private columnName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
