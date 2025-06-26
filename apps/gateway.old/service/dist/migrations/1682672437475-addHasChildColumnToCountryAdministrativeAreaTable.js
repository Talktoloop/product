"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddHasChildColumnToCountryAdministrativeAreaTable1682672437475 = void 0;
const typeorm_1 = require("typeorm");
class AddHasChildColumnToCountryAdministrativeAreaTable1682672437475 {
    constructor() {
        this.tableName = 'country_administrative_area';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'has_child',
            type: 'boolean',
            default: false,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddHasChildColumnToCountryAdministrativeAreaTable1682672437475 = AddHasChildColumnToCountryAdministrativeAreaTable1682672437475;
//# sourceMappingURL=1682672437475-addHasChildColumnToCountryAdministrativeAreaTable.js.map