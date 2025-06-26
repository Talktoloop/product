"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeInsteadOfTitleInCategoryTable1612170500907 = void 0;
const typeorm_1 = require("typeorm");
class CodeInsteadOfTitleInCategoryTable1612170500907 {
    constructor() {
        this.categories = [
            { code: 'thanks', title: 'Thanks' },
            { code: 'question', title: 'Question' },
            { code: 'opinion', title: 'Opinion' },
            { code: 'concern', title: 'Concern' },
            { code: 'suggestion', title: 'Suggestion' },
        ];
        this.tableName = 'category';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'code',
            type: 'varchar',
            length: '100',
        });
        this.oldColumn = new typeorm_1.TableColumn({
            name: 'title',
            type: 'varchar',
            length: '100',
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
        for (const category of this.categories) {
            await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`code\` = ? WHERE title = ?`, [category.code, category.title]);
        }
        await queryRunner.dropColumn(this.tableName, this.oldColumn);
    }
    async down(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.oldColumn);
        for (const category of this.categories) {
            await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`title\` = ? WHERE code = ?`, [category.title, category.code]);
        }
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.CodeInsteadOfTitleInCategoryTable1612170500907 = CodeInsteadOfTitleInCategoryTable1612170500907;
//# sourceMappingURL=1612170500907-codeInsteadOfTitleInCategoryTable.js.map