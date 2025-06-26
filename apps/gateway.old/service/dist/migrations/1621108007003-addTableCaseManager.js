"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTableCaseManager1621108007003 = void 0;
const typeorm_1 = require("typeorm");
class AddTableCaseManager1621108007003 {
    constructor() {
        this.tableName = 'case_manager';
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
                    name: 'nickname',
                    type: 'varchar',
                    length: '30',
                    isNullable: false,
                },
                {
                    name: 'avatar',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'created_at',
                    type: 'datetime',
                    length: '6',
                    isNullable: false,
                    default: 'CURRENT_TIMESTAMP(6)',
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.tableName);
    }
}
exports.AddTableCaseManager1621108007003 = AddTableCaseManager1621108007003;
//# sourceMappingURL=1621108007003-addTableCaseManager.js.map