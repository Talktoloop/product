import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class userWantCall1651727320398 implements MigrationInterface {
    name: string;
    private tableName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
