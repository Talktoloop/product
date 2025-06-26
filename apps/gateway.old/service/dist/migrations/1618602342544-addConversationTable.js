"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddConversationTable1618602342544 = void 0;
const typeorm_1 = require("typeorm");
class AddConversationTable1618602342544 {
    constructor() {
        this.tableName = 'conversation';
    }
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: this.tableName,
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'country',
                    type: 'varchar',
                    length: '3',
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
exports.AddConversationTable1618602342544 = AddConversationTable1618602342544;
//# sourceMappingURL=1618602342544-addConversationTable.js.map