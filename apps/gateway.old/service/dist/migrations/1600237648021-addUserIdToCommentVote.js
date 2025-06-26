"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserIdToCommentVote1600237648021 = void 0;
const typeorm_1 = require("typeorm");
class AddUserIdToCommentVote1600237648021 {
    constructor() {
        this.tableName = 'comment_vote';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'user_id',
            type: 'varchar',
            length: '36',
            isNullable: true,
        });
        this.indexUserName = 'IDX_COMMENT_VOTE_USER_ID';
        this.fkUserName = 'fk_CommentVoteUser';
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.indexUserName,
            columnNames: ['user_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user',
            name: this.fkUserName,
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddUserIdToCommentVote1600237648021 = AddUserIdToCommentVote1600237648021;
//# sourceMappingURL=1600237648021-addUserIdToCommentVote.js.map