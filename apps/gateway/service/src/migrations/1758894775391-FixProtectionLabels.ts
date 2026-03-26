import { MigrationInterface, QueryRunner } from "typeorm";

export class FixProtectionLabels1758894775391 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Fix label for "Other" in Protection category
        await queryRunner.query(`UPDATE thematic SET label = 'Other' WHERE code = 'other' AND parent_thematic_id = 67`);
        
        // Fix Landmines/unexploded ordnance label (small O for ordnance)
        await queryRunner.query(`UPDATE thematic SET label = 'Landmines/unexploded ordnance' WHERE code = 'landmines/UnexplodedOrdnance'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Revert label for "Other" back to NULL
        await queryRunner.query(`UPDATE thematic SET label = NULL WHERE code = 'other' AND parent_thematic_id = 67`);
        
        // Revert Landmines/unexploded ordnance label
        await queryRunner.query(`UPDATE thematic SET label = 'Landmines/unexploded ordnance' WHERE code = 'landmines/UnexplodedOrdnance'`);
    }

}
