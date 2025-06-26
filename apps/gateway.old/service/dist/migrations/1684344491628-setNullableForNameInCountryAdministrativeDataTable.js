"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetNullableForNameInCountryAdministrativeDataTable1684344491628 = void 0;
class SetNullableForNameInCountryAdministrativeDataTable1684344491628 {
    constructor() {
        this.tableName = 'country_administrative_area';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.tableName} MODIFY name varchar(150)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.tableName} MODIFY name varchar(150) NOT NULL;`);
    }
}
exports.SetNullableForNameInCountryAdministrativeDataTable1684344491628 = SetNullableForNameInCountryAdministrativeDataTable1684344491628;
//# sourceMappingURL=1684344491628-setNullableForNameInCountryAdministrativeDataTable.js.map