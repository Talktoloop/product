import { MigrationInterface, QueryRunner } from 'typeorm';
import 'dotenv/config';
export declare class AddMockData1692969296869 implements MigrationInterface {
    mockUserEmail: string;
    limit: number;
    findUser(queryRunner: QueryRunner): Promise<{
        id: string;
    }>;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
