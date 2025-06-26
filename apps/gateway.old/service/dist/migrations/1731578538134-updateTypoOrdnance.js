"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTypoOrdnance1731578538134 = void 0;
class UpdateTypoOrdnance1731578538134 {
    constructor() {
        this.tableName = 'thematic';
    }
    async up(queryRunner) {
        await queryRunner.query(`
            UPDATE ${this.tableName}
            SET code = 'landmines/UnexplodedOrdnance'
            WHERE code = 'landmines/UnexplodedOrdinance'
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            UPDATE ${this.tableName}
            SET code = 'landmines/UnexplodedOrdinance'
            WHERE code = 'landmines/UnexplodedOrdnance'
        `);
    }
}
exports.UpdateTypoOrdnance1731578538134 = UpdateTypoOrdnance1731578538134;
//# sourceMappingURL=1731578538134-updateTypoOrdnance.js.map