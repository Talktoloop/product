"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAdditionalColumnsToOrganisationTable1686036278893 = void 0;
const typeorm_1 = require("typeorm");
class addAdditionalColumnsToOrganisationTable1686036278893 {
    constructor() {
        this.tableName = 'organisation';
        this.columns = [
            new typeorm_1.TableColumn({
                name: 'verified',
                type: 'boolean',
                isNullable: false,
                default: false,
            }),
            new typeorm_1.TableColumn({
                name: 'country_id',
                type: 'integer',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'acronym',
                type: 'varchar',
                isNullable: true,
                length: '16',
            }),
        ];
    }
    async up(queryRunner) {
        await queryRunner.addColumns(this.tableName, this.columns);
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`verified\` = ?`, [true]);
    }
    async down(queryRunner) {
        await queryRunner.dropColumns(this.tableName, this.columns);
    }
}
exports.addAdditionalColumnsToOrganisationTable1686036278893 = addAdditionalColumnsToOrganisationTable1686036278893;
//# sourceMappingURL=1686036278893-addAdditionalColumnsToOrganisationTable.js.map