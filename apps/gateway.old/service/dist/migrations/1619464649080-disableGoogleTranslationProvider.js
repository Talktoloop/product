"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisableGoogleTranslationProvider1619464649080 = void 0;
class DisableGoogleTranslationProvider1619464649080 {
    constructor() {
        this.tableName = 'language';
        this.columnName = 'provider';
    }
    async up(queryRunner) {
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`${this.columnName}\` = ? WHERE \`code\` = ?`, [null, 'ny']);
    }
    async down(queryRunner) {
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`${this.columnName}\` = ? WHERE \`code\` = ?`, ['google', 'ny']);
    }
}
exports.DisableGoogleTranslationProvider1619464649080 = DisableGoogleTranslationProvider1619464649080;
//# sourceMappingURL=1619464649080-disableGoogleTranslationProvider.js.map