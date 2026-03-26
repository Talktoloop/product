import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateHealthThematics1758891419713 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Fix label for "Other" in Health category
        await queryRunner.query(`UPDATE thematic SET label = 'Other' WHERE code = 'other' AND parent_thematic_id = 12`);
        
        // Rename Sexual and reproductive health to Sexual and reproductive rights
        await queryRunner.query(`UPDATE thematic SET label = 'Sexual and reproductive rights' WHERE code = 'sexualAndReproductiveRights'`);
        
        // Move GBV from Health to Protection (parent_thematic_id 67)
        await queryRunner.query(`UPDATE thematic SET parent_thematic_id = 67 WHERE code = 'gender-basedViolence'`);
        
        // Add missing health thematics
        await queryRunner.query(`INSERT INTO thematic (code, parent_thematic_id, \`order\`, label) VALUES ('injuries-accidents', 12, 0, 'Injuries and accidents')`);
        await queryRunner.query(`INSERT INTO thematic (code, parent_thematic_id, \`order\`, label) VALUES ('maternal-newborn-child-health', 12, 0, 'Maternal, newborn and child health')`);
        await queryRunner.query(`INSERT INTO thematic (code, parent_thematic_id, \`order\`, label) VALUES ('non-communicable-diseases', 12, 0, 'Non-communicable diseases')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Revert label for "Other" back to NULL
        await queryRunner.query(`UPDATE thematic SET label = NULL WHERE code = 'other' AND parent_thematic_id = 12`);
        
        // Revert Sexual and reproductive rights back to Sexual and reproductive health
        await queryRunner.query(`UPDATE thematic SET label = 'Sexual and reproductive health' WHERE code = 'sexualAndReproductiveRights'`);
        
        // Move GBV back from Protection to Health
        await queryRunner.query(`UPDATE thematic SET parent_thematic_id = 12 WHERE code = 'gender-basedViolence'`);
        
        // Remove added thematics
        await queryRunner.query(`DELETE FROM thematic WHERE code IN ('injuries-accidents', 'maternal-newborn-child-health', 'non-communicable-diseases')`);
    }

}
