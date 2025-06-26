"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeAllegationOrganizationLengthInCaseSyncTable1642485761154 = void 0;
class ChangeAllegationOrganizationLengthInCaseSyncTable1642485761154 {
    constructor() {
        this.tableName = 'case_sync';
        this.columnName = 'allegation_organization';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` MODIFY COLUMN ${this.columnName} VARCHAR(1000)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` MODIFY COLUMN ${this.columnName} VARCHAR(50)`);
    }
}
exports.ChangeAllegationOrganizationLengthInCaseSyncTable1642485761154 = ChangeAllegationOrganizationLengthInCaseSyncTable1642485761154;
//# sourceMappingURL=1642485761154-changeAllegationOrganizationLengthInCaseSyncTable.js.map