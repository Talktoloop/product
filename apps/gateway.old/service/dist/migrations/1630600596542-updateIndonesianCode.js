"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateIndonesianCode1630600596542 = void 0;
class UpdateIndonesianCode1630600596542 {
    constructor() {
        this.newCode = 'id';
        this.oldCode = 'ind';
        this.tableName = 'language';
    }
    async up(queryRunner) {
        await queryRunner.query(`UPDATE ${this.tableName} SET code = '${this.newCode}' WHERE code = '${this.oldCode}'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`UPDATE ${this.tableName} SET code = '${this.oldCode}' WHERE code = '${this.newCode}'`);
    }
}
exports.UpdateIndonesianCode1630600596542 = UpdateIndonesianCode1630600596542;
//# sourceMappingURL=1630600596542-updateIndonesianCode.js.map