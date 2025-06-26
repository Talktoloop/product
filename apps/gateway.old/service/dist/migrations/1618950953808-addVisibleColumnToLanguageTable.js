"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddVisibleColumnToLanguageTable1618950953808 = void 0;
const typeorm_1 = require("typeorm");
class AddVisibleColumnToLanguageTable1618950953808 {
    constructor() {
        this.tableName = 'language';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'visible',
            type: 'boolean',
            default: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`visible\` = ? WHERE code = ?`, [false, 'cew']);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddVisibleColumnToLanguageTable1618950953808 = AddVisibleColumnToLanguageTable1618950953808;
//# sourceMappingURL=1618950953808-addVisibleColumnToLanguageTable.js.map