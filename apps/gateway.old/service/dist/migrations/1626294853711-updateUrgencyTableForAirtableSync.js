"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUrgencyTableForAirtableSync1626294853711 = void 0;
class UpdateUrgencyTableForAirtableSync1626294853711 {
    constructor() {
        this.tableName = 'case_sync';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.tableName} MODIFY urgency varchar(100) null`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.tableName} MODIFY urgency varchar(100)`);
    }
}
exports.UpdateUrgencyTableForAirtableSync1626294853711 = UpdateUrgencyTableForAirtableSync1626294853711;
//# sourceMappingURL=1626294853711-updateUrgencyTableForAirtableSync.js.map