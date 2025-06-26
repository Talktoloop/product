"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableStoryCommentThematic1732107416427 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableStoryCommentThematic1732107416427 {
    constructor() {
        this.tableName = 'story_comment_thematic';
        this.indexThematicName = 'IDX_STORY_COMMENT_THEMATIC_THEMATIC_ID';
        this.fkThematicName = 'fk_StoryCommentThematicTothematic';
        this.indexStoryCommentName = 'IDX_STORY_COMMENT_THEMATIC_STORY_COMMENT_ID';
        this.fkStoryCommentName = 'fk_StoryCommentThematicToStoryComment';
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
                    name: 'story_comment_id',
                    type: 'varchar',
                    length: '36',
                    isNullable: false,
                },
                {
                    name: 'thematic_id',
                    type: 'int',
                    isNullable: false,
                },
            ],
        }), true);
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.indexThematicName,
            columnNames: ['thematic_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['thematic_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'thematic',
            name: this.fkThematicName,
            onDelete: 'CASCADE',
        }));
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.indexStoryCommentName,
            columnNames: ['story_comment_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['story_comment_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'story_comment',
            name: this.fkStoryCommentName,
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.tableName);
    }
}
exports.CreateTableStoryCommentThematic1732107416427 = CreateTableStoryCommentThematic1732107416427;
//# sourceMappingURL=1732107416427-createTableStoryCommentThematic.js.map