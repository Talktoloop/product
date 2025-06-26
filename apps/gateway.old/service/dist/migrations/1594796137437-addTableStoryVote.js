"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTableStoryVote1594796137437 = void 0;
const typeorm_1 = require("typeorm");
class AddTableStoryVote1594796137437 {
    constructor() {
        this.tableName = 'story_vote';
        this.indexStoryName = 'IDX_STORY_VOTE_STORY_ID';
        this.fkStoryName = 'fk_StoryVoteStory';
        this.indexHash = 'IDX_STORY_VOTE_HASH';
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
exports.AddTableStoryVote1594796137437 = AddTableStoryVote1594796137437;
//# sourceMappingURL=1594796137437-addTableStoryVote.js.map