"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCommentNickname1648065575942 = void 0;
class setCommentNickname1648065575942 {
    constructor() {
        this.name = 'setCommentNickname1648065575942';
        this.commentTable = 'comment';
        this.userTable = 'user';
    }
    async up(queryRunner) {
        const commentsWithUserIdButWithoutNickname = await queryRunner.query(`SELECT id, user_id, nickname FROM ${this.commentTable} WHERE user_id IS NOT NULL AND nickname IS NULL`);
        for (const comment of commentsWithUserIdButWithoutNickname) {
            const queryResult = await queryRunner.query(`SELECT nickname FROM ${this.userTable} WHERE id = '${comment.user_id}'`);
            const nickname = queryResult.length > 0 ? queryResult[0].nickname : null;
            if (nickname) {
                await queryRunner.query(`UPDATE ${this.commentTable} SET nickname = '${nickname}' WHERE id = '${comment.id}'`);
            }
        }
    }
    async down() {
    }
}
exports.setCommentNickname1648065575942 = setCommentNickname1648065575942;
//# sourceMappingURL=1648065575942-set-comment-nickname.js.map