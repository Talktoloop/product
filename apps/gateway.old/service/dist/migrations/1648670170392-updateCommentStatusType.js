"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCommentStatusType1648670170392 = void 0;
const shared_1 = require("@ourloop/shared");
class UpdateCommentStatusType1648670170392 {
    constructor() {
        this.tableName = 'comment';
        this.columnName = 'status';
        this.oldCommentData = {
            DRAFT: 0,
            ACCEPTED_BY_AUTHOR: 1,
            PUBLISHED: 2,
            REJECTED: 3,
        };
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` MODIFY ${this.columnName} varchar(100) NOT NULL`);
        await Promise.all(Object.keys(this.oldCommentData).map(async (oldCommentStatus) => {
            var _a;
            await queryRunner.query(`UPDATE ${this.tableName} SET ${this.columnName} = '${(_a = shared_1.COMMENT_STATUS[oldCommentStatus]) !== null && _a !== void 0 ? _a : shared_1.COMMENT_STATUS.PENDING_REVIEW}' WHERE ${this.columnName} = '${this.oldCommentData[oldCommentStatus]}'`);
        }));
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` MODIFY ${this.columnName} int NOT NULL`);
    }
}
exports.UpdateCommentStatusType1648670170392 = UpdateCommentStatusType1648670170392;
//# sourceMappingURL=1648670170392-updateCommentStatusType.js.map