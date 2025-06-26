"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messengerConversationTable1634580022213 = void 0;
const typeorm_1 = require("typeorm");
class messengerConversationTable1634580022213 {
    constructor() {
        this.tableName = 'messenger_conversation';
        this.foreignKeyLanguageId = 'FKmessengerConversationToLanguage';
        this.foreignKeyCountryId = 'FKmessengerConversationToCountry';
        this.foreignKeyStoryId = 'FKmessengerConversationToStory';
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
                    name: 'story_uuid',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'sender_id',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'user_first_name',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'user_last_name',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'oryginal_story',
                    type: 'text',
                    isNullable: false,
                },
                {
                    name: 'additional_info',
                    type: 'text',
                    isNullable: true,
                },
                {
                    name: 'country_code',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'share_user_info',
                    type: 'boolean',
                    isNullable: false,
                    default: false,
                },
                {
                    name: 'language_id',
                    type: 'smallint',
                    isNullable: true,
                    length: '2',
                },
                {
                    name: 'country_id',
                    type: 'smallint',
                    isNullable: true,
                },
                {
                    name: 'story_id',
                    type: 'varchar',
                    length: '36',
                    isNullable: true,
                },
                {
                    name: 'story_type',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'gender',
                    type: 'smallint',
                    isNullable: true,
                },
                {
                    name: 'started_at',
                    type: 'datetime',
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
            columnNames: ['language_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'language',
            name: this.foreignKeyLanguageId,
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['country_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'country',
            name: this.foreignKeyCountryId,
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
        await queryRunner.dropForeignKey(this.tableName, this.foreignKeyCountryId);
        await queryRunner.dropForeignKey(this.tableName, this.foreignKeyStoryId);
        await queryRunner.dropTable(this.tableName);
    }
}
exports.messengerConversationTable1634580022213 = messengerConversationTable1634580022213;
//# sourceMappingURL=1634580022213-messenger-conversation-table.js.map