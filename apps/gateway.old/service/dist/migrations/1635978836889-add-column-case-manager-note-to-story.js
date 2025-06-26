"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addColumnCaseManagerNoteToStory1635978836889 = void 0;
const typeorm_1 = require("typeorm");
class addColumnCaseManagerNoteToStory1635978836889 {
    constructor() {
        this.tableName = 'story';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'case_manager_note',
            type: 'varchar',
            length: '100',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.addColumnCaseManagerNoteToStory1635978836889 = addColumnCaseManagerNoteToStory1635978836889;
//# sourceMappingURL=1635978836889-add-column-case-manager-note-to-story.js.map