"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeColumnPublishedByToStatusChangedByInStoryTable1676900016296 = void 0;
class ChangeColumnPublishedByToStatusChangedByInStoryTable1676900016296 {
    constructor() {
        this.tableName = 'story';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` RENAME COLUMN published_by TO status_changed_by`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` RENAME COLUMN status_changed_by TO published_by`);
    }
}
exports.ChangeColumnPublishedByToStatusChangedByInStoryTable1676900016296 = ChangeColumnPublishedByToStatusChangedByInStoryTable1676900016296;
//# sourceMappingURL=1676900016296-changeColumnPublishedByToStatusChangedByInStoryTable.js.map