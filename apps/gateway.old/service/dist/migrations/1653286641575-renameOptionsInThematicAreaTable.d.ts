import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class RenameOptionsInThematicAreaTable1653286641575 implements MigrationInterface {
    tableName: string;
    options: {
        hospitals: string;
        epidemics: string;
        'campCoordination/Management': string;
        campManagement: string;
        lighting: string;
        university: string;
        other: string;
        financeManagement: string;
        government: string;
        security: string;
        foodAssistance: string;
        training: string;
    };
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
