"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNullableTranslationForComment1617739347096 = void 0;
class addNullableTranslationForComment1617739347096 {
    constructor() {
        this.tableName = 'comment_translation';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` MODIFY content MEDIUMTEXT;`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` MODIFY content MEDIUMTEXT NOT NULL;`);
    }
}
exports.addNullableTranslationForComment1617739347096 = addNullableTranslationForComment1617739347096;
//# sourceMappingURL=1617739347096-addNullableTranslationForComment.js.map