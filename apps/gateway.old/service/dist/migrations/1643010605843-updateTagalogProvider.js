"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTagalogProvider1643010605843 = void 0;
class UpdateTagalogProvider1643010605843 {
    constructor() {
        this.tableName = 'language';
        this.columnName = 'provider';
        this.newProvider = 'google';
        this.oldProvider = 'AWS';
    }
    async up(queryRunner) {
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`${this.columnName}\` = ? WHERE \`code\` = ? `, [this.newProvider, 'tl']);
    }
    async down(queryRunner) {
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`${this.columnName}\` = ? WHERE \`code\` = ? `, [this.oldProvider, 'tl']);
    }
}
exports.UpdateTagalogProvider1643010605843 = UpdateTagalogProvider1643010605843;
//# sourceMappingURL=1643010605843-updateTagalogProvider.js.map