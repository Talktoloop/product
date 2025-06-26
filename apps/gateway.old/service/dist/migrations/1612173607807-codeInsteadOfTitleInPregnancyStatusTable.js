"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeInsteadOfTitleInPregnancyStatusTable1612173607807 = void 0;
const typeorm_1 = require("typeorm");
class CodeInsteadOfTitleInPregnancyStatusTable1612173607807 {
    constructor() {
        this.statuses = [
            {
                code: 'notPregnantOrBreastfeeding',
                title: 'Not pregnant or breastfeeding',
            },
            { code: 'pregnant', title: 'Pregnant' },
            { code: 'breastfeeding', title: 'Breastfeeding' },
            {
                code: 'bothPregnantAndBreastfeeding',
                title: 'Both pregnant and breastfeeding',
            },
            { code: 'notDisclosed', title: 'Not disclosed' },
        ];
        this.tableName = 'pregnancy_status';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'code',
            type: 'varchar',
            length: '100',
        });
        this.oldColumn = new typeorm_1.TableColumn({
            name: 'title',
            type: 'varchar',
            length: '100',
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
        for (const status of this.statuses) {
            await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`code\` = ? WHERE title = ?`, [status.code, status.title]);
        }
        await queryRunner.dropColumn(this.tableName, this.oldColumn);
    }
    async down(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.oldColumn);
        for (const status of this.statuses) {
            await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`title\` = ? WHERE code = ?`, [status.title, status.code]);
        }
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.CodeInsteadOfTitleInPregnancyStatusTable1612173607807 = CodeInsteadOfTitleInPregnancyStatusTable1612173607807;
//# sourceMappingURL=1612173607807-codeInsteadOfTitleInPregnancyStatusTable.js.map