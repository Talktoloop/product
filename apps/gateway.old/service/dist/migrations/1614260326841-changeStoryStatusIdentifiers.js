"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeStoryStatusIdentifiers1614260326841 = void 0;
class ChangeStoryStatusIdentifiers1614260326841 {
    constructor() {
        this.tableName = 'story';
    }
    async changeStatus(queryRunner, oldStatus, newStatus) {
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`status\` = ? WHERE \`status\` = ?`, [newStatus, oldStatus]);
    }
    async up(queryRunner) {
        await this.changeStatus(queryRunner, 3, 11);
        await this.changeStatus(queryRunner, 2, 10);
        await this.changeStatus(queryRunner, 1, 2);
        await this.changeStatus(queryRunner, 0, 1);
    }
    async down(queryRunner) {
        await this.changeStatus(queryRunner, 1, 0);
        await this.changeStatus(queryRunner, 2, 1);
        await this.changeStatus(queryRunner, 11, 3);
        await this.changeStatus(queryRunner, 10, 2);
    }
}
exports.ChangeStoryStatusIdentifiers1614260326841 = ChangeStoryStatusIdentifiers1614260326841;
//# sourceMappingURL=1614260326841-changeStoryStatusIdentifiers.js.map