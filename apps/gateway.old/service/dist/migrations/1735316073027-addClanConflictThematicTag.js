"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddClanConflictThematicTag1735316073027 = void 0;
class AddClanConflictThematicTag1735316073027 {
    constructor() {
        this.tableName = 'thematic';
        this.protectionThematic = 'protection';
        this.newProtectionThematics = [
            'clan-conflict'
        ];
    }
    async up(queryRunner) {
        var _a;
        const protectionCategory = await queryRunner.query(`SELECT id FROM ${this.tableName} WHERE code = ? LIMIT 1`, [this.protectionThematic]);
        if (protectionCategory.length > 0) {
            const protectionCategoryId = protectionCategory[0].id;
            const currentMaxOrder = await queryRunner.query(`SELECT MAX(\`order\`) as maxOrder FROM ${this.tableName} WHERE parent_thematic_id = ?`, [protectionCategoryId]);
            let order = ((_a = currentMaxOrder[0]) === null || _a === void 0 ? void 0 : _a.maxOrder) + 1 || 0;
            this.newProtectionThematics.map((thematicTag, index) => {
                queryRunner.query(`INSERT INTO ${this.tableName} (code, \`order\`, parent_thematic_id) VALUES (?, ?, ?)`, [thematicTag, order, protectionCategoryId]);
            });
        }
    }
    async down(queryRunner) {
        const allNewThematics = [
            ...this.newProtectionThematics
        ];
        await queryRunner.query(`DELETE FROM ${this.tableName} WHERE code IN (${allNewThematics
            .map(() => '?')
            .join(', ')})`, allNewThematics);
    }
}
exports.AddClanConflictThematicTag1735316073027 = AddClanConflictThematicTag1735316073027;
//# sourceMappingURL=1735316073027-addClanConflictThematicTag.js.map