import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class changeUaTuUk1647801761741 implements MigrationInterface {
    name: string;
    private tableName;
    private newCode;
    private oldCode;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
