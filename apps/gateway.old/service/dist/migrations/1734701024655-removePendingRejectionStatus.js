"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemovePendingRejectionStatus1734701024655 = void 0;
class RemovePendingRejectionStatus1734701024655 {
    constructor() {
        this.tableName = 'story';
    }
    async up(queryRunner) {
        await queryRunner.query(`
            UPDATE ${this.tableName} SET status = 'rejected' WHERE status = 'pending_rejection_not_sensitive';`);
    }
    async down(queryRunner) {
    }
}
exports.RemovePendingRejectionStatus1734701024655 = RemovePendingRejectionStatus1734701024655;
//# sourceMappingURL=1734701024655-removePendingRejectionStatus.js.map