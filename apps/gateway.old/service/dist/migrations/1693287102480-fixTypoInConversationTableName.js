"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixTypoInConversationTableName1693287102480 = void 0;
class FixTypoInConversationTableName1693287102480 {
    constructor() {
        this.oldTableName = 'story_communicator_conservation';
        this.newTableName = 'story_communicator_conversation';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.oldTableName} RENAME ${this.newTableName}`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.newTableName} RENAME ${this.oldTableName}`);
    }
}
exports.FixTypoInConversationTableName1693287102480 = FixTypoInConversationTableName1693287102480;
//# sourceMappingURL=1693287102480-fixTypoInConversationTableName.js.map