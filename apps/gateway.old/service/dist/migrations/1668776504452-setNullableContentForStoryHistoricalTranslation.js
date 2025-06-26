"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetNullableContentForStoryHistoricalTranslation1668776504452 = void 0;
class SetNullableContentForStoryHistoricalTranslation1668776504452 {
    constructor() {
        this.tableName = 'story_translation_history';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.tableName} MODIFY content MEDIUMTEXT`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.tableName} MODIFY content MEDIUMTEXT NOT NULL;`);
    }
}
exports.SetNullableContentForStoryHistoricalTranslation1668776504452 = SetNullableContentForStoryHistoricalTranslation1668776504452;
//# sourceMappingURL=1668776504452-setNullableContentForStoryHistoricalTranslation.js.map