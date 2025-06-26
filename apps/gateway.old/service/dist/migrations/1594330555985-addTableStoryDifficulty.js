"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTableStoryDifficulty1594330555985 = void 0;
const typeorm_1 = require("typeorm");
class AddTableStoryDifficulty1594330555985 {
    constructor() {
        this.tableName = 'story_difficulty';
        this.indexDifficultyName = 'IDX_STORY_Difficulty_DIFFICULTY_ID';
        this.fkDifficultyName = 'fk_StoryDifficultyToDifficulty';
        this.indexStoryName = 'IDX_STORY_DIFFICULTY_STORY_ID';
        this.fkStoryName = 'fk_StoryDifficultyToStory';
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
                    name: 'difficulty_id',
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
            name: this.fkDifficultyName,
            columnNames: ['difficulty_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['difficulty_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'difficulty',
            name: this.indexDifficultyName,
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.tableName);
    }
}
exports.AddTableStoryDifficulty1594330555985 = AddTableStoryDifficulty1594330555985;
//# sourceMappingURL=1594330555985-addTableStoryDifficulty.js.map