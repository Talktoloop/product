"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceContanctNeededWithContactAcceptedInConversationTable1620368478843 = void 0;
class replaceContanctNeededWithContactAcceptedInConversationTable1620368478843 {
    constructor() {
        this.tableName = 'conversation';
        this.oldColumnName = 'contact_needed';
        this.newColumnName = 'contact_accepted';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` RENAME COLUMN ${this.oldColumnName} TO ${this.newColumnName};`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` RENAME COLUMN ${this.newColumnName} TO ${this.oldColumnName};`);
    }
}
exports.replaceContanctNeededWithContactAcceptedInConversationTable1620368478843 = replaceContanctNeededWithContactAcceptedInConversationTable1620368478843;
//# sourceMappingURL=1620368478843-replaceContanctNeededWithContactAcceptedInConversationTable.js.map