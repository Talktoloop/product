"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddExternalIdToCountryAdministrativeArea1684301178832 = void 0;
const typeorm_1 = require("typeorm");
class AddExternalIdToCountryAdministrativeArea1684301178832 {
    constructor() {
        this.tableName = 'country_administrative_area';
        this.column = new typeorm_1.TableColumn({
            name: 'external_id',
            type: 'int',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.column);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.column);
    }
}
exports.AddExternalIdToCountryAdministrativeArea1684301178832 = AddExternalIdToCountryAdministrativeArea1684301178832;
//# sourceMappingURL=1684301178832-addExternalIdToCountryAdministrativeArea.js.map