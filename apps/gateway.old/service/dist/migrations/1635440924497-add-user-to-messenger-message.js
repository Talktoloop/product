"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messengerMessageUser1635440924497 = void 0;
const typeorm_1 = require("typeorm");
class messengerMessageUser1635440924497 {
    constructor() {
        this.tableName = 'messenger_message';
        this.foreignKey = 'fk_MessengerMessageToUser';
        this.userColumn = new typeorm_1.TableColumn({
            name: 'user_id',
            type: 'varchar',
            length: '36',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.userColumn);
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user',
            name: this.foreignKey,
            onDelete: 'SET NULL',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.userColumn);
    }
}
exports.messengerMessageUser1635440924497 = messengerMessageUser1635440924497;
//# sourceMappingURL=1635440924497-add-user-to-messenger-message.js.map