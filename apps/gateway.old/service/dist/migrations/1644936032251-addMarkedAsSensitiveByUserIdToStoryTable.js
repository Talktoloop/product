"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddMarkedAsSensitiveByUserIdToStoryTable1644936032251 = void 0;
const typeorm_1 = require("typeorm");
class AddMarkedAsSensitiveByUserIdToStoryTable1644936032251 {
    constructor() {
        this.tableName = 'story';
        this.foreignKey = 'fk_StoryMarkedAsSensitiveByUserIdToUser';
        this.userColumn = new typeorm_1.TableColumn({
            name: 'marked_as_sensitive_by_user_id',
            type: 'varchar',
            length: '36',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.renameColumn(this.tableName, 'marked_as_sensitive_by', 'marked_as_sensitive_by_role');
        await queryRunner.addColumn(this.tableName, this.userColumn);
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user',
            name: this.foreignKey,
            onDelete: 'SET NULL',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.userColumn);
        await queryRunner.renameColumn(this.tableName, 'marked_as_sensitive_by_role', 'marked_as_sensitive_by');
    }
}
exports.AddMarkedAsSensitiveByUserIdToStoryTable1644936032251 = AddMarkedAsSensitiveByUserIdToStoryTable1644936032251;
//# sourceMappingURL=1644936032251-addMarkedAsSensitiveByUserIdToStoryTable.js.map