"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveUserDataFromCommentTableToStoryCommentRecipientTable1676547408613 = void 0;
const typeorm_1 = require("typeorm");
class MoveUserDataFromCommentTableToStoryCommentRecipientTable1676547408613 {
    constructor() {
        this.table = 'comment';
        this.columns = [
            new typeorm_1.TableColumn({
                name: 'email',
                type: 'varchar',
                length: '100',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'phone',
                type: 'varchar',
                length: '20',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'nickname',
                type: 'varchar',
                length: '60',
                isNullable: true,
            }),
        ];
    }
    async up(queryRunner) {
        const comments = await queryRunner.query(`SELECT \`id\`, \`email\`, \`phone\`, \`nickname\` FROM \`${this.table}\``);
        for (const comment of comments) {
            const result = await queryRunner.query(`INSERT INTO \`story_comment_recipient\` (\`email\`, \`phone\`, \`nickname\`) VALUES (?, ?, ?)`, [comment.email, comment.phone, comment.nickname]);
            await queryRunner.query(`UPDATE \`${this.table}\` SET \`recipient_id\` = ? WHERE id = ?`, [result.insertId, comment.id]);
        }
        await queryRunner.query(`
        ALTER TABLE \`${this.table}\` 
        DROP COLUMN email, 
        DROP COLUMN phone, 
        DROP COLUMN nickname
      `);
    }
    async down(queryRunner) {
        await queryRunner.addColumns(this.table, this.columns);
        const recipients = await queryRunner.query(`SELECT \`id\`, \`email\`, \`phone\`,  \`nickname\` FROM \`story_comment_recipient\``);
        for (const recipient of recipients) {
            const comment = await queryRunner
                .query(`SELECT \`id\` FROM \`${this.table}\` where recipient_id = ?`, [
                recipient.id,
            ])
                .then((result) => result[0]);
            await queryRunner.query(`UPDATE \`${this.table}\` SET \`email\` = ?, \`phone\` = ?, \`nickname\` = ? WHERE id = ?`, [recipient.email, recipient.phone, recipient.nickname, comment.id]);
        }
    }
}
exports.MoveUserDataFromCommentTableToStoryCommentRecipientTable1676547408613 = MoveUserDataFromCommentTableToStoryCommentRecipientTable1676547408613;
//# sourceMappingURL=1676547408613-moveUserDataFromCommentTableToStoryCommentRecipientTable.js.map