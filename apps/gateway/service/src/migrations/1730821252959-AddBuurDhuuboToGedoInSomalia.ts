import { MigrationInterface, QueryRunner } from "typeorm";

export class AddBuurDhuuboToGedoInSomalia1730821252959 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO country_administrative_area (country_id, parent_id, level, created_at, has_child, external_id)
            VALUES (203, 32531, 2, NOW(), 0, NULL)
        `);

        const newAreaId = await queryRunner.query(`SELECT LAST_INSERT_ID() as id`);
        const areaId = newAreaId[0].id;

        await queryRunner.query(`
            INSERT INTO country_administrative_area_name (language_id, administrative_area_id, name)
            VALUES (1, ?, 'Buur Dhuubo')
        `, [areaId]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM country_administrative_area_name
            WHERE name = 'Buur Dhuubo'
        `);

        await queryRunner.query(`
            DELETE FROM country_administrative_area
            WHERE parent_id = 32531 AND country_id = 203 AND level = 2 AND has_child = 0
        `);
    }
}
