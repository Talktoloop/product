"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMessageProviderType1631653326741 = void 0;
class updateMessageProviderType1631653326741 {
    constructor() {
        this.tableName = 'message';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.tableName} MODIFY provider varchar(100)`);
    }
    async down(queryRunner) {
        await queryRunner.query(` ALTER TABLE ${this.tableName} MODIFY provider enum`);
    }
}
exports.updateMessageProviderType1631653326741 = updateMessageProviderType1631653326741;
//# sourceMappingURL=1631653326741-update-message-provider-type.js.map