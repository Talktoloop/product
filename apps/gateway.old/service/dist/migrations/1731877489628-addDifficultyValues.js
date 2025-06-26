"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddDifficultyValues1731877489628 = void 0;
class AddDifficultyValues1731877489628 {
    constructor() {
        this.tableName = 'difficulty';
    }
    async up(queryRunner) {
        await queryRunner.query(`
      INSERT INTO ${this.tableName} (code)
      VALUES ('unspecified')
    `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
      DELETE FROM ${this.tableName}
      WHERE code = 'unspecified'
    `);
    }
}
exports.AddDifficultyValues1731877489628 = AddDifficultyValues1731877489628;
//# sourceMappingURL=1731877489628-addDifficultyValues.js.map