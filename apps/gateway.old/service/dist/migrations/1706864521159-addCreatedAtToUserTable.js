"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCreatedAtToUserTable1706864521159 = void 0;
const typeorm_1 = require("typeorm");
const shared_1 = require("@ourloop/shared");
class AddCreatedAtToUserTable1706864521159 {
    constructor() {
        this.tableName = 'user';
        this.column = new typeorm_1.TableColumn({
            name: 'created_at',
            type: 'datetime',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        var _a;
        await queryRunner.addColumn(this.tableName, this.column);
        await queryRunner.query(`ALTER TABLE ${this.tableName} MODIFY COLUMN ${this.column.name} ${this.column.type} NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE ${this.tableName} MODIFY COLUMN last_activity ${this.column.type} NULL DEFAULT NULL`);
        const users = await queryRunner.query(`SELECT u.id, u.last_activity, u.registration_date, u.consents_date, u.invitation_date, s.created_at story_created_at, c.created_at comment_created_at 
      FROM \`${this.tableName}\` u 
      LEFT JOIN \`story\` s ON u.id = s.user_id 
      LEFT JOIN \`story_comment\` c ON u.id = c.user_id 
      ORDER BY u.id, s.created_at, c.created_at`);
        let dates = [];
        let userId = null;
        for (const user of users) {
            if (userId !== user['id']) {
                dates = [
                    user['last_activity'],
                    user['registration_date'],
                    user['consents_date'],
                    user['invitation_date'],
                    user['story_created_at'],
                    user['comment_created_at'],
                ]
                    .filter((value) => value)
                    .sort((prev, next) => new Date(prev).getTime() - new Date(next).getTime());
                if (!dates.length) {
                    dates.push(new Date());
                }
                await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`created_at\` = ? WHERE id = ?`, [(_a = dates[0]) !== null && _a !== void 0 ? _a : null, user.id]);
                await (0, shared_1.setDelay)(100);
            }
            userId = user['id'];
        }
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.column);
        await queryRunner.query(`ALTER TABLE ${this.tableName} MODIFY COLUMN last_activity ${this.column.type} NULL DEFAULT CURRENT_TIMESTAMP`);
    }
}
exports.AddCreatedAtToUserTable1706864521159 = AddCreatedAtToUserTable1706864521159;
//# sourceMappingURL=1706864521159-addCreatedAtToUserTable.js.map