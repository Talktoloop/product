"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddColumnUserIdToStory1594208937201 = void 0;
const typeorm_1 = require("typeorm");
class AddColumnUserIdToStory1594208937201 {
    constructor() {
        this.tableName = 'story';
        this.indexUserName = 'IDX_STORY_USER_ID';
        this.fkUserName = 'fk_UserToStory';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'user_id',
            type: 'varchar',
            length: '36',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.fkUserName,
            columnNames: ['user_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user',
            name: this.indexUserName,
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddColumnUserIdToStory1594208937201 = AddColumnUserIdToStory1594208937201;
//# sourceMappingURL=1594208937201-addColumnUserIdToStory.js.map