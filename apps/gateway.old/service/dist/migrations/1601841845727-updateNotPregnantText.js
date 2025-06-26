"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNotPregnantText1601841845727 = void 0;
class UpdateNotPregnantText1601841845727 {
    constructor() {
        this.idToChange = 1;
        this.newTitle = 'Not pregnant or breastfeeding';
        this.oldTitle = 'Not pregnant and breastfeeding';
        this.tableName = 'pregnancy_status';
    }
    async up(queryRunner) {
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`title\` = ? WHERE id = ?`, [this.newTitle, this.idToChange]);
    }
    async down(queryRunner) {
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`title\` = ? WHERE id = ?`, [this.oldTitle, this.idToChange]);
    }
}
exports.UpdateNotPregnantText1601841845727 = UpdateNotPregnantText1601841845727;
//# sourceMappingURL=1601841845727-updateNotPregnantText.js.map