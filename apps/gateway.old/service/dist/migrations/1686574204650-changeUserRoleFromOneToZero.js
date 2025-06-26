"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeUserRoleFromOneToZero1686574204650 = void 0;
class changeUserRoleFromOneToZero1686574204650 {
    constructor() {
        this.tableName = 'user';
    }
    async up(queryRunner) {
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`role\` = 0 WHERE \`role\` = 1`);
    }
    async down(queryRunner) {
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`role\` = 1 WHERE \`role\` = 0`);
    }
}
exports.changeUserRoleFromOneToZero1686574204650 = changeUserRoleFromOneToZero1686574204650;
//# sourceMappingURL=1686574204650-changeUserRoleFromOneToZero.js.map