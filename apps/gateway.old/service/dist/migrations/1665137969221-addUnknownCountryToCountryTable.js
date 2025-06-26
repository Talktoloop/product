"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUnknownCountryToCountryTable1665137969221 = void 0;
class AddUnknownCountryToCountryTable1665137969221 {
    constructor() {
        this.tableName = 'country';
        this.code = 'un';
    }
    async up(queryRunner) {
        await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`prefix\`, \`code\`, \`name\`) VALUES (?, ?, ?)`, [0, this.code, 'Unknown']);
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`, [this.code]);
    }
}
exports.AddUnknownCountryToCountryTable1665137969221 = AddUnknownCountryToCountryTable1665137969221;
//# sourceMappingURL=1665137969221-addUnknownCountryToCountryTable.js.map