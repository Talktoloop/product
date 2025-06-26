"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addIvrrTypeToChannelStoryColumn1642765184323 = void 0;
const typeorm_1 = require("typeorm");
class addIvrrTypeToChannelStoryColumn1642765184323 {
    constructor() {
        this.tableName = 'story';
        this.oldChannelColumn = new typeorm_1.TableColumn({
            name: 'channel',
            type: 'enum',
            enum: ['sms', 'web', 'whatsapp', 'messenger'],
            enumName: 'channelEnum',
            default: '"web"',
        });
        this.newChannelColumn = new typeorm_1.TableColumn({
            name: 'channel',
            type: 'enum',
            enum: ['sms', 'web', 'whatsapp', 'messenger', 'ivrr'],
            enumName: 'channelEnum',
            default: '"web"',
        });
        this.foreignKey = 'fk_StoryToIvrrConversationId';
        this.ivrrConversationColumn = new typeorm_1.TableColumn({
            name: 'ivrr_conversation_id',
            type: 'int',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.changeColumn(this.tableName, 'channel', this.newChannelColumn);
        await queryRunner.addColumn(this.tableName, this.ivrrConversationColumn);
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['ivrr_conversation_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'ivrr_conversation',
            name: this.foreignKey,
            onDelete: 'SET NULL',
        }));
    }
    async down(queryRunner) {
        await queryRunner.changeColumn(this.tableName, 'channel', this.oldChannelColumn);
        await queryRunner.dropColumn(this.tableName, this.ivrrConversationColumn);
    }
}
exports.addIvrrTypeToChannelStoryColumn1642765184323 = addIvrrTypeToChannelStoryColumn1642765184323;
//# sourceMappingURL=1642765184323-add-ivrr-channel-type-ivrr-conversation-id-to-story.js.map