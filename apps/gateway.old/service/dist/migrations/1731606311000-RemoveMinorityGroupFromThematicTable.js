"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveMinorityGroupFromThematicTable1731606311000 = void 0;
class RemoveMinorityGroupFromThematicTable1731606311000 {
    constructor() {
        this.tableName = 'thematic';
        this.thematicId = 86;
    }
    async up(queryRunner) {
        await queryRunner.query(`DELETE FROM ${this.tableName} WHERE id = ${this.thematicId}`);
    }
    async down(queryRunner) {
        await queryRunner.query(`INSERT INTO ${this.tableName} (id, parent_thematic_id, code) VALUES (${this.thematicId}, 67, 'minorityGroup')`);
    }
}
exports.RemoveMinorityGroupFromThematicTable1731606311000 = RemoveMinorityGroupFromThematicTable1731606311000;
//# sourceMappingURL=1731606311000-RemoveMinorityGroupFromThematicTable.js.map