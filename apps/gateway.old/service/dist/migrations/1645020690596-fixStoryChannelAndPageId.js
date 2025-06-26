"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixStoryChannelAndPageId1645020690596 = void 0;
const channel_constant_1 = require("../common/constant/channel.constant");
class FixStoryChannelAndPageId1645020690596 {
    constructor() {
        this.storyTableName = 'story';
        this.conversationTableName = 'messenger_conversation';
    }
    async up(queryRunner) {
        const whatsAppPageId = '+260976256521';
        const FbPageId = '105269598511751';
        await queryRunner.query(`UPDATE \`${this.storyTableName}\` s
        JOIN \`${this.conversationTableName}\` c ON s.messenger_conversation_id = c.id
        SET s.channel = ?, c.page_id = ? WHERE c.sender_id LIKE 'whatsapp%'`, [channel_constant_1.CHANNEL_CONSTANTS.WHATSAPP, whatsAppPageId]);
        await queryRunner.query(`UPDATE \`${this.storyTableName}\` s
          JOIN \`${this.conversationTableName}\` c ON s.messenger_conversation_id = c.id
          SET s.channel = ?, c.page_id = ? WHERE c.sender_id NOT LIKE 'whatsapp%'`, [channel_constant_1.CHANNEL_CONSTANTS.MESSENGER, FbPageId]);
    }
    async down() {
    }
}
exports.FixStoryChannelAndPageId1645020690596 = FixStoryChannelAndPageId1645020690596;
//# sourceMappingURL=1645020690596-fixStoryChannelAndPageId.js.map