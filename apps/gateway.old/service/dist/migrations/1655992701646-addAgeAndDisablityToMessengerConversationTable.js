"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAgeAndDisablityToMessengerConversationTable1655992701646 = void 0;
const typeorm_1 = require("typeorm");
class AddAgeAndDisablityToMessengerConversationTable1655992701646 {
    constructor() {
        this.tableName = 'messenger_conversation';
        this.newColumns = [
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
        await queryRunner.addColumns(this.tableName, this.newColumns);
    }
    async down(queryRunner) {
        await queryRunner.dropColumns(this.tableName, this.newColumns);
    }
}
exports.AddAgeAndDisablityToMessengerConversationTable1655992701646 = AddAgeAndDisablityToMessengerConversationTable1655992701646;
//# sourceMappingURL=1655992701646-addAgeAndDisablityToMessengerConversationTable.js.map