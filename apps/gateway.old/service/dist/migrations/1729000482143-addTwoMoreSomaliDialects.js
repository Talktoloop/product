"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTwoMoreSomaliDialects1729000482143 = void 0;
class AddTwoMoreSomaliDialects1729000482143 {
    constructor() {
        this.tableName = 'language';
    }
    async up(queryRunner) {
        await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`code\`, \`provider\`, \`visible\`) VALUES (?, ?, ?), (?, ?, ?)`, ['bju', null, 1, 'bnd', null, 1]);
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM \`${this.tableName}\` WHERE \`code\` IN (?, ?)`, ['bju', 'bnd']);
    }
}
exports.AddTwoMoreSomaliDialects1729000482143 = AddTwoMoreSomaliDialects1729000482143;
//# sourceMappingURL=1729000482143-addTwoMoreSomaliDialects.js.map