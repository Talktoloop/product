"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTranslateProviderInsteadOfMachineTranslation1618950953899 = void 0;
const typeorm_1 = require("typeorm");
class AddTranslateProviderInsteadOfMachineTranslation1618950953899 {
    constructor() {
        this.tableName = 'language';
        this.columnToDrop = 'machine_translated';
        this.columnToAdd = 'provider';
        this.newColumn = new typeorm_1.TableColumn({
            name: this.columnToAdd,
            type: 'varchar',
            length: '10',
            isNullable: true,
        });
        this.oldColumn = new typeorm_1.TableColumn({
            name: 'machine_translated',
            type: 'tinyint',
            length: '1',
            isNullable: false,
            default: false,
        });
    }
    async up(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.columnToDrop);
        await queryRunner.addColumn(this.tableName, this.newColumn);
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`${this.columnToAdd}\` = ? WHERE \`code\` NOT IN('ny', 'cew')`, ['aws']);
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`${this.columnToAdd}\` = ? WHERE \`code\` = ? `, ['google', 'ny']);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.columnToAdd);
        await queryRunner.addColumn(this.tableName, this.oldColumn);
    }
}
exports.AddTranslateProviderInsteadOfMachineTranslation1618950953899 = AddTranslateProviderInsteadOfMachineTranslation1618950953899;
//# sourceMappingURL=1618950953899-addTranslateProviderInsteadOfMachineTranslation.js.map