"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveUserDataFromStoryTableToStoryRecipientTable1676287380666 = void 0;
const typeorm_1 = require("typeorm");
class MoveUserDataFromStoryTableToStoryRecipientTable1676287380666 {
    constructor() {
        this.table = 'story';
        this.columns = [
            new typeorm_1.TableColumn({
                name: 'email',
                type: 'varchar',
                length: '100',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'age',
                type: 'int',
                default: 4,
                isNullable: false,
            }),
            new typeorm_1.TableColumn({
                name: 'phone',
                type: 'varchar',
                length: '20',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'gender',
                type: 'tinyint',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'difficulty',
                type: 'tinyint',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'author_nickname',
                type: 'varchar',
                length: '60',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'user_want_contact',
                type: 'tinyint',
                length: '1',
                isNullable: false,
            }),
        ];
    }
    async up(queryRunner) {
        const stories = await queryRunner.query(`SELECT \`id\`, \`email\`, \`phone\`, \`gender\`, \`age\`, \`author_nickname\`, \`difficulty\`, \`user_want_contact\` FROM \`${this.table}\``);
        for (const story of stories) {
            const result = await queryRunner.query(`INSERT INTO \`story_recipient\` (\`email\`, \`phone\`, \`gender_by_moderator\`, \`age_by_moderator\`, \`difficulty_by_moderator\`, \`nickname\`, \`user_want_contact\`) VALUES (?, ?, ?, ?, ?, ?, ?)`, [
                story.email,
                story.phone,
                story.gender,
                story.age,
                story.difficulty,
                story.author_nickname,
                story.user_want_contact,
            ]);
            await queryRunner.query(`UPDATE \`${this.table}\` SET \`recipient_id\` = ? WHERE id = ?`, [result.insertId, story.id]);
        }
        await queryRunner.query(`
      ALTER TABLE \`${this.table}\` 
      DROP COLUMN email, 
      DROP COLUMN phone, 
      DROP COLUMN gender, 
      DROP COLUMN age, 
      DROP COLUMN author_nickname,
      DROP COLUMN difficulty,
      DROP COLUMN user_want_contact
    `);
    }
    async down(queryRunner) {
        await queryRunner.addColumns(this.table, this.columns);
        const recipients = await queryRunner.query(`SELECT \`id\`, \`email\`, \`phone\`, \`gender_by_moderator\`, \`age_by_moderator\`, \`difficulty_by_moderator\`, \`nickname\`, \`user_want_contact\` FROM \`story_recipient\``);
        for (const recipient of recipients) {
            const story = await queryRunner
                .query(`SELECT \`id\`, \`channel\` FROM \`${this.table}\` where recipient_id = ?`, [recipient.id])
                .then((result) => result[0]);
            await queryRunner.query(`UPDATE \`${this.table}\` SET \`email\` = ?, \`phone\` = ?, \`gender\` = ?, \`age\` = ?, \`difficulty\` = ?, \`author_nickname\` = ?, \`user_want_contact\` = ? WHERE id = ?`, [
                recipient.email,
                recipient.phone,
                recipient.gender_by_moderator,
                recipient.age_by_moderator,
                recipient.difficulty_by_moderator,
                recipient.nickname,
                recipient.user_want_contact,
                story.id,
            ]);
        }
    }
}
exports.MoveUserDataFromStoryTableToStoryRecipientTable1676287380666 = MoveUserDataFromStoryTableToStoryRecipientTable1676287380666;
//# sourceMappingURL=1676287380666-moveUserDataFromStoryTableToStoryRecipientTable.js.map