"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateIsMinorityByModeratorBasedOnThematicTag1731602526953 = void 0;
class UpdateIsMinorityByModeratorBasedOnThematicTag1731602526953 {
    async up(queryRunner) {
        await queryRunner.query(`
      UPDATE story_recipient sr
      SET sr.is_minority_by_moderator = false
    `);
        await queryRunner.query(`
      UPDATE story_recipient sr
      SET sr.is_minority_by_moderator = true
      WHERE sr.id IN (
        SELECT s.recipient_id
        FROM story s
        INNER JOIN story_thematic st ON s.id = st.story_id
        WHERE st.thematic_id = 86
      )
    `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
      UPDATE story_recipient
      SET is_minority_by_moderator = NULL
    `);
    }
}
exports.UpdateIsMinorityByModeratorBasedOnThematicTag1731602526953 = UpdateIsMinorityByModeratorBasedOnThematicTag1731602526953;
//# sourceMappingURL=1731602526953-UpdateIsMinorityByModeratorBasedOnThematicTag.js.map