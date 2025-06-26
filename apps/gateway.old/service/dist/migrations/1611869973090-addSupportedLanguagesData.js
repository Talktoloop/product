"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddSupportedLanguagesData1611869973090 = void 0;
class AddSupportedLanguagesData1611869973090 {
    constructor() {
        this.supportedLanguages = ['de', 'fr', 'es', 'ar'];
        this.tableName = 'language';
    }
    async up(queryRunner) {
        await Promise.all(this.supportedLanguages.map(async (language) => {
            await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`code\`) VALUES (?)`, [language]);
        }));
    }
    async down(queryRunner) {
        await Promise.all(this.supportedLanguages.map(async (language) => {
            await queryRunner.query(`DELETE FROM \`${this.tableName}\` WHERE 'code'=?`, [language]);
        }));
    }
}
exports.AddSupportedLanguagesData1611869973090 = AddSupportedLanguagesData1611869973090;
//# sourceMappingURL=1611869973090-addSupportedLanguagesData.js.map