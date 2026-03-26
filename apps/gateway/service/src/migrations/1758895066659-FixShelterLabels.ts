import { MigrationInterface, QueryRunner } from "typeorm";

export class FixShelterLabels1758895066659 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Fix label for "Other" in Shelter category
        await queryRunner.query(`UPDATE thematic SET label = 'Other' WHERE code = 'other' AND parent_thematic_id = 29`);
        
        // Fix Housing label to include '/'
        await queryRunner.query(`UPDATE thematic SET label = 'Housing/Shelter' WHERE code = 'housing'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Revert label for "Other" back to NULL
        await queryRunner.query(`UPDATE thematic SET label = NULL WHERE code = 'other' AND parent_thematic_id = 29`);
        
        // Revert Housing label
        await queryRunner.query(`UPDATE thematic SET label = 'Housing' WHERE code = 'housing'`);
    }

}
