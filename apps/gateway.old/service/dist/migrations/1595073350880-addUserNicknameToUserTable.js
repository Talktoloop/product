"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserNicknameToUserTable1595073350880 = void 0;
const typeorm_1 = require("typeorm");
class AddUserNicknameToUserTable1595073350880 {
    constructor() {
        this.tableName = 'user';
        this.newColumnNickname = new typeorm_1.TableColumn({
            name: 'nickname',
            type: 'varchar',
            length: '60',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumnNickname);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumnNickname);
    }
}
exports.AddUserNicknameToUserTable1595073350880 = AddUserNicknameToUserTable1595073350880;
//# sourceMappingURL=1595073350880-addUserNicknameToUserTable.js.map