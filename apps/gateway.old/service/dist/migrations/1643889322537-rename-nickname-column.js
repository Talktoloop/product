"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renameNicknameColumn1643889322537 = void 0;
class renameNicknameColumn1643889322537 {
    constructor() {
        this.name = 'renameNicknameColumn1643889322537';
        this.tableName = 'story';
        this.oldColumnName = 'nickname';
        this.newColumnName = 'author_nickname';
    }
    async up(queryRunner) {
        await queryRunner.renameColumn(this.tableName, this.oldColumnName, this.newColumnName);
    }
    async down(queryRunner) {
        await queryRunner.renameColumn(this.tableName, this.newColumnName, this.oldColumnName);
    }
}
exports.renameNicknameColumn1643889322537 = renameNicknameColumn1643889322537;
//# sourceMappingURL=1643889322537-rename-nickname-column.js.map