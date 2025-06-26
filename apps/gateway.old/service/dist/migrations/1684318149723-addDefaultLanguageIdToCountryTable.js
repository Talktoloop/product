"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddDefaultLanguageIdToCountryTable1684318149723 = void 0;
const typeorm_1 = require("typeorm");
class AddDefaultLanguageIdToCountryTable1684318149723 {
    constructor() {
        this.tableName = 'country';
        this.column = new typeorm_1.TableColumn({
            name: 'default_language_id_for_administrative_data',
            type: 'smallint',
            isNullable: true,
        });
        this.foreignKeyLanguageId = 'fkCountryToLanguage';
        this.indexLanguageId = 'idxCountryDefaultLanguageIdForAdministrativeData';
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.column);
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.indexLanguageId,
            columnNames: ['default_language_id_for_administrative_data'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['default_language_id_for_administrative_data'],
            referencedColumnNames: ['id'],
            referencedTableName: 'language',
            name: this.foreignKeyLanguageId,
            onDelete: 'SET NULL',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey(this.tableName, this.foreignKeyLanguageId);
        await queryRunner.dropColumn(this.tableName, this.column);
    }
}
exports.AddDefaultLanguageIdToCountryTable1684318149723 = AddDefaultLanguageIdToCountryTable1684318149723;
//# sourceMappingURL=1684318149723-addDefaultLanguageIdToCountryTable.js.map