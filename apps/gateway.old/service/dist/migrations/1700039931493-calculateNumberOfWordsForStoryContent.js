"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateNumberOfWordsForStoryContent1700039931493 = void 0;
const shared_1 = require("@ourloop/shared");
class CalculateNumberOfWordsForStoryContent1700039931493 {
    constructor() {
        this.tableName = 'story_translation';
    }
    async up(queryRunner) {
        const translations = await queryRunner.query(`SELECT \`id\`, \`content\` FROM \`${this.tableName}\` WHERE \`number_of_words\` IS NULL`);
        for (const translation of translations) {
            await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`number_of_words\` = ? WHERE \`id\` = ?`, [
                (0, shared_1.calculateNumberOfSubstringsByDivider)(translation.content, ' '),
                translation.id,
            ]);
        }
    }
    async down(queryRunner) {
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`number_of_words\` = ?`, [null]);
    }
}
exports.CalculateNumberOfWordsForStoryContent1700039931493 = CalculateNumberOfWordsForStoryContent1700039931493;
//# sourceMappingURL=1700039931493-calculateNumberOfWordsForStoryContent.js.map