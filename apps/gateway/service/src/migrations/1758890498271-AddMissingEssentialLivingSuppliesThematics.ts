import { MigrationInterface, QueryRunner } from "typeorm";

export class AddMissingEssentialLivingSuppliesThematics1758890498271 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Add missing essential living supplies thematics
        await queryRunner.query(`INSERT INTO thematic (code, parent_thematic_id, \`order\`, label) VALUES ('assistive-devices-plwd', 11, 0, 'Assistive devices for PLWD')`);
        await queryRunner.query(`INSERT INTO thematic (code, parent_thematic_id, \`order\`, label) VALUES ('essential-living-supplies-other', 11, 0, 'Other')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Remove added thematics
        await queryRunner.query(`DELETE FROM thematic WHERE code IN ('assistive-devices-plwd', 'essential-living-supplies-other')`);
    }

}
