"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgeIsNullableInStoryTable1621019374926 = void 0;
class AgeIsNullableInStoryTable1621019374926 {
    constructor() {
        this.tableName = 'story';
        this.columnName = 'age';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` MODIFY \`${this.columnName}\` TINYINT NULL DEFAULT NULL;`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` MODIFY \`${this.columnName}\` TINYINT NOT NULL DEFAULT 0;`);
    }
}
exports.AgeIsNullableInStoryTable1621019374926 = AgeIsNullableInStoryTable1621019374926;
//# sourceMappingURL=1621019374926-ageIsNullabeInStoryTable.js.map