"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddGoogleProviderForNy1621365829303 = void 0;
class AddGoogleProviderForNy1621365829303 {
    constructor() {
        this.tableName = 'language';
        this.columnName = 'provider';
    }
    async up(queryRunner) {
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`${this.columnName}\` = ? WHERE \`code\` = ? `, ['google', 'ny']);
    }
    async down(queryRunner) {
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`${this.columnName}\` = ? WHERE \`code\` = ? `, [null, 'ny']);
    }
}
exports.AddGoogleProviderForNy1621365829303 = AddGoogleProviderForNy1621365829303;
//# sourceMappingURL=1621365829303-addGoogleProviderForNy.js.map