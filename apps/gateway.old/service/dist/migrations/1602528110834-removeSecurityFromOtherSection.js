"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveSecurityFromOtherSection1602528110834 = void 0;
class RemoveSecurityFromOtherSection1602528110834 {
    constructor() {
        this.titleToRemove = 'Security';
        this.categoryToRemove = 'Other';
        this.tableName = 'thematic';
    }
    async up(queryRunner) {
        const category = await queryRunner.query(`SELECT \`id\` FROM \`${this.tableName}\` WHERE \`title\` = ? AND parent_thematic_id IS NULL`, [this.categoryToRemove]);
        await queryRunner.query(`DELETE FROM \`${this.tableName}\` WHERE \`title\` = ? AND parent_thematic_id = ?`, [this.titleToRemove, category[0].id]);
    }
    async down(queryRunner) {
        const category = await queryRunner.query(`SELECT \`id\` FROM \`${this.tableName}\` WHERE \`title\` = ? AND parent_thematic_id IS NULL`, [this.categoryToRemove]);
        await queryRunner.query(`
      INSERT INTO \`${this.tableName}\` (\`title\`, \`parentThematicId\` )
      VALUES (?, ?)
      `, [this.titleToRemove, category.id]);
    }
}
exports.RemoveSecurityFromOtherSection1602528110834 = RemoveSecurityFromOtherSection1602528110834;
//# sourceMappingURL=1602528110834-removeSecurityFromOtherSection.js.map