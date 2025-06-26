"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ivrrConversationEntity1642534272198 = void 0;
const typeorm_1 = require("typeorm");
class ivrrConversationEntity1642534272198 {
    constructor() {
        this.tableName = 'ivrr_conversation';
        this.foreignKeyLanguageId = 'FKivrrConversationToLanguage';
        this.foreignKeyStoryId = 'FKivrrConversationToStory';
    }
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: this.tableName,
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'story_uuid',
                    type: 'varchar',
                },
                {
                    name: 'twilio_call_sid',
                    type: 'varchar',
                },
                {
                    name: 'sender_id',
                    type: 'varchar',
                },
                {
                    name: 'language_id',
                    type: 'smallint',
                    isNullable: true,
                    length: '2',
                },
                {
                    name: 'short_code_number',
                    type: 'varchar',
                },
                {
                    name: 'story_id',
                    type: 'varchar',
                    length: '36',
                    isNullable: true,
                },
                {
                    name: 'started_at',
                    type: 'datetime',
                },
                {
                    name: 's3_audio_story_file_id',
                    type: 'varchar',
                },
                {
                    name: 's3_audio_reply_file_id',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 's3_moderator_reply_file_id',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'story_type',
                    type: 'varchar',
                    isNullable: true,
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
            columnNames: ['language_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'language',
            name: this.foreignKeyLanguageId,
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['story_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'story',
            name: this.foreignKeyStoryId,
            onDelete: 'SET NULL',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey(this.tableName, this.foreignKeyLanguageId);
        await queryRunner.dropForeignKey(this.tableName, this.foreignKeyStoryId);
        await queryRunner.dropTable(this.tableName);
    }
}
exports.ivrrConversationEntity1642534272198 = ivrrConversationEntity1642534272198;
//# sourceMappingURL=1642534272198-ivrr-conversation-entity.js.map