"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddFoodAssistanceAndSecurityToThematicTable1626182767516 = void 0;
class AddFoodAssistanceAndSecurityToThematicTable1626182767516 {
    constructor() {
        this.tableName = 'thematic';
        this.items = [
            {
                parentCode: 'foodSecurity',
                code: 'foodAssistance',
            },
            {
                parentCode: 'other',
                code: 'security',
            },
        ];
    }
    async getParents(queryRunner) {
        return queryRunner.query(`SELECT \`id\`, \`code\` FROM \`${this.tableName}\` WHERE \`code\` IN (?)`, [this.items.map((item) => item.parentCode)]);
    }
    async up(queryRunner) {
        const parents = await this.getParents(queryRunner);
        const operations = [];
        for (const parent of parents) {
            operations.push(queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`code\`, \`parent_thematic_id\`) VALUES (?, ?)`, [
                this.items.find((item) => item.parentCode === parent.code).code,
                parent.id,
            ]));
        }
        await Promise.all(operations);
    }
    async down(queryRunner) {
        const parents = await this.getParents(queryRunner);
        const operations = [];
        for (const parent of parents) {
            operations.push(queryRunner.query(`DELETE FROM \`${this.tableName}\` WHERE \`code\` = ? AND parent_thematic_id = ?`, [
                this.items.find((item) => item.parentCode === parent.code).code,
                parent.id,
            ]));
        }
        await Promise.all(operations);
    }
}
exports.AddFoodAssistanceAndSecurityToThematicTable1626182767516 = AddFoodAssistanceAndSecurityToThematicTable1626182767516;
//# sourceMappingURL=1626182767516-addFoodAssistanceAndSecurityToThematicTable.js.map