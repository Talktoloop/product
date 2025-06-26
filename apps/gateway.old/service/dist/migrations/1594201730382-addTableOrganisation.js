"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTableOrganisation1594201730382 = void 0;
const typeorm_1 = require("typeorm");
class AddTableOrganisation1594201730382 {
    constructor() {
        this.tableName = 'organisation';
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
                    name: 'name',
                    type: 'varchar',
                    length: '100',
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
exports.AddTableOrganisation1594201730382 = AddTableOrganisation1594201730382;
//# sourceMappingURL=1594201730382-addTableOrganisation.js.map