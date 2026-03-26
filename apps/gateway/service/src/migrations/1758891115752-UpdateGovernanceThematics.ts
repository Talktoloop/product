import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateGovernanceThematics1758891115752 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Fix label for "Other" in Governance category
        await queryRunner.query(`UPDATE thematic SET label = 'Other' WHERE code = 'other' AND parent_thematic_id = 46`);
        
        // Fix Rule of Law label (remove brackets)
        await queryRunner.query(`UPDATE thematic SET label = 'Rule of law' WHERE code = 'rule-of-law'`);
        
        // Fix Transportation label (remove infrastructure)
        await queryRunner.query(`UPDATE thematic SET label = 'Transportation' WHERE code = 'transportation'`);
        
        // Add missing governance thematics
        await queryRunner.query(`INSERT INTO thematic (code, parent_thematic_id, \`order\`, label) VALUES ('banks-financial-institutions', 46, 0, 'Banks and financial institutions')`);
        await queryRunner.query(`INSERT INTO thematic (code, parent_thematic_id, \`order\`, label) VALUES ('civil-documentation', 46, 0, 'Civil Documentation / Administrative Services')`);
        await queryRunner.query(`INSERT INTO thematic (code, parent_thematic_id, \`order\`, label) VALUES ('peacebuilding-conflict-resolution', 46, 0, 'Peacebuilding/Conflict resolution')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Revert label for "Other" back to NULL
        await queryRunner.query(`UPDATE thematic SET label = NULL WHERE code = 'other' AND parent_thematic_id = 46`);
        
        // Revert Rule of Law label
        await queryRunner.query(`UPDATE thematic SET label = 'Rule of Law (justice system, police)' WHERE code = 'rule-of-law'`);
        
        // Revert Transportation label
        await queryRunner.query(`UPDATE thematic SET label = 'Transportation infrastructrue' WHERE code = 'transportation'`);
        
        // Remove added thematics
        await queryRunner.query(`DELETE FROM thematic WHERE code IN ('banks-financial-institutions', 'civil-documentation', 'peacebuilding-conflict-resolution')`);
    }

}
