"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneColumnWithConversationIdInStoryTable1677769124265 = void 0;
const typeorm_1 = require("typeorm");
class OneColumnWithConversationIdInStoryTable1677769124265 {
    constructor() {
        this.table = 'story';
        this.foreignKeyStoryToIvrrConversation = 'fk_IvrrStoryToConversationId';
        this.foreignKeyStoryToMessengerConversation = 'FKstoryToConversation';
    }
    async up(queryRunner) {
        await queryRunner.dropForeignKey(this.table, this.foreignKeyStoryToIvrrConversation);
        await queryRunner.dropForeignKey(this.table, this.foreignKeyStoryToMessengerConversation);
        await queryRunner.query(`UPDATE \`${this.table}\` SET conversation_id = messenger_conversation_id WHERE messenger_conversation_id IS NOT NULL`);
        await queryRunner.query(`UPDATE \`${this.table}\` SET conversation_id = ivrr_conversation_id WHERE ivrr_conversation_id IS NOT NULL`);
        await queryRunner.query(`
        ALTER TABLE \`${this.table}\` 
        DROP COLUMN messenger_conversation_id, 
        DROP COLUMN ivrr_conversation_id
    `);
    }
    async down(queryRunner) {
        await queryRunner.addColumn(this.table, new typeorm_1.TableColumn({
            name: 'messenger_conversation_id',
            type: 'int',
            isNullable: true,
        }));
        await queryRunner.addColumn('story', new typeorm_1.TableColumn({
            name: 'ivrr_conversation_id',
            type: 'int',
            isNullable: true,
        }));
        await queryRunner.query(`UPDATE \`${this.table}\` SET messenger_conversation_id = conversation_id WHERE channel IN ('whatsapp','messenger','telegram')`);
        await queryRunner.query(`UPDATE \`${this.table}\` SET conversation_id = NULL WHERE messenger_conversation_id IS NOT NULL`);
        await queryRunner.query(`UPDATE \`${this.table}\` SET ivrr_conversation_id = conversation_id WHERE channel = 'ivrr'`);
        await queryRunner.query(`UPDATE \`${this.table}\` SET conversation_id = NULL WHERE ivrr_conversation_id IS NOT NULL`);
        await queryRunner.createForeignKey(this.table, new typeorm_1.TableForeignKey({
            columnNames: ['ivrr_conversation_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'conversation',
            name: this.foreignKeyStoryToIvrrConversation,
            onDelete: 'SET NULL',
        }));
        await queryRunner.createForeignKey(this.table, new typeorm_1.TableForeignKey({
            columnNames: ['messenger_conversation_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'conversation',
            name: this.foreignKeyStoryToMessengerConversation,
            onDelete: 'SET NULL',
        }));
    }
}
exports.OneColumnWithConversationIdInStoryTable1677769124265 = OneColumnWithConversationIdInStoryTable1677769124265;
//# sourceMappingURL=1677769124265-oneColumnWithConversationIdInStoryTable.js.map