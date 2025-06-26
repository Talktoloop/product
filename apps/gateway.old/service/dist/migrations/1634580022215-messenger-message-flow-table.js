"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messengerFlowMessageTable1634580022215 = void 0;
const typeorm_1 = require("typeorm");
class messengerFlowMessageTable1634580022215 {
    constructor() {
        this.tableName = 'messenger_message';
        this.foreignKeyMessengerConversation = 'FKmessengerFlowMessageToMessengerConversation';
    }
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: this.tableName,
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'content',
                    type: 'text',
                    isNullable: false,
                },
                {
                    name: 'type',
                    type: 'tinyint',
                    isNullable: false,
                },
                {
                    name: 'message_created_at',
                    type: 'datetime',
                    isNullable: false,
                },
                {
                    name: 'messenger_conversation_id',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'created_at',
                    type: 'datetime',
                    length: '6',
                    isNullable: false,
                    default: 'CURRENT_TIMESTAMP(6)',
                },
            ],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['messenger_conversation_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'messenger_conversation',
            name: this.foreignKeyMessengerConversation,
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey(this.tableName, this.foreignKeyMessengerConversation);
        await queryRunner.dropTable(this.tableName);
    }
}
exports.messengerFlowMessageTable1634580022215 = messengerFlowMessageTable1634580022215;
//# sourceMappingURL=1634580022215-messenger-message-flow-table.js.map