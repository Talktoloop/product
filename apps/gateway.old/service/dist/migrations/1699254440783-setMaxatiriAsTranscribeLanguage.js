"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetMaxatiriAsTranscribeLanguage1699254440783 = void 0;
class SetMaxatiriAsTranscribeLanguage1699254440783 {
    constructor() {
        this.tableName = 'language';
        this.columnName = 'transcribe_lang';
    }
    async up(queryRunner) {
        await queryRunner.query(`UPDATE ${this.tableName} SET ${this.columnName} = ? WHERE code = ?`, ['so-SO', 'so']);
    }
    async down(queryRunner) {
        await queryRunner.query(`UPDATE ${this.tableName} SET ${this.columnName} = ? WHERE code = ?`, [null, 'so']);
    }
}
exports.SetMaxatiriAsTranscribeLanguage1699254440783 = SetMaxatiriAsTranscribeLanguage1699254440783;
//# sourceMappingURL=1699254440783-setMaxatiriAsTranscribeLanguage.js.map