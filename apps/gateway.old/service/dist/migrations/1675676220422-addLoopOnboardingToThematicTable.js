"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLoopOnboardingToThematicTable1675676220422 = void 0;
class AddLoopOnboardingToThematicTable1675676220422 {
    constructor() {
        this.tableName = 'thematic';
        this.newCategory = 'other';
        this.newSubcategory = 'loopOnboarding';
    }
    async getLastItem(queryRunner) {
        return queryRunner
            .query(`SELECT \`id\`, \`order\` FROM \`${this.tableName}\` order by \`order\` DESC limit 1`)
            .then((result) => result[0]);
    }
    async up(queryRunner) {
        let lastItem = await this.getLastItem(queryRunner);
        await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`code\`, \`parent_thematic_id\`, \`order\`) VALUES (?, ?, ?)`, [this.newCategory, null, lastItem.order + 1]);
        lastItem = await this.getLastItem(queryRunner);
        await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`code\`, \`parent_thematic_id\`, \`order\`) VALUES (?, ?, ?)`, [this.newSubcategory, lastItem.id, lastItem.order + 1]);
    }
    async down(queryRunner) {
        for (let i = 0; i < 2; i++) {
            const lastItem = await this.getLastItem(queryRunner);
            await queryRunner.query(`DELETE FROM \`${this.tableName}\` WHERE \`id\` = ?`, [lastItem.id]);
        }
    }
}
exports.AddLoopOnboardingToThematicTable1675676220422 = AddLoopOnboardingToThematicTable1675676220422;
//# sourceMappingURL=1675676220422-addLoopOnboardingToThematicTable.js.map