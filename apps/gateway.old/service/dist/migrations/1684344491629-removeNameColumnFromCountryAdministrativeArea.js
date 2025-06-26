"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveNameColumnFromCountryAdministrativeArea1684344491629 = void 0;
const typeorm_1 = require("typeorm");
class RemoveNameColumnFromCountryAdministrativeArea1684344491629 {
    constructor() {
        this.tableName = 'country_administrative_area';
        this.column = new typeorm_1.TableColumn({
            name: 'name',
            type: 'varchar',
            length: '150',
            isNullable: false,
        });
    }
    async up(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.column);
    }
    async down(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.column);
    }
}
exports.RemoveNameColumnFromCountryAdministrativeArea1684344491629 = RemoveNameColumnFromCountryAdministrativeArea1684344491629;
//# sourceMappingURL=1684344491629-removeNameColumnFromCountryAdministrativeArea.js.map