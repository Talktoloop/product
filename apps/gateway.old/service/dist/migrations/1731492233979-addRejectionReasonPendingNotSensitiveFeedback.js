"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddRejectionReasonPendingNotSensitiveFeedback1731492233979 = void 0;
class AddRejectionReasonPendingNotSensitiveFeedback1731492233979 {
    async up(queryRunner) {
        await queryRunner.query(`
            INSERT INTO reject_reason (code, is_top_level)
            VALUES ('notSensitive', true)
          `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
                    DELETE FROM reject_reason
                    WHERE code = 'notSensitive'
                  `);
    }
}
exports.AddRejectionReasonPendingNotSensitiveFeedback1731492233979 = AddRejectionReasonPendingNotSensitiveFeedback1731492233979;
//# sourceMappingURL=1731492233979-addRejectionReasonPendingNotSensitiveFeedback.js.map