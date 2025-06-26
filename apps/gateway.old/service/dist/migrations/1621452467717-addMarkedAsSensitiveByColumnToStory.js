"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddMarkedAsSensitiveByColumnToStory1621452467717 = void 0;
const typeorm_1 = require("typeorm");
class AddMarkedAsSensitiveByColumnToStory1621452467717 {
    constructor() {
        this.tableName = 'story';
        this.newColumnName = 'marked_as_sensitive_by';
        this.newColumn = new typeorm_1.TableColumn({
            name: this.newColumnName,
            type: 'enum',
            enum: ['moderator', 'author'],
            enumName: 'isSensitive enum',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumnName);
    }
}
exports.AddMarkedAsSensitiveByColumnToStory1621452467717 = AddMarkedAsSensitiveByColumnToStory1621452467717;
//# sourceMappingURL=1621452467717-addMarkedAsSensitiveByColumnToStory.js.map