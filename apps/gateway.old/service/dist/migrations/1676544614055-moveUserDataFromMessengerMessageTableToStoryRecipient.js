"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveUserDataFromMessengerMessageTableToStoryRecipient1676544614055 = void 0;
const typeorm_1 = require("typeorm");
class MoveUserDataFromMessengerMessageTableToStoryRecipient1676544614055 {
    constructor() {
        this.table = 'messenger_conversation';
        this.columns = [
            new typeorm_1.TableColumn({
                name: 'sender_id',
                type: 'varchar',
                length: '255',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'user_first_name',
                type: 'varchar',
                length: '255',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'user_last_name',
                type: 'varchar',
                length: '255',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'share_user_info',
                type: 'boolean',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'gender',
                type: 'varchar',
                length: '500',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'age',
                type: 'varchar',
                length: '500',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'disability',
                type: 'varchar',
                length: '500',
                isNullable: true,
            }),
        ];
    }
    async up(queryRunner) {
        const data = await queryRunner.query(`SELECT mc.sender_id, mc.user_first_name, mc.user_last_name, mc.share_user_info, mc.gender, mc.age, mc.disability, s.recipient_id FROM \`${this.table}\` mc JOIN \`story\` s ON mc.story_id = s.id`);
        for (const item of data) {
            await queryRunner.query(`UPDATE \`story_recipient\` SET \`communicator_id\` = ?, \`first_name\` = ?, \`last_name\` = ?, \`user_want_contact\` = ?, \`gender_by_user\` = ?, \`age_by_user\` = ?, \`difficulty_by_user\` = ? WHERE id = ?`, [
                item.sender_id,
                item.user_first_name,
                item.user_last_name,
                item.share_user_info,
                item.gender,
                item.age,
                item.disability,
                item.recipient_id,
            ]);
        }
        await queryRunner.query(`ALTER TABLE \`${this.table}\` 
        DROP COLUMN sender_id,
        DROP COLUMN user_first_name,
        DROP COLUMN user_last_name,
        DROP COLUMN share_user_info,
        DROP COLUMN gender,
        DROP COLUMN age,
        DROP COLUMN disability
      `);
    }
    async down(queryRunner) {
        await queryRunner.addColumns(this.table, this.columns);
        const data = await queryRunner.query(`SELECT sr.communicator_id, sr.first_name, sr.last_name, sr.user_want_contact, sr.gender_by_user, sr.age_by_user, sr.difficulty_by_user, s.id FROM \`story_recipient\` sr JOIN \`story\` s ON sr.id = s.recipient_id WHERE s.channel IN ('messenger','telegram','whatsapp')`);
        for (const item of data) {
            await queryRunner.query(`UPDATE \`${this.table}\` SET \`sender_id\` = ?, \`user_first_name\` = ?, \`user_last_name\` = ?, \`share_user_info\` = ?, \`gender\` = ?, \`age\` = ?, \`disability\` = ? WHERE story_id = ?`, [
                item.communicator_id,
                item.first_name,
                item.last_name,
                item.user_want_contact,
                item.gender_by_user,
                item.age_by_user,
                item.difficulty_by_user,
                item.id,
            ]);
        }
    }
}
exports.MoveUserDataFromMessengerMessageTableToStoryRecipient1676544614055 = MoveUserDataFromMessengerMessageTableToStoryRecipient1676544614055;
//# sourceMappingURL=1676544614055-moveUserDataFromMessengerMessageTableToStoryRecipient.js.map