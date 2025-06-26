"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messengerConversation1634580022214 = void 0;
const typeorm_1 = require("typeorm");
class messengerConversation1634580022214 {
    constructor() {
        this.tableName = 'story';
        this.foreignKey = 'fk_StoryToMessengerConversationId';
        this.messengerConversationColumn = new typeorm_1.TableColumn({
            name: 'messenger_conversation_id',
            type: 'int',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.messengerConversationColumn);
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['messenger_conversation_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'messenger_conversation',
            name: this.foreignKey,
            onDelete: 'SET NULL',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.messengerConversationColumn);
    }
}
exports.messengerConversation1634580022214 = messengerConversation1634580022214;
//# sourceMappingURL=1634580022214-messenger-conversation.js.map