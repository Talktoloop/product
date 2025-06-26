"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddDemocraticRepublicOfCongoToCountryTable1636702528470 = void 0;
class AddDemocraticRepublicOfCongoToCountryTable1636702528470 {
    constructor() {
        this.tableName = 'country';
    }
    async up(queryRunner) {
        await Promise.all([
            queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`prefix\`, \`code\`, \`name\`) VALUES (?, ?, ?)`, [243, 'cd', 'Democratic Republic of the Congo']),
            queryRunner.query(`UPDATE \`${this.tableName}\` SET \`name\` = ? WHERE code = ?`, ['Republic of the Congo', 'cg']),
        ]);
    }
    async down(queryRunner) {
        await Promise.all([
            queryRunner.query(`DELETE FROM \`${this.tableName}\` WHERE code = ?`, [
                'cd',
            ]),
            queryRunner.query(`UPDATE \`${this.tableName}\` SET \`name\` = ? WHERE code = ?`, ['Congo', 'cg']),
        ]);
    }
}
exports.AddDemocraticRepublicOfCongoToCountryTable1636702528470 = AddDemocraticRepublicOfCongoToCountryTable1636702528470;
//# sourceMappingURL=1636702528470-addDemocraticRepublicOfCongoToCountryTable.js.map