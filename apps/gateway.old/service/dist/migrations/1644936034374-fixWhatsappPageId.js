"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixWhatsappPageId1644936034374 = void 0;
class fixWhatsappPageId1644936034374 {
    constructor() {
        this.name = 'fixWhatsappPageId1644936034374';
        this.tableName = 'messenger_conversation';
    }
    async up(queryRunner) {
        const conversations = await queryRunner.query(`select mc.id, mc.story_id, channel, page_id  from messenger_conversation mc 
INNER JOIN story s ON mc.story_id = s.id where s.channel = 'whatsapp'`);
        for (const conversation of conversations) {
            const newPageId = conversation.page_id.includes('whatsapp:')
                ? conversation.page_id
                : `whatsapp:${conversation.page_id}`;
            await queryRunner.query(`UPDATE messenger_conversation SET page_id="${newPageId}" where id="${conversation.id}" `);
        }
    }
    async down(queryRunner) {
        const conversations = await queryRunner.query(`select mc.id, mc.story_id, channel, page_id  from messenger_conversation mc 
INNER JOIN story s ON mc.story_id = s.id where s.channel = 'whatsapp'`);
        for (const conversation of conversations) {
            const newPageId = conversation.page_id.replace('whatsapp:', '');
            await queryRunner.query(`UPDATE messenger_conversation SET page_id="${newPageId}" where id="${conversation.id}" `);
        }
    }
}
exports.fixWhatsappPageId1644936034374 = fixWhatsappPageId1644936034374;
//# sourceMappingURL=1644936034374-fixWhatsappPageId.js.map