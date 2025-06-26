"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTableTitleExtendedForDifficulty1601924100424 = void 0;
const typeorm_1 = require("typeorm");
class AddTableTitleExtendedForDifficulty1601924100424 {
    constructor() {
        this.tableName = 'difficulty';
        this.updateTitle = [
            {
                id: 4,
                newTitle: 'Remembering',
            },
            {
                id: 5,
                newTitle: 'Self-Care e.g. washing',
            },
            {
                id: 6,
                newTitle: 'Communicating',
            },
        ];
        this.newColumn = new typeorm_1.TableColumn({
            name: 'title_extended',
            type: 'varchar',
            length: '150',
            isNullable: false,
        });
    }
    async up(queryRunner) {
        await Promise.all(this.updateTitle.map(async (update) => await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`title\` = ? WHERE id = ?`, [update.newTitle, update.id])));
        await queryRunner.addColumn(this.tableName, this.newColumn);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddTableTitleExtendedForDifficulty1601924100424 = AddTableTitleExtendedForDifficulty1601924100424;
//# sourceMappingURL=1601924100424-addTableTitleExtendedForDifficulty.js.map