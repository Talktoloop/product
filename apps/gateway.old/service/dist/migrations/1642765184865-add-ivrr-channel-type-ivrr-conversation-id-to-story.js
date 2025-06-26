"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addIvrrTypeToChannelStoryColumn1642765184865 = void 0;
const typeorm_1 = require("typeorm");
class addIvrrTypeToChannelStoryColumn1642765184865 {
    constructor() {
        this.ivrrTableName = 'ivrr_conversation';
        this.callTableName = 'ivrr_call';
        this.foreignKeyIvrrConversation = 'FKivrrFlowMessageToIvrrConversation';
    }
    async up(queryRunner) {
        await queryRunner.dropColumn(this.ivrrTableName, 's3_audio_story_file_id');
        await queryRunner.dropColumn(this.ivrrTableName, 's3_audio_reply_file_id');
        await queryRunner.dropColumn(this.ivrrTableName, 's3_moderator_reply_file_id');
        await queryRunner.dropColumn(this.ivrrTableName, 'twilio_call_sid');
        await queryRunner.createTable(new typeorm_1.Table({
            name: this.callTableName,
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'twilio_call_sid',
                    type: 'text',
                    isNullable: false,
                },
                {
                    name: 's3_file_id',
                    type: 'text',
                    isNullable: false,
                },
                {
                    name: 'url',
                    type: 'text',
                    isNullable: true,
                },
                {
                    name: 'call_date',
                    type: 'datetime',
                    isNullable: false,
                },
                {
                    name: 'ivrr_conversation_id',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'is_story',
                    type: 'boolean',
                    isNullable: false,
                    default: false,
                },
                {
                    name: 'is_moderator_call',
                    type: 'boolean',
                    isNullable: false,
                    default: false,
                },
                { name: 'user_id', type: 'varchar', length: '36', isNullable: true },
                {
                    name: 'created_at',
                    type: 'datetime',
                    length: '6',
                    isNullable: false,
                    default: 'CURRENT_TIMESTAMP(6)',
                },
            ],
        }));
        await queryRunner.createForeignKey(this.callTableName, new typeorm_1.TableForeignKey({
            columnNames: ['ivrr_conversation_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'ivrr_conversation',
            name: this.foreignKeyIvrrConversation,
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey(this.callTableName, this.foreignKeyIvrrConversation);
        await queryRunner.dropTable(this.callTableName);
        await queryRunner.addColumns(this.ivrrTableName, [
            new typeorm_1.TableColumn({
                name: 's3_audio_story_file_id',
                type: 'text',
                isNullable: false,
            }),
            new typeorm_1.TableColumn({
                name: 's3_audio_reply_file_id',
                type: 'text',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 's3_moderator_reply_file_id',
                type: 'text',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'twilio_call_sid',
                type: 'text',
            }),
        ]);
    }
}
exports.addIvrrTypeToChannelStoryColumn1642765184865 = addIvrrTypeToChannelStoryColumn1642765184865;
//# sourceMappingURL=1642765184865-add-ivrr-channel-type-ivrr-conversation-id-to-story.js.map