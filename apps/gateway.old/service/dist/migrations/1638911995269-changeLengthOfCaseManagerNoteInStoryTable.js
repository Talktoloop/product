"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeLengthOfCaseManagerNoteInStoryTable1638911995269 = void 0;
class ChangeLengthOfCaseManagerNoteInStoryTable1638911995269 {
    constructor() {
        this.tableName = 'story';
        this.columnName = 'case_manager_note';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` MODIFY COLUMN ${this.columnName} VARCHAR(5000)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` MODIFY COLUMN ${this.columnName} VARCHAR(100)`);
    }
}
exports.ChangeLengthOfCaseManagerNoteInStoryTable1638911995269 = ChangeLengthOfCaseManagerNoteInStoryTable1638911995269;
//# sourceMappingURL=1638911995269-changeLengthOfCaseManagerNoteInStoryTable.js.map