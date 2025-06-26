"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeNameLengthInCaseSyncAllegationReferralOrganisation1643373868840 = void 0;
class ChangeNameLengthInCaseSyncAllegationReferralOrganisation1643373868840 {
    constructor() {
        this.tableName = 'case_sync_allegation_referral_organisation';
        this.columnName = 'name';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` MODIFY COLUMN ${this.columnName} VARCHAR(200)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` MODIFY COLUMN ${this.columnName} VARCHAR(50)`);
    }
}
exports.ChangeNameLengthInCaseSyncAllegationReferralOrganisation1643373868840 = ChangeNameLengthInCaseSyncAllegationReferralOrganisation1643373868840;
//# sourceMappingURL=1643373868840-changeNameLengthInCaseSyncAllegationReferralOrganisation.js.map