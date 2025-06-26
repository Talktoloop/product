import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class FixStoryPublicationDate1632943207559 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(): Promise<void>;
}
