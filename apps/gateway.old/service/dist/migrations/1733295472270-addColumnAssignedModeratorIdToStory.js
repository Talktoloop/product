"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddColumnAssignedModeratorIdToStory1733295472270 = void 0;
const typeorm_1 = require("typeorm");
class AddColumnAssignedModeratorIdToStory1733295472270 {
    constructor() {
        this.tableName = 'story';
        this.columnName = 'assigned_moderator_id';
        this.newColumn = new typeorm_1.TableColumn({
            name: this.columnName,
            type: 'varchar',
            isNullable: true,
        });
        this.indexAssignedModerator = 'IDX_STORY_ASSIGNED_MODERATORS_ID';
        this.fkAssignedModerator = 'fk_StoryToAssignedModeratorUser';
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            name: this.fkAssignedModerator,
            columnNames: [this.columnName],
            referencedTableName: 'user',
            referencedColumnNames: ['id'],
            onDelete: 'SET NULL',
        }));
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.indexAssignedModerator,
            columnNames: [this.columnName],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey(this.tableName, this.fkAssignedModerator);
        await queryRunner.dropIndex(this.tableName, this.indexAssignedModerator);
        await queryRunner.dropColumn(this.tableName, this.columnName);
    }
}
exports.AddColumnAssignedModeratorIdToStory1733295472270 = AddColumnAssignedModeratorIdToStory1733295472270;
//# sourceMappingURL=1733295472270-addColumnAssignedModeratorIdToStory.js.map