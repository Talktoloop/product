"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAgeForAirTableSync1626331272866 = void 0;
class UpdateAgeForAirTableSync1626331272866 {
    constructor() {
        this.tableName = 'case_sync';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.tableName} MODIFY survivor_age varchar(10) null`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.tableName} MODIFY survivor_age varchar(5) null`);
    }
}
exports.UpdateAgeForAirTableSync1626331272866 = UpdateAgeForAirTableSync1626331272866;
//# sourceMappingURL=1626331272866-updateAgeForAirtableSync.js.map