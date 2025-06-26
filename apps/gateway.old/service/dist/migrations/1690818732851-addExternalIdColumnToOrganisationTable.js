"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addExternalIdColumnToOrganisationTable1690818732851 = void 0;
const typeorm_1 = require("typeorm");
class addExternalIdColumnToOrganisationTable1690818732851 {
    constructor() {
        this.tableName = 'organisation';
        this.column = new typeorm_1.TableColumn({
            name: 'external_id',
            type: 'varchar',
            isNullable: true,
            length: '32',
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.column);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.column);
    }
}
exports.addExternalIdColumnToOrganisationTable1690818732851 = addExternalIdColumnToOrganisationTable1690818732851;
//# sourceMappingURL=1690818732851-addExternalIdColumnToOrganisationTable.js.map