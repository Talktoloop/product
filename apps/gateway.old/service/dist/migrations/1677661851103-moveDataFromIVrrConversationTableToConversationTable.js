"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveDataFromIVrrConversationTableToConversationTable1677661851103 = void 0;
const typeorm_1 = require("typeorm");
class MoveDataFromIVrrConversationTableToConversationTable1677661851103 {
    constructor() {
        this.table = 'conversation';
        this.columns = [
            new typeorm_1.TableColumn({
                name: 'uuid',
                type: 'varchar',
                length: '36',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'started_at',
                type: 'datetime',
                isNullable: true,
            }),
        ];
        this.foreignKeyMessageToIvrrConversation = 'FKivrrFlowMessageToIvrrConversation';
        this.foreignKeyMessageToConversation = 'FKivrrFlowMessageToConversation';
        this.foreignKeyStoryToIvrrConversation = 'fk_StoryToIvrrConversationId';
        this.foreignKeyConversationToStory = 'FKconversationToStory';
        this.foreignKeyStoryToConversation = 'fk_IvrrStoryToConversationId';
    }
    async up(queryRunner) {
        await queryRunner.addColumns(this.table, this.columns);
        await queryRunner.dropForeignKey('ivrr_call', this.foreignKeyMessageToIvrrConversation);
        await queryRunner.dropForeignKey('story', this.foreignKeyStoryToIvrrConversation);
        await queryRunner.dropForeignKey(this.table, this.foreignKeyConversationToStory);
        await queryRunner.renameColumn('ivrr_call', 'ivrr_conversation_id', 'ivrr_conversation_id_tmp');
        await queryRunner.addColumn('ivrr_call', new typeorm_1.TableColumn({
            name: 'conversation_id',
            type: 'int',
            isNullable: true,
        }));
        await queryRunner.renameColumn('story', 'ivrr_conversation_id', 'ivrr_conversation_id_tmp');
        await queryRunner.addColumn('story', new typeorm_1.TableColumn({
            name: 'ivrr_conversation_id',
            type: 'int',
            isNullable: true,
        }));
        const data = await queryRunner.query(`SELECT c.id, c.story_uuid, c.language_id, c.short_code_number, s.id story_id, c.started_at FROM \`ivrr_conversation\` c LEFT JOIN \`story\` s ON c.id = s.ivrr_conversation_id_tmp`);
        for (const item of data) {
            const result = await queryRunner.query(`INSERT INTO \`conversation\` (\`uuid\`, \`language_id\`, \`service_number\`, \`story_id\`, \`started_at\`) VALUES (?, ?, ?, ?, ?)`, [
                item.story_uuid,
                item.language_id !== 0 ? item.language_id : null,
                item.short_code_number,
                item.story_id ? item.story_id : null,
                item.started_at,
            ]);
            await queryRunner.query(`UPDATE \`ivrr_call\` SET \`conversation_id\` = ? WHERE ivrr_conversation_id_tmp = ?`, [result.insertId, item.id]);
            await queryRunner.query(`UPDATE \`story\` SET \`ivrr_conversation_id\` = ? WHERE ivrr_conversation_id_tmp = ?`, [result.insertId, item.id]);
        }
        for (const table of ['ivrr_call', 'story']) {
            await queryRunner.query(`ALTER TABLE \`${table}\` DROP COLUMN ivrr_conversation_id_tmp`);
        }
        await queryRunner.dropTable('ivrr_conversation');
        await queryRunner.createForeignKey('ivrr_call', new typeorm_1.TableForeignKey({
            columnNames: ['conversation_id'],
            referencedColumnNames: ['id'],
            referencedTableName: this.table,
            name: this.foreignKeyMessageToConversation,
        }));
        await queryRunner.createForeignKey('story', new typeorm_1.TableForeignKey({
            columnNames: ['ivrr_conversation_id'],
            referencedColumnNames: ['id'],
            referencedTableName: this.table,
            name: this.foreignKeyStoryToConversation,
            onDelete: 'SET NULL',
        }));
        await queryRunner.createForeignKey('conversation', new typeorm_1.TableForeignKey({
            columnNames: ['story_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'story',
            name: this.foreignKeyConversationToStory,
            onDelete: 'SET NULL',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('ivrr_call', this.foreignKeyMessageToConversation);
        await queryRunner.dropForeignKey('story', this.foreignKeyStoryToConversation);
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'ivrr_conversation',
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
        await queryRunner.addColumn('ivrr_call', new typeorm_1.TableColumn({
            name: 'ivrr_conversation_id',
            type: 'int',
            isNullable: true,
        }));
        await queryRunner.renameColumn('story', 'ivrr_conversation_id', 'ivrr_conversation_id_tmp');
        await queryRunner.addColumn('story', new typeorm_1.TableColumn({
            name: 'ivrr_conversation_id',
            type: 'int',
            isNullable: true,
        }));
        const data = await queryRunner.query(`SELECT cn.id, cn.uuid, cn.language_id, cn.service_number, cn.story_id, cn.started_at FROM \`${this.table}\` cn JOIN  \`ivrr_call\` cl ON cn.id = cl.conversation_id GROUP BY cl.conversation_id`);
        for (const item of data) {
            const result = await queryRunner.query(`INSERT INTO \`ivrr_conversation\` (\`story_uuid\`, \`language_id\`, \`short_code_number\`, \`story_id\`, \`started_at\`) VALUES (?, ?, ?, ?, ?)`, [
                item.uuid,
                item.language_id,
                item.service_number,
                item.story_id,
                item.started_at,
            ]);
            await queryRunner.query(`UPDATE \`ivrr_call\` SET \`ivrr_conversation_id\` = ? WHERE conversation_id = ?`, [result.insertId, item.id]);
            await queryRunner.query(`UPDATE \`story\` SET \`ivrr_conversation_id\` = ? WHERE ivrr_conversation_id_tmp = ?`, [result.insertId, item.id]);
            await queryRunner.query(`DELETE FROM \`${this.table}\` WHERE \`id\` = ?`, [item.id]);
        }
        await queryRunner.dropColumns(this.table, this.columns);
        await queryRunner.query(`ALTER TABLE \`ivrr_call\` DROP COLUMN conversation_id`);
        await queryRunner.query(`ALTER TABLE \`story\` DROP COLUMN ivrr_conversation_id_tmp`);
        await queryRunner.createForeignKey('ivrr_call', new typeorm_1.TableForeignKey({
            columnNames: ['ivrr_conversation_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'ivrr_conversation',
            name: this.foreignKeyMessageToIvrrConversation,
        }));
        await queryRunner.createForeignKey('story', new typeorm_1.TableForeignKey({
            columnNames: ['ivrr_conversation_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'ivrr_conversation',
            name: this.foreignKeyStoryToIvrrConversation,
            onDelete: 'SET NULL',
        }));
    }
}
exports.MoveDataFromIVrrConversationTableToConversationTable1677661851103 = MoveDataFromIVrrConversationTableToConversationTable1677661851103;
//# sourceMappingURL=1677661851103-moveDataFromIVrrConversationTableToConversationTable.js.map