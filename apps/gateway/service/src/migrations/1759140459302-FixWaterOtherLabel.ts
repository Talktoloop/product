import { MigrationInterface, QueryRunner } from "typeorm";

export class FixWaterOtherLabel1759140459302 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Fix label for "Other" in Water, Sanitation, and Hygiene category
        await queryRunner.query(`UPDATE thematic SET label = 'Other' WHERE code = 'other' AND parent_thematic_id = 26`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Revert label for "Other" back to NULL
        await queryRunner.query(`UPDATE thematic SET label = NULL WHERE code = 'other' AND parent_thematic_id = 26`);
    }

}
