"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserIdToStoryVote1600237632715 = void 0;
const typeorm_1 = require("typeorm");
class AddUserIdToStoryVote1600237632715 {
    constructor() {
        this.tableName = 'story_vote';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'user_id',
            type: 'varchar',
            length: '36',
            isNullable: true,
        });
        this.indexUserName = 'IDX_STORY_VOTE_USER_ID';
        this.fkUserName = 'fk_StoryVoteUser';
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
exports.AddUserIdToStoryVote1600237632715 = AddUserIdToStoryVote1600237632715;
//# sourceMappingURL=1600237632715-addUserIdToStoryVote.js.map