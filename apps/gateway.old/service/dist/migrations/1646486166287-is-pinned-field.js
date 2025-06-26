"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPinnedField1646486166287 = void 0;
const typeorm_1 = require("typeorm");
class isPinnedField1646486166287 {
    constructor() {
        this.name = 'isPinnedField1646486166287';
        this.messangerTableName = 'messenger_message';
        this.smsTableName = 'message';
        this.conversationTableName = 'conversation';
        this.isPinnedColumn = new typeorm_1.TableColumn({
            name: 'is_pinned',
            type: 'boolean',
            isNullable: false,
            default: false,
        });
        this.originalStoryConversationColumn = new typeorm_1.TableColumn({
            type: 'text',
            name: 'oryginal_story',
        });
        this.nullableOriginalStoryConversationColumn = new typeorm_1.TableColumn({
            type: 'text',
            name: 'oryginal_story',
            isNullable: false,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.messangerTableName, this.isPinnedColumn);
        await queryRunner.addColumn(this.smsTableName, this.isPinnedColumn);
        await queryRunner.addColumn(this.conversationTableName, this.nullableOriginalStoryConversationColumn);
        const conversationsWithContents = await queryRunner.query(`select c.id, m.content from conversation c INNER JOIN message m ON c.id = m.conversation_id where m.story_id is not null`);
        for (const conversation of conversationsWithContents) {
            await queryRunner.query(`UPDATE conversation SET oryginal_story=? where id=?`, [conversation.content, conversation.id]);
        }
        await queryRunner.changeColumn(this.conversationTableName, this.nullableOriginalStoryConversationColumn, this.originalStoryConversationColumn);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.messangerTableName, this.isPinnedColumn);
        await queryRunner.dropColumn(this.smsTableName, this.isPinnedColumn);
        await queryRunner.dropColumn(this.conversationTableName, this.originalStoryConversationColumn);
    }
}
exports.isPinnedField1646486166287 = isPinnedField1646486166287;
//# sourceMappingURL=1646486166287-is-pinned-field.js.map