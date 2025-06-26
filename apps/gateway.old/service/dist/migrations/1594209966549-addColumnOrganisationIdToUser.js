"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddColumnOrganisationIdToUser1594209966549 = void 0;
const typeorm_1 = require("typeorm");
class AddColumnOrganisationIdToUser1594209966549 {
    constructor() {
        this.tableName = 'user';
        this.indexOrganisationName = 'IDX_USER_ORGANISATION_ID';
        this.fkOrganisationName = 'fk_OrganisationToUser';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'organisation_id',
            type: 'varchar',
            length: '36',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.fkOrganisationName,
            columnNames: ['organisation_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['organisation_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'organisation',
            name: this.indexOrganisationName,
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddColumnOrganisationIdToUser1594209966549 = AddColumnOrganisationIdToUser1594209966549;
//# sourceMappingURL=1594209966549-addColumnOrganisationIdToUser.js.map