"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddStoryRejectReasonTable1634327735664 = void 0;
const typeorm_1 = require("typeorm");
class AddStoryRejectReasonTable1634327735664 {
    constructor() {
        this.tableName = 'story_reject_reason';
        this.foreignKeyStoryId = 'FK_storyRejectReasonToStory';
        this.foreignKeyRejectReasonId = 'FK_storyRejectReasonToRejectReason';
        this.rejectReasonIdIndex = 'IDX_STORY_REJECT_REASON_ID';
        this.storyIdIndex = 'IDX_STORY_REJECT_REASON_STORY_ID';
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
                    name: 'story_id',
                    type: 'varchar',
                    length: '36',
                    isNullable: false,
                },
                {
                    name: 'reject_reason_id',
                    type: 'int',
                    isNullable: true,
                },
                {
                    name: 'reject_reason_text',
                    type: 'text',
                    isNullable: true,
                },
            ],
        }));
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.rejectReasonIdIndex,
            columnNames: ['reject_reason_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['reject_reason_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'reject_reason',
            name: this.foreignKeyRejectReasonId,
            onDelete: 'CASCADE',
        }));
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.storyIdIndex,
            columnNames: ['story_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['story_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'story',
            name: this.foreignKeyStoryId,
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.tableName);
    }
}
exports.AddStoryRejectReasonTable1634327735664 = AddStoryRejectReasonTable1634327735664;
//# sourceMappingURL=1634327735664-addStoryRejectReasonTable.js.map