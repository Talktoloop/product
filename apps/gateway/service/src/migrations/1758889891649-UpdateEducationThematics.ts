import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateEducationThematics1758889891649 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`UPDATE thematic SET label = 'Other' WHERE code = 'other' AND parent_thematic_id = 34`);
        
        await queryRunner.query(`INSERT INTO thematic (code, parent_thematic_id, \`order\`, label) VALUES ('religious-schooling', 34, 0, 'Religious schooling (madrassa, mosque, etc.)')`);
        await queryRunner.query(`INSERT INTO thematic (code, parent_thematic_id, \`order\`, label) VALUES ('special-needs-education', 34, 0, 'Special needs and inclusive education')`);
        await queryRunner.query(`INSERT INTO thematic (code, parent_thematic_id, \`order\`, label) VALUES ('school-infrastructure', 34, 0, 'School infrastructure, fees and supplies')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`UPDATE thematic SET label = NULL WHERE code = 'other' AND parent_thematic_id = 34`);
        
        await queryRunner.query(`DELETE FROM thematic WHERE code IN ('religious-schooling', 'special-needs-education', 'school-infrastructure')`);
    }

} 