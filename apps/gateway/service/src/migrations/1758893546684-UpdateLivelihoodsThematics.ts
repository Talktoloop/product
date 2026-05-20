import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateLivelihoodsThematics1758893546684 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Move Labour and jobs from Cross cutting to Livelihoods & economic support
        await queryRunner.query(`UPDATE thematic SET parent_thematic_id = 23 WHERE code = 'laborAndJobs'`);
        
        // Edit Labour and jobs label to UK English (Labour instead of Labor)
        await queryRunner.query(`UPDATE thematic SET label = 'Labour and jobs' WHERE code = 'laborAndJobs'`);
        
        // Add missing livelihoods thematics
        await queryRunner.query(`INSERT INTO thematic (code, parent_thematic_id, \`order\`, label) VALUES ('business-entrepreneurship', 23, 0, 'Business and Entrepreneurship Support')`);
        await queryRunner.query(`INSERT INTO thematic (code, parent_thematic_id, \`order\`, label) VALUES ('fishing-aquaculture', 23, 0, 'Fishing and aquaculture')`);
        await queryRunner.query(`INSERT INTO thematic (code, parent_thematic_id, \`order\`, label) VALUES ('livelihoods-other', 23, 0, 'Other')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Move Labour and jobs back to Cross cutting
        await queryRunner.query(`UPDATE thematic SET parent_thematic_id = 39 WHERE code = 'laborAndJobs'`);
        
        // Revert Labour and jobs label to US English
        await queryRunner.query(`UPDATE thematic SET label = 'Labor and jobs' WHERE code = 'laborAndJobs'`);
        
        // Remove added thematics
        await queryRunner.query(`DELETE FROM thematic WHERE code IN ('business-entrepreneurship', 'fishing-aquaculture', 'livelihoods-other')`);
    }

}
