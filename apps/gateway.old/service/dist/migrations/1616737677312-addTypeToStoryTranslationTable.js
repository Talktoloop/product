"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTypeToStoryTranslationTable1616737677312 = void 0;
const typeorm_1 = require("typeorm");
class AddTypeToStoryTranslationTable1616737677312 {
    constructor() {
        this.tableName = 'story_translation';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'type',
            type: 'enum',
            enum: ['manual', 'machine'],
            enumName: 'typeEnum',
            default: '"manual"',
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
        await queryRunner.query(`
        UPDATE \`${this.tableName}\` st 
        LEFT JOIN \`story\` s ON st.story_id = s.id AND st.language_id = s.language_id 
        SET st.type = 'machine' where s.id is null
    `);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddTypeToStoryTranslationTable1616737677312 = AddTypeToStoryTranslationTable1616737677312;
//# sourceMappingURL=1616737677312-addTypeToStoryTranslationTable.js.map