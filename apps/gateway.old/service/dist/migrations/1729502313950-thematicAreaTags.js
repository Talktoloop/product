"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThematicAreaTags1729502313950 = void 0;
class ThematicAreaTags1729502313950 {
    constructor() {
        this.tableName = 'thematic';
        this.crossCutting = 'cross-cutting';
        this.newThematic = 'general-assistance';
    }
    async up(queryRunner) {
        const crossCuttingCategory = await queryRunner.query(`SELECT id FROM ${this.tableName} WHERE code = ? LIMIT 1`, [this.crossCutting]);
        if (crossCuttingCategory.length > 0) {
            const crossCuttingId = crossCuttingCategory[0].id;
            const crossCuttingChildren = await queryRunner.query(`SELECT id FROM ${this.tableName} WHERE parent_thematic_id = ?`, [crossCuttingId]);
            for (let i = 0; i < crossCuttingChildren.length; i++) {
                const childId = crossCuttingChildren[i].id;
                await queryRunner.query(`UPDATE ${this.tableName} SET \`order\` = ? WHERE id = ?`, [i + 1, childId]);
            }
            await queryRunner.query(`INSERT INTO ${this.tableName} (code, \`order\`, parent_thematic_id) VALUES (?, ?, ?)`, [this.newThematic, crossCuttingChildren.length + 1, crossCuttingId,]);
        }
    }
    async down(queryRunner) {
        const crossCuttingCategory = await queryRunner.query(`SELECT id FROM ${this.tableName} WHERE code = ? LIMIT 1`, [this.crossCutting]);
        if (crossCuttingCategory.length > 0) {
            const crossCuttingId = crossCuttingCategory[0].id;
            await queryRunner.query(`DELETE FROM ${this.tableName} WHERE code = ? AND parent_thematic_id = ?`, [this.newThematic, crossCuttingId]);
        }
    }
}
exports.ThematicAreaTags1729502313950 = ThematicAreaTags1729502313950;
//# sourceMappingURL=1729502313950-thematicAreaTags.js.map