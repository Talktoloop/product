"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddMinorityGroupToThematicTable1675673599023 = void 0;
class AddMinorityGroupToThematicTable1675673599023 {
    constructor() {
        this.tableName = 'thematic';
        this.thematicCategory = 'protection';
        this.newSubcategory = 'minorityGroup';
        this.nextSubcategory = 'other';
    }
    async getCategory(queryRunner) {
        return queryRunner
            .query(`SELECT \`id\` FROM \`${this.tableName}\` WHERE \`parent_thematic_id\` IS NULL AND \`code\` = '${this.thematicCategory}'`)
            .then((result) => result[0]);
    }
    async getSubcategory(queryRunner, categoryId, name) {
        return queryRunner
            .query(`SELECT \`id\`, \`order\` FROM \`${this.tableName}\` WHERE \`parent_thematic_id\` = ${categoryId} AND \`code\` = '${name}'`)
            .then((result) => result[0]);
    }
    async up(queryRunner) {
        const category = await this.getCategory(queryRunner);
        const nextSubcategory = await this.getSubcategory(queryRunner, category.id, this.nextSubcategory);
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`order\` = \`order\` + 1 WHERE \`order\` >= ?`, [nextSubcategory.order]);
        await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`code\`, \`parent_thematic_id\`, \`order\`) VALUES (?, ?, ?)`, [this.newSubcategory, category.id, nextSubcategory.order]);
    }
    async down(queryRunner) {
        const category = await this.getCategory(queryRunner);
        const subcategory = await this.getSubcategory(queryRunner, category.id, this.newSubcategory);
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`order\` = \`order\` - 1 WHERE \`order\` > ?`, [subcategory.order]);
        await queryRunner.query(`DELETE FROM \`${this.tableName}\` WHERE \`id\` = ?`, [subcategory.id]);
        return;
    }
}
exports.AddMinorityGroupToThematicTable1675673599023 = AddMinorityGroupToThematicTable1675673599023;
//# sourceMappingURL=1675673599023-AddMinorityGroupToThematicTable.js.map