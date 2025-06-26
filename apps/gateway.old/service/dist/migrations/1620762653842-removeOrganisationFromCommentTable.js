"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeOrganisationFromCommentTable1620762653842 = void 0;
const typeorm_1 = require("typeorm");
class removeOrganisationFromCommentTable1620762653842 {
    constructor() {
        this.tableName = 'comment';
        this.columnName = 'organisation';
    }
    async up(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.columnName);
    }
    async down(queryRunner) {
        await queryRunner.addColumn(this.tableName, new typeorm_1.TableColumn({
            name: this.columnName,
            type: 'varchar',
            length: '100',
            isNullable: true,
        }));
    }
}
exports.removeOrganisationFromCommentTable1620762653842 = removeOrganisationFromCommentTable1620762653842;
//# sourceMappingURL=1620762653842-removeOrganisationFromCommentTable.js.map