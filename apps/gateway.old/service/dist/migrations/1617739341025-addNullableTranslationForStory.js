"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddNullableTranslationForStory1617739341025 = void 0;
class AddNullableTranslationForStory1617739341025 {
    constructor() {
        this.tableName = 'story_translation';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.tableName} MODIFY content MEDIUMTEXT`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.tableName} MODIFY content MEDIUMTEXT NOT NULL;`);
    }
}
exports.AddNullableTranslationForStory1617739341025 = AddNullableTranslationForStory1617739341025;
//# sourceMappingURL=1617739341025-addNullableTranslationForStory.js.map