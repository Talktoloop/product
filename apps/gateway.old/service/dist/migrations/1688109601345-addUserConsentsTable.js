"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserConsentsTable1688109601345 = void 0;
const typeorm_1 = require("typeorm");
class AddUserConsentsTable1688109601345 {
    constructor() {
        this.tableName = 'user_consent';
    }
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: this.tableName,
            columns: [
                {
                    name: 'id',
                    type: 'smallint',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'document',
                    type: 'varchar',
                    length: '150',
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
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.tableName);
    }
}
exports.AddUserConsentsTable1688109601345 = AddUserConsentsTable1688109601345;
//# sourceMappingURL=1688109601345-addUserConsentsTable.js.map