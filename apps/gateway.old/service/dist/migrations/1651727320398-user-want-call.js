"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userWantCall1651727320398 = void 0;
const typeorm_1 = require("typeorm");
class userWantCall1651727320398 {
    constructor() {
        this.name = 'userWantCall1651727320398';
        this.tableName = 'story';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'user_want_contact',
            type: 'tinyint',
            length: '1',
            isNullable: false,
            default: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.userWantCall1651727320398 = userWantCall1651727320398;
//# sourceMappingURL=1651727320398-user-want-call.js.map