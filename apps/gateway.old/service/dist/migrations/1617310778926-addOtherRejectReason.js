"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddOtherRejectReason1617310778926 = void 0;
class AddOtherRejectReason1617310778926 {
    constructor() {
        this.tableName = 'reject_reason';
    }
    async up(queryRunner) {
        await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`code\`) VALUES ('other')`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM \`${this.tableName}\` WHERE \`code\` = 'other'`);
    }
}
exports.AddOtherRejectReason1617310778926 = AddOtherRejectReason1617310778926;
//# sourceMappingURL=1617310778926-addOtherRejectReason.js.map