"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeUaTuUk1647801761741 = void 0;
class changeUaTuUk1647801761741 {
    constructor() {
        this.name = 'changeUaTuUk1647801761741';
        this.tableName = 'language';
        this.newCode = 'uk';
        this.oldCode = 'ua';
    }
    async up(queryRunner) {
        await queryRunner.query(`UPDATE ${this.tableName} SET code = "${this.newCode}" WHERE code = "${this.oldCode}"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`UPDATE ${this.tableName} SET code = "${this.oldCode}" WHERE code = "${this.newCode}"`);
    }
}
exports.changeUaTuUk1647801761741 = changeUaTuUk1647801761741;
//# sourceMappingURL=1647801761741-change-ua-tu-uk.js.map