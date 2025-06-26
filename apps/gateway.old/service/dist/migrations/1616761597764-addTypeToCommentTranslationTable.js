"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTypeToCommentTranslationTable1616761597764 = void 0;
const typeorm_1 = require("typeorm");
class AddTypeToCommentTranslationTable1616761597764 {
    constructor() {
        this.tableName = 'comment_translation';
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
        UPDATE \`${this.tableName}\` ct 
        LEFT JOIN \`comment\` c ON ct.comment_id = c.id AND ct.language_id = c.language_id 
        SET ct.type = 'machine' where c.id is null
    `);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddTypeToCommentTranslationTable1616761597764 = AddTypeToCommentTranslationTable1616761597764;
//# sourceMappingURL=1616761597764-addTypeToCommentTranslationTable.js.map