"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTableStoryView1594796115746 = void 0;
const typeorm_1 = require("typeorm");
class AddTableStoryView1594796115746 {
    constructor() {
        this.tableName = 'story_view';
        this.indexStoryName = 'IDX_STORY_VIEW_STORY_ID';
        this.fkStoryName = 'fk_StoryViewStory';
        this.indexHash = 'IDX_STORY_VIEW_HASH';
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
                    name: 'hash',
                    type: 'varchar',
                    length: '60',
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
            name: this.indexHash,
            columnNames: ['hash'],
        }));
    }
    async down(queryRunner) {
        queryRunner.dropTable(this.tableName);
    }
}
exports.AddTableStoryView1594796115746 = AddTableStoryView1594796115746;
//# sourceMappingURL=1594796115746-addTableStoryView.js.map