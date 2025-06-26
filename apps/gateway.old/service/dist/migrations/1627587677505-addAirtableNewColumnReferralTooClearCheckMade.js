"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAirtableNewColumnReferralTooClearCheckMade1627587677505 = void 0;
const typeorm_1 = require("typeorm");
class AddAirtableNewColumnReferralTooClearCheckMade1627587677505 {
    constructor() {
        this.tableName = 'case_sync';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'referral_to_clear_check_made',
            type: 'varchar',
            length: '100',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddAirtableNewColumnReferralTooClearCheckMade1627587677505 = AddAirtableNewColumnReferralTooClearCheckMade1627587677505;
//# sourceMappingURL=1627587677505-addAirtableNewColumnReferralTooClearCheckMade.js.map