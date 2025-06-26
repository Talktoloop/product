"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTableUser1594208138736 = void 0;
const typeorm_1 = require("typeorm");
class AddTableUser1594208138736 {
    constructor() {
        this.tableName = 'user';
    }
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: this.tableName,
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    length: '36',
                    isPrimary: true,
                },
                {
                    name: 'email',
                    type: 'varchar',
                    length: '100',
                    isNullable: false,
                    isUnique: true,
                },
                {
                    name: 'notifications',
                    type: 'tinyint',
                    isNullable: false,
                    default: 1,
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.tableName);
    }
}
exports.AddTableUser1594208138736 = AddTableUser1594208138736;
//# sourceMappingURL=1594208138736-addTableUser.js.map