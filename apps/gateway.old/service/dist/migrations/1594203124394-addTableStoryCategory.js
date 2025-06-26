"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTableStoryCategory1594203124394 = void 0;
const typeorm_1 = require("typeorm");
class AddTableStoryCategory1594203124394 {
    constructor() {
        this.tableName = 'story_category';
        this.indexCategoryName = 'IDX_STORY_CATEGORY_CATEGORY_ID';
        this.fkCategoryName = 'fk_StoryCategoryToCategory';
        this.indexStoryName = 'IDX_STORY_CATEGORY_STORY_ID';
        this.fkStoryName = 'fk_StoryCategoryToStory';
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
                    name: 'category_id',
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
            name: this.fkCategoryName,
            columnNames: ['category_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['category_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'category',
            name: this.indexCategoryName,
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.tableName);
    }
}
exports.AddTableStoryCategory1594203124394 = AddTableStoryCategory1594203124394;
//# sourceMappingURL=1594203124394-addTableStoryCategory.js.map