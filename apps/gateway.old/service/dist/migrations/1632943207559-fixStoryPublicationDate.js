"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixStoryPublicationDate1632943207559 = void 0;
class FixStoryPublicationDate1632943207559 {
    constructor() {
        this.tableName = 'story';
    }
    async up(queryRunner) {
        const items = await queryRunner.query(`
      SELECT c.story_id, c.published_at
      FROM story s 
      JOIN comment c ON s.id = c.story_id AND c.published_at IS NOT NULL
      WHERE c.published_at = (
        SELECT MIN(cg.published_at)
        FROM comment cg 
        WHERE c.story_id = cg.story_id AND cg.published_at IS NOT NULL 
        GROUP BY cg.story_id
      ) 
      AND s.published_at IS NOT NULL AND s.published_at > c.published_at
      ORDER BY story_id, c.id
    `);
        const operations = [];
        for (const item of items) {
            operations.push(queryRunner.query(`UPDATE \`${this.tableName}\` SET \`updated_at\` = \`published_at\`, \`published_at\` = ? WHERE id = ?`, [item.published_at, item.story_id]));
        }
        if (operations.length > 1) {
            await Promise.all(operations);
        }
    }
    async down() {
    }
}
exports.FixStoryPublicationDate1632943207559 = FixStoryPublicationDate1632943207559;
//# sourceMappingURL=1632943207559-fixStoryPublicationDate.js.map