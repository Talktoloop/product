import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddMigrateThematicAreaOptionsTable1653300454127 implements MigrationInterface {
    tableName: string;
    options: {
        'health.nutrition': string;
        'emergencyResponse.foodItems': string;
        'emergencyResponse.non-foodItems': string;
        'emergencyResponse.distribution': string;
        'cross-cutting.campCoordinationManagement': string;
        'emergencyResponse.campCoordinationManagement': string;
        'emergencyResponse.idCards': string;
        'shelter.logistics': string;
        'emergencyResponse.cash': string;
        'foodSecurity.cash': string;
        'health.communitySensitisation': string;
        'cross-cutting.safetyAndSecurity': string;
        'education.capacityBuilding': string;
        'foodSecurity.capacityBuilding': string;
    };
    up(queryRunner: QueryRunner): Promise<void>;
    down(): Promise<void>;
}
