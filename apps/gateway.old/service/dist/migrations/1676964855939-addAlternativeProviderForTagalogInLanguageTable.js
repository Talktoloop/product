"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAlternativeProviderForTagalogInLanguageTable1676964855939 = void 0;
const typeorm_1 = require("typeorm");
class AddAlternativeProviderForTagalogInLanguageTable1676964855939 {
    constructor() {
        this.tableName = 'language';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'alternative_provider',
            type: 'varchar',
            length: '10',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`alternative_provider\` = ? WHERE code = ?`, ['aws', 'tl']);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddAlternativeProviderForTagalogInLanguageTable1676964855939 = AddAlternativeProviderForTagalogInLanguageTable1676964855939;
//# sourceMappingURL=1676964855939-addAlternativeProviderForTagalogInLanguageTable.js.map