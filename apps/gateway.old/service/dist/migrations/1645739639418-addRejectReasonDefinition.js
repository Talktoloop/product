"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddRejectReasonDefinition1645739639418 = void 0;
const types_1 = require("../common/types");
class AddRejectReasonDefinition1645739639418 {
    constructor() {
        this.tableName = 'reject_reason';
    }
    async up(queryRunner) {
        await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`code\`) VALUES (?)`, [types_1.REJECT_REASON_CODE.POOR_AUDIO_QUALITY]);
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`, [types_1.REJECT_REASON_CODE.POOR_AUDIO_QUALITY]);
    }
}
exports.AddRejectReasonDefinition1645739639418 = AddRejectReasonDefinition1645739639418;
//# sourceMappingURL=1645739639418-addRejectReasonDefinition.js.map