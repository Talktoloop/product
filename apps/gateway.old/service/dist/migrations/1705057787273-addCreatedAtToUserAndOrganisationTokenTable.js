"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCreatedAtToUserAndOrganisationTokenTable1705057787273 = void 0;
const typeorm_1 = require("typeorm");
class AddCreatedAtToUserAndOrganisationTokenTable1705057787273 {
    constructor() {
        this.tableName1 = 'user_token';
        this.tableName2 = 'organisation_token';
        this.column = new typeorm_1.TableColumn({
            name: 'created_at',
            type: 'datetime',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName1, this.column);
        await queryRunner.addColumn(this.tableName2, this.column);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName1, this.column);
        await queryRunner.dropColumn(this.tableName2, this.column);
    }
}
exports.AddCreatedAtToUserAndOrganisationTokenTable1705057787273 = AddCreatedAtToUserAndOrganisationTokenTable1705057787273;
//# sourceMappingURL=1705057787273-addCreatedAtToUserAndOrganisationTokenTable.js.map