"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeMaximumLengrhOfContentInMessageTable1620155117122 = void 0;
class changeMaximumLengrhOfContentInMessageTable1620155117122 {
    constructor() {
        this.tableName = 'message';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` modify COLUMN \`content\` varchar(640);`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` modify COLUMN \`content\` varchar(500);`);
    }
}
exports.changeMaximumLengrhOfContentInMessageTable1620155117122 = changeMaximumLengrhOfContentInMessageTable1620155117122;
//# sourceMappingURL=1620155117122-changeMaximumLengrhOfContentInMessageTable.js.map