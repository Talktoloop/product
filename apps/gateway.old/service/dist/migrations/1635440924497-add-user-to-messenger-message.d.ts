import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class messengerMessageUser1635440924497 implements MigrationInterface {
    private tableName;
    private foreignKey;
    private userColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
