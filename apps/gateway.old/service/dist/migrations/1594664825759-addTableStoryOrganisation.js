"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTableStoryOrganisation1594664825759 = void 0;
const typeorm_1 = require("typeorm");
class AddTableStoryOrganisation1594664825759 {
    constructor() {
        this.tableName = 'story_organisation';
        this.indexOrganisationName = 'IDX_STORY_ORGANISATION_ORGANISATION_ID';
        this.fkOrganisationName = 'fk_StoryOrganisationToStory';
        this.indexStoryName = 'IDX_STORY_ORGANISATION_STORY_ID';
        this.fkStoryName = 'fk_StoryOrganisationToStory';
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
                    name: 'organisation_id',
                    type: 'varchar',
                    length: '36',
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
            name: this.fkOrganisationName,
            columnNames: ['organisation_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['organisation_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'organisation',
            name: this.indexOrganisationName,
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.tableName);
    }
}
exports.AddTableStoryOrganisation1594664825759 = AddTableStoryOrganisation1594664825759;
//# sourceMappingURL=1594664825759-addTableStoryOrganisation.js.map