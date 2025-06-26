"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveUserDataFromConversationTableToStoryTable1676552849269 = void 0;
const typeorm_1 = require("typeorm");
class MoveUserDataFromConversationTableToStoryTable1676552849269 {
    constructor() {
        this.table = 'conversation';
        this.column = new typeorm_1.TableColumn({
            name: 'contact_accepted',
            type: 'boolean',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        const conversations = await queryRunner.query(`SELECT c.id, c.contact_accepted, s.recipient_id FROM \`${this.table}\` c JOIN \`message\` m ON c.id = m.conversation_id AND m.story_id IS NOT NULL JOIN \`story\` s ON m.story_id = s.id WHERE c.contact_accepted IS NOT NULL`);
        for (const conversation of conversations) {
            await queryRunner.query(`UPDATE \`story_recipient\` SET \`user_want_contact\` = ? WHERE id = ?`, [conversation.contact_accepted, conversation.recipient_id]);
        }
        await queryRunner.query(`ALTER TABLE \`${this.table}\` DROP COLUMN contact_accepted`);
    }
    async down(queryRunner) {
        await queryRunner.addColumn(this.table, this.column);
        const data = await queryRunner.query(`SELECT sr.user_want_contact, s.conversation_id FROM \`story_recipient\` sr JOIN \`story\` s ON sr.id = s.recipient_id WHERE s.channel = 'sms'`);
        for (const item of data) {
            await queryRunner.query(`UPDATE \`${this.table}\` SET \`contact_accepted\` = ? WHERE id = ?`, [item.user_want_contact, item.conversation_id]);
        }
    }
}
exports.MoveUserDataFromConversationTableToStoryTable1676552849269 = MoveUserDataFromConversationTableToStoryTable1676552849269;
//# sourceMappingURL=1676552849269-moveUserDataFromConversationTableToStoryTable.js.map