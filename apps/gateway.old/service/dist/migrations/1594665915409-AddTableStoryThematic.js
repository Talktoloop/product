"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTableStoryThematic1594665915409 = void 0;
const typeorm_1 = require("typeorm");
class AddTableStoryThematic1594665915409 {
    constructor() {
        this.tableName = 'story_thematic';
        this.indexThematicName = 'IDX_STORY_THEMATIC_THEMATIC_ID';
        this.fkThematicName = 'fk_StoryThematicTothematic';
        this.indexStoryName = 'IDX_STORY_THEMATIC_STORY_ID';
        this.fkStoryName = 'fk_StoryThematicToStory';
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
                    name: 'thematic_id',
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
            name: this.fkThematicName,
            columnNames: ['thematic_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['thematic_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'thematic',
            name: this.indexThematicName,
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.tableName);
    }
}
exports.AddTableStoryThematic1594665915409 = AddTableStoryThematic1594665915409;
//# sourceMappingURL=1594665915409-AddTableStoryThematic.js.map