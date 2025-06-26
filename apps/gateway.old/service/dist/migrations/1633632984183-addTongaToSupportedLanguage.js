"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTongaToSupportedLanguage1633632984183 = void 0;
class addTongaToSupportedLanguage1633632984183 {
    constructor() {
        this.tableName = 'language';
    }
    async up(queryRunner) {
        await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`code\`, \`provider\`, \`visible\`) VALUES (?, ?, ?)`, ['tog', null, 1]);
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`, ['tog']);
    }
}
exports.addTongaToSupportedLanguage1633632984183 = addTongaToSupportedLanguage1633632984183;
//# sourceMappingURL=1633632984183-addTongaToSupportedLanguage.js.map