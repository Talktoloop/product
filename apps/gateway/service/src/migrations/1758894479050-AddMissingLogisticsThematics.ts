import { MigrationInterface, QueryRunner } from "typeorm";

export class AddMissingLogisticsThematics1758894479050 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Add missing logistics thematics
        await queryRunner.query(`INSERT INTO thematic (code, parent_thematic_id, \`order\`, label) VALUES ('logistics-other', 32, 0, 'Other')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Remove added thematics
        await queryRunner.query(`DELETE FROM thematic WHERE code = 'logistics-other'`);
    }

}
