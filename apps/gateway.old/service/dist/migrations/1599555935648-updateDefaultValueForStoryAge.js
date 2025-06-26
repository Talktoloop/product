"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDefaultValueForStoryAge1599555935648 = void 0;
class UpdateDefaultValueForStoryAge1599555935648 {
    constructor() {
        this.tableName = 'story';
        this.columName = 'age';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.tableName} ALTER COLUMN ${this.columName} SET DEFAULT 0`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.tableName} ALTER COLUMN ${this.columName} SET DEFAULT 4`);
    }
}
exports.UpdateDefaultValueForStoryAge1599555935648 = UpdateDefaultValueForStoryAge1599555935648;
//# sourceMappingURL=1599555935648-updateDefaultValueForStoryAge.js.map