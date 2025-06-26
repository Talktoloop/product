"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddBuurDhuuboToGedoInSomalia1730821252959 = void 0;
class AddBuurDhuuboToGedoInSomalia1730821252959 {
    async up(queryRunner) {
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
    async down(queryRunner) {
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
exports.AddBuurDhuuboToGedoInSomalia1730821252959 = AddBuurDhuuboToGedoInSomalia1730821252959;
//# sourceMappingURL=1730821252959-AddBuurDhuuboToGedoInSomalia.js.map