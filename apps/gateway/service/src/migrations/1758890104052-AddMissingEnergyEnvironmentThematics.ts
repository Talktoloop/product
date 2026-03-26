import { MigrationInterface, QueryRunner } from "typeorm";

export class AddMissingEnergyEnvironmentThematics1758890104052 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO thematic (code, parent_thematic_id, \`order\`, label) VALUES ('biodiversity-ecosystem', 83, 0, 'Biodiversity & ecosystem management')`);
        await queryRunner.query(`INSERT INTO thematic (code, parent_thematic_id, \`order\`, label) VALUES ('natural-resources', 83, 0, 'Natural resources management')`);
        await queryRunner.query(`INSERT INTO thematic (code, parent_thematic_id, \`order\`, label) VALUES ('energy-environment-other', 83, 0, 'Other')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM thematic WHERE code IN ('biodiversity-ecosystem', 'natural-resources', 'energy-environment-other')`);
    }

} 