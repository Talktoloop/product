"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMessageContentType1637014014512 = void 0;
class UpdateMessageContentType1637014014512 {
    constructor() {
        this.tableName = 'message';
        this.columnName = 'content';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.tableName} MODIFY ${this.columnName} text`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.tableName} MODIFY ${this.columnName} VARCHAR(640)`);
    }
}
exports.UpdateMessageContentType1637014014512 = UpdateMessageContentType1637014014512;
//# sourceMappingURL=1637014014512-updateMessageContentType.js.map