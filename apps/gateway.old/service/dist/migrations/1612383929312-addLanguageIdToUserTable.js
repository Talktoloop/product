"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLanguageIdToUserTable1612383929312 = void 0;
const typeorm_1 = require("typeorm");
class AddLanguageIdToUserTable1612383929312 {
    constructor() {
        this.tableName = 'user';
        this.foreignKeyName = 'FKuserToLanguage';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'language_id',
            type: 'smallint',
            length: '2',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['language_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'language',
            name: this.foreignKeyName,
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey(this.tableName, this.foreignKeyName);
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddLanguageIdToUserTable1612383929312 = AddLanguageIdToUserTable1612383929312;
//# sourceMappingURL=1612383929312-addLanguageIdToUserTable.js.map