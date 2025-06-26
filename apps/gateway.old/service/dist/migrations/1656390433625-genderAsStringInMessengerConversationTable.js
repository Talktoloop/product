"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenderAsStringInMessengerConversationTable1656390433625 = void 0;
class GenderAsStringInMessengerConversationTable1656390433625 {
    constructor() {
        this.tableName = 'messenger_conversation';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` modify COLUMN \`gender\` varchar(500);`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` modify COLUMN \`gender\` smallint;`);
    }
}
exports.GenderAsStringInMessengerConversationTable1656390433625 = GenderAsStringInMessengerConversationTable1656390433625;
//# sourceMappingURL=1656390433625-genderAsStringInMessengerConversationTable.js.map