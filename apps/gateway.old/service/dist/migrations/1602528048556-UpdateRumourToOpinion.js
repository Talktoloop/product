"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRumourToOpinion1602528048556 = void 0;
class UpdateRumourToOpinion1602528048556 {
    constructor() {
        this.previousTitle = 'Rumour';
        this.newTitle = 'Opinion';
        this.tableName = 'category';
    }
    async up(queryRunner) {
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`title\` = ? WHERE title = ?`, [this.newTitle, this.previousTitle]);
    }
    async down(queryRunner) {
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`title\` = ? WHERE title = ?`, [this.previousTitle, this.newTitle]);
    }
}
exports.UpdateRumourToOpinion1602528048556 = UpdateRumourToOpinion1602528048556;
//# sourceMappingURL=1602528048556-UpdateRumourToOpinion.js.map