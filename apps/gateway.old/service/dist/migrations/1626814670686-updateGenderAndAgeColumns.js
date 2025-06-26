"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGenderAndAgeColumns1626814670686 = void 0;
class UpdateGenderAndAgeColumns1626814670686 {
    constructor() {
        this.tableName = 'story';
    }
    async up(queryRunner) {
        await queryRunner.query(`UPDATE ${this.tableName} SET age = ? WHERE age IS NULL`, [0]);
        await queryRunner.query(`ALTER TABLE ${this.tableName} MODIFY age tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`UPDATE ${this.tableName} SET gender = ? WHERE gender IS NULL`, [0]);
        await queryRunner.query(`ALTER TABLE ${this.tableName} MODIFY gender tinyint NOT NULL DEFAULT 0`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.tableName} MODIFY age tinyint NULL`);
        await queryRunner.query(`ALTER TABLE ${this.tableName} MODIFY gender tinyint NULL`);
    }
}
exports.UpdateGenderAndAgeColumns1626814670686 = UpdateGenderAndAgeColumns1626814670686;
//# sourceMappingURL=1626814670686-updateGenderAndAgeColumns.js.map