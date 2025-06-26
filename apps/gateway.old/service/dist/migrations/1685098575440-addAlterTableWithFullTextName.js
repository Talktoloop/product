"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAlterTableWithFullTextName1685098575440 = void 0;
class addAlterTableWithFullTextName1685098575440 {
    constructor() {
        this.tableName = 'country_administrative_area_name';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.tableName} ADD FULLTEXT(name)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.tableName} DROP INDEX name`);
    }
}
exports.addAlterTableWithFullTextName1685098575440 = addAlterTableWithFullTextName1685098575440;
//# sourceMappingURL=1685098575440-addAlterTableWithFullTextName.js.map