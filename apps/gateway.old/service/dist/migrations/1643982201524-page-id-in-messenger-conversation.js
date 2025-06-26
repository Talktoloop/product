"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageIdInMessengerConversation1643982201524 = void 0;
const typeorm_1 = require("typeorm");
class pageIdInMessengerConversation1643982201524 {
    constructor() {
        this.name = 'pageIdInMessengerConversation1643982201524';
        this.tableName = 'messenger_conversation';
        this.column = new typeorm_1.TableColumn({
            name: 'page_id',
            type: 'varchar',
            isNullable: true,
        });
        this.notNullColumn = new typeorm_1.TableColumn({
            name: 'page_id',
            type: 'varchar',
            isNullable: false,
        });
        this.prodWaPageId = '+260976256521';
        this.prodFbPageId = '105269598511751';
        this.devWaPageId = '+14155238886';
        this.devFbPageId = '2049287381976538';
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.column);
        const conversations = await queryRunner.query(`select mc.id, mc.story_id, channel from messenger_conversation mc 
INNER JOIN story s ON mc.story_id = s.id`);
        const pageId = this.prodFbPageId;
        const waId = this.prodWaPageId;
        for (const conversation of conversations) {
            const newPageId = conversation.channel === 'whatsapp' ? waId : pageId;
            await queryRunner.query(`UPDATE messenger_conversation SET page_id="${newPageId}" where id="${conversation.id}" `);
        }
        await queryRunner.changeColumn(this.tableName, this.column, this.notNullColumn);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.column);
    }
}
exports.pageIdInMessengerConversation1643982201524 = pageIdInMessengerConversation1643982201524;
//# sourceMappingURL=1643982201524-page-id-in-messenger-conversation.js.map