"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddMachineTranslatedColumnToLanguageTable1614586462381 = void 0;
const typeorm_1 = require("typeorm");
class AddMachineTranslatedColumnToLanguageTable1614586462381 {
    constructor() {
        this.tableName = 'language';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'machine_translated',
            type: 'tinyint',
            length: '1',
            isNullable: false,
            default: false,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`${this.newColumn.name}\` = true`);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddMachineTranslatedColumnToLanguageTable1614586462381 = AddMachineTranslatedColumnToLanguageTable1614586462381;
//# sourceMappingURL=1614586462381-addMachineTranslatedColumnToLanguageTable.js.map