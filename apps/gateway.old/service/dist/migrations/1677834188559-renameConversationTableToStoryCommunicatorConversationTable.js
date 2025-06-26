"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenameConversationTableToStoryCommunicatorConversationTable1677834188559 = void 0;
class RenameConversationTableToStoryCommunicatorConversationTable1677834188559 {
    constructor() {
        this.oldTableName = 'conversation';
        this.newTableName = 'story_communicator_conservation';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.oldTableName} RENAME ${this.newTableName}`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.newTableName} RENAME ${this.oldTableName}`);
    }
}
exports.RenameConversationTableToStoryCommunicatorConversationTable1677834188559 = RenameConversationTableToStoryCommunicatorConversationTable1677834188559;
//# sourceMappingURL=1677834188559-renameConversationTableToStoryCommunicatorConversationTable.js.map