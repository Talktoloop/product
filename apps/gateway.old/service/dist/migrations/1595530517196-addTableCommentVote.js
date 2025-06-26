"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTableCommentVote1595530517196 = void 0;
const typeorm_1 = require("typeorm");
class AddTableCommentVote1595530517196 {
    constructor() {
        this.tableName = 'comment_vote';
        this.indexCommentName = 'IDX_COMMENT_VOTE_COMMENT_ID';
        this.fkCommentName = 'fk_CommentVoteComment';
        this.indexHash = 'IDX_COMMENT_VOTE_HASH';
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
                    name: 'comment_id',
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
            name: this.indexCommentName,
            columnNames: ['comment_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['comment_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'comment',
            name: this.fkCommentName,
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
exports.AddTableCommentVote1595530517196 = AddTableCommentVote1595530517196;
//# sourceMappingURL=1595530517196-addTableCommentVote.js.map