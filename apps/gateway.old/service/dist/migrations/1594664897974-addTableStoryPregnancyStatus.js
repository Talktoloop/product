"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTablePregnantStory1594664897974 = void 0;
const typeorm_1 = require("typeorm");
class AddTablePregnantStory1594664897974 {
    constructor() {
        this.tableName = 'story_pregnancy_status';
        this.indexPregnancyStatusName = 'IDX_STORY_PREGNANCY_STATUS_PREGNANCY_STATUS_ID';
        this.fkPregnancyStatusName = 'fk_StoryPregnancyStatusToStory';
        this.indexStoryName = 'IDX_STORY_PREGNANCY_STATUS_STORY_ID';
        this.fkStoryName = 'fk_StoryPregnancyStatusToStory';
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
                    name: 'pregnancy_status_id',
                    type: 'int',
                    isNullable: false,
                },
            ],
        }), true);
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.indexStoryName,
            columnNames: ['story_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['story_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'story',
            name: this.fkStoryName,
            onDelete: 'CASCADE',
        }));
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.fkPregnancyStatusName,
            columnNames: ['pregnancy_status_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['pregnancy_status_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'pregnancy_status',
            name: this.indexPregnancyStatusName,
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.tableName);
    }
}
exports.AddTablePregnantStory1594664897974 = AddTablePregnantStory1594664897974;
//# sourceMappingURL=1594664897974-addTableStoryPregnancyStatus.js.map