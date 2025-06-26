"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixCodesInThematicAreaTable1653337573208 = void 0;
class fixCodesInThematicAreaTable1653337573208 {
    constructor() {
        this.tableName = 'thematic';
        this.newCode = ['logistic', 'hiv/Aids', 'personWithDisabilities'];
        this.oldCode = ['logistics', 'hivAids', 'personWithDisabiltiies'];
    }
    async up(queryRunner) {
        const operations = [];
        for (let index = 0; index < this.newCode.length; index++) {
            operations.push(queryRunner.query(`UPDATE \`${this.tableName}\` SET \`code\` = ? WHERE \`code\` = ?`, [this.newCode[index], this.oldCode[index]]));
        }
        await Promise.all(operations);
    }
    async down(queryRunner) {
        const operations = [];
        for (let index = 0; index < this.newCode.length; index++) {
            operations.push(queryRunner.query(`UPDATE \`${this.tableName}\` SET \`code\` = ? WHERE \`code\` = ?`, [this.oldCode[index], this.newCode[index]]));
        }
        await Promise.all(operations);
    }
}
exports.fixCodesInThematicAreaTable1653337573208 = fixCodesInThematicAreaTable1653337573208;
//# sourceMappingURL=1653337573208-fixCodesInThematicAreaTable.js.map