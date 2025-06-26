"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleInsteadOfAWSforBahasaAndMaaxatiri1663227363690 = void 0;
class GoogleInsteadOfAWSforBahasaAndMaaxatiri1663227363690 {
    constructor() {
        this.tableName = 'language';
        this.columnName = 'provider';
        this.newProvider = 'google';
        this.oldProvider = 'aws';
    }
    async up(queryRunner) {
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`${this.columnName}\` = ? WHERE \`code\` IN (?)`, [this.newProvider, ['id', 'so']]);
    }
    async down(queryRunner) {
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`${this.columnName}\` = ? WHERE \`code\` IN (?)`, [this.oldProvider, ['id', 'so']]);
    }
}
exports.GoogleInsteadOfAWSforBahasaAndMaaxatiri1663227363690 = GoogleInsteadOfAWSforBahasaAndMaaxatiri1663227363690;
//# sourceMappingURL=1663227363690-googleInsteadOfAWSforBahasaAndMaaxatiri.js.map