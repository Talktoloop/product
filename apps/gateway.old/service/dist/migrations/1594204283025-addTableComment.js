"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTableComment1594204283025 = void 0;
const typeorm_1 = require("typeorm");
class AddTableComment1594204283025 {
    constructor() {
        this.tableName = 'comment';
        this.indexCommentName = 'IDX_COMMENT_PARENT_COMMIT_ID';
        this.fkCommentName = 'fk_CommentToComment';
        this.indexStoryName = 'IDX_COMMENT_STORY_ID';
        this.fkStorytName = 'fk_CommentToStory';
    }
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: this.tableName,
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    length: '36',
                    isPrimary: true,
                },
                {
                    name: 'comment',
                    type: 'text',
                    isNullable: false,
                },
                {
                    name: 'parent_comment_id',
                    type: 'varchar',
                    length: '36',
                    isNullable: true,
                },
                {
                    name: 'story_id',
                    type: 'varchar',
                    length: '36',
                    isNullable: false,
                },
                {
                    name: 'email',
                    type: 'varchar',
                    length: '100',
                    isNullable: true,
                },
                {
                    name: 'created_at',
                    type: 'datetime',
                    length: '6',
                    isNullable: false,
                    default: 'CURRENT_TIMESTAMP(6)',
                },
                {
                    name: 'published_at',
                    type: 'datetime',
                    length: '6',
                    isNullable: true,
                },
            ],
        }), true);
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.fkStorytName,
            columnNames: ['story_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['story_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'story',
            name: this.indexStoryName,
            onDelete: 'CASCADE',
        }));
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.fkCommentName,
            columnNames: ['parent_comment_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['parent_comment_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'comment',
            name: this.indexCommentName,
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.tableName);
    }
}
exports.AddTableComment1594204283025 = AddTableComment1594204283025;
//# sourceMappingURL=1594204283025-addTableComment.js.map