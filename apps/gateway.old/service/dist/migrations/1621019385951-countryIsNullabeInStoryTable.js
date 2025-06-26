"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countryIsNullabeInStoryTable1621019385951 = void 0;
class countryIsNullabeInStoryTable1621019385951 {
    constructor() {
        this.tableName = 'story';
        this.columnName = 'country';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` MODIFY \`${this.columnName}\` varchar(3) NULL DEFAULT NULL;`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` MODIFY \`${this.columnName}\` varchar(3) NOT NULL DEFAULT '';`);
    }
}
exports.countryIsNullabeInStoryTable1621019385951 = countryIsNullabeInStoryTable1621019385951;
//# sourceMappingURL=1621019385951-countryIsNullabeInStoryTable.js.map