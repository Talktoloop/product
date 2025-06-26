"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddOtherOptionToDifficultyTable1626117734248 = void 0;
class AddOtherOptionToDifficultyTable1626117734248 {
    constructor() {
        this.tableName = 'difficulty';
    }
    async up(queryRunner) {
        await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`code\`) VALUES (?)`, ['other']);
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`, ['other']);
    }
}
exports.AddOtherOptionToDifficultyTable1626117734248 = AddOtherOptionToDifficultyTable1626117734248;
//# sourceMappingURL=1626117734248-addOtherOptionToDifficultyTable.js.map