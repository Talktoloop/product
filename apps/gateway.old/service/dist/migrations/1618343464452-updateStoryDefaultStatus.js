"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStoryDefaultStatus1618343464452 = void 0;
class UpdateStoryDefaultStatus1618343464452 {
    constructor() {
        this.tableName = 'story';
        this.newDefaultValue = 1;
        this.oldDefaultValue = 0;
        this.columnName = 'status';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` ALTER \`${this.columnName}\` SET DEFAULT ${this.newDefaultValue}`);
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`${this.columnName}\` = ? WHERE \`${this.columnName}\` = ?`, [this.newDefaultValue, this.oldDefaultValue]);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.tableName} ALTER ${this.columnName} SET DEFAULT ${this.oldDefaultValue}`);
    }
}
exports.UpdateStoryDefaultStatus1618343464452 = UpdateStoryDefaultStatus1618343464452;
//# sourceMappingURL=1618343464452-updateStoryDefaultStatus.js.map