"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveUserDataFromIvrrConversationTableToStoryRecipientTable1676540038147 = void 0;
const typeorm_1 = require("typeorm");
class MoveUserDataFromIvrrConversationTableToStoryRecipientTable1676540038147 {
    constructor() {
        this.table = 'ivrr_conversation';
        this.column = new typeorm_1.TableColumn({
            name: 'sender_id',
            type: 'varchar',
            length: '20',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        const data = await queryRunner.query(`SELECT ic.sender_id, sr.id FROM \`${this.table}\` ic JOIN \`story\` s ON ic.story_id = s.id JOIN \`story_recipient\` sr ON s.recipient_id = sr.id`);
        for (const item of data) {
            await queryRunner.query(`UPDATE \`story_recipient\` SET \`phone\` = ? WHERE id = ? and phone is null`, [item.sender_id, item.id]);
        }
        await queryRunner.query(`ALTER TABLE \`${this.table}\` DROP COLUMN sender_id`);
    }
    async down(queryRunner) {
        await queryRunner.addColumn(this.table, this.column);
        const data = await queryRunner.query(`SELECT sr.phone, s.id FROM \`story_recipient\` sr JOIN \`story\` s ON sr.id = s.recipient_id WHERE s.channel = 'ivrr'`);
        for (const item of data) {
            await queryRunner.query(`UPDATE \`${this.table}\` SET \`sender_id\` = ? WHERE story_id = ?`, [item.phone, item.id]);
        }
    }
}
exports.MoveUserDataFromIvrrConversationTableToStoryRecipientTable1676540038147 = MoveUserDataFromIvrrConversationTableToStoryRecipientTable1676540038147;
//# sourceMappingURL=1676540038147-moveUserDataFromIvrrConversationTableToStoryRecipientTable.js.map