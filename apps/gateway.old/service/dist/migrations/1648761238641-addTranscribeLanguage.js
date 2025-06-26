"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTranscribeLanguage1648761238641 = void 0;
const typeorm_1 = require("typeorm");
class AddTranscribeLanguage1648761238641 {
    constructor() {
        this.tableName = 'language';
        this.columnName = 'transcribe_lang';
        this.newColumn = new typeorm_1.TableColumn({
            name: this.columnName,
            type: 'varchar',
            length: '10',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
        const map = new Map();
        map.set('en', 'en-GB');
        map.set('fr', 'fr-FR');
        map.set('id', 'id-ID');
        map.set('es', 'es-ES');
        map.set('ar', 'ar-SA');
        for (const [key, value] of map) {
            await queryRunner.query(`UPDATE ${this.tableName} SET ${this.columnName} = ? WHERE code = ?`, [value, key]);
        }
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddTranscribeLanguage1648761238641 = AddTranscribeLanguage1648761238641;
//# sourceMappingURL=1648761238641-addTranscribeLanguage.js.map