import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddThematicAreaOptions1680783950661 implements MigrationInterface {
    tableName: string;
    options: {
        'foodSecurity.livestock': string;
        'foodSecurity.agriculture': string;
        'foodSecurity.locust': string;
        'protection.idp': string;
    };
    up(queryRunner: QueryRunner): Promise<void>;
    down(): Promise<void>;
}
