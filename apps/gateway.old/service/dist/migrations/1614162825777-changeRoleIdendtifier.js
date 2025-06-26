"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRoleIdendtifier1614162825777 = void 0;
class ChangeRoleIdendtifier1614162825777 {
    constructor() {
        this.tableName = 'user';
    }
    async changeRole(queryRunner, oldRole, newRole) {
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`role\` = ? WHERE \`role\` = ?`, [newRole, oldRole]);
    }
    async up(queryRunner) {
        await this.changeRole(queryRunner, 0, 1);
    }
    async down(queryRunner) {
        await this.changeRole(queryRunner, 1, 0);
    }
}
exports.ChangeRoleIdendtifier1614162825777 = ChangeRoleIdendtifier1614162825777;
//# sourceMappingURL=1614162825777-changeRoleIdendtifier.js.map